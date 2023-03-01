import React from 'react'
import styled from 'styled-components'
import { sliderItems } from '../Data'
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
 
const Container=styled.div`
    width: 100%;
    height: 100vh;
`;
const Image=styled.img`
    width: 100%;
    height: 80vh;
    object-fit: contain;
    margin-bottom: 14em;
`
const Slider = () => {
     return (
<Container>
        <Carousel variant='dark' >
            {sliderItems.map((item)=>(
                    <Carousel.Item style={{backgroundColor:item.bg}}>
                    <Image
                      className="d-block w-100"
                      src={item.img}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h1 style={{fontWeight:"bold",color:"black"}}>{item.title}</h1>
                      <p style={{fontWeight:"bold",color:"black"}}>{item.desc}</p>
                      <Button>Shop Now</Button>
                    </Carousel.Caption>
                  </Carousel.Item>

            ))}
      
        </Carousel>
        </Container>
      );

}

export default Slider
