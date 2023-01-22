import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const initialState = { id: '', userName: '', email: '', token: '' };

export const loginUserSlice = createSlice({
  name: 'logedinuser',
  initialState: { value: initialState },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = initialState;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default loginUserSlice.reducer;
