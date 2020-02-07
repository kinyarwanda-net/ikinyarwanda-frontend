import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import search from './modules/search';

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {},
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    search
  }
});
