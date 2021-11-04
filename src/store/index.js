import Vue from "vue";
import Vuex from "vuex";
import * as user from "@/store/modules/user.js";
import * as progress from "@/store/modules/progress.js";
import * as exercise from "@/store/modules/exercise.js";
import * as routine from "@/store/modules/routine.js";

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
  },
});
