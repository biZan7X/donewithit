import client from './client';

const login = (email, password) => client.post('/auth', {email, password});
const signup = (name, email, password) =>
  client.post('/users', {name, email, password});

export default {
  login,
  signup,
};
