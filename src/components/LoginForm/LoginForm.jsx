import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isLogin } from '../../redux/auth/auth-selectors';
import { login } from 'redux/auth/auth-operations';
import s from './LoginForm.module.css';

const LoginForm = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const { email, password } = state;
  const isAuth = useSelector(isLogin);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login(state));
    reset();
  };

  const reset = () => {
    setState({ email: '', password: '' });
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.wrapper}>
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
        <button className={s.formBtn}>Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
