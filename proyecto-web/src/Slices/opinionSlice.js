import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const opinionSlice = createSlice({
    name:'opinion',
    initialState: {
        opinions: [],
        reactions: 0,
    },
    reducers:{
        addReaction: (state) => {
            state.reactions++;
        }
    },
    extraReducers(builder){
        builder
        .addCase(getAllOpinions.fulfilled, (state,action) =>{
            if (action.payload.error) {
                state.opinions = [];
                state.errorMessage = action.payload.message;
            } else {
                state.opinions = action.payload;
            }
        })
        .addCase(getAllOpinions.rejected, (state) => {
            state.opinions = [];
        })
        .addCase(getOpinionByUserName.fulfilled, (state,action) =>{
            if (action.payload.error) {
                state.opinions = [];
                state.errorMessage = action.payload.message;
            } else {
                state.opinions = action.payload;
            }
        })
        .addCase(getOpinionByUserName.rejected, (state) => {
            state.opinions = [];
        })
        .addCase(getOpinionByTheme.fulfilled, (state,action) =>{
            if (action.payload.error) {
                state.opinions = [];
                state.errorMessage = action.payload.message;
            } else {
                state.opinions = action.payload;
            }
        })
        .addCase(getOpinionByTheme.rejected, (state) => {
            state.opinions = [];
        })
    }
})

export const {addReaction,} = opinionSlice.actions;


export const getAllOpinions = createAsyncThunk('opinions/getAllOpinions',async() =>{
    const opinionsFetch = await fetch('http://localhost:7500/feed');

    const opinionsData = await opinionsFetch.json(); 

    if(opinionsFetch.status === 200){
        return opinionsData;
    }else{
        return {
            error:true,
            message:opinionsData.error.message,
        }
    }
});

export const getOpinionByUserName = createAsyncThunk('/user/username', async(username) =>{
    const userOpinionsFetch = await fetch(`http://localhost:7500/user/${username}`);
    const userOpinionsData = await userOpinionsFetch.json();
    if(userOpinionsFetch.status === 200){
        return userOpinionsData;
    }else{
        return{
            error:true,
            message:userOpinionsData.error.message,
        }
    }
})

export const getOpinionByTheme = createAsyncThunk('/themeOpinions/theme', async(theme) =>{
    const userThemeFetch = await fetch(`http://localhost:7500/themeOpinions/${theme}`);
    const userThemeData = await userThemeFetch.json();
    if(userThemeFetch.status === 200){
        return userThemeData;
    }else{
        return{
            error:true,
            message:userThemeData.error.message,
        }
    }
})

export const createOpinion = createAsyncThunk('/createOpinion',async(newOpinionData)=>{
    const newPostFetch = await fetch('http://localhost:7500/feed',{
        method:'POST',
        headers:{
            "Content-type":"application/json",
        },
        body: JSON.stringify({
            name:newOpinionData.name,
            theme:newOpinionData.theme,
            body:newOpinionData.body,
        }),
    });

    const newPostData = await newPostFetch.json();

    if(newPostFetch.status === 200){
        return newPostData;
    }else{
        return{
            error:true,
            message:newPostData.error.message,
        }
    }
});


export default opinionSlice.reducer;