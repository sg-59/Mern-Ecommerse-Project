import { createSlice } from "@reduxjs/toolkit";

export const Allorder =createSlice({
    name:"orders",
    initialState:{
        orderInfo:null
    },
    reducers:{
        displayOrder:(state,action)=>{
            console.log("all order ? ",action.payload);
            state.orderInfo=action.payload
        }
    }
})

export const {displayOrder} = Allorder.actions
export default Allorder.reducer