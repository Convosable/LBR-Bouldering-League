import { createSlice } from '@reduxjs/toolkit';

export const teamsSlice = createSlice({
    name: 'teams',
    initialState: [],
    reducers: {
        setTeams: (state, action) => {
            return action.payload;
            }
    }
});

// this is for dispatch
export const { setTeams } = teamsSlice.actions;

// this is for configureStore
export default teamsSlice.reducer;
