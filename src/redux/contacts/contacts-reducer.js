import { combineReducers } from '@reduxjs/toolkit';

import items from './items/items-reducer';
import filter from './filter/filter-reducer';

const contactsReducer = combineReducers({
  items,
  filter,
});

export default contactsReducer;
