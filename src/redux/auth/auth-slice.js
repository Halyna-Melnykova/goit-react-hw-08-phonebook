import { createSlice } from '@reduxjs/toolkit';
import { signup, login, logout, getCurrent } from './auth-operations';

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
  extraReducers: {
    [signup.pending]: store => ({ ...store, loading: true, error: null }),
    [signup.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
    },
    [signup.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
    [login.pending]: store => ({ ...store, loading: true, error: null }),
    [login.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
    },
    [login.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
    [logout.pending]: store => ({ ...store, loading: true, error: null }),
    [logout.fulfilled]: () => ({ ...initialState }),
    [logout.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
    [getCurrent.pending]: store => ({ ...store, loading: true, error: null }),
    [getCurrent.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload;
      store.token = payload.token;
      store.isLogin = true;
    },
    [getCurrent.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
  },
});

export default authSlise.reducer;
