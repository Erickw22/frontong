import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
});

// Login de usuário (rota POST /auth/login)
export const loginUser = (credentials) => API.post("/auth/login", credentials);

export const registerUser = (userData) => API.post("/auth/register", userData);


export const fetchUserProfile = () => API.get("/auth/me");


export const updateUserProfile = (updatedData) => API.patch("/auth/me", updatedData);

export const registerOng = (ongData) => API.post("/ongs/register", ongData);

// Buscar lista de ONGs (rota GET /ongs/list)
export const fetchOngs = () => API.get("/ongs/list");

export const fetchOngDetails = (id) => API.get(`/ongs/details/${id}`);

export default API;
