import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:8085`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  async login(user) {
    console.log(user, apiClient);
    // return await apiClient
    //   .post("/auth/login", user)
    //   .then((response) => response.data);
  },
  async register(user) {
    console.log(user, apiClient);
    // return await apiClient
    //   .post("/auth/register", user)
    //   .then((response) => response.data);
  },
};
