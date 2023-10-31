import { createSlice } from '@reduxjs/toolkit';

export const climbingSetsSlice = createSlice({
    name: 'climbingSets',
    initialState: [],
    reducers: {
        setClimbingSets: (state, action) => {
            return action.payload;
        }
    }
});

// this is for dispatch
export const { setClimbingSets } = climbingSetsSlice.actions;

// this is for configureStore
export default climbingSetsSlice.reducer;
