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
        },
        updateTeamMember: (state, action) => {
            const updatedTeam = action.payload;
            return state.map((team) => {
                if (team.id === updatedTeam.id) {
                  return updatedTeam;
                }
                return team;
              });
        }
    }
});

// this is for dispatch
export const { setTeams, addTeam, updateTeamMember } = teamsSlice.actions;

// this is for configureStore
export default teamsSlice.reducer;
