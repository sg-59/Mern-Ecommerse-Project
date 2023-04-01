import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  height: 60vh;
  background-color: #dfdfdf;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  color: #484848;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 100;
  margin-bottom: 20px;
  color: #4f4f4f;

`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color:transparent;
  outline: none;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 9em;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  border-radius: 9em;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  border-radius: 9em;
  margin-left: 9px;
`;

const Newsletter = () => {
  return (
         <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
        <span class="material-symbols-outlined">
arrow_forward
</span>
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
