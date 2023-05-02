import { createSlice } from "@reduxjs/toolkit";


const orders=createSlice({
    name:'orders',
initialState:{
orderInfo:[]
},
reducers:{
    addtoOrders:(state,action)=>{
        console.log('something order mmm ok ahnao',action.payload);
        state.orderInfo.push(action.payload)
    },
    removeOrder:(state,action)=>{
        state.orderInfo.splice(state.orderInfo.findIndex((item)=>item._id===action.payload),1)
    }
}
})

export const {addtoOrders,removeOrder}=orders.actions
export default orders.reducer