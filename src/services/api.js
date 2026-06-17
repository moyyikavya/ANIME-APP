import axios from "axios";

const api = axios.create({
  baseURL: "https://anime-backend-y5ae.onrender.com"
});

export default api;