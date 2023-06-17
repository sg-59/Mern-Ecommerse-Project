import React, { useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { loginform } from '../Redux/Apicall';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';



const Login = () => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
const dispatch=useDispatch()

const display = (e)=>{
  e.preventDefault();
  loginform(dispatch,{email,password})

}


  return (
    <MDBContainer className='my-5'>
      
      <MDBCard>

        <MDBRow className='g-0 d-flex align-items-center'>

          <MDBCol md='4'>
            <MDBCardImage src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>

          <MDBCol md='8'>

            <MDBCardBody>
            <h1><u>Admin Login</u></h1>
              <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'  value={email}  onChange={(e)=>setEmail(e.target.value)}/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>

         

              <MDBBtn className="mb-4 w-100" onClick={display}>Sign in</MDBBtn>
<div> <Link to={'/register'}>Create an account</Link></div>
            </MDBCardBody>
           
          </MDBCol>

        </MDBRow>

      </MDBCard>
     
    </MDBContainer>
  )
}

export default Login
