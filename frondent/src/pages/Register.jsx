import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';


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
const [name,setName]=useState('')
const [lname,setLname]=useState('')
const [username,setUsername]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [cpassword,setCpassword]=useState('')

const Info={
  username,
  email,
  password,
}

const display =async (e)=>{
  e.preventDefault();
  const res=await axios.post("http://localhost:5000/api/auth/signup",Info)
  
}

  return (
    <Container>
    <Wrapper>
      <Title>CREATE AN ACCOUNT</Title>
      <Form>
        <Input type='text' placeholder="name" onChange={(e)=>setName(e.target.value)} />
        <Input type='text' placeholder="last name" onChange={(e)=>setLname(e.target.value)}  />
        <Input type='text' placeholder="username" onChange={(e)=>setUsername(e.target.value)}  />
        <Input type='email' placeholder="email" onChange={(e)=>setEmail(e.target.value)}  />
        <Input type='password' placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
        <Input type='password' placeholder="confirm password" onChange={(e)=>setCpassword(e.target.value)}  />
        <Agreement>
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </Agreement>
        <Button onClick={display}>CREATE</Button>
      </Form>
    </Wrapper>
  </Container>
  )
}

export default Register
