import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  loading: false,
  error: null,
};

const authSlise = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {},
});

export default authSlise.reducer;
