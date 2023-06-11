import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { cancelOrders, removeOrders } from '../Redux/apiCall';
import { publicRequest, userRequest } from '../requestMethod';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
const MyorderList = () => {
  const dispatch=useDispatch()
  const [state,setstate]=useState([])

const userId=useSelector((states)=>states.user.currentuser._id)


useEffect(()=>{
  const display =async ()=>{
  console.log('userid',userId);
try{
const GetOrder=await publicRequest.get(`/order/find/${userId}`)
console.log('Get Order details',GetOrder.data);
setstate(GetOrder.data)
}catch(err){
  console.log(err);
}
  }
  display()
},[])

const deleteCart = (Id)=>{
removeOrders(dispatch,Id)
}

  return (
    <MDBTable align='middle'>
    <MDBTableHead>
      <tr>
        <th scope='col'>Name</th>
        <th scope='col'>Address</th>
        <th scope='col'>Status</th>
        <th scope='col'>Order ID</th>
        <th scope='col'>Amount</th>
        <th scope='col'>Cancell Order</th>
      </tr>
    </MDBTableHead>
    {state.map((data)=>(
    <MDBTableBody>
    

     
      <tr>
        <td>
          <div className='d-flex align-items-center'>
            <img
              src='https://mdbootstrap.com/img/new/avatars/8.jpg'
              alt=''
              style={{ width: '45px', height: '45px' }}
              className='rounded-circle'
            />
            <div className='ms-3'>
              <p className='fw-bold mb-1'>{data.address.FirstName}</p>
              <p className='text-muted mb-0'>{data.address.Email}</p>
            </div>
          </div>
        </td>
        <td>
          <p className='fw-normal mb-1'>{data.address.Address}</p>
          <p className='fw-normal mb-1'>{data.address.City}</p>
          <p className='fw-normal mb-1'>{data.address.Pin}</p>
        </td>
        <td>
          <MDBBadge color='success' pill>
          {data.status}
          </MDBBadge>
        </td>
        
 <td>{data._id}</td>
      
       
        <td>
        {data.amount}
        </td>
        <td>
          <MDBBadge color='danger' pill style={{cursor:'pointer'}} onClick={()=>deleteCart(data._id)}>
          Remove
          </MDBBadge>
        </td>
      </tr>      
    </MDBTableBody>
     ))}
  </MDBTable>


  )
}

export default MyorderList