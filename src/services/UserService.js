import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://20.76.64.171`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization:
      "Bearer " +
      "eyJhbGciOiJSUzI1NiIsImtpZCI6IkUwOEJFQTFCODgyRjJBQTk2M0FBMUQ3QTQwREJBQUI1IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NDEyOTQ0NTYsImV4cCI6MTY0MTI5ODA1NiwiaXNzIjoiaHR0cDovL2F1dGhlbnRpY2F0aW9uLXNlcnZpY2UiLCJhdWQiOiJhcGkiLCJjbGllbnRfaWQiOiJqcy5jbGllbnQiLCJzdWIiOiJkZWNiNGU0Yi05OGMyLTQzYTItODFlZS03M2M5MTJhM2E4OWQiLCJhdXRoX3RpbWUiOjE2NDEyOTQ0NTYsImlkcCI6ImxvY2FsIiwicm9sZSI6InVzZXIiLCJqdGkiOiIzRjIzMjc5QjJGQjEwMUEwMTA3MkJFQURERjIyMjdBQyIsImlhdCI6MTY0MTI5NDQ1Niwic2NvcGUiOlsiYXBpLnJlYWQiLCJhcGkud3JpdGUiXSwiYW1yIjpbInB3ZCJdfQ.Q9Oj9bTeWzcA7JOfom6Pi8Q81heIvGceZcjkCy0Hus9AtPAJBb6ua0ErBHPQrkgGXaw1veVFBdQdpMGQSeRT7l7d5VMT6XRYcrBXi0cc3mWied0QGzZ6fAjiRGvUkWk7f0taUgQB1oDYtBYVL5He3ZCEDZry_-O6a528eTy0l0I5b27vXpxql0LAJ-hwSVmBqbd5VMdb9vD6iPo6fwAsYgfbnH8j4HYky-9UNpXCca_Lz7sytx1wILhxHuy1l7Zhdo3IBG3opgcw-hG3WvAFtxPB2nJg5dyAyigC3npMMSdPcncbTLuRCU0I2zUsYT-IaiMXwcyqp3O-c7htPRmVKw",
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
