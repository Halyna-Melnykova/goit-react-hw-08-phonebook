import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts/items/items-slice';
import { getFilteredContacts } from 'redux/contacts/items/items-selectors';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(removeContact(id));
  };
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.contactItem}>
          <p>
            {name}: {number}
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
