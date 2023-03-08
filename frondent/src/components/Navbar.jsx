import { Badge, Button } from "react-bootstrap";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  &:focus {
    outline: none;
  }
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  width: 50%;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  font-style:italic;
  color: #008787;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Menu = styled.div`
  margin-left: 1.5em;
  cursor: pointer;
`;

const Navbar = () => {
  return (

    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
            <span
              class="material-symbols-outlined"
              style={{ cursor: "pointer" }}
            >
              search
            </span>
            <Input />
          </SearchContainer>
        </Left>
        <Center>Shopping-Cart</Center>
        <Right>
          <Menu>
            <Badge
              className="bg-transparent text-black"
              style={{ fontSize: "14px" }}
            >
              99
              <span
                class="material-symbols-outlined"
                style={{ fontSize: "1.8em" }}
              >
                garden_cart{" "}
              </span>
            </Badge>
          </Menu>
          <Menu>Register</Menu>
          <Menu>Sign-in</Menu>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
