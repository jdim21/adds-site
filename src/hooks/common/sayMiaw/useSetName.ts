import { useState, useEffect } from 'react'
import { useRecoilValue } from 'recoil'

import { BURN } from 'consts'

import {
  burnMemoType,
  ContractAddr,
  SayOptionEnum,
  TokenType,
  CW20,
  PostTxStatus,
} from 'types'

import useBurn, { UseBurnReturn } from 'hooks/common/useBurn'

import useMyBalance, { UseMyBalanceReturn } from '../useMyBalance'
import useMyName from '../useMyName'
import postTxStore from 'store/postTxStore'

export type UseSetNameReturn = {
  hasName: boolean
  onClickSave: () => void
  burnReturn: UseBurnReturn
  myBalance: UseMyBalanceReturn
  inputName: string
  setInputName: (value: string) => void
}

const useSetName = ({
  miawToken,
}: {
  miawToken: TokenType<ContractAddr>
}): UseSetNameReturn => {
  const postTxResult = useRecoilValue(postTxStore.postTxResult)

  const { name, refetch } = useMyName()
  const hasName = !!name
  const sayOptionType = hasName
    ? SayOptionEnum.change_name
    : SayOptionEnum.init_name
  const burnReturn = useBurn({ token: miawToken })
  const myBalance = useMyBalance()

  const [inputName, setInputName] = useState('')

  const onClickSave = (): void => {
    burnReturn.burnToken()
  }

  useEffect(() => {
    const burnMemo: burnMemoType = {
      type: sayOptionType,
      name: inputName,
    }
    burnReturn.setMemo(JSON.stringify(burnMemo))
    return (): void => {
      burnReturn.setMemo(JSON.stringify(burnMemo))
    }
  }, [inputName])

  useEffect(() => {
    const burnAmount = BURN.optionBurnAmount[sayOptionType]
    burnReturn.setAmount(burnAmount as CW20)
  }, [sayOptionType])

  useEffect(() => {
    if (postTxResult.status === PostTxStatus.DONE) {
      refetch()
      setInputName('')
    }
  }, [postTxResult.status])

  return {
    hasName,
    onClickSave,
    burnReturn,
    myBalance,
    inputName,
    setInputName,
  }
}

export default useSetName
