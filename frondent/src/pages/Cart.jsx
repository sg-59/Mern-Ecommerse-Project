import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Advertisement from "../components/Advertisement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { publicRequest, userRequest } from "../requestMethod";
import { Link } from "react-router-dom";
import { Remove } from "../Redux/apiCall";
import { removedItem } from "../Redux/cartRedux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  height: auto;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "green" : " #488A99"};
  color: ${(props) => (props.type === "filled" ? "white" : "white")};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  flex: 3;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #488a99;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const [state, setstate] = useState([]);
  const [Total, setTotal] = useState([]);
  const [Amount, setAmount] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (Total) {
      const amount = Total.reduce(sum, 0);

      function sum(a, b) {
        return a + b;
      }

      sum();

      console.log("amount", amount);
      setAmount(amount);
    }
  }, [Total]);

  console.log("Total vano?", Total);
  const newa = useSelector((state) => state.cart.price);
  console.log("price ", newa);

  useEffect(() => {
    const display = async () => {
      try {
        const res = await publicRequest.get("/cart");
        console.log("****", res.data);
        setstate(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    display();
  }, []);

  const newArray = state;

  console.log("?", newArray);

  const cart = useSelector((state) => state.cart);
  console.log("cart items", cart);
  useEffect(() => {
    const a = state.map((li) => {
      return li.price * li.quantity;
    });

    console.log("success of total", a);
    setTotal(a);
  }, [state]);

  const Removeitem = (id) => {
    console.log("verify", id);
    Remove(id);
    dispatch(removedItem(id));
  };

  return (
    <Container>
      <Navbar />
      <Advertisement />
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <TopButton>Cart Remove</TopButton>
          <Link to={"/checkout"}>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          </Link>
        </Top>
        <Bottom>
          <Info>
            {state.map((li) => (
              <>
                <Product>
                  <ProductDetail>
                    <Image src={li.img} />
                    <Details>
                      <ProductName>
                        <b>Product:</b> {li.title}
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> {li._id}
                      </ProductId>
                      <ProductColor color={li.color} />
                      <ProductSize>
                        <b>Size:</b> {li.size}
                        <br />
                        <b>Qty:</b> {li.quantity}
                        <br />
                        <br />
                        <br />
                        <Button onClick={() => Removeitem(li._id)}>
                          Remove
                        </Button>
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductPrice>{li.quantity * li.price}</ProductPrice>
                  </PriceDetail>
                </Product>
                <Hr />
              </>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>₹ {Amount}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>₹ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>₹ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>₹ {Amount}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
