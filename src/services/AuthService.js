import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://20.76.64.171`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.token,
  },
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
};
