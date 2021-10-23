import { useMemo } from 'react'
import _ from 'lodash'

import useLCD from '../useLCD'
import { QueryKeyEnum, terraswap, uToken, TokenType } from 'types'
import useReactQuery from 'hooks/common/useReactQuery'
import {
  ExtractPoolByUstResponseType,
  poolByUstResponseParser,
} from 'logics/pool'

export type UsePoolListReturn = {
  pollInfoList: {
    token: TokenType
    pollByUstInfo: ExtractPoolByUstResponseType
  }[]
  refetch: () => void
}

const usePoolList = ({
  tokenList,
}: {
  tokenList: TokenType[]
}): UsePoolListReturn => {
  const { wasmFetch } = useLCD()
  const { data, refetch } = useReactQuery(
    [QueryKeyEnum.POOL_LIST, tokenList],
    () =>
      Promise.all(
        _.map(tokenList, async (token) => {
          let ustFetchData: terraswap.PoolResponse<uToken> | undefined =
            undefined
          if (token.pair_ust) {
            ustFetchData = await wasmFetch<
              terraswap.Pool,
              terraswap.PoolResponse<uToken>
            >({
              contract: token.pair_ust,
              msg: {
                pool: {},
              },
            })
          }

          return {
            token,
            ustFetchData,
          }
        })
      ),
    {
      refetchInterval: 1000 * 15,
    }
  )

  const pollInfoList = useMemo(() => {
    return _.map(data, (item) => {
      return {
        token: item.token,
        pollByUstInfo: poolByUstResponseParser(item.ustFetchData),
      }
    })
  }, [data])

  return { pollInfoList, refetch }
}

export default usePoolList
