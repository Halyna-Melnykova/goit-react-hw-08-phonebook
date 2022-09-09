import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/items/items-operation';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const [state, setState] = useState({
    name: '',
    phone: '',
  });
  const { name, phone } = state;

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(addContact(state));
    console.log(state);

    reset();
  };

  const reset = () => {
    setState({ name: '', phone: '' });
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
            name="phone"
            value={phone}
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
