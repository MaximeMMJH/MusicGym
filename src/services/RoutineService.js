import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:5015`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getUserRoutines(id) {
    return apiClient.get("/routines/users/" + id);
  },
  getRoutine(id) {
    return apiClient.get("/routines/" + id);
  },
  postRoutine(routine) {
    return apiClient.post("/routines", routine);
  },
  completeRoutine(id) {
    return apiClient.patch("/routines/" + id);
  },
  deleteRoutine(id) {
    return apiClient.delete("/routines/" + id);
  },
};
