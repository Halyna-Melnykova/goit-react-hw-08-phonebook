import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from 'react';
import {
  useDispatch,
  //  useSelector
} from 'react-redux';
import { login } from 'redux/auth/auth-operations';
// не потрібно бо є приватні роути
// import { Navigate } from 'react-router-dom';
// import { isLogin } from '../../redux/auth/auth-selectors';

// import s from './LoginForm.module.css';

const LoginForm = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const { email, password } = state;
  // const isAuth = useSelector(isLogin);
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

  // if (isAuth) {
  //   return <Navigate to="/contacts" />;
  // }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          value={email}
          onChange={handleChange}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          value={password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
          aria-describedby="passwordHelpBlock"
        />
        <Form.Text id="passwordHelpBlock" muted>
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces, special characters, or emoji.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
