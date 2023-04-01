import { createSlice } from "@reduxjs/toolkit";

const userCart=createSlice({
name:"cart",
initialState:{
    products:[],
    quantity:0,
    total:0
},
reducers:{
    addtoCart:(state,action)=>{
        state.quantity +=1
        state.products.push(action.payload)
        state.total +=action.payload.price*action.payload.quantity
    }
}
})

export const {addtoCart} = userCart.actions
export default userCart.reducer