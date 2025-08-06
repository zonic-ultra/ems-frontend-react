// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  validateStatus: () => true, // ⬅️ You can include this globally
});

export default api;
