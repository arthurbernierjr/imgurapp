import api from '../../api/imgur.js';
import qs from 'qs';
import { router } from '../../main.js';

const state = {
  token: window.localStorage.getItem('imgur_token'),
};

const getters = {
  isLoggedIn: state => !!state.token
};

const mutations = {
  setToken: (state, token)=> {
    state.token = token;
  }
};

const actions = {

  logout: ({commit}) => {
    commit('setToken', false);
    window.localStorage.removeItem('imgur_token');
  },
  finalizeLogin:({commit},hash) => {
    const query = qs.parse(hash.replace('#',''));
    commit('setToken', query.access_token);
    window.localStorage.setItem('imgur_token',query.access_token);
    router.push('/');
  },
  login:() => {
    api.login();
  }
};

export default {
  state,
  actions,
  mutations,
  getters
}
