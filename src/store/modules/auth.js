import authApi from '@/api/auth';

const state = {
  token: ''
};

const getters = {
  getJWT: state => state.token
};

const mutations = {
  setJWT (state, jwtPayload) {
    state.token = jwtPayload.token;
  }
};

const actions = {
  async fetchJWT ({ commit }, { username, password }) {
    const res = await authApi.getToken(username, password);
    commit('setJWT', await res.data);
    localStorage.token = await res.data.token;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
