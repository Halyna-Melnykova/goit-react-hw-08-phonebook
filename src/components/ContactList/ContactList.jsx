import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, removeContact } from 'redux/items/items-operation';
import { getFilteredContacts, getState } from 'redux/items/items-selectors';

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
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
    <ListGroup variant="flush">
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {!loading &&
        items.length > 0 &&
        items.map(({ id, name, number }) => (
          <ListGroup.Item key={id} variant="primary" className={s.item}>
            <p>
              {name}: {number}
            </p>
            <Button
              variant="outline-primary"
              type="submit"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </Button>
          </ListGroup.Item>
          // <li key={id} className={s.contactItem}>
          //   <p>
          //     {name}: {number}
          //   </p>
          //   <button className={s.button} onClick={() => onDeleteContact(id)}>
          //     Delete
          //   </button>
          // </li>
        ))}
    </ListGroup>
  );
};

export default ContactList;
