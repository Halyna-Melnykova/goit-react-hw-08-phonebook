import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const isDublicate = ({ name }, contacts) => {
  const normalizedTitle = name.toLowerCase();
  const result = contacts.find(item => {
    return normalizedTitle === item.name.toLowerCase();
  });
  return Boolean(result);
};

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (store, { payload }) => {
        if (isDublicate(payload, store)) {
          alert(`${payload.name} is already in contacts`);
          return;
        }
        store.push(payload);
      },
      prepare: data => {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
    },
    removeContact: (store, { payload }) =>
      store.filter(({ id }) => id !== payload),
  },
});

export const { addContact, removeContact } = itemsSlice.actions;

export default itemsSlice.reducer;
