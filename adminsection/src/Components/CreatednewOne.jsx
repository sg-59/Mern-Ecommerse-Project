import React, { useEffect, useState } from "react";
import {useSelector} from 'react-redux'



const CreatednewOne = () => {

const [Data,setData]=useState('')

const [titles,setTitle]=useState('')
const [prices,setPrice]=useState('')
const [descs,setDesc]=useState('')

const data=useSelector((state)=>state.kidsitems.kidsfullproducts)
 

useEffect(()=>{
setData(data)
},[])
console.log('***',data);

const display = (e)=>{
  e.preventDefault();
  console.log('**********',titles,prices,descs);
  console.log('$$$$$$',Data);
}

  return (
    <>
    <form onSubmit={display}>
<input  onChange={(e)=>setTitle(e.target.value)}/>
<input  onChange={(e)=>setPrice(e.target.value)}/>
<input  onChange={(e)=>setDesc(e.target.value)}/>
 <button type="submit">click me</button>
    </form>
    </>
   
  );
  }
export default CreatednewOne;
