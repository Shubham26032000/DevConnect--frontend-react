import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9999/ui",
});

const feeds = () => api.get("/feeds");

export { feeds };
