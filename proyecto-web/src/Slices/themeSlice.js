import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        success: false,
        theme: null,
    },
    reducers: {
        cleanState: (state) => {
            state.success = false;
            state.theme = null;
        }
    }
});

export const {cleanState} = themeSlice.actions;

export const createTheme = createAsyncThunk('/themes',async() =>{

})

export const getThemes = createAsyncThunk('/themes',async() =>{
    const themesFetch = await fetch('http://localhost:7500/themes',{
        method: 'GET',
        headers: {
            "Content-type":"application/json"
        },
    })
    if (themesFetch.status === 200){
        return themesFetch;
    } else {
        return {
            error: true,
            message: themesFetch.error.message,
        }
    }
});