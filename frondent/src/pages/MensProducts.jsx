import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Advertisement from "../components/Advertisement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { mensProducts } from "../Data";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import SelectedProducts from "./SelectedProducts";

const Container = styled.div`
  display: flex;
  margin: 2em;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  text-align: center;
  margin: 0.5em;
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

const MensProducts = () => {
  const [filter, setFilter] = useState({});
  const [sortPrice, setSortprice] = useState("newest");
  const [menspro, setMenpro] = useState([]);
  const [filteredmenpro, setfilteredmenpro] = useState([]);
  const [category,setCategory]=useState();

  const location=useLocation()
  useEffect(()=>{
   const specificpoints=location.pathname.split('/')[1]
    setCategory(specificpoints)
  },[])

  

  const filterHandle = (e) => {
    const value = e.target.value;

    setFilter({
      ...filter,
      [e.target.name]: value,
    });
  };

  console.log(filter);

  useEffect(() => {
    const Getproducts = async () => {
      try {
        const Api = "http://localhost:5000/api/mensproduct";
        const response = await axios.get(Api);
        console.log(response.data);
        setMenpro(response.data);
      } catch (err) {
        console.log("Error is =", err);
      }
    };
    Getproducts();
  }, [filter]);

  useEffect(() => {
    setfilteredmenpro(
      menspro.filter((item) =>
        Object.entries(filter).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
    if(sortPrice=="newest"){
      setfilteredmenpro((prev)=>
      [...prev].sort((a,b)=>a.createdAt - b.createdAt)
      );
    }else if(sortPrice=="asc"){
      setfilteredmenpro((prev)=>
      [...prev].sort((a,b)=> a.price - b.price)
      );
    }else if(sortPrice == "desc"){
      setfilteredmenpro((prev)=>
      [...prev].sort((a,b)=> b.price - a.price)
      )
    }

  }, [filter, menspro,sortPrice]);

//   useEffect(()=>{
// if(sortPrice=="newest"){
//   setSortprice((prev)=>
//   [...prev].sort((a,b)=>a.createdAt - b.createdAt)
//   );
// }else if(sortPrice=="asc"){
//   setSortprice((prev)=>
//   [...prev].sort((a,b)=> a.price - b.price)
//   );
// }else if(sortPrice == "desc"){
//   setSortprice((prev)=>
//   [...prev].sort((a,b)=> b.price - a.price)
//   )
// }

//   },[sortPrice])

  let mensproduct = filteredmenpro.map((item) => {

    
    return (
      <>
       <Link  to={`/selectedproducts/${item._id}/${category}`}>
        <Card
          style={{
            width: "18rem",
            margin: "1.5em",
            backgroundColor: "#ffffff",
          }}
        >
          <Card.Img variant="top" src={item.img} style={{ height: "14em" }} />
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
    );
  });

  return (
    <>
      <Navbar />
      <Advertisement />
      <Title>Mens Products</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={filterHandle}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={filterHandle}>
            <Option disabled>Size</Option>
            <Option>xs</Option>
            <Option>s</Option>
            <Option>m</Option>
            <Option>l</Option>
            <Option>xl</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSortprice(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price-asc</Option>
            <Option value="desc">Price-desc</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Container>{mensproduct}</Container>
      <Newsletter />
      <Footer />
    </>
  );
};

export default MensProducts;
