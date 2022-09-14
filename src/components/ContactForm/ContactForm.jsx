import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/items/items-operation';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import s from './ContactForm.module.css';

const ContactForm = () => {
  const [state, setState] = useState({
    name: '',
    number: '',
  });
  const { name, number } = state;

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addContact(state));
    reset();
  };

  const reset = () => {
    setState({ name: '', number: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          value={name}
          onChange={handleChange}
          type="text"
          placeholder="Enter name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="number"
          value={number}
          onChange={handleChange}
          type="password"
          placeholder="Number"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add contact
      </Button>
    </Form>
  );
};

export default ContactForm;
