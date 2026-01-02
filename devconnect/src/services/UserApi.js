import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9999/user",
});
const createUser = (user) => api.post("/create", user);
const login = (user) => api.post("/login", user);
const getUser = (userId) => api.get(`/${userId}`);

export { createUser, login, getUser };
