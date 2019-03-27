import axios from './config';

export default {
  getToken (username, password) {
    return axios.post('/login_check', { username, password });
  },
  checkToken (username, password) {
    return axios.get('/auth');
  }
};
