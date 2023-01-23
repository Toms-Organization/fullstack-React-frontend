import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const initialState = { id: '', userName: '', email: '', token: '' };

export const loginUserSlice = createSlice({
  name: 'login',
  initialState: { value: initialState },
  reducers: {
    loginUser: (state, action) => {
      state.value = action.payload;
    },
    logoutUser: (state, action) => {
      state.value = initialState;
    },
  },
});

export const { loginUser, logoutUser } = loginUserSlice.actions;

export default loginUserSlice.reducer;
