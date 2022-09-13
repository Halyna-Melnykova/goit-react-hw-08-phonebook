import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLogin } from '../../redux/auth/auth-selectors';
import { signup } from 'redux/auth/auth-operations';
import s from './RegisterForm.module.css';

const RegisterForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = state;
  const isAuth = useSelector(isLogin);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(signup(state));
    reset();
  };

  const reset = () => {
    setState({ name: '', email: '', password: '' });
  };

  if (isAuth) {
    return <Navigate to="/contacts" />;
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.wrapper}>
        <label className={s.label}>
          Name:
          <input
            className={s.input}
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter name"
            required
          ></input>
        </label>
        <label className={s.label}>
          Email:
          <input
            className={s.input}
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter email"
            type="email"
            required
          ></input>
        </label>
        <label className={s.label}>
          Password:
          <input
            className={s.input}
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter password"
            type="password"
            required
          ></input>
        </label>
        <button className={s.formBtn}>Register</button>
      </div>
    </form>
  );
};

export default RegisterForm;
