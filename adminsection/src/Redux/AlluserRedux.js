import { createSlice } from "@reduxjs/toolkit";

export const Allusers=createSlice({
    name:"users",
    initialState:{
        usersInfo:null,
        isFetching:false,
        isError:false
    },
    reducers:{
        getAlluserstart:(state)=>{
            state.isFetching=true
            state.isError=false
        },
        getAllusersuccess:(state,action)=>{
            state.isFetching=false
            state.usersInfo=action.payload
        },
        getAlluserfailure:(state)=>{
            state.isFetching=false
            state.isError=true
        }
    }
})

export const {getAlluserstart,getAllusersuccess,getAlluserfailure}=Allusers.actions
export default Allusers.reducer
