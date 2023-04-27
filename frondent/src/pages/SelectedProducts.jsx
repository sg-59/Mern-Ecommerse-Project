import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Advertisement from "../components/Advertisement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { publicRequest, userRequest } from "../requestMethod";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../Redux/cartRedux";
import { cart } from "../Redux/apiCall";

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
const Colorscheme = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.color === "total" && "24px"};
`;
const SelectedProducts = () => {
  const Location = useLocation();
  const id = Location.pathname.split("/")[2];
  console.log("id undo ?", id);
  const category = Location.pathname.split("/")[3];
  console.log("id pinem undo?", category);
  const [product, setproduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/${category}product/find/` + id);
        setproduct(res.data);
      } catch (err) {}
    };
    getProduct();
  }, [id]);

  const ids = product._id;
  const price = product.price;
  const title = product.title;
  const desc = product.desc;
  const categories = product.categories;
  const size = product.size;
  const color = product.color;
  const img = product.img;

  const userId = useSelector((state) => state.user.currentuser._id);

  const changeQuantity = (para) => {
    if (para === "add") {
      setQuantity(quantity + 1);
    } else {
      quantity > 1 && setQuantity(quantity - 1);
    }
  };

  const addtoCartDisplay = async (e) => {
    e.preventDefault();
    cart(dispatch, {
      userId,
      ids,
      title,
      desc,
      img,
      categories,
      size,
      color,
      price,
      quantity,
    });
  };

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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            iusto, consequatur eius id qui tempora accusamus tempore deleniti
            neque ea iste nobis quas, laborum ipsam fugit quo quae quia
            repellat? Molestias mollitia commodi sit aut recusandae ex at porro
          </Desc>
          <Price>₹ 1950</Price>

          <AddContainer>
            <AmountContainer>
              <span
                class="material-symbols-outlined"
                style={{ cursor: "pointer" }}
                onClick={() => changeQuantity("add")}
              >
                add
              </span>
              <Amount>{quantity}</Amount>
              <span
                class="material-symbols-outlined"
                style={{ cursor: "pointer" }}
                onClick={() => changeQuantity("remove")}
              >
                remove
              </span>
            </AmountContainer>
            <Button onClick={addtoCartDisplay}>ADD TO CART</Button>
            <Colorscheme />
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default SelectedProducts;
