import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
const userCart=createSlice({
name:"cart",
initialState:{
    products:[],
    quantity:null,
    productsId:[]
},
reducers:{
    addtoCart:(state,action)=>{
        console.log('something fishy...',action.payload);
        console.log('something fishy...mann....',action.payload.ids);
        state.products.push(action.payload)
        state.quantity +=1
        state.productsId.push(action.payload.ids)
    
        },
        removedItem:(state,action)=>{
            console.log('actio payload id vanile?',action.payload);
            state.products.splice(state.products.findIndex((item)=>item._id===action.payload),1)
            state.quantity -=1
        },
        removedAllCart:(state)=>{
            state.products=[]
            state.quantity=null
            state.productsId=[]
        },

}
})

export const {addtoCart,removedItem,removedAllCart} = userCart.actions
export default userCart.reducer