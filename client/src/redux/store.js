import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import errorReducer from './error';
import teamsReducer from './teams';
import climbingSetsReducer from './climbingSets';

export default configureStore({
  reducer: {
    user: userReducer,
    error: errorReducer,
    teams: teamsReducer,
    climbingSets: climbingSetsReducer
  },
});