import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const signup = async data => {
  const { data: result } = await instance.post('/users/signup', data);
  instance.defaults.headers.authorization = `Bearer ${result.token}`;
  return result;
};

export const login = async data => {
  const { data: result } = await instance.post('/users/login', data);
  instance.defaults.headers.authorization = `Bearer ${result.token}`;
  return result;
};
