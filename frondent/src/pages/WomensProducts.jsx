import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Advertisement from '../components/Advertisement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { womensProducts } from '../Data';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

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

const WomensProducts = () => {

  const [state,setstate]=useState({})
  const[Pricefilter,setpricefilter]=useState('newest')
  const [womenState,womenSetstate]=useState([])
  const [filterwomenState,filterwomenSetstate]=useState([])
  const [category,setCategory]=useState();

const location=useLocation()
useEffect(()=>{
 const specificpoints=location.pathname.split('/')[1]
  setCategory(specificpoints)
},[])



const filterHandle = (e)=>{
const value=e.target.value

setstate({
  ...state,
[e.target.name]:value
})
}
console.log("women now checking",state)

useEffect(()=>{

  const womensApifunction =async ()=>{
    const womensApi="http://localhost:5000/api/womensproduct";
 let response=await axios.get(womensApi);
 console.log("womens api",response.data)
 womenSetstate(response.data)
  }

  womensApifunction()

},[state])

useEffect(()=>{

filterwomenSetstate(
  womenState.filter((item)=>
  Object.entries(state).every(([key,value])=>item[key].includes(value))
  )
)
if(Pricefilter == 'newest'){
  filterwomenSetstate((prev)=>
[...prev].sort((a,b)=>a.createdAt - b.createdAt )
)
}else if(Pricefilter == "asc"){
  filterwomenSetstate((prev)=>
  [...prev].sort((a,b)=>a.price-b.price)
  )
}else if(Pricefilter == "desc"){
filterwomenSetstate((prev)=>
[...prev].sort((a,b)=>b.price-a.price)
)

}


},[state,womenState,Pricefilter])




    let womensproduct=filterwomenState.map((item)=>{
        return (
        <>
        <Link  to={`/selectedproducts/${item._id}/${category}`}>
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
        </Link>
        </>
        )
    })
  return (
    <>
            <Navbar/>
      <Advertisement/>
<Title>Womens Products</Title>
<FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={filterHandle}>
            <Option disabled >
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select  name="size" onChange={filterHandle}>
            <Option disabled>
              Size
            </Option>
            <Option>xs</Option>
            <Option>s</Option>
            <Option>m</Option>
            <Option>l</Option>
            <Option>xl</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e)=>setpricefilter(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
<Container>
{womensproduct}
</Container>
 <Newsletter/>
      <Footer/>
    </>
  )
}

export default WomensProducts
