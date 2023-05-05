import { publicRequest } from "../requestMethod"
import { displayOrder } from "./AllorderRedux"
import { getAlluserfailure, getAlluserstart, getAllusersuccess } from "./AlluserRedux"
import { kidsTotalitems } from "./Kidsproduct"
import { loginwithuser } from "./UserRedux"

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
 export const kidsproductsDisplay =async (dispatch,id)=>{
    try{
const res=await publicRequest.get(`/kidsproduct/find/${id}`)
console.log('correct kids product',res.data);
dispatch(kidsTotalitems(res.data))
    }catch(err){
        console.log(err);
    }
 }

 export const loginform=async (dispatch,user)=>{
    try{
const res=await publicRequest.post('/auth/login',user)
console.log("res.data ?",res.data);
dispatch(loginwithuser(res.data))
    }catch(err){
        console.log(err);
    }
 }

 export const Updatedproduct = async (Data,Id)=>{

    console.log("Data where ?",Data);
    console.log("ID where ?",Id);
    try{
const res=await publicRequest.put(`/kidsproduct/${Id}`,Data)
console.log('entha eppo indaye?',res.data);

    }catch(err){
        console.log(err);
    }
 }