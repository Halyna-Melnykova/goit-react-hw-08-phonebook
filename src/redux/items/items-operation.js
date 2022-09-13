import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api/contacts';

const isDublicate = ({ name }, contacts) => {
  const normalizedTitle = name.toLowerCase();
  const result = contacts.find(item => {
    return normalizedTitle === item.name.toLowerCase();
  });
  return Boolean(result);
};

export const fetchContacts = createAsyncThunk(
  'сontacts/fetch',
  async (_, thunkAPI) => {
    try {
      const data = await api.getContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'сontacts/add',
  async (data, thunkAPI) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch (error) {
      const { data, status } = error.responce;
      return thunkAPI.rejectWithValue({ data, status });
    }
  },
  {
    condition: (data, { getState }) => {
      const { items } = getState();
      console.log(getState());

      if (isDublicate(data, items.items)) {
        alert(`${data.name} is already in contacts`);
        return false;
      }
    },
  }
);

export const removeContact = createAsyncThunk(
  'contacts/remove',
  async (id, { rejectWithValue }) => {
    try {
      await api.removeContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const fetchContacts = () => {
//   const func = async dispatch => {
//     try {
//       dispatch(actions.fetchContactsLoading());
//       const data = await api.getContacts();
//       dispatch(actions.fetchContactsSuccess(data));
//     } catch (error) {
//       const { message, response } = error;
//       const errorData = {
//         message,
//         status: response.status,
//       };
//       dispatch(actions.fetchContactsError(errorData));
//     }
//   };
//   return func;
// };
