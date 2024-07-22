// store.js
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
    // Add other reducers here if you have more slices
  },
});
