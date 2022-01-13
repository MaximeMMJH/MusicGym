import RoutineService from "@/services/RoutineService.js";

export const namespaced = true;

export const state = {
  items: [],
  routine: {},
  pageSize: 4,
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
  REMOVE_ROUTINE(state, routine) {
    const index = state.items.indexOf(routine);
    state.items.splice(index, 1);
  },
};

export const actions = {
  fetchUserRoutines({ state, commit }, { userId, pageNumber }) {
    return RoutineService.getUserRoutines(userId, pageNumber, state.pageSize)
      .then((response) => {
        commit("SET_ROUTINES", response.data.items);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  fetchRoutine({ commit, getters }, id) {
    var routine = getters.getRoutineById(id);

    if (routine) {
      commit("SET_ROUTINE", routine);
      return routine;
    } else {
      return RoutineService.getRoutine(id)
        .then((response) => {
          commit("SET_ROUTINE", response.data);
          return response.data;
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
  async countRoutineCompletion({ state }, id) {
    state.items;
    await RoutineService.completeRoutine(id);
  },
  removeRoutine({ commit }, routine) {
    RoutineService.deleteRoutine(routine.id)
      .then(() => {
        commit("REMOVE_ROUTINE", routine);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  updateRoutine({ commit }, { routine, id }) {
    return RoutineService.putRoutine(routine, id)
      .then((response) => {
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
