import axios from "axios";
import store from "../store";

const apiClient = axios.create({
  baseURL: `http://20.76.64.171`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  config.headers = { Authorization: "Bearer " + store.state.auth.token };
  return config;
});

export default {
  async getPublicExercises(q, pageNumber, pageSize, userId) {
    return await apiClient
      .get(
        "/exercises?q=" +
          q +
          "&pageNumber=" +
          pageNumber +
          "&pageSize=" +
          pageSize +
          "&userId=" +
          userId
      )
      .then((response) => response.data);
  },
  async getUserExercises(id, pageNumber, pageSize) {
    return await apiClient
      .get(
        "/exercises/users/" +
          id +
          "?pageNumber=" +
          pageNumber +
          "&pageSize=" +
          pageSize
      )
      .then((response) => response.data);
  },
  async getLikedExercises(id, pageNumber, pageSize) {
    return await apiClient
      .get(
        "/exercises/liked/users/" +
          id +
          "?pageNumber=" +
          pageNumber +
          "&pageSize=" +
          pageSize
      )
      .then((response) => response.data);
  },
  async postExercise(exercise) {
    return await apiClient
      .post("/exercises", exercise)
      .then((response) => response.data);
  },
  async getExercise(id) {
    return await apiClient
      .get("/exercises/" + id)
      .then((response) => response.data);
  },
  async deleteExercise(id) {
    return await apiClient.delete("/exercises/" + id);
  },
  async likeExercise(exerciseId, userId) {
    return await apiClient.post(
      "/exercises/" + exerciseId + "/users/" + userId
    );
  },
  async unlikeExercise(exerciseId, userId) {
    return await apiClient.delete(
      "/exercises/" + exerciseId + "/users/" + userId
    );
  },
  async putExercise(id, exercise) {
    return await apiClient
      .put("/exercises/" + id, exercise)
      .then((response) => response.data);
  },
};
