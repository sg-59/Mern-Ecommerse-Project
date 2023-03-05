import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Advertisement from "../components/Advertisement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethod";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: contain;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 9px;
  border: 2px solid teal;
  background-color: #008011;
  cursor: pointer;
  font-weight: 500;
  color: #f8f4f4;
  &:hover {
    background-color: #f8f4f4;
    color: black;
  }
`;

const SelectedProducts = () => {
  const Location = useLocation();
  const id = Location.pathname.split("/")[2];
  console.log("id undo ?", id);
  const category = Location.pathname.split("/")[3];
  console.log("id pinem undo?", category);
  const [product, setproduct] = useState([]);
  const [quantity,setQuantity]=useState(1)

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/${category}product/find/` + id);
        setproduct(res.data);
      } catch (err) {}
    };
    getProduct();
  }, [id]);

  const changeQuantity = (para)=>{
if(para==="add"){
 setQuantity(quantity + 1)
}else{
  quantity >1 && setQuantity(quantity - 1)
}
  }

  return (
    <Container>
      <Navbar />
      <Advertisement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>₹ 1950</Price>

          <AddContainer>
            <AmountContainer>
              <span class="material-symbols-outlined" style={{cursor:"pointer"}} onClick={()=>changeQuantity("add")}>add</span>

              <Amount>{quantity}</Amount>

              <span class="material-symbols-outlined" style={{cursor:"pointer"}} onClick={()=>changeQuantity("remove")}>remove</span>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default SelectedProducts;
