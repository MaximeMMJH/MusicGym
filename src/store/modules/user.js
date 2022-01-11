import UserService from "@/services/UserService.js";

export const namespaced = true;

export const state = {
  user: {},
};

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
};

export const actions = {
  fetchUser({ commit }, userId) {
    UserService.getUser(userId).then((response) => {
      console.log(response);
      commit("SET_USER", response);
    });
  },
};
