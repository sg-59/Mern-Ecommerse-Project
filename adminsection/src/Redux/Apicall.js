import { publicRequest } from "../requestMethod"
import { displayOrder } from "./AllorderRedux"
import { getAlluserfailure, getAlluserstart, getAllusersuccess } from "./AlluserRedux"

export const getUsersInfo=async(dispatch)=>{
    dispatch(getAlluserstart())
    try{
const res=await publicRequest.get('/user')
dispatch(getAllusersuccess(res.data))
    }catch(err){
        dispatch(getAlluserfailure())
    }
}

export const ordersDisplay = async (dispatch)=>{
    try{

const res=await publicRequest.get('/order')
dispatch(displayOrder(res.data))
console.log("order ?",res.data);
    }catch(err){
        console.log('err confirm ',err);
    }
}