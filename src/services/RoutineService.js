import axios from "axios";

localStorage.token =
  "eyJhbGciOiJSUzI1NiIsImtpZCI6IkU2NEQzQTgwOEI2Q0NCQkVGODY4NEVERjNFMEM1NUEyIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NDEyMjA5OTIsImV4cCI6MTY0MTIyNDU5MiwiaXNzIjoiaHR0cDovLzIwLjUwLjE2MC41NCIsImF1ZCI6ImFwaSIsImNsaWVudF9pZCI6ImpzLmNsaWVudCIsInN1YiI6ImRlY2I0ZTRiLTk4YzItNDNhMi04MWVlLTczYzkxMmEzYTg5ZCIsImF1dGhfdGltZSI6MTY0MTIyMDk5MiwiaWRwIjoibG9jYWwiLCJyb2xlIjoidXNlciIsImp0aSI6IjQ2MDFBRTVGOEZEMkU4QUM0MUQyQUNFRDcxQTUxNjM0IiwiaWF0IjoxNjQxMjIwOTkyLCJzY29wZSI6WyJhcGkucmVhZCIsImFwaS53cml0ZSJdLCJhbXIiOlsicHdkIl19.dSwD8kJZRli-a53SsLaLqHSpZutHjWJCJxsbRF4GCJP_GwFFVtKAW6t3ZvGUhCSqGR-eVlfhHC4Jq06EcJgxTlQYq12TyTBGClXy_M_GUIGMsij_p-vX6AgEZFD1kyrcS_tWjF17D4J3WYEq1yre9gp9Lf6yc6AtK80ZIx1G227IFnbi8FWwWrvu2YlnnPW1cHcrkvMCjtpED4r4zA9MceLxeTNObTveVp9_S3ylihuzuEjNTMbbAibOkb-4rCLCDvcuT--RAGPEGMRVctMfikgRUWYEI7mwEZiAa6DY8d76YE8nxWyVyW4uALiOGNUlNIXaFyQWBV6lPfRdERXtIQ";

const apiClient = axios.create({
  baseURL: `http://20.76.64.171`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.token,
  },
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
