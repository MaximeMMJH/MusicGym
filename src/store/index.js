import Vue from "vue";
import Vuex from "vuex";
import * as user from "@/store/modules/user.js";
import * as progress from "@/store/modules/progress.js";
import * as exercise from "@/store/modules/exercise.js";
import * as routine from "@/store/modules/routine.js";
import * as auth from "@/store/modules/auth.js";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    progress,
    exercise,
    routine,
    auth,
  },
  plugins: [
    createPersistedState({
      // window.sessionStorage zodat de state wordt verwijderd op window close.
      storage: window.sessionStorage,
    }),
  ],
});
