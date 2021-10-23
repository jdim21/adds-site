import { ReactElement } from 'react'
// import { Route } from 'react-router-dom'

// import { RoutePath } from 'types'

// import Main from './Main'
// import { STYLE } from 'consts'
// import styled from 'styled-components'
// import { Card } from 'components'
// import FormImage from 'components/FormImage'
import rarityChart from '../../images/rarityChart.png'
// const StyledCard = styled(Card)`
//   background: #184773;
//   flex: 1;
//   @media ${STYLE.media.tablet} {
//   }
// `
// const StyledImgBox = styled(Card)`
//   width: 260px;
//   padding-top: 10px;
//   box-shadow: 0 3px 10px 0 rgb(66 66 66 / 5%);
//   background-color: #012E56;
//   margin: auto;
//   margin-top: 20px;
//   align-items: center;
//   justify-content: center;
// `

const SayMiaw = (): ReactElement => {
  // return <Route exact path={RoutePath.say_miaw} component={Main} />
  return <div style={{margin:"auto"}}>
      {/* <StyledImgBox> */}
        {/* <FormImage src={rarityChart} size={260} style={{alignItems:"center"}}/> */}
        <img src={rarityChart} width="100%"/>
      {/* </StyledImgBox> */}

  </div>
}

export default SayMiaw
