import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://as2.ftcdn.net/v2/jpg/02/16/47/33/1000_F_216473351_FCLq1pZQOBFrgcyPBphKvBd8Z5wjD1dI.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: transparent;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 300;
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;
const Button = styled.button`
  width: 30%;
  border: none;
  padding: 15px 20px;
  background-color: #000000;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
  color: white;
`;

const Login = () => {
  return (
    <Container>
    <Wrapper>
      <Title>SIGN IN</Title>
      <Form>
        <Input placeholder="username" />
        <Input placeholder="password" />
        <Button>LOGIN</Button>
        <Link>CREATE A NEW ACCOUNT</Link>
      </Form>
    </Wrapper>
  </Container>
  )
}

export default Login
