import { configureStore } from '@reduxjs/toolkit';
import auth from './auth/auth-slice';
import items from './items/items-slice';
import filter from './filter/filter-slice';

const store = configureStore({
  reducer: {
    auth,
    items,
    filter,
  },
});

export default store;
