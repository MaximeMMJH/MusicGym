import axios from "axios";

const apiClient = axios.create({
  baseUrl: `http://localhost:5010`,
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
    return apiClient.get("/exercises");
  },
  getPublicExercises(q, section, sectionSize) {
    // return apiClient.get(
    //   "/exercises?sectionSize=" +
    //     sectionSize +
    //     "&section=" +
    //     section +
    //     "&q=" +
    //     q
    // );
    console.log(q, section, sectionSize);
    return apiClient.get("/exercises");
  },
  getLikedExercises(section, sectionSize) {
    console.log(section, sectionSize);
    return apiClient.get("/exercises");
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
