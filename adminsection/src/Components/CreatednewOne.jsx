import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import styled from "styled-components";
import { Updatedproduct } from "../Redux/Apicall";
import { Link } from "react-router-dom";


 const Main = styled.div`
display:flex ;
flex-direction:column ;
align-items:center ;
justify-content:center ;

 `
const CreatednewOne = () => {

const [Data,setData]=useState([])
const [DataId,setDataId]=useState('')

const [title,setTitle]=useState('')
const [price,setPrice]=useState(Number)
const [desc,setDesc]=useState('')
const [categories,setCategories]=useState([])
const [size,setSize]=useState([])
const [color,setColor]=useState([])
const [img,setImg]=useState('')
const [inStoke,setInstoke]=useState(false)
const data=useSelector((state)=>state.kidsitems.kidsfullproducts)
 

useEffect(()=>{
setData(data)
Data.map((li)=>{
  setDataId(li._id)
})

},[Data])

const Uproduct={
  title:title,
  desc:desc,
  img:img,
  categories:[categories],
  size:[size],
  color:[color],
  price:parseInt(price) ,
  inStoke: Boolean(inStoke) 
}




const display = (e)=>{
  e.preventDefault()
  console.log('final',Uproduct);
  console.log('Data',Data);
  console.log('data Id',DataId);
  Updatedproduct(Uproduct,DataId)
  console.log('updated producted at first stage',title,desc,img,categories,size,color,price,inStoke);
}

  return (
    <Main>
      <h1>Updated Products</h1>
      {Data.map((li)=>(
        <>
 <div style={{margin:"5px"}}><input placeholder={"Title  :"+ li.title}  onChange={(e)=>setTitle(e.target.value)}/></div>
<div style={{margin:"5px"}}><input placeholder={"Price   :"+li.price}   onChange={(e)=>setPrice(e.target.value)}/></div>
<div style={{margin:"5px"}}><input   placeholder={"Description   :" +li.desc}   onChange={(e)=>setDesc(e.target.value)}/></div>
<div style={{margin:"5px"}}><input   placeholder={"Categories  :"+li.categories}   onChange={(e)=>setCategories(e.target.value)}/></div>
<div style={{margin:"5px"}}><input   placeholder={"Images  :"+li.img}   onChange={(e)=>setImg(e.target.value)}/></div>
<div style={{margin:"5px"}}><input   placeholder={"Instoke :"+li.inStoke}   onChange={(e)=>setInstoke(e.target.value)}/></div>
<div style={{margin:"5px"}}><input   placeholder={"Size  :"+li.size}   onChange={(e)=>setSize(e.target.value)}/></div>
<div style={{margin:"5px"}}><input   placeholder={"Color   :"+li.color}   onChange={(e)=>setColor(e.target.value)}/></div>
<button onClick={display}>click me</button>
 
        </>
      ))}
        <Link to={'/products'}> <button>Move to Products page</button></Link>  
    </Main>
   
  );
  }
export default CreatednewOne;
