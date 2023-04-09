import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { getUsersInfo } from '../Redux/Apicall'
import {useDispatch, useSelector} from 'react-redux'



const Alluser = () => {
  const [state,setState]=useState([]);
const dispatch=useDispatch();
useEffect(()=>{
getUsersInfo(dispatch)
},[dispatch])

const Display =async ()=>{
  const res=await useSelector(state=>state.users.usersInfo)
setState(res)
};
Display();

  return (
    <div>
    
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Password</th>
      </tr>
    </thead>
    {state.map((item)=>(
        <>
    <tbody>
      <tr>
        <td>1</td>
        <td>{item.username}</td>
        <td>{item.email}</td>
        <td>{item.password}</td>
      </tr>
    </tbody>
    </>
      ))}
  </Table>
 
  

    </div>
  )
}

export default Alluser
