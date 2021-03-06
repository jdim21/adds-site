import { ReactElement } from 'react'
import styled from 'styled-components'
import catFootprintPng from 'images/cat_footprint.png'
// import QrCode from 'qrcode.react'
// import { CopyToClipboard } from 'react-copy-to-clipboard'
// import { toast } from 'react-toastify'

// import { STYLE, WHITELIST, COLOR } from 'consts'
import { STYLE, COLOR } from 'consts'

import { View, Card, FormText, LinkA } from 'components'
// import { IconSquare, IconSquareCheck, IconSquarePlus } from '@tabler/icons'
import { IconSquarePlus } from '@tabler/icons'

const StyledContainer = styled(View)`
  ${STYLE.setMediaWidth()}
  @media ${STYLE.media.tablet} {
    padding: 0 20px;
  }
`

const StyledCard = styled(Card)`
  // background-image: url(${catFootprintPng});
  background-size: cover;
  background-color: #184773;
`

const StyledSection = styled(View)`
  margin-bottom: 20px;
`

const StyledMainTitle = styled(FormText)``

const StyledSubTitle = styled(FormText)``
const StyledDesc = styled(FormText)`
  flex-direction: row;
  align-items: center;
  white-space: pre-wrap;
  word-break: break-word;
  // background-color: ${COLOR.white};
  background-color: #184773;
  width: fit-content;
  padding: 0 5px;
`

const Main = (): ReactElement => {
  return (
    <StyledContainer>
      <StyledMainTitle fontType="B24">AstroDoge Degen Squad</StyledMainTitle>
      <StyledCard>
        <StyledSection>
          <StyledSubTitle fontType="B24">About</StyledSubTitle>
          {/* <StyledDesc>
            <LinkA link="https://github.com/miaw-team">
              <FormText fontType={'R18'} color={COLOR.primary._400}>
                - Open source project
              </FormText>
            </LinkA>
          </StyledDesc>
          <StyledDesc>
            <LinkA link="https://github.com/miaw-team/miaw-trader">
              <FormText fontType={'R18'} color={COLOR.primary._400}>
                * miaw-trader scource code
              </FormText>
            </LinkA>
          </StyledDesc>
          <StyledDesc>
            <LinkA link="https://github.com/miaw-team/miaw-lp-staking">
              <FormText fontType={'R18'} color={COLOR.primary._400}>
                * lp staking contract scource code
              </FormText>
            </LinkA>
          </StyledDesc>
          <StyledDesc>
            - Token,Lp,Pair contracts are based on The Terraswap factory
          </StyledDesc> */}
          {/* <StyledDesc>- MIAW was made by a dev who loves the Terra</StyledDesc> */}
          <StyledDesc>- The AstroDoge Degen Squad is a collection of 5,000 unique puppies to be adopted on the Terra Network. Only the finest, friendliest owners should mint! The AstroDoge is the leader of the pack and commands the Doges along their path of degeneracy.</StyledDesc>
        </StyledSection>

        <StyledSection>
          <StyledSubTitle fontType="B24">
            Genesis
          </StyledSubTitle>
          <StyledDesc>- Minting will commence late October 2021 and will run until all 5,000 Doges have been adopted. Following the genesis, there will be many shenanigans. Details to come! Check the Discord for the latest information</StyledDesc>
          {/* <StyledDesc fontType="B20">100M Total supply</StyledDesc> */}
          {/* <StyledDesc>
            {'- 15% LP Staking reward. 5years, 5M>4M>3M>2M>1M'}
          </StyledDesc>
          <StyledDesc>{'- 8% Community funds'}</StyledDesc>
          <StyledDesc>{'- 4% Lp Supply'}</StyledDesc>
          <StyledDesc>{'- 3% Team'}</StyledDesc>
          <StyledDesc>{'- 70% burned'}</StyledDesc> */}
        </StyledSection>
        <StyledSection>
          <StyledSubTitle fontType="B24">
            The Team
          </StyledSubTitle>
          <StyledDesc>
            <IconSquarePlus color={COLOR.success} /> Dogefather:
          </StyledDesc>
          <StyledDesc fontType="B18"> Head of the project. 7 years experience in Project Management and acting community/marketing manager of ADDS
          </StyledDesc>
          <StyledDesc>
            <IconSquarePlus color={COLOR.success} /> TheEmperor:
          </StyledDesc>
          <StyledDesc fontType="B18"> Software Engineer with 12 years of full-stack experience and 2 years in blockchain development
          </StyledDesc>
          <StyledDesc>
            <IconSquarePlus color={COLOR.success} /> MissDoge:
          </StyledDesc>
          <StyledDesc fontType="B18"> Lifetime artist, dog lover, and witty remark extraordinaire
          </StyledDesc>
        </StyledSection>

        {/* <StyledSection>
          <StyledSubTitle fontType="B24">Roadmap for MIAW V1</StyledSubTitle>
          <StyledDesc>
            <IconSquareCheck color={COLOR.primary._600} /> SayMiaw
          </StyledDesc>
          <StyledDesc>
            <IconSquareCheck color={COLOR.primary._600} /> LpTower
          </StyledDesc>
          <StyledDesc>
            <IconSquareCheck color={COLOR.primary._600} /> LpStaking
          </StyledDesc>
          <StyledDesc>
            <IconSquareCheck color={COLOR.primary._600} /> Impermanent gain/loss
            chart
          </StyledDesc>
          <StyledDesc>
            <IconSquarePlus color={COLOR.success} /> Miawaifu NFT
          </StyledDesc>
          <StyledDesc>
            <IconSquarePlus color={COLOR.success} /> NFT Trader
          </StyledDesc>
          <StyledDesc>
            <IconSquare color={COLOR.gray._900} /> Any interesting ideas{' '}
          </StyledDesc>
        </StyledSection>

        <StyledSection>
          <StyledSubTitle fontType="B24">Keeping token prices</StyledSubTitle>
          <StyledDesc fontType="B18">1. SayMiaw</StyledDesc>
          <StyledDesc>
            {'-> Burn MIAW through SayMiaw with various events'}
          </StyledDesc>
          <StyledDesc fontType="B18">2. Miawaifu NFT</StyledDesc>
          <StyledDesc>{'-> Supply lp with Miawaifu sales proceeds'}</StyledDesc>
          <StyledDesc fontType="B18">3. NFT Trader</StyledDesc>
          <StyledDesc>{'-> Burn MIAW to upload nft'}</StyledDesc>
          <StyledDesc>{'-> Supply lp with nft trading fee'}</StyledDesc>
        </StyledSection>

        <StyledSection>
          <StyledSubTitle fontType="B24">MIAW V2?</StyledSubTitle>
          <StyledDesc>
            - Supporting token swap independently without the Terraswap
          </StyledDesc>
          <StyledDesc>- who knows?</StyledDesc>
        </StyledSection> */}

        <StyledSection>
          <StyledSubTitle fontType="B24">Need support?</StyledSubTitle>
          <StyledDesc>
            <LinkA link="https://discord.gg/NnzdQXH3za">
              <FormText fontType={'R18'} color={COLOR.primary._400}>
                - Discord
              </FormText>
            </LinkA>
          </StyledDesc>
          {/* <StyledDesc>
            <LinkA link="https://github.com/miaw-cat/miaw-trader/issues">
              <FormText fontType={'R18'} color={COLOR.primary._400}>
                - Github issues
              </FormText>
            </LinkA>
          </StyledDesc> */}
        </StyledSection>

        {/* <StyledSection>
          <StyledSubTitle fontType="B24">Support Developer</StyledSubTitle>

          <CopyToClipboard
            text={WHITELIST.address.miawDeveloper}
            onCopy={(): void => {
              toast(`Copied address!`, {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              })
            }}
          >
            <StyledDesc color={COLOR.primary._400}>
              {`- ${WHITELIST.address.miawDeveloper}`}
            </StyledDesc>
          </CopyToClipboard>
          <br />
          <QrCode value={WHITELIST.address.miawDeveloper} size={200} />
        </StyledSection> */}
      </StyledCard>
    </StyledContainer>
  )
}

export default Main
