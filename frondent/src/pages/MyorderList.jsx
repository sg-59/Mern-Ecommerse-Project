import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { cancelOrders, removeOrders } from '../Redux/apiCall';
const MyorderList = () => {
  const dispatch=useDispatch()
  const [state,setstate]=useState([])
  const orderDetails=useSelector((state)=>state.orders.orderInfo)
  console.log('order details ??',orderDetails);
useEffect(()=>{
  setstate(orderDetails)
},[state])


const deleteCart = (Id)=>{
removeOrders(dispatch,Id)
}

  return (
    <div>

<Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>UserID</th>
          <th>ProductID</th>
          <th>Amount</th>
          <th>Quantity</th>
          <th>Delivery Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {state.map((li)=>(
            <>
            {li.products.map((item)=>(
              <>
                        <tr>
          <td>{li.userId}</td>
          <td>{""+item.productId}</td>
          <td>{li.amount}</td>
        <td>{item.quantity}</td> 
          <td>{li.status}</td>
         
          <td><button onClick={()=>deleteCart(li._id)}>Cancel Order</button></td>
        </tr>
              </>
            ))}
        
            </>
          ))}
  
      </tbody>
    </Table>
    </div>
  )
}

export default MyorderList