import { createSlice } from "@reduxjs/toolkit";

export const users=createSlice({
    name:'userInfo',
    initialState:{
        userData:[],
        name:'',
        accessToken:''
    },
    reducers:{
        loginwithuser:(state,action)=>{

            console.log('actionpayload aceestoken?',action.payload.accesstoken);
            console.log('actionpayload name?',action.payload.username);
state.userData.push(action.payload)
state.accessToken=action.payload.accesstoken
state.name=action.payload.username
        },
        logoutwithuser:(state)=>{
            state.userData=[]
            state.accessToken=''
            state.name=''

        }
    }
})

export const {loginwithuser,logoutwithuser} =users.actions
export default users.reducer