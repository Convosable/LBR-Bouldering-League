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
            const { teamId, points, userPoints, userId } = action.payload;
            return state.map((team) => {
                if (team.id === teamId) {
                    const updatedUsers = team.users.map((user) => {
                        if (user.id === userId) {
                            return { ...user, points: userPoints };
                        }
                        return user;
                    });
                    return { ...team, team_points: points, users: updatedUsers };
                }
                return team;
            });
        }
    }
});

//is this bad to update the teams points and user points for the team state?? i thpught if i updated the user state gloabally it would auto update in team, but its nots unless i reload the page

// this is for dispatch
export const { setTeams, addTeam, addTeamMember, removeTeamMember, updateTeamPoints } = teamsSlice.actions;

// this is for configureStore
export default teamsSlice.reducer;
