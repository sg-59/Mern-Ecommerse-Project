import React from 'react'
import { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { ordersDisplay } from '../Redux/Apicall'
import { useState } from 'react'
import { json } from 'react-router-dom'
import Navbar from './Navbar'

const Allorder = () => {
    const [state,setState]=useState([])
    const [CartproductId,setCartproductId]=useState('')
const dispatch=useDispatch()
    useEffect(()=>{
ordersDisplay(dispatch)
    },[dispatch])



async function Display(){
    const AllorderDetails=await useSelector((state)=>state.orders.orderInfo)
setState(AllorderDetails)
}
Display()




useEffect(()=>{
    const products=state.map((li)=>{
        return li.products
    })
    
    const productIds=products.map((li)=>{
        return li[0].productId
    })
    
    const ItemId= productIds.map(async(li)=>{
        return  li
    })
    console.log('finaly its have',""+ItemId);
    const a=""+ItemId
  setCartproductId(a)
},[state])



  return (
    <div>
        <Navbar />
           <Table striped bordered hover>
    <thead>
      <tr>
        <th>Order Id</th>
        <th>Product Id</th>
        <th>Email</th>
        <th>Password</th>
      </tr>
    </thead>
    <tbody>
        {state.map((li)=>(
            <>
                <tr>
        <td>{li._id}</td>
        <td>{CartproductId}</td>
        <td>3</td>
        <td>3</td>
      </tr>
            </>
        ))}
  
    </tbody>
  </Table>
 
    </div>
  )
}

export default Allorder