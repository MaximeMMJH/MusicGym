import AuthService from "@/services/AuthService.js";
import UserService from "@/services/UserService.js";

export const namespaced = true;

export const state = {
  currentUser: {},
  token: "",
};

export const mutations = {
  SET_CURRENT_USER(state, user) {
    state.currentUser = user;
  },
  SET_JWT_TOKEN(state, token) {
    state.token = token;
  },
};

export const actions = {
  login({ commit }, user) {
    AuthService.retrieveToken(user).then((response) => {
      commit("SET_JWT_TOKEN", response.access_token);
      console.log(response.access_token);

      AuthService.retrieveUserInfo().then((response) => {
        console.log(response);

        UserService.getAuthUser(response.sub).then((response) => {
          console.log(response);

          commit("SET_CURRENT_USER", response);
        });
      });
    });
  },
  register({ commit }, user) {
    return AuthService.register(user).then((response) => {
      console.log(commit);

      return response;
    });
  },
};

export const getters = {
    getCurrentUserId: (state) => {
        return state.currentUser.id;
    },
};
