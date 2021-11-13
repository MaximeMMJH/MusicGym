import ExerciseService from "@/services/ExerciseService.js";

export const namespaced = true;

export const state = {
  publicExercises: [],
  userExercises: [],
  likedExercises: [],
  fetchedExercises: [],
  exercise: {},
  sectionSize: 10,
};

export const mutations = {
  SET_USER_EXERCISES(state, exercises) {
    state.userExercises = exercises;
  },
  SET_PUBLIC_EXERCISES(state, exercises) {
    state.publicExercises = exercises;
  },
  SET_LIKED_EXERCISES(state, exercises) {
    state.likedExercises = exercises;
  },
  SET_EXERCISE(state, exercise) {
    state.exercise = exercise;
  },
  ADD_FETCHED_EXERCISE(state, exercise) {
    state.fetchedExercises.push(exercise);
  },
};

export const actions = {
  fetchExercise({ getters, commit }, id) {
    var exercise = getters.getExerciseById(id);

    if (exercise) {
      commit("SET_EXERCISE", exercise);
      return exercise;
    } else {
      return ExerciseService.getExercise(id)
        .then((response) => {
          commit("SET_EXERCISE", response);
          commit("ADD_FETCHED_EXERCISE", response);
          return response;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  createExercise({ commit }, exercise) {
    console.log(exercise);
    return ExerciseService.postExercise(exercise)
      .then((response) => {
        commit("SET_EXERCISE", response);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  fetchUserExercises({ state, commit }, { userId, section }) {
    ExerciseService.getUserExercises(userId, section, state.sectionSize)
      .then((response) => {
        commit("SET_USER_EXERCISES", response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  fetchPublicExercises({ state, commit }, { q, section }) {
    ExerciseService.getPublicExercises(q, section, state.sectionSize)
      .then((response) => {
        commit("SET_PUBLIC_EXERCISES", response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  fetchLikedExercises({ state, commit }, { section, userId }) {
    ExerciseService.getLikedExercises(userId, section, state.sectionSize)
      .then((response) => {
        commit("SET_LIKED_EXERCISES", response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export const getters = {
  getExerciseById: (state) => (id) => {
    return state.fetchedExercises.find((exercise) => exercise.id === id);
  },
};
