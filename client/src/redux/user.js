import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: null,

    reducers: {
        setUser: (state, action) => {
            return action.payload;
        },
        addUserTeam: (state, action) => {
            state.team_id = action.payload;
        },
        removeUserTeam: (state, action) => {
            state.team_id = null;
        }
    }
});

// this is for dispatch
export const { setUser, addUserTeam, removeUserTeam } = userSlice.actions;

// this is for configureStore
export default userSlice.reducer;
