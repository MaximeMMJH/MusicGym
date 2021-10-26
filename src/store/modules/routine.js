import RoutineService from "@/services/RoutineService.js";

export const namespaced = true;

export const state = {
  items: [],
  routine: {},
};

export const mutations = {
  SET_ROUTINES(state, routines) {
    state.items = routines;
  },
  SET_ROUTINE(state, routine) {
    state.routine = routine;
  },
  ADD_ROUTINE(state, routine) {
    state.items.push(routine);
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
  fetchRoutine({ commit, getters }, id) {
    var routine = getters.getRoutineById(id);

    if (routine) {
      commit("SET_ROUTINE", routine);
    } else {
      RoutineService.getRoutine(id)
        .then((response) => {
          commit("SET_ROUTINE", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  createRoutine({ commit }, routine) {
    return RoutineService.postRoutine(routine)
      .then((response) => {
        commit("ADD_ROUTINE", response.data);
        commit("SET_ROUTINE", response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export const getters = {
  getRoutineById: (state) => (id) => {
    return state.items.find((routine) => routine.id === id);
  },
};
