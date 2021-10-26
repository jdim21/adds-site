import styled from 'styled-components'
import { useEffect, useState } from 'react';
import axios from 'axios';


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

  const [remaining, setRemaining] = useState<string>("????");
  useEffect(() => {
    axios.get('https://kn9qjl4uc6.execute-api.us-east-2.amazonaws.com/')
    .then(response => {
      var result = JSON.stringify(response["data"]);
      setRemaining(result);
    })
  }, []);

  return (
    <StyledSection>
      <View>
        <span style={{float:'left', position:'absolute'}}>
        Cost:2LUNA
        </span>
      <span style={{float:'right', textAlign:'right'}}>
        {/* Remaining: 5000 / 5000 */}
        Remain:{remaining}/5000
      </span>
      </View>
    </StyledSection>
  )
}

export default MintForm
