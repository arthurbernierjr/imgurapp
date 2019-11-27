import api from '../../api/imgur.js';
import { router } from '../../main.js';

const state = {
  images: [],
  hasImages: false,
}
const getters = {
  allImages: state => state.images,
  imagePresent: state => state.hasImages,
}
const mutations = {
  setImages: (state, images) => {
    state.images = images;
  },
  uploadedImages: (state) => {
    state.hasImages = !state.hasImages;
  }
}
const actions = {
  async fetchImages({rootState,commit}) {
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    commit('setImages',response.data.data)
  },
  async uploadImages({rootState, commit}, images) {
    // Get the access_token
    const { token } = rootState.auth;
    commit('uploadedImages');
    await api.uploadImages(images, token);
    //Redirect to router
    router.push('/');
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
