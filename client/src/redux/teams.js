import { createSlice } from '@reduxjs/toolkit';

export const teamsSlice = createSlice({
    name: 'teams',
    initialState: [],
    reducers: {
        setTeams: (state, action) => {
            return action.payload;
        },
        addTeam: (state, action) => {
            state.push(action.payload);
        }
    }
});

// this is for dispatch
export const { setTeams, addTeam } = teamsSlice.actions;

// this is for configureStore
export default teamsSlice.reducer;
