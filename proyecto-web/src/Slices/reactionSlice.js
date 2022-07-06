import { createSlice } from "@reduxjs/toolkit";

const reactionSlice = createSlice({
    name: 'reaction',
    initialState: {
        reactions: 0,
    },
    reducers:{
        addReaction: (state) => {
            state.reactions++;
        }
    }
})

export const {addReaction,} = reactionSlice.actions;

export default reactionSlice.reducer;