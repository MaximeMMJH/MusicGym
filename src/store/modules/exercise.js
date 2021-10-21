import ExerciseService from "@/services/ExerciseService.js";

export const namespaced = true;

export const state = {
  exercises: [],
  exercise: {},
  sectionSize: 10,
};

export const mutations = {
  SET_EXERCISES(state, exercises) {
    state.items = exercises;
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
  getExercises({ state, commit }, sectionNumber) {
    return ExerciseService.getExercises(
      state.sectionSize,
      sectionNumber
    ).then(response => {
      commit("SET_EXERCISES", response)
    }).catch(error => {
      console.log(error)
    });
  },
};
