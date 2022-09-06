import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact } from './items-actions';

const isDublicate = ({ name }, contacts) => {
  const normalizedTitle = name.toLowerCase();

  const result = contacts.find(item => {
    return normalizedTitle === item.name.toLowerCase();
  });
  return Boolean(result);
};

const contactsReducer = createReducer([], {
  [addContact.type]: (store, { payload }) => {
    if (isDublicate(payload, store)) {
      alert(`${payload.name} is already in contacts`);
      return;
    }
    store.push(payload);
  },
  [removeContact]: (store, { payload }) =>
    store.filter(({ id }) => id !== payload),
});

export default contactsReducer;
