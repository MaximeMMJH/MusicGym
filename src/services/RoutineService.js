import axios from "axios";
import store from "../store";

const apiClient = axios.create({
  baseURL: `http://20.67.62.69`,
  withCredentials: false,
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
  getUserRoutines(id, pageNumber, pageSize) {
    return apiClient.get(
      "/routines/users/" +
        id +
        "?pageNumber=" +
        pageNumber +
        "&pageSize=" +
        pageSize
    );
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
  putRoutine(routine, id) {
    return apiClient.put("/routines/" + id, routine);
  },
};
