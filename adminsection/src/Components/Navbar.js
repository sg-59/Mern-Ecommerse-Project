import {Badge} from "react-bootstrap";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import {Link } from "react-router-dom";

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
const Alluser =styled.h3`
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
      <Alluser>All-User</Alluser>
        </Left>
        <Center>Admin-Section</Center>
        <Right>
          <Menu>
            {/* <Link to={'/cart'}> */}
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
            {/* </Link> */}
          </Menu>
          <Link to={'/'}> <Menu>All User</Menu></Link>
      <Link to={'/allorder'}> <Menu>All orders</Menu></Link>  
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
