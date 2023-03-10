import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background:url("https://as2.ftcdn.net/v2/jpg/02/16/47/33/1000_F_216473351_FCLq1pZQOBFrgcyPBphKvBd8Z5wjD1dI.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 14%;

`;

const Wrapper = styled.div`
  width: 40%;
  padding: 10px;
  background-color: transparent;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: 5px solid black;
  padding: 15px 20px;
  background-color: transparent;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;


const Register = () => {
  return (
    <Container>
    <Wrapper>
      <Title>CREATE AN ACCOUNT</Title>
      <Form>
        <Input placeholder="name" />
        <Input placeholder="last name" />
        <Input placeholder="username" />
        <Input placeholder="email" />
        <Input placeholder="password" />
        <Input placeholder="confirm password" />
        <Agreement>
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </Agreement>
        <Button>CREATE</Button>
      </Form>
    </Wrapper>
  </Container>
  )
}

export default Register
