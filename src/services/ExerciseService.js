import axios from "axios";

const apiClient = axios.create({
  baseUrl: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getExercises(sectionSize, sectionNumber) {
    return apiClient.get(
      "/exercises?sectionSize=" +
        sectionSize +
        "&sectionNumber=" +
        sectionNumber
    );
  },
  getExercise(id) {
    return apiClient.get("/exercises/" + id);
  },
  postExercise(exercise) {
    return apiClient.post("/exercises", exercise);
  },
  deleteExercise(id) {
    return apiClient.delete("/exercises/" + id);
  },
};
