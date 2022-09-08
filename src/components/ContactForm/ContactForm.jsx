import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/items/items-slice';
import s from './ContactForm.module.css';

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
    <form className={s.form} onSubmit={handleSubmit}>
      <h1>Phonebook</h1>
      <div className={s.wrapper}>
        <label className={s.label}>
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={s.label}>
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={s.formBtn} type="submit">
          Add contact
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
