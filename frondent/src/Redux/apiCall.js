import { publicRequest, userRequest } from "../requestMethod";
import { addtoCart, removedAllCart } from "./cartRedux";
import { addtoOrders, removeOrder } from "./orderRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";


export const RegisterUser=async(formData)=>{
  console.log('enthayii ??',formData);
  try{
const res=await publicRequest.post('/auth/signup',formData)
console.log('register info',res.data);
  }catch(err){
    console.log(err);
  }
}



export const login = async (dispatch, user) => {

  console.log('logil enthanano',user);
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const cart = async (dispatch,fullinfo) => {

  console.log('sari aavumo',fullinfo);
  try {
    const value =await publicRequest.post("/cart",fullinfo);
    console.log("ini ith ethanavo ?", value.data);
    console.log("help plzz",fullinfo);
    dispatch(addtoCart(value.data))
  } catch (err) {
    console.log("entahn error please help", err);
  } 
};


export const Remove = async (id)=>{
  console.log('common',id);
  try{
const value=await publicRequest.delete(`/cart/${id}`)
  }catch(err){

  }
}

export const Orders=async (dispatch,orderDetails)=>{
  console.log('order Details',orderDetails);
  try{
const res=await publicRequest.post('/order',orderDetails)
console.log('evideyenkilum ethyo order',res.data);
dispatch(addtoOrders(res.data))
  }catch(err){
    console.log('error  ok',err);
  }
}


export const removeCartitem=async(dispatch)=>{

  try{
const res=await publicRequest.delete('/cart')
dispatch(removedAllCart())
  }catch(err){

  }
}

export const removeOrders=async(dispatch,id)=>{
  try{
const res=await publicRequest.delete(`/order/${id}`)
dispatch(removeOrder(id))
  }catch(err){
console.log(err);
  }
}

export const  razorpayVerify= async(payment,order)=>{

  console.log('verifying',payment,order);
  try{
const res=await publicRequest.post('/order/verify',{payment,order})
console.log('final result',res.data);
if(res.data){
  window.location.href='/ordersuccess'
}

  }catch(err){
    console.log(err);
  }
}

