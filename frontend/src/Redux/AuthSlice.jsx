import {  createSlice } from "@reduxjs/toolkit";





const initialState={
    user:null,
    error:null,
    loading:null,
    token:null

}


const AuthSlice=createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        SetUser:(state,action)=>{
            state.user=action.payload
        },
        logout:(state)=>{
            state.user=null
            state.token=null
            state.error=null
            state.loading=null

        }
    },

    // extraReducers:(builder) => {
    //     builder.addCase(updateUser.pending, (state)=>{
    //         state.loading=true
    //     })


    //     builder.addCase(updateUser.fulfilled, (state, action) => {
    //         state.loading = false;
    //         state.user = action.payload;
           
    //     });
    //     builder.addCase(updateUser.rejected, (state, action) =>
    //         {
    //         state.loading = false;
    //         state.error = action.error.message,
    //         state.user = null;

    //  } )
    // }
    
    })



export const { SetUser, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
