import axios from "axios";
import api from "./api";

const createPost = (userId, post) =>
  api.post(`/posts/create?userId=${userId}`, post);
const getPost = (postId, userId) =>
  api.get(`/posts/${postId}?userId=${userId}`);
const usersPost = (userId) => api.get(`/posts/user-post?userId=${userId}`);
const allPosts = () => api.get("/posts/all");

export { createPost, getPost, usersPost, allPosts };
