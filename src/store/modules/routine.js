import RoutineService from "@/services/RoutineService.js";

export const namespaced = true;

export const state = {
  items: [],
};

export const mutations = {
  SET_ROUTINES(state, routines) {
    state.items = routines;
  },
};

export const actions = {
  fetchRoutines({ commit }) {
    RoutineService.getRoutines()
      .then((response) => {
        commit("SET_ROUTINES", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
