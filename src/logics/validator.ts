import { StdFee } from '@terra-money/terra.js'
import { UTIL, MESSAGE } from 'consts'
import { Token, uUST } from 'types'

const { toBn } = UTIL

export function validateLinkAddress(link: string): string {
  if (link.length === 0) return ''
  if (!/^(http|https):\/\//.test(link)) {
    return 'Must begin with http:// or https://'
  }
  return ''
}

export type ValidateSlippageReturn =
  | {
      status: 'error' | 'warning'
      message: string
    }
  | {
      status: 'success'
    }

/**
 * @returns ValidateSlippageReturn
 */
export const validateSlippage = ({
  slippage,
}: {
  slippage: string
}): ValidateSlippageReturn => {
  const bn = UTIL.toBn(slippage).multipliedBy(100)

  return bn.gte(50) || bn.lte(0) || bn.isNegative() || bn.isNaN()
    ? {
        status: 'error',
        message: MESSAGE.slippage['Enter a valid slippage percentage'],
      }
    : bn.gt(5)
    ? {
        status: 'warning',
        message: MESSAGE.slippage['Your transaction may be frontrun'],
      }
    : bn.lt(0.5)
    ? {
        status: 'warning',
        message: MESSAGE.slippage['Your transaction may fail'],
      }
    : { status: 'success' }
}

/**
 *
 * @returns error message
 */
export const validateFormInputAmount = ({
  max,
  input,
}: {
  input: Token
  max: Token
}): string => {
  if (input) {
    if (toBn(max).isZero()) {
      return 'Insufficient balance'
    }
    if (
      toBn(input).isNaN() ||
      toBn(input).isZero() ||
      toBn(input).isGreaterThan(max)
    ) {
      return `Amount must be between 0 and ${max}`
    }

    const decimalError = validateFormInputAmountDecimal({ input })
    if (decimalError) {
      return decimalError
    }
  }

  return ''
}

export const validateFormInputAmountDecimal = ({
  input,
}: {
  input: Token
}): string => {
  if (toBn(input).decimalPlaces() > 6) {
    return 'Amount must be within 6 decimal points'
  }
  return ''
}

export const validateFeeTax = ({
  availableUusd,
  fee,
  tax,
}: {
  availableUusd: uUST
  fee?: StdFee
  tax?: uUST
}): string => {
  const ust = UTIL.toBn(availableUusd)
  const uusdFee =
    fee?.amount
      .toData()
      ?.find((x) => x.denom === 'uusd')
      ?.amount.toString() || '0'

  if (
    ust
      .minus(uusdFee)
      .minus(tax || '0')
      .isLessThanOrEqualTo(0)
  ) {
    return MESSAGE['Insufficient fee']
  }
  return ''
}
