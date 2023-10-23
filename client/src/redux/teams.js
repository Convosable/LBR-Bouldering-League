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
        addTeamMember: (state, action) => {
            const updatedTeam = action.payload;
            
            return state.map((team) => {
                if (team.id === updatedTeam.id) {
                  return updatedTeam;
                }
                return team;
              });
        },
        removeTeamMember: (state, action) => {
            const { teamId, userId } = action.payload;

            return state.map((team) => {
                if (team.id === teamId) {
                    const updatedMembers = team.members.filter((member) => member.id !== userId);
                    return { ...team, members: updatedMembers };
                }
                return team;
            });
        }
    }
});

// this is for dispatch
export const { setTeams, addTeam, addTeamMember, removeTeamMember } = teamsSlice.actions;

// this is for configureStore
export default teamsSlice.reducer;
