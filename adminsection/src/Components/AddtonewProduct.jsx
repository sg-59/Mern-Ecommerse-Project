import React, { useState } from 'react'
import styled from 'styled-components'
import { Addproducts } from '../Redux/Apicall';

const Main=styled.div`
display:flex ;
flex-direction:column ;
align-items:center ;
justify-content:center ;
`;
const Label=styled.label`
display:block ;
`

const AddtonewProduct = () => {
const [title,settitle]=useState('')
const [price,setPrice]=useState('')
const [desc,setDesc]=useState('')
const [categories,setCategories]=useState([])
const [img,setImg]=useState('')
const [inStoke,setInstoke]=useState(true)
const [size,setSize]=useState([])
const [color,setColor]=useState([])


const addproduct={
    title:title,
    desc:desc,
    img:img,
    categories:[categories],
    size:[size],
    color:[color],
    price:parseInt(price) ,
    inStoke: Boolean(inStoke) 
  }

  const displayProducts = (e)=>{
    e.preventDefault();
   Addproducts(addproduct)
    }



  return (
    <Main>
        <h1>Add new Products</h1>
         <div style={{margin:"5px"}}><Label>Title</Label><input onChange={(e)=>settitle(e.target.value)}/></div>
<div style={{margin:"5px"}}><Label>Price</Label><input onChange={(e)=>setPrice(e.target.value)} /></div>
<div style={{margin:"5px"}}><Label>Description</Label><input onChange={(e)=>setDesc(e.target.value)} /></div>
<div style={{margin:"5px"}}><Label>Categories</Label><input onChange={(e)=>setCategories(e.target.value)} /></div>
<div style={{margin:"5px"}}><Label>Images</Label><input onChange={(e)=>setImg(e.target.value)} /></div>
<div style={{margin:"5px"}}><Label>Instoke</Label><input onChange={(e)=>setInstoke(e.target.value)} /></div>
<div style={{margin:"5px"}}><Label>Size</Label><input onChange={(e)=>setSize(e.target.value)} /></div>
<div style={{margin:"5px"}}><Label>Color</Label><input onChange={(e)=>setColor(e.target.value)} /></div>
<button onClick={displayProducts}>click me</button>
    </Main>
  )
}

export default AddtonewProduct