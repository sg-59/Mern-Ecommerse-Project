import { publicRequest } from "../requestMethod"
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