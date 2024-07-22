// usersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    selectedUser: null,
  },
  reducers: {
    selectUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    removeUser: (state, action) => {
      state.list = state.list.filter(user => user.id !== action.payload);
    },
  },
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { selectUser, removeUser } = usersSlice.actions;

export default usersSlice.reducer;
