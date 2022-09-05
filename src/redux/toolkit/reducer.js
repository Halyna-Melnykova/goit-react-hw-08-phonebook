import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact, setFilter } from './actions';

const contactReducer = createReducer([], {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [removeContact]: (state, action) =>
    state.filter(element => element.id !== action.payload),
  [setFilter]: (state, action) => [...state, action.payload],
});

export default contactReducer;
