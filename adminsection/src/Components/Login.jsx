import React, { useState } from 'react'
import styled from 'styled-components'
import { loginform } from '../Redux/Apicall';
import { useDispatch } from 'react-redux';

const Main=styled.div`
  
  width: auto;
  height: auto;
  margin: 100px;
`;

const Login = () => {

  const [username,setuserName]=useState('')
  const [password,setPassword]=useState('')
const dispatch=useDispatch()

const display = (e)=>{
  e.preventDefault();
  loginform(dispatch,{username,password})

}


  return (
    <Main>
      <form onSubmit={display}>
  <div class="form-outline mb-4">
    <input type="text" id="form2Example1" class="form-control" onChange={(e)=>setuserName(e.target.value)} />
    <label class="form-label" for="form2Example1">Username</label>
  </div>

  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" onChange={(e)=>setPassword(e.target.value)} />
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  <button type="submit" class="btn btn-primary btn-block mb-4" >Sign in</button>
  </form>
    </Main>
  )
}

export default Login
