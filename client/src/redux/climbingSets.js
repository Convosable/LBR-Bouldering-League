import { createSlice } from '@reduxjs/toolkit';

export const climbingSetsSlice = createSlice({
    name: 'climbingSets',
    initialState: [],
    reducers: {
        setClimbingSets: (state, action) => {
            return action.payload;
        },
        updateClimbingSets: (state, action) => {
            return [...state, action.payload]
        },
        updateClimbingSetClimbs: (state, action) => {

        }
    }
});

// this is for dispatch
export const { setClimbingSets, updateClimbingSets, updateClimbingSetClimbs } = climbingSetsSlice.actions;

// this is for configureStore
export default climbingSetsSlice.reducer;
