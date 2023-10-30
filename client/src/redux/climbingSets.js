import { createSlice } from '@reduxjs/toolkit';

export const climbingSetsSlice = createSlice({
    name: 'climbingSets',
    initialState: {
        data: [],
        loading: true
    },
    reducers: {
        setClimbingSets: (state, action) => {
            return {
                ...state,
                data: action.payload,
                loading: false,
              };
        }
    }
});

// this is for dispatch
export const { setClimbingSets } = climbingSetsSlice.actions;

// this is for configureStore
export default climbingSetsSlice.reducer;
