import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9999",
});

// interceptor runs BEFORE every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    // attach token ONLY if it exists
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
