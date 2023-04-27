import { createSlice } from "@reduxjs/toolkit";
const userCart=createSlice({
name:"cart",
initialState:{
    products:[],
    quantity:null
},
reducers:{
    addtoCart:(state,action)=>{
        console.log('something fishy...',action.payload);
        state.products.push(action.payload)
        state.quantity = state.products && action.payload.products.length
        },
        removedItem:(state,action)=>{
            console.log('actio payload id vanile?',action.payload);
            state.products.splice(state.products.findIndex((item)=>item._id===action.payload),1)
        },
    

}
})

export const {addtoCart,removedItem} = userCart.actions
export default userCart.reducer