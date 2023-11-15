import { createSlice } from '@reduxjs/toolkit';

export const errorSlice = createSlice({
    name: 'error',
    initialState: {
        loginError: null,
        signupError: null,
        newTeamError: null,
        profileUpdateError: null,
        climbsFormError: null,
        newClimbingSetError: null,
        newClimbError: null
    },
    reducers: {
        setLoginError: (state, action) => {
            state.loginError = action.payload
        },
        setSignupError: (state, action) => {
            state.signupError = action.payload;
        },
        setNewTeamError: (state, action) => {
            state.newTeamError = action.payload
        },
        setProfileUpdateError: (state, action) => {
            state.profileUpdateError = action.payload
        },
        setClimbsFormError: (state, action) => {
            state.climbsFormError = action.payload
        },
        setNewClimbingSetError: (state, action) => {
            state.newClimbingSetError = action.payload
        }
    }
});

// this is for dispatch
export const {setLoginError, setSignupError, setNewTeamError, setProfileUpdateError, setClimbsFormError, setNewClimbingSetError } = errorSlice.actions;

// this is for configureStore
export default errorSlice.reducer;
