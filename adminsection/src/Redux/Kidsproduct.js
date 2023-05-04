import { createSlice } from "@reduxjs/toolkit";


export const kidsproducts=createSlice({
    name:'kidsitems',
    initialState:{
        kidsfullproducts:[]
    },
    reducers:{
        kidsTotalitems:(state,action)=>{
            state.kidsfullproducts.push(action.payload)
        }
    }
    
})

export const {kidsTotalitems} =kidsproducts.actions
export default kidsproducts.reducer