import axios from "axios";
import api from "./api";

const createUser = (user) => api.post("/user/create", user);
const login = (user) => api.post("/user/login", user);
const getUser = (userId) => api.get(`user/${userId}`);

const authLogin = (user) => api.post("/auth/login", user);

export { createUser, login, getUser, authLogin };
