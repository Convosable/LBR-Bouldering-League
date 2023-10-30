import { createSlice } from '@reduxjs/toolkit';

export const teamsSlice = createSlice({
    name: 'teams',
    initialState: {
        data:[],
        isLoading: true
    },
    reducers: {
        setTeams: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        addTeam: (state, action) => {
            return [...state, action.payload];
        },
        deleteTeam: (state, action) => {
            const teamToDelete = state.find((team) => team.id === action.payload);
            if (teamToDelete && teamToDelete.users.length === 1) {
                return state.filter((team) => team.id !== action.payload);
            }
            return state;
        },
        addTeamMember: (state, action) => {
            const user = action.payload;

            return state.map((team) => {
                if (team.id === user.team.id) {
                  return {...team, users: [...team.users, user]};
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
//but i am holding state for teams separtate than for users 


// this is for dispatch
export const { setTeams, addTeam, deleteTeam, addTeamMember, removeTeamMember, updateTeamPoints } = teamsSlice.actions;

// this is for configureStore
export default teamsSlice.reducer;
