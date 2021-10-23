// import { ReactElement } from 'react'
import styled from 'styled-components'

import { STYLE } from 'consts'

import { Card, Button } from 'components'
// import { useConnectedWallet } from '@terra-money/wallet-provider'
import { ConnectedWallet, useConnectedWallet } from '@terra-money/wallet-provider'
import { MsgSend } from '@terra-money/terra.js';
import { ContractAddr } from 'types'
import usePostTx, { UsePostTxReturn } from 'hooks/common/usePostTx';


// import MintForm from './MintForm'
// import { of } from 'rxjs';

const StyledCard = styled(Card)`
  background: #184773;
  flex: 1;
  @media ${STYLE.media.tablet} {
  }
`
var connectedWallet: ConnectedWallet | undefined;
var postTx: UsePostTxReturn;

// function NewMint(connectedWallet: ConnectedWallet | undefined): any {
function NewMint(): any {
  console.log("new mint..");
  const myAddress = (connectedWallet?.walletAddress || '') as ContractAddr;
  const toAddress = 'terra1nskc8gfppphsllgj0gv680ea7aajpx8egas54d' as ContractAddr;
  console.log("myAddress: " + myAddress.toString());
  const msgs: MsgSend[] = [new MsgSend(myAddress, toAddress, { uluna: 1_000 })];
  postTx.postTx({txOptions: {msgs}});
  return;
}

const Mint = (): any => {
//   const sendProps = useSend()
//   const { onClickSend, invalidForm, fee } = sendProps
  connectedWallet = useConnectedWallet()
  postTx = usePostTx()
  return (
    <>
      <StyledCard>
        {/* <MintForm/> */}
        <Button onClick={NewMint} >
          Mint!
        </Button>
      </StyledCard>
    </>
  )
}

export default Mint
