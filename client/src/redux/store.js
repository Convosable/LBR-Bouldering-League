import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import errorReducer from './error';

export default configureStore({
  reducer: {
    user: userReducer,
    error: errorReducer
  },
});