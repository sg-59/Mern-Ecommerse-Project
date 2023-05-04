import React from 'react'
import { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { ordersDisplay } from '../Redux/Apicall'
import { useState } from 'react'
import { json } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components'

const Main =styled.div`
display: flex;
flex-wrap: wrap;
`;


const Allorder = () => {
    const [state,setState]=useState([])
    const [CartproductId,setCartproductId]=useState({})
    const AllorderDetails=useSelector((state)=>state.orders.orderInfo)
const dispatch=useDispatch()
    useEffect(()=>{
      setState(AllorderDetails)
ordersDisplay(dispatch)
    },[])

useEffect(()=>{
    const products=state.map((li)=>{
        return li.products
    })
     
    const productIds=products.map((li)=>{
        return li[0].productId
    })
    console.log('productId',productIds);
    const ItemId= productIds.map((li)=>{
        return  li
    })
    console.log('finaly its have',""+ItemId); 
    const a=""+ItemId
    console.log('item id ?',a);

  setCartproductId(a)
},[state])



  return (
    <>
     <Navbar />
    <Main>
       
           <Table striped bordered hover>
    <thead>
      <tr>
        <th>Order Id</th>
        <th>Product Id</th>
        <th>Quantity</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
        {state.map((li)=>(
            <>
            {li.products.map((pro)=>(
              <>
           
                <tr>
        <td>{li._id}</td>
        <td>{CartproductId}</td>
        <td>{pro.quantity}</td>
        <td>{li.amount}</td>
      </tr>
      </>
            ))}
            </>
        ))}
  
    </tbody>
  </Table>
 
    </Main>
    </>
  )
}

export default Allorder