import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
});

export const loginUser = (credentials) => API.post("/auth/login", credentials);

export const registerUser = (userData) => API.post("/auth/register", userData);

export const fetchUserProfile = (config) => API.get("/auth/me", config);

export const updateUserProfile = (updatedData, config) => API.patch("/auth/me", updatedData, config);

export const registerOng = (ongData) => API.post("/ongs/register", ongData);

export const fetchOngs = () => API.get("/ongs/list");

export const fetchOngDetails = (id) => API.get(`/ongs/details/${id}`);

export default API;
