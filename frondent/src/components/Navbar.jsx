import { Badge} from "react-bootstrap";
import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../Redux/userRedux";

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
  text-decoration: none;
  color: black;
`;

const Navbar = () => {

const quantity=useSelector(state=>state.cart.quantity)
const currentUser=  useSelector(state=>state.user.currentuser) 
if(currentUser){
  var name =currentUser.username
}

console.log('quqntity where',quantity);
const dispatch=useDispatch()
  
const Logout = (e)=>{ 
  e.preventDefault();
dispatch(logoutUser())
}

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
        <Center>Thika store</Center>
        <Right>
          <Menu>
            <Link to={'/cart'}>
            <Badge
              className="bg-transparent text-black"
              style={{ fontSize: "14px" }}
            >
              {quantity}
              <span
                class="material-symbols-outlined"
                style={{ fontSize: "1.8em" }}
              >
                garden_cart{" "}
              </span>
            </Badge>
            </Link>
          </Menu>
          <Menu>{name}</Menu>
          <Link to={'/profile'}><Menu>Profile</Menu></Link>
          <Link to={'/myorderlist'}> <Menu>My order list</Menu></Link>
          <Menu onClick={Logout}>LOGOUT</Menu>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
