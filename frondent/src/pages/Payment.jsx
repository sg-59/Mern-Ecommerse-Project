import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { razorpayVerify } from '../Redux/apiCall';

const Payment = () => {
const [amount,setAmount]=useState(Number)
const [orderId,setOrderId]=useState('')
const [orderInfo,setOrderInfo]=useState([])
const data=useSelector((state)=>state.orders.orderInfo)

useEffect(()=>{
data.map((li)=>{
  console.log('***',li.amount);
  setAmount(li.amount)
  console.log('***',li.id);
  setOrderId(li.id)
  setOrderInfo(data)
})
}) 

console.log('ORDERS  = ',data);

  var options = {
    "key": "rzp_test_pKLRENWxgUTNjV", // Enter the Key ID generated from the Dashboard
    "amount":amount*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise10010
    "currency": "INR",
    "name": "Lap-Cart",
    "description": "Test Transaction",
    "image": "https://thumbs.dreamstime.com/z/trade-symbol-ways-arrow-laptop-logo-designs-vector-design-171844391.jpg",
    "order_id":orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response){   
        razorpayVerify(response,orderInfo)

    },
    "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new window.Razorpay(options);
    rzp1.open();


  return (
    <div>
      
    </div>
  )
}

export default Payment




 