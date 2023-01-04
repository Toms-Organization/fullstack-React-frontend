import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

const initialState = { name: '', age: 0, email: '' };

export const userSlice = createSlice({
  name: 'user',
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

export default userSlice.reducer;
