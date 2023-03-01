import React from 'react'
import { popularProducts } from '../Data'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

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

const products=popularProducts.map((item)=>{
    return (
        <>
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
        </>
    )
})

  return (
    <div style={{backgroundColor:"#E6E6FA",paddingTop:"3em"}}>
    
    <Title>New Arrival Products</Title>
    <Container> 
      {products}
    </Container>
    </div>
  )
}

export default Popularproducts
