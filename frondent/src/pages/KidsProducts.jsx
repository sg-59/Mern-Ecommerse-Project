import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Advertisement from '../components/Advertisement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { kidsProducts } from '../Data';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


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
const [state,setstate]=useState({})
const [kidstate,kidsSetstate]=useState([])
const [filterState,setfilterSetstate]=useState([])
const [priceFilter,setPricefilter]=useState("newest")

const [category,setCategory]=useState();

const location=useLocation()
useEffect(()=>{
 const specificpoints=location.pathname.split('/')[1]
  setCategory(specificpoints)
},[])

 
console.log("filter price",priceFilter)

const filterHandle = (e)=>{
  let value=e.target.value
setstate ({
  ...state,
[e.target.name]:value
})
}

console.log("kids  products filter",state)

useEffect(()=>{

  const kidsApifunction =async ()=>{
    const kidsApi="http://localhost:5000/api/kidsproduct";
 let response=await axios.get(kidsApi);
 console.log("kids api",response.data)
 kidsSetstate(response.data)
  }

  kidsApifunction()

},[state])

useEffect(()=>{
setfilterSetstate(
  kidstate.filter((item)=>
  Object.entries(state).every(([key,value])=>item[key].includes(value))
  )
)

if(priceFilter=="newest"){
  setfilterSetstate((prev)=>
  [...prev].sort((a,b)=>a.createdAt - b.createdAt)
  )
}else if(priceFilter == "asc"){
  setfilterSetstate((prev)=>
  [...prev].sort((a,b)=> a.price - b.price)
  )
}else if(priceFilter == "desc"){
setfilterSetstate((prev)=>
[...prev].sort((a,b)=> b.price- a.price)
)

}
},[state,kidstate,priceFilter])





    let kidsproduct=filterState.map((item)=>{
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
<Title>Kids Products</Title>
<FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name='color' onChange={filterHandle}>
            <Option disabled>
              Color
            </Option>
            <Option>grey</Option>
            <Option>rose</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name='size' onChange={filterHandle}>
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
          <Select onChange={(e)=>setPricefilter(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
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
