import ExerciseService from "@/services/ExerciseService.js";

export const namespaced = true;

export const state = {
  publicExercises: [],
  userExercises: [],
  likedExercises: [],
  fetchedExercises: [],
  exercise: {},
  pageSize: 4,
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
  REMOVE_EXERCISE(state, exercise) {
    const index1 = state.userExercises.indexOf(exercise);
    state.userExercises.splice(index1, 1);
    const index2 = state.fetchedExercises.indexOf(exercise);
    state.fetchedExercises.splice(index2, 1);
    const index3 = state.publicExercises.indexOf(exercise);
    state.publicExercises.splice(index3, 1);
    const index4 = state.likedExercises.indexOf(exercise);
    state.likedExercises.splice(index4, 1);
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
    return ExerciseService.postExercise(exercise)
      .then((response) => {
        commit("SET_EXERCISE", response);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  fetchUserExercises({ state, commit }, { userId, pageNumber }) {
    return ExerciseService.getUserExercises(userId, pageNumber, state.pageSize)
      .then((response) => {
        commit("SET_USER_EXERCISES", response.items);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  fetchPublicExercises({ state, commit }, { q, pageNumber, userId }) {
    return ExerciseService.getPublicExercises(
      q,
      pageNumber,
      state.pageSize,
      userId
    )
      .then((response) => {
        commit("SET_PUBLIC_EXERCISES", response.items);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  fetchLikedExercises({ state, commit }, { pageNumber, userId }) {
    return ExerciseService.getLikedExercises(userId, pageNumber, state.pageSize)
      .then((response) => {
        commit("SET_LIKED_EXERCISES", response.items);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  removeExercise({ commit }, exercise) {
    ExerciseService.deleteExercise(exercise.id)
      .then(() => {
        commit("REMOVE_EXERCISE", exercise);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  likeExercise({ getters }, { exerciseId, userId }) {
    ExerciseService.likeExercise(exerciseId, userId)
      .then(() => {
        var exercise = getters.getExerciseById(exerciseId);
        exercise.isLiked = true;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  unlikeExercise({ getters }, { exerciseId, userId }) {
    state.likedExercises;
    ExerciseService.unlikeExercise(exerciseId, userId)
      .then(() => {
        var exercise = getters.getExerciseById(exerciseId);
        exercise.isLiked = false;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  updateExercise({ commit }, { id, exercise }) {
    return ExerciseService.putExercise(id, exercise)
      .then((response) => {
        commit("SET_EXERCISE", response);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export const getters = {
  getExerciseById: (state) => (id) => {
    // var arrays = [
    //   state.fetchedExercises,
    //   state.likedExercises,
    //   state.publicExercises,
    //   state.userExercises,
    // ];

    return state.publicExercises.find((exercise) => exercise.id === id);
  },
};
