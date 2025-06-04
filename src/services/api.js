import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
});

// Login de usuário (rota POST /auth/login)
export const loginUser = (credentials) => API.post("/auth/login", credentials);

export const registerUser = (userData) => API.post("/auth/register", userData);


export const fetchUserProfile = () => API.get("/auth/me");

// Atualizar dados do usuário autenticado (rota PATCH /auth/me)
// Recebe token no header (tem que setar manualmente antes da chamada)
export const updateUserProfile = (updatedData) => API.patch("/auth/me", updatedData);

export const registerOng = (ongData) => API.post("/ongs/register", ongData);

// Buscar lista de ONGs (rota GET /ongs/list)
export const fetchOngs = () => API.get("/ongs/list");

// Buscar detalhes da ONG por id (rota GET /ongs/details/:id)
export const fetchOngDetails = (id) => API.get(`/ongs/details/${id}`);

export default API;
