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


export default opinionSlice.reducer;