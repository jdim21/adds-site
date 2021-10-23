// import { ReactElement } from 'react'
import styled from 'styled-components'

import { STYLE } from 'consts'

import { View } from 'components'

// import useNetwork from 'hooks/common/useNetwork'

import Mint from './Mint'

const StyledContainer = styled(View)`
  padding-top: 3rem;
  ${STYLE.setMediaWidth('sm')}
  @media ${STYLE.media.tablet} {
    padding-top: 1rem;
    padding: 0 20px;
  }
`

const Main = (): any => {
  // const { miawToken } = useNetwork()

  return (
    <StyledContainer>
      <Mint />
    </StyledContainer>
  )
}

export default Main
