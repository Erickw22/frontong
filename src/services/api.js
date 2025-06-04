import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
});

export const loginUser = (credentials) => API.post("/auth/login", credentials);

export default API;
