import AuthService from "@/services/AuthService.js";

export const namespaced = true;

export const state = {
  currentUser: {
    id: "2954b23c-7d1d-49c5-8f9b-27686e73b357",
    username: "MaximeMMJH",
    email: "maxime.heuver@gmail.com",
  },
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
    AuthService.login(user).then((response) => {
      console.log(commit);
      console.log(response);

      AuthService.retrieveToken(response).then((token) => {
        console.log(token);
      });
    });
  },
  register({ commit }, user) {
    return AuthService.register(user).then((response) => {
      console.log(commit);
      console.log(response);

      return response;
    });
  },
};
