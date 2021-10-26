import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getRoutines() {
    return apiClient.get("/routines");
  },
  getRoutine(id) {
    return apiClient.get("/routines/" + id);
  },
  postRoutine(routine) {
    return apiClient.post("/routines", routine);
  },
};
