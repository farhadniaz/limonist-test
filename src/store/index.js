import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
  },
  state: {},
  mutations: {},
});

export default store;
