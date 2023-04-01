import { createSlice } from "@reduxjs/toolkit";

const user=createSlice({
name:"user",
initialState:{
    currentuser:null,
    isFetching:false,
    isError:false
},
reducers:{
   loginStart:(state)=>{
   state.isFetching=true
   state.isError=false
   } ,
   loginSuccess:(state,action)=>{
    state.isFetching=false
    state.currentuser=action.payload
   },
   loginFailure:(state)=>{
    state.isFetching=false
    state.isError=true
   }
}
})

export const {loginStart ,loginSuccess,loginFailure} = user.actions
export default user.reducer