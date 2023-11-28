import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: null,

    reducers: {
        updateUser: (state, action) => {
            return action.payload;
        },
        addUserTeam: (state, action) => {
            return { ...state, team: action.payload };
        }
    }
});

// this is for dispatch
export const { updateUser, addUserTeam } = userSlice.actions;

// this is for configureStore
export default userSlice.reducer;
