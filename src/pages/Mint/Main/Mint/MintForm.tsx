import styled from 'styled-components'


import {
  View,
  // Row,
} from 'components'
// import { UseMintReturn } from 'hooks/common/useMint'

const StyledSection = styled(View)`
  color: white;
  padding-bottom: 20px;
`

// const StyledMaxBalance = styled(Row)`
//   justify-content: flex-end;
//   padding-top: 8px;
// `

const MintForm = (): any => {

  return (
    <StyledSection>
      <View>
        <span style={{float:'left', position:'absolute'}}>
        Cost: 3 LUNA
        </span>
      <span style={{float:'right', textAlign:'right'}}>
        Remaining: ? / 5000
      </span>
      </View>
    </StyledSection>
  )
}

export default MintForm
