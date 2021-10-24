import { ReactElement } from 'react'
// import styled from 'styled-components'

import { STYLE } from 'consts'
import styled from 'styled-components'

// import { STYLE } from 'consts'

import { Card, Button } from 'components'
// import { useConnectedWallet } from '@terra-money/wallet-provider'
import { ConnectedWallet, useConnectedWallet } from '@terra-money/wallet-provider'
import { MsgSend } from '@terra-money/terra.js';
import { ContractAddr } from 'types'
import usePostTx, { UsePostTxReturn } from 'hooks/common/usePostTx';
import addsGif from '../../../images/addsGif.gif';
import FormImage from 'components/FormImage'
import MintForm from '../../Mint/Main/Mint/MintForm';
import { FormText } from 'components'
const StyledSubTitle = styled(FormText)``

// import { View, FormText } from 'components'
// import { View } from 'components'

// import useNetwork from 'hooks/common/useNetwork'

// import Send from './Send'
// import Mint from '../../Mint/Main/Mint';

// const StyledContainer = styled(View)`
//   ${STYLE.setMediaWidth('sm')}
//   @media ${STYLE.media.tablet} {
//     padding: 0 20px;
//   }
// `
const StyledCard = styled(Card)`
  background: #184773;
  margin: auto;
  width: 480px;
  max-height: 80px;
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
  const toAddress = 'terra1nu0uhpulrm2xalwg33cwtegcdg467cjydzvcht' as ContractAddr;
  console.log("myAddress: " + myAddress.toString());
  const msgs: MsgSend[] = [new MsgSend(myAddress, toAddress, { uluna: 3_000_000 })];
  postTx.postTx({txOptions: {msgs}});
  return;
}

const StyledImgBox = styled(Card)`
  width: 260px;
  padding-top: 10px;
  box-shadow: 0 3px 10px 0 rgb(66 66 66 / 5%);
  background-color: #012E56;
  margin: auto;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`

const Main = (): ReactElement => {
  connectedWallet = useConnectedWallet()
  postTx = usePostTx()
  return (
    <>
      <StyledCard>
        <MintForm/>
        <Button onClick={NewMint} disabled={false}>
          Mint!
        </Button>
      </StyledCard>
      <div style={{alignItems:'center'}}>
      <StyledSubTitle fontType="B24" style={{alignItems:"center"}}>
        Pre-release Minting
      </StyledSubTitle>
      <StyledImgBox>
        <FormImage src={addsGif} size={260} style={{}}/>
      </StyledImgBox>

      </div>
    </>
  )
}

export default Main
