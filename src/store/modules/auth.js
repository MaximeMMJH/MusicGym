import AuthService from "@/services/AuthService.js";
import UserService from "@/services/UserService.js";

export const namespaced = true;

export const state = {
  currentUser: {},
  token: "",
  expiresIn: "",
};

export const mutations = {
  SET_CURRENT_USER(state, user) {
    state.currentUser = user;
  },
  SET_JWT_TOKEN(state, token) {
    state.token = token;
  },
  SET_EXPIRATION(state, expiresIn) {
    state.expiresIn = expiresIn;
  },
};

export const actions = {
  login({ commit }, user) {
    return AuthService.retrieveToken(user).then((response) => {
      commit("SET_JWT_TOKEN", response.access_token);
      commit("SET_EXPIRATION", response.expires_in);

      return AuthService.retrieveUserInfo().then((response) => {
        console.log(response);

        return UserService.getAuthUser(response.sub).then((response) => {
          console.log(response);

          commit("SET_CURRENT_USER", response);

          return response;
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
  isUserAuthenticated: (state) => {
    return state.token !== "";
  },
};
