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
                    const updatedMembers = team.users.filter((user) => user.id !== userId);
                    return { ...team, users: updatedMembers };
                }
                return team;
            });
        },
        updateTeamPoints: (state, action) => {
            const { teamId, points } = action.payload
            return state.map((team) => {
                if (team.id === teamId) {
                    return {...team, team_points: points}
                }
                return team;
            });
        }
    }
});

// this is for dispatch
export const { setTeams, addTeam, addTeamMember, removeTeamMember, updateTeamPoints } = teamsSlice.actions;

// this is for configureStore
export default teamsSlice.reducer;
