import { publicRequest, userRequest } from "../requestMethod";
import { addtoCart } from "./cartRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

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