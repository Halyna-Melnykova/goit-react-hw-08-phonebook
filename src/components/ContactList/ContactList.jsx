import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, removeContact } from 'redux/items/items-operation';
import { getFilteredContacts, getState } from 'redux/items/items-selectors';
import s from './ContactList.module.css';

const ContactList = () => {
  const items = useSelector(getFilteredContacts);
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
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {!loading &&
        items.length > 0 &&
        items.map(({ id, name, phone }) => (
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
