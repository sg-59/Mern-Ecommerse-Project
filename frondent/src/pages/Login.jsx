import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/apiCall';
import {Link} from 'react-router-dom'
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';


const Login = () => {
const [username,setName]=useState("");
const [password,setPassword]=useState("");
const dispatch=useDispatch();

const loginStatus=useSelector((state)=>state.user)
console.log('loginStatus',loginStatus);

const handleBar = (e)=>{
  e.preventDefault();
login(dispatch,{username,password})
}

  return (
    <MDBContainer className="p-3 my-5">

    <MDBRow>

      <MDBCol col='10' md='6'>
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
      </MDBCol>

      <MDBCol col='4' md='6'>

<p style={{color:'red'}}>{loginStatus.isError == true && 'Please check User Name & password'}</p>
        <MDBInput wrapperClass='mb-4' label='User Name' id='formControlLg' type='text' size="lg" value={username} onChange={(e)=>setName(e.target.value)} />
        <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" value={password}  onChange={(e)=>setPassword(e.target.value)}/>


        <MDBBtn className="mb-4 w-100" size="lg"  onClick={handleBar}>Sign in</MDBBtn>
        <Link to={'/register'}>CREATE A NEW ACCOUNT</Link>
      </MDBCol>

    </MDBRow>

  </MDBContainer>
  //   <Container>
  //   <Wrapper>                   
  //     <Title>SIGN IN</Title>
  //     <Form>
  //       <Input placeholder="username" onChange={(e)=>setName(e.target.value)} />
  //       <Input placeholder="password" type={password} onChange={(e)=>setPassword(e.target.value)} />
  //       <Button onClick={handleBar}>LOGIN</Button>
  //    <Link to={'/register'}><Links>CREATE A NEW ACCOUNT</Links></Link>
  //     </Form>
  //   </Wrapper>
  // </Container>
  )
}

export default Login
