import React, { useEffect, useState } from 'react'
import { getUsersInfo } from '../Redux/Apicall'
import {useDispatch, useSelector} from 'react-redux'
import Navbar from './Navbar'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';



const Alluser = () => {
  const [state,setState]=useState([]);
const dispatch=useDispatch();
useEffect(()=>{
getUsersInfo(dispatch)
},[dispatch])

const Display =async ()=>{
  const res=await useSelector(state=>state.users.usersInfo)
  console.log('all user ',res);
setState(res)
};
Display();

  return (
    <MDBTable align='middle'>
    

  
      <MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Email</th>
          <th scope='col'>Mobile</th>
          <th scope='col'>Address</th>
        </tr>
      </MDBTableHead>
      {state.map((data)=>(
      <MDBTableBody>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src={`/Uploads/admin/${data.Images}`}
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{data.username}</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>{data.email}</p>
          </td>
          <td>{data.mobile}</td>
          <td>
          <p className='fw-normal mb-1'>{data.address}</p>
          </td>
        </tr>
      </MDBTableBody>
          ))}
    </MDBTable>
  )
}

export default Alluser
