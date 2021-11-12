import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:5010`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  async getPublicExercises() {
    return await apiClient.get("/exercises").then((response) => response.data);
  },
  async getUserExercises() {
    return await apiClient.get("/exercises").then((response) => response.data);
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
};
