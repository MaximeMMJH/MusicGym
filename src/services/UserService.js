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
};
