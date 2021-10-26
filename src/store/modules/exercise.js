import ExerciseService from "@/services/ExerciseService.js";

export const namespaced = true;

export const state = {
  publicExercises: [],
  userExercises: [],
  likedExercises: [],
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
  ADD_EXERCISE(state, exercise) {
    state.items.push(exercise);
    //state.items.items.push() ??
  },
};

export const actions = {
  createExercise({ commit }, exercise) {
    return ExerciseService.postExercise(exercise)
      .then(() => {
        commit("ADD_EXERCISE", exercise);
        commit("SET_EXERCISE", exercise);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  fetchUserExercises({ state, commit }, { userId, section }) {
    ExerciseService.getUserExercises(userId, section, state.sectionSize)
      .then((response) => {
        commit("SET_USER_EXERCISES", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  fetchPublicExercises({ state, commit }, { q, section }) {
    ExerciseService.getPublicExercises(q, section, state.sectionSize)
      .then((response) => {
        commit("SET_PUBLIC_EXERCISES", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  fetchLikedExercises({ state, commit }, { section, userId }) {
    ExerciseService.getLikedExercises(userId, section, state.sectionSize)
      .then((response) => {
        commit("SET_LIKED_EXERCISES", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
