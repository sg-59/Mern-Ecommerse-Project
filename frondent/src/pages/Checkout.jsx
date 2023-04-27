import React, { useEffect, useMemo, useRef, useState } from 'react'
import boostrap from 'react-bootstrap'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Main=styled.div`
width: 100%;
height: 100vh;
justify-content: center;
align-items: center;
padding: 200px;
`

const Checkout = () => {
const address=useRef()
const city=useRef()
const states=useRef()
const pin=useRef()

const[state,setState]=useState('')
const[stateId,setStateId]=useState([])
const[Id,setId]=useState([])
const productdetails=useSelector(state=>state.cart.products)
useEffect(()=>{
 
  setStateId(productdetails)
},[stateId])

            

const Displays = ()=>{
  useEffect(()=>{
    const datas=stateId.map((li)=>{
      return li._id
    })
setId(datas)
  },[stateId])
  Displays();
}

console.log('dtats kottyo?',Id);

const userId=useSelector(state=>state.user.currentuser._id)


console.log('Checkout ethi',userId);

const display = ()=>{
const add=address.current.value;
const cit=city.current.value;
const sta=states.current.value;
const pi=pin.current.value;

const data={
 deatils: add,
 cityDetails: cit,
 stateSetails: sta,
 zipetails: pi
}

console.log(data);
setState(data)
}
console.log('mm evide',state);
  return (
    <>
    <Main>
<form onSubmit={()=>display()}>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" ref={address}/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity" ref={city}/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control" ref={states}>
        <option selected>Choose...</option>
        <option>Kerala</option>
        <option>Tamilnadu</option>
        <option>Andhrapredesh</option>
        <option>Goa</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip" ref={pin}/>
    </div>
  </div>
 
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
    </Main>
    </>
  )
}

export default Checkout



// userId: { type: String, require: true },
// products: [
//   {
//     productId: {
//       type: String,
//     },
//     quantity: {
//       type: Number,
//       default: 1,
//     },
//   },
// ],
// amount: { type: Number, require: true },
// address: { type: Object, required: true },
// status: { type: String, default: "pending" },
// },