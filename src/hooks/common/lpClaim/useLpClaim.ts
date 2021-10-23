import { useMemo } from 'react'
import { CreateTxOptions, StdFee } from '@terra-money/terra.js'

import { UTIL } from 'consts'

import { ContractAddr, LpStakingType, TokenDenomEnum } from 'types'
import useMyBalance from 'hooks/common/useMyBalance'
import useCalcFee from '../useCalcFee'
import useFabricator from '../useFabricator'
import usePostTx, { UsePostTxReturn } from '../usePostTx'
import useLpStakerInfo, {
  UseLpStakerInfoReturn,
} from 'hooks/query/lpStaking/useLpStakerInfo'
import { useConnectedWallet } from '@terra-dev/use-wallet'

export type UseLpClaimReturn = {
  stakerInfoReturn: UseLpStakerInfoReturn
  onClickClaim: () => void
  fee?: StdFee
  postTxReturn: UsePostTxReturn
  submitErrMsg: string
}

const useLpClaim = ({ item }: { item: LpStakingType }): UseLpClaimReturn => {
  const { getTokenBalance } = useMyBalance()

  const connectedWallet = useConnectedWallet()
  const myAddress = (connectedWallet?.walletAddress || '') as ContractAddr

  const { getLpRewardClaimMsgs } = useFabricator()
  const postTxReturn = usePostTx()
  const { postTx } = postTxReturn

  const stakerInfoReturn = useLpStakerInfo({
    staker: myAddress,
    lpStaking: item.lpStaking,
  })

  const txOptions: CreateTxOptions = useMemo(() => {
    return {
      msgs: getLpRewardClaimMsgs({ lpStaking: item.lpStaking }),
      feeDenoms: ['uusd'],
    }
  }, [])

  const { fee } = useCalcFee({
    isValid: UTIL.toBn(stakerInfoReturn.stakerInfo?.pending_reward).gt(0),
    txOptions,
  })

  const submitErrMsg = useMemo(() => {
    if (fee) {
      const ust = UTIL.toBn(getTokenBalance(TokenDenomEnum.uusd))
      const uusdFee =
        fee.amount
          .toData()
          ?.find((x) => x.denom === 'uusd')
          ?.amount.toString() || '0'

      if (ust.isLessThanOrEqualTo(uusdFee)) {
        return 'Insufficient fee'
      }
    }
    return ''
  }, [fee])

  const onClickClaim = (): void => {
    postTx({ txOptions: { ...txOptions, fee } })
  }

  return {
    stakerInfoReturn,
    onClickClaim,
    fee,
    postTxReturn,
    submitErrMsg,
  }
}

export default useLpClaim
