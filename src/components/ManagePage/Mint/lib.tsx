import { HandleMsgMint } from '../../../../interface/snip20'
import addPadding from '../../../../utils/addPadding'
import isSecretAddress from '../../../../utils/isSecretAddress'
import toSmallestDenomination from '../../../../utils/toSmallestDenomination'

const validate = (recipient: string, amount: string) => {
  const errors = {
    hasErrors: false,
    recipient: '',
    amount: '',
  }

  if (!recipient || !isSecretAddress(recipient)) {
    errors.hasErrors = true
    errors.recipient = 'Please enter a vaild address.'
  }

  if (!amount) {
    errors.hasErrors = true
    errors.amount = 'Please enter an amount greater than 0.'
  }

  return errors
}

const format = (
  recipient: string,
  amount: string,
  decimals: number = 0
): HandleMsgMint => {
  const amountInSmallestDenom = toSmallestDenomination(amount, decimals)
  return {
    mint: {
      recipient,
      amount: amountInSmallestDenom,
      memo: '',
      padding: addPadding(amountInSmallestDenom),
    },
  }
}

export { validate, format }
