import axios from "axios";
import store from "../store";

const apiClient = axios.create({
  baseURL: `http://20.67.62.69`,
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
  async login(user) {
    console.log(user);
    return await apiClient
      .post("/auth/login", user)
      .then((response) => response.data);
  },
  async register(user) {
    return await apiClient
      .post("/auth/register", user)
      .then((response) => response.data);
  },
  async retrieveToken(user) {
    const params = new URLSearchParams();
    params.append("username", user.username);
    params.append("password", user.password);
    params.append("client_secret", "MGPASS");
    params.append("client_id", "js.client");
    params.append("grant_type", "password");

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    return await apiClient
      .post("/connect/token", params, config)
      .then((response) => response.data);
  },
  async retrieveUserInfo() {
    return await apiClient
      .get("/connect/userinfo")
      .then((response) => response.data);
  },
};
