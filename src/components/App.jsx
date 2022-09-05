import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

// import { addContact, removeContact, setFilter } from '../redux/toolkit/actions';

import { addContact, removeContact, setFilter } from '../redux/actions';
import { getFilteredContacts, getFilter } from '../redux/selectors';

const App = () => {
  // const contacts = useSelector(store => store.contacts);
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onAddContact = data => {
    dispatch(addContact(data));
  };

  const onRemoveContact = id => {
    dispatch(removeContact(id));
  };

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <>
      <ContactForm onSubmit={onAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilter} />
      <ContactList contacts={contacts} onDelete={onRemoveContact} />
    </>
  );
};

export default App;
