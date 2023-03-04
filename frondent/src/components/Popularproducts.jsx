import React, { useEffect, useState } from 'react'
import { popularProducts } from '../Data'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Container=styled.div`
display: flex;
margin: 2em;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;

`;

const Title=styled.h1`
    text-align: center;
    margin-top: 1.5em;
    margin-bottom: 1.5em;

`


const Popularproducts = () => {

  const [menitem,setmenitem]=useState([])
  const [womenitem,setwomenitem]=useState([])
  const [kidsitem,setkidsitem]=useState([])
useEffect(()=>{


  async function FetchmensProductApi(){
    const menApi = "http://localhost:5000/api/mensproduct";
    const menresponse = await axios.get(menApi);
    console.log("mens product",menresponse.data);
    setmenitem(menresponse.data)
  
    const womenApi = "http://localhost:5000/api/womensproduct";
    const womenresponse = await axios.get(womenApi);
    console.log("womens product",womenresponse.data);
    setwomenitem(womenresponse.data)
  
    const kidsApi = "http://localhost:5000/api/kidsproduct";
    const kidsresponse = await axios.get(kidsApi);
    console.log("kids product",kidsresponse.data);
    setkidsitem(kidsresponse.data)
  }
  FetchmensProductApi()

},[])



const menProducts=menitem.slice(0,4).map((item)=>{
    return (
        <>
         <Link to={`/selectedproducts/${item.id}`}>
        <Card style={{ width: '18rem',margin:"1.5em",backgroundColor:"#ffffff"}}>
      <Card.Img variant="top" src={item.img} style={{height:'14em'}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Link>
        </>
    )
})

const womenProducts=womenitem.slice(0,4).map((item)=>{
  return (
      <>
       <Link to={`/selectedproducts/${item.id}`}>
      <Card style={{ width: '18rem',margin:"1.5em",backgroundColor:"#ffffff"}}>
    <Card.Img variant="top" src={item.img} style={{height:'14em'}} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  </Link>
      </>
  )
})

const kidsProducts=kidsitem.slice(0,4).map((item)=>{
  return (
      <>
       <Link to={`/selectedproducts/${item.id}`}>
      <Card style={{ width: '18rem',margin:"1.5em",backgroundColor:"#ffffff"}}>
    <Card.Img variant="top" src={item.img} style={{height:'14em'}} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  </Link>
      </>
  )
})

  return (
    <div style={{backgroundColor:"#E6E6FA",paddingTop:"3em"}}>
    
    <Title>New Arrival Products</Title>
    <Container> 
     {menProducts}
      {womenProducts}
      {kidsProducts}
   </Container>
    </div>
  )
}

export default Popularproducts
