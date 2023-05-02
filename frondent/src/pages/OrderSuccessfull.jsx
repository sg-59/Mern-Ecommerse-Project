import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const OrderSuccessfull = () => {

const orderDetails=useSelector((state)=>state.orders.orderInfo)

console.log('order details plzz',orderDetails);

  return (
    <div style={{margin:"250px", color:'green'}}><h1>Congratulation your order is placed</h1>
    <Link to={'/myorderlist'}>
    <Button>view order details</Button>
    </Link>
    </div>
  )
}

export default OrderSuccessfull