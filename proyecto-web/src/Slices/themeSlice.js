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

export const createTheme = createAsyncThunk('/themes',async(newThemeData) =>{
    const newThemeFetch = await fetch('http://localhost:7500/theme',{
        method: 'POST',
        headers: {
            "Content-type":"application/json",
        },
        body: JSON.stringify({
            name: newThemeData.name,
            descripcion: newThemeData.descripcion,
            photo: newThemeData.photo,
        }),
    });
    const themeData = await newThemeFetch.json();
    console.log("status: ",newThemeFetch.status);
    if(newThemeFetch.status === 200){
        return newThemeData;
    } else {
        return {
            error: true,
            message: newThemeData.error.message,
        }
    }
});

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

export default themeSlice.reducer;