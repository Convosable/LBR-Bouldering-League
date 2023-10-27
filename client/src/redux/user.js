import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: null,

    reducers: {
        setUser: (state, action) => {
            return action.payload;
        },
        updateUserTeam: (state, action) => {
            return { ...state, team_id: action.payload}
        },
        updateUser: (state, action) => {
            return action.payload;
        }
    }
});

// this is for dispatch
export const { setUser, updateUserTeam, updateUser } = userSlice.actions;

// this is for configureStore
export default userSlice.reducer;


// dispatch(addUserTeam(team.id))