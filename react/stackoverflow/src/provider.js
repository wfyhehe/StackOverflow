import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000/"
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default axios;
