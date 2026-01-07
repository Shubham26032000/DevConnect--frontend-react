import axios from "axios";
import api from "./api";

const feeds = () => api.get("/ui/feeds");

export { feeds };
