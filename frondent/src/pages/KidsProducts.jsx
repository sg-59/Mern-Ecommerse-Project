import React from 'react'
import Navbar from '../components/Navbar';
import Advertisement from '../components/Advertisement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { kidsProducts } from '../Data';


const Container=styled.div`
    display: flex;
margin: 2em;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
`;

const Title=styled.h1`
text-align: center;
margin: .5em
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const KidsProducts = () => {
    let kidsproduct=kidsProducts.map((item)=>{
        return (
        <>
        <Card style={{ width: '18rem',margin:"1.5em",backgroundColor:"#ffffff"}}>
          <Card.Img variant="top" src={item.img} style={{height:'18em'}} />
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
    <>
    <Navbar/>
<Advertisement/>
<Title>Kids Products</Title>
<FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>grey</Option>
            <Option>rose</Option>
            <Option>Red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
<Container>
{kidsproduct}
</Container>
<Newsletter/>
<Footer/>
</>
  )
}

export default KidsProducts
