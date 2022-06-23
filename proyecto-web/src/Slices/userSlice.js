import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        users: [],
        isLoggedIn: false,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.isLoggedIn = false;
        }
    }
});

export const { logout } = userSlice.actions;



export default userSlice.reducer;
