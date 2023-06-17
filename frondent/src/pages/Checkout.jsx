import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { publicRequest } from "../requestMethod";
import { Orders, removeCartitem } from "../Redux/apiCall";
import { Link } from "react-router-dom";

import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow, MDBTypography } from 'mdb-react-ui-kit';


const Checkout = () => {
  const [stateCart, setstateCart] = useState([]);
 const [value,setValue]=useState('')
 console.log('Razorpay',value);
  const dispatch = useDispatch();
  const firstName = useRef();
  const lastName = useRef();
  const addresses = useRef();
  const city = useRef();
  const states = useRef();
  const pin = useRef();
  const email = useRef();

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
    const FirstName = firstName.current.value;
    const LastName = lastName.current.value;
    const Address = addresses.current.value;
    const City = city.current.value;
    const State = states.current.value;
    const Pin = pin.current.value;
    const Email = email.current.value;
    
    const address = {
      FirstName,LastName,Address,City,State,Pin,Email
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

    <MDBContainer className="py-5" style={{ maxWidth: '1100px' }}>
    <MDBRow className="justify-content-center align-items-center">
      <MDBCol>
        <MDBCard className="my-4 shadow-3">
          <MDBRow className="g-0">
            <MDBCol md="6" className="d-xl-block bg-image">
              <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Others/extended-example/delivery.webp" alt="Sample photo" fluid />
              <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <div className="justify-content-center align-items-center h-100">
                  <div className="text-center" style={{ marginTop: '220px' }}>
                    <MDBIcon fas icon="truck text-white" size="3x" />
                    <p className="text-white title-style">delivery</p>
                    <p className="text-white mb-0"></p>

                    <figure className="text-center mb-0">
                      <blockquote className="blockquote text-white">
                        <p className="pb-3">
                          <MDBIcon fas icon="quote-left text-primary" size="xs" style={{color: 'hsl(210, 100%, 50%)'}} />
                          <span className="lead font-italic">Everything at your doorstep.</span>
                          <MDBIcon fas icon="quote-right text-primary" size="xs" style={{color: 'hsl(210, 100%, 50%)'}} />
                        </p>
                      </blockquote>
                    </figure>
                  </div>
                </div>
              </div>
            </MDBCol>
            <MDBCol md="6">
              <form onSubmit={display}>
              <MDBCardBody className="p-md-5 text-black">
                <MDBTypography tag="h3" className="mb-4 text-uppercase">Delivery Info</MDBTypography>
                
                <MDBRow>
           
                <MDBCol md="6" className="mb-4">
                    <MDBInput label='First name' type='text' size="lg" ref={firstName} required={true} />
                  </MDBCol>
                  <MDBCol md="6" className="mb-4">
                    <MDBInput label='Last name' type='text' size="lg" ref={lastName} required={true}/>
                  </MDBCol>
                </MDBRow>

                <MDBInput label='Address' type='text' className="mb-4" size="lg" ref={addresses} required={true}/>

                <MDBRow>
                  <MDBCol md="6" className="mb-4">
                    <MDBInput label='State' type='text' size="lg" ref={states} required={true} />
                  </MDBCol>
                  <MDBCol md="6" className="mb-4">
                    <MDBInput label='City' type='text' size="lg" ref={city}  required={true}/>
                  </MDBCol>
                </MDBRow>

                <MDBInput label='Zip' type='text' className="mb-4" size="lg" ref={pin}  required={true}/>

                <MDBInput label='Email' type='text' className="mb-4" size="lg" ref={email}  required={true}/>

                   <label>Cash on delivery</label>
  <input type="radio" value={'COD'} name="Payment" onChange={(e)=>setValue(e.target.value)}/>
  <br/>  <br/>
 <label>Online payment</label>
  <input type="radio" value={'ONLINE'} name="Payment" onChange={(e)=>setValue(e.target.value)}/>

                <div className="d-flex justify-content-end pt-3">
               
               <MDBBtn size="lg" className="ms-2" style={{backgroundColor: 'hsl(210, 100%, 50%)'}} type="submit">  <Link to={value === 'COD' ? '/ordersuccess' : '/payment'}> Place order </Link></MDBBtn>
                
                </div>

              </MDBCardBody>
              </form>
            </MDBCol>
            
          </MDBRow>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
//     <>
//       <Main>
//         <SubMain>
//         <h1>Address</h1>
//         <form onSubmit={display}>
//           <div class="form-group">
//             <label for="inputAddress">Address</label>
//             <input
//               type="text"
//               class="form-control"
//               id="inputAddress"
//               ref={location}
//             />
//           </div>
//           <div class="form-row">
//             <div class="form-group col-md-6">
//               <label for="inputCity">City</label>
//               <input
//                 type="text"
//                 class="form-control"
//                 id="inputCity"
//                 ref={city}
//               />
//             </div>
//             <div class="form-group col-md-4">
//               <label for="inputState">State</label>
//               <select id="inputState" class="form-control" ref={states}>
//                 <option selected>Choose...</option>
//                 <option>Kerala</option>
//                 <option>Tamilnadu</option>
//                 <option>Andhrapredesh</option>
//                 <option>Goa</option>
//               </select>
//             </div>
//             <div class="form-group col-md-2">
//               <label for="inputZip">Zip</label>
//               <input type="text" class="form-control" id="inputZip" ref={pin} />
//             </div>
//           </div>
         
//           <button style={{marginTop:'20px',backgroundColor:'blue',color:'white'}} type="submit" class="btn btn-primary">
//           Submit
//           </button>
         
//         </form>

// <DIV>
//   <label>Cash on delivery</label>
//   <input type="radio" value={'COD'} name="Payment" onChange={(e)=>setValue(e.target.value)}/>
//   <br/>
//   <br/>
//   <label>Online payment</label>
//   <input type="radio" value={'ONLINE'} name="Payment" onChange={(e)=>setValue(e.target.value)}/>
// </DIV>

//         
//         <button style={{marginTop:'20px',backgroundColor:'green',color:'white'}}>Apply</button>
//         </Link>
//         </SubMain>
//       </Main>
//     </>
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