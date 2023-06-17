import { publicRequest, userRequest } from "../requestMethod"
import { displayOrder } from "./AllorderRedux"
import { getAlluserfailure, getAlluserstart, getAllusersuccess } from "./AlluserRedux"
import { kidsTotalitems } from "./Kidsproduct"
import { loginwithadmin } from "./AdminRedux"

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

 export const loginform=async (dispatch,admin)=>{
    console.log('admin login',admin);
    try{
const res=await publicRequest.post('/adminauth/login',admin)
console.log("res.data ?",res.data);
dispatch(loginwithadmin(res.data))
    }catch(err){
        console.log(err);
    }
 }

 export const Updatedproduct = async (Data,Id)=>{

    console.log("Data where ?",Data);
    console.log("ID where ?",Id);
    try{
const res=await userRequest.put(`/kidsproduct/${Id}`,Data)
console.log('entha eppo indaye?',res.data);

    }catch(err){
        console.log(err);
    }
 }

 export const Addproducts = async (data)=>{
    console.log("data ? ...",data);
    try{
const res=await userRequest.post('/kidsproduct',data)
console.log('add new products',res.data);
    }catch(err){
        console.log(err);
    }
 }

 export const DeleteKidsproducts = async (Id)=>{
    try{
const res=await userRequest.delete(`/kidsproduct/${Id}`)
    }catch(err){
        console.log(err);
    }
 }


 export const registerInfo =async (formData)=>{
    console.log('adminsection register data',formData);
    try{
const res=await publicRequest.post('/adminauth/signup',formData)
console.log('res.data in admin section',res.data);
    }catch(err){
        console.log(err);
    }
 }