import React, { useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import { registerInfo } from '../Redux/Apicall';




const Register = () => {
    const [username,setUsername]=useState('')
    const [Images,setImg]=useState({})
    const [email,setEmail]=useState('')
    const [mobile,setMobile]=useState('')
    const [address,setAddress]=useState('')
    const [password,setPassword]=useState('')
    const [isAdmin,setIsadmin]=useState(false)



    let formData=new FormData();
formData.append('username',username)
formData.append('email',email)
formData.append('mobile',mobile)
formData.append('address',address)
formData.append('password',password)
formData.append('Images',Images)
formData.append('isAdmin',isAdmin)


const display =async (e)=>{
    e.preventDefault();
    console.log('****',formData);
    registerInfo(formData)
  }


  return (
    <MDBContainer fluid>
    <form onSubmit={display} encType='multipart/form-data'>
        <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
    
                <h3 classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Admin Sign up</h3>
      
                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size='lg'/>
                  <MDBInput label='Your Name' id='form1' type='text' className='w-100' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                </div>
    
             
    
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size='lg'/>
                  <MDBInput label='Your Email' id='form3' type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
    
             <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size='lg'/>
                  <MDBInput label='Mobile Number' id='form5' type='number'  value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
                </div>
    
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size='lg'/>
                  <MDBInput label='Address' id='form6' type='text'  value={address} onChange={(e)=>setAddress(e.target.value)}/>
                </div>
    
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size='lg'/>
                  <MDBInput label='Password' id='form4' type='password'  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
    
                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size='lg'/>
                  <MDBInput  id='form2' type='file' filename='Images' className='w-100'  onChange={(e)=>setImg(e.target.files[0])}/>
                </div>

                <input type='text'  value={true} hidden onChange={(e)=>setIsadmin(e.target.value)} />
       
                <MDBBtn className='mb-4' size='lg' type='submit'>Register</MDBBtn>
                {/* <div><Link style={{textDecoration:'none',color:'black',fontSize:'14px',}} to={'/'}><u>I have a account</u></Link></div> */}
              </MDBCol>
    
              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
              </MDBCol>
    
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
    </form>
      </MDBContainer>
  )
}

export default Register
