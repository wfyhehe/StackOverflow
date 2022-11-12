import axios from './provider';

export function signIn(email_or_username, password) {
  return axios.post('/api/token/', {
    email_or_username, password
  });
}

export function signOut(username, password) {
  return axios.delete('/api/token/', {});
}

export function listQuestion() {
  return axios.get('/api/question/');
}

export function postQuestion(title, content) {
  return axios.post('/api/question/', {title, content});
}