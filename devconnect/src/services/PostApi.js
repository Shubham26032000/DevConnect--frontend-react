import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9999/posts",
});

const createPost = (userId, post) => api.post(`/create?userId=${userId}`, post);
const getPost = (postId) => api.get(`/${postId}?userId=${userId}`);
const usersPost = (userId) => api.get(`/user-post?userId=${userId}`);
const allPosts = () => api.get("/all");

export { createPost, getPost, usersPost, allPosts };
