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
  async create(user) {
    try {
      let response = await apiClient.post("/users", user);

      return response;
    } catch (error) {
      console.error(error);
    }
  },

  async getById(userId) {
    try {
      let response = await this.axios.get("/users", {
        params: { id: userId },
      });

      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  async update(item) {
    try {
      let response = await this.axios.put("/users", item);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  async delete(userId) {
    try {
      await this.axios.delete("/delete", {
        params: { id: userId },
      });
    } catch (error) {
      console.error(error);
    }
  },

  async getAuthUser(subId) {
    return await apiClient
      .get("/users/auth/" + subId)
      .then((response) => response.data);
  },

  async getUser(userId) {
    return await apiClient
      .get("/users/" + userId)
      .then((response) => response.data);
  },
};
