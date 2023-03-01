import React from 'react'
import { categories } from '../Data'
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';


const Card=styled.div`
    width: 28%;
    height: 100%;
    border: 0.5px solid lightgray;
    margin-left: 2%;
    position: relative;
  
`;
const Image=styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const Titles=styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 36px;
    font-weight:bolder;
    color: white;
    background-color: #262525;
    
`;

const Category = ({item}) => {
    console.log("hdjjdhhd",item)
  return (
        <Card>
<Image src={item.img}/>
<Titles>{item.title}<br></br>
</Titles>
</Card>
   
  )
}

export default Category
