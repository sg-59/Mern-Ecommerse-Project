import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
  height  :30px ;
  text-align: center;
  background-color: #488A99;
  color:white;
  font-weight: 500;
`
const Advertisement = () => {
  return (
    <Container>
      Free shiping on orders over ₹ 750
    </Container>
  )
}

export default Advertisement
