import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: null,

    reducers: {
        setUser: (state, action) => {
            return action.payload;
        },
        addUserTeam: (state, action) => {
            return { ...state, team_id: action.payload}
        },
        removeUserTeam: (state, action) => {
            return { ...state, team_id: null }
        },
        updateUser: (state, action) => {
            return action.payload;
        }
    }
});

// this is for dispatch
export const { setUser, addUserTeam, removeUserTeam, updateUser } = userSlice.actions;

// this is for configureStore
export default userSlice.reducer;


// dispatch(addUserTeam(team.id))