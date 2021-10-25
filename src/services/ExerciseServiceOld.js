import axios from "axios";

const apiClient = axios.create({
  baseUrl: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getUserExercises(userId, section, sectionSize) {
    // return apiClient.get(
    //   "/exercises/users/" +
    //     userId +
    //     "?sectionSize=" +
    //     sectionSize +
    //     "&section=" +
    //     section
    // );
    console.log(section, sectionSize, userId);
    return apiClient.get("/exercises/");
  },
  getPublicExercises(section, sectionSize) {
    // return apiClient.get(
    //   "/exercises?sectionSize=" + sectionSize + "&section=" + section
    // );
    console.log(section, sectionSize);
    return apiClient.get("/exercises/");
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