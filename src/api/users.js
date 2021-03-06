import axios from './config';

const RESOURCE_NAME = '/users';

export default {
  getAll () {
    return axios.get(RESOURCE_NAME);
  },

  get (id) {
    return axios.get(`${RESOURCE_NAME}/${id}`);
  },

  create (data) {
    return axios.post(RESOURCE_NAME, data);
  },

  update (id, data) {
    return axios.put(`${RESOURCE_NAME}/${id}`, data);
  },

  delete (id) {
    return axios.delete(`${RESOURCE_NAME}/${id}`);
  }
};
