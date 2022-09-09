import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  removeContact,
} from 'redux/contacts/items/items-operation';
import {
  getFilteredContacts,
  getState,
} from 'redux/contacts/items/items-selectors';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const { loading, error } = useSelector(getState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(removeContact(id));
  };
  return (
    <ul className={s.contactList}>
      {error && <p>Error</p>}
      {!loading &&
        contacts.length > 0 &&
        contacts.map(({ id, name, phone }) => (
          <li key={id} className={s.contactItem}>
            <p>
              {name}: {phone}
            </p>
            <button className={s.button} onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
