import axios from './provider';

export function signIn(username, password) {
  return axios.post('/api/token/', {
    username, password
  });
}