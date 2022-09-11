import { useState } from 'react';

const RegisterForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = state;

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setState(state);
    reset();
  };

  const reset = () => {
    setState({ name: '', email: '', password: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter name"
            required
          ></input>
        </label>
        <label>
          Email:
          <input
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter email"
            type="email"
            required
          ></input>
        </label>
        <label>
          Password:
          <input
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter password"
            type="password"
            required
          ></input>
        </label>
      </div>
      <button>Register</button>
    </form>
  );
};

export default RegisterForm;
