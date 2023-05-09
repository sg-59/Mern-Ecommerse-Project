import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { publicRequest } from "../requestMethod";
import { Orders, removeCartitem } from "../Redux/apiCall";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Main = styled.div`
  width: 50%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin: 200px;
`;
const SubMain =styled.div`
width:100% ;

`;
const DIV = styled.div `
margin:10px ;
`

const Checkout = () => {
  const [stateCart, setstateCart] = useState([]);
 const [value,setValue]=useState('')
 console.log('Razorpay',value);
  const dispatch = useDispatch();
  const location = useRef();
  const city = useRef();
  const states = useRef();
  const pin = useRef();

  const userId = useSelector((state) => state.user.currentuser._id);

 useEffect(() => {
    const cartitem = async () => {
      try {
        const res = await publicRequest.get("/cart");
        console.log("cart in order ethyo", res.data);
        setstateCart(res.data);
        return null;
      } catch (err) {
        console.log(err, "err plz");
      }
    };
    cartitem();

  }, []);

  const Total = stateCart.map((li) => {
    return li.price * li.quantity;
  });
  const quantity = useSelector((state) => state.cart.quantity);
  const productId=useSelector((state)=>state.cart.productsId)

  console.log('products id where ?',productId);

  const amount = Total.reduce(sum, 0);

  function sum(a, b) {
    return a + b;
  }

  sum();

  const display = (e) => {
    e.preventDefault();
    const add = location.current.value;
    const cit = city.current.value;
    const sta = states.current.value;
    const pi = pin.current.value;
    console.log(add, cit, sta, pi);
    const address = {
      deatils: add,
      cityDetails: cit,
      stateSetails: sta,
      zipetails: pi,
    };

    console.log(
      "address indo kutta potta chatta mitta sutta giltta richutta",
      address
    );

    Orders(dispatch, {
      userId,
      products:[{productId,quantity}],
      amount,
      address,
      status: value
    });

    removeCartitem(dispatch)
  };

  return (
    <>
      <Main>
        <SubMain>
        <h1>Address</h1>
        <form onSubmit={display}>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              ref={location}
            />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input
                type="text"
                class="form-control"
                id="inputCity"
                ref={city}
              />
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control" ref={states}>
                <option selected>Choose...</option>
                <option>Kerala</option>
                <option>Tamilnadu</option>
                <option>Andhrapredesh</option>
                <option>Goa</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip" ref={pin} />
            </div>
          </div>
         
          <button style={{marginTop:'20px',backgroundColor:'blue',color:'white'}} type="submit" class="btn btn-primary">
          Submit
          </button>
         
        </form>

<DIV>
  <label>Cash on delivery</label>
  <input type="radio" value={'COD'} name="Payment" onChange={(e)=>setValue(e.target.value)}/>
  <br/>
  <br/>
  <label>Online payment</label>
  <input type="radio" value={'ONLINE'} name="Payment" onChange={(e)=>setValue(e.target.value)}/>
</DIV>

        <Link to={value === 'COD' ? '/ordersuccess' : '/payment'}>
        <button style={{marginTop:'20px',backgroundColor:'green',color:'white'}}>Apply</button>
        </Link>
        </SubMain>
      </Main>
    </>
  );
};

export default Checkout;



// Orders(dispatch, {
//   userId,
//   carts:[{cartId,quantity}],
//   amount,
//   address,
//   status: "COD success",
// });