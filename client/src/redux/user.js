import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: null,

    reducers: {
        updateUser: (state, action) => {
            return action.payload;
        }
    }
});

// this is for dispatch
export const { updateUser } = userSlice.actions;

// this is for configureStore
export default userSlice.reducer;


// dispatch(addUserTeam(team.id))