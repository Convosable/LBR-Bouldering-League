import { createSlice } from '@reduxjs/toolkit';

export const errorSlice = createSlice({
    name: 'error',
    initialState: {
        loginError: null,
        signupError: null
    },
    reducers: {
        setLoginError: (state, action) => {
            state.loginError = action.payload
          },
          setSignupError: (state, action) => {
            state.signupError = action.payload;
          }
    }
});

// this is for dispatch
export const {setLoginError, setSignupError } = errorSlice.actions;

// this is for configureStore
export default errorSlice.reducer;
