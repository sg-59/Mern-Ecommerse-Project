import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { cancelOrders, removeOrders } from '../Redux/apiCall';
import { publicRequest } from '../requestMethod';
const MyorderList = () => {
  const dispatch=useDispatch()
  const [state,setstate]=useState([])

useEffect(()=>{

const dispaly =async ()=>{
try {
const res=await publicRequest.get('/order')
console.log('data ? ====',res.data);
const orderDetails=res.data
setstate(orderDetails)
}catch(err){
  console.log(err);
}
}
dispaly()

 
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