import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        userIsLoggedIn: false,
    },  
    reducers: {
        logout: (state) => {
            state.user = null;
            state.userIsLoggedIn = false;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(postLogin.fulfilled, (state, action) => {
                if (action.payload.error) {
                    state.userIsLoggedIn = false;
                    state.user = null;
                    state.errorMessage = action.payload.message;
                } else {
                    state.userIsLoggedIn = true;
                    state.user = action.payload;
                }
            })
            .addCase(postLogin.rejected, (state) => {
                state.userIsLoggedIn = false;
                state.user = null;
            })
    }
});

export const { logout } = userSlice.actions;

export const postLogin = createAsyncThunk('/postLogin', async (credentials) => {

    const loginFetch = await fetch('http://localhost:7500/login',{
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            email:credentials.username,
            password:credentials.password,
        }),
    });
    const userData = await loginFetch.json();
    if (loginFetch.status === 200){
        return userData;
    } else {
        return {
            error: true,
            message: userData.error.message,
        }
    }
});

export const createUser = createAsyncThunk('/createUser', async(newUserData) => {
    const newUserFetch = await fetch('http://localhost:7500/register',{
        method: 'POST',
        headers: {
            "Content-type":"application/json",
        },
        body: JSON.stringify({
            name: newUserData.username,
            email: newUserData.email,
            password: newUserData.password,
            photo: newUserData.img,
        }),
    });
    if(newUserFetch.status === 200){
        return newUserFetch;
    } else {
        return {
            error: true,
            message: newUserData.error.message
        }
    }
})

export default userSlice.reducer;
