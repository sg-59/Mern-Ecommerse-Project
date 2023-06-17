import { createSlice } from "@reduxjs/toolkit";

export const admin=createSlice({
    name:'adminInfo',
    initialState:{
        adminData:[],
        name:'',
        accessToken:''
    },
    reducers:{
        loginwithadmin:(state,action)=>{

            console.log('actionpayload aceestoken?',action.payload.accesstoken);
            console.log('actionpayload aceestoken?',action.payload.username);
state.adminData.push(action.payload)
state.accessToken=action.payload.accesstoken
state.name=action.payload.username
        },
        logoutwithadmin:(state)=>{
            state.adminData=[]
            state.accessToken=''
            state.name=''

        }
    }
})

export const {loginwithadmin,logoutwithadmin} =admin.actions
export default admin.reducer