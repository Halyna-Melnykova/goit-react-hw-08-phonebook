import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/users',
});

export const signup = async data => {
  console.log(data);
  const { data: result } = await instance.post('/signup', data);
  return result;
};
// fetch('https://connections-api.herokuapp.com/users/current');
// fetch('https://connections-api.herokuapp.com/users/signup');
