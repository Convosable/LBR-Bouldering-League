import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: null,

    reducers: {
        setUser: (state, action) => {
        return action.payload;
        }
    }
});

// this is for dispatch
export const { setUser } = userSlice.actions;

// this is for configureStore
export default userSlice.reducer;
