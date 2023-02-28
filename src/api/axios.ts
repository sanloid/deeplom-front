import axios from "axios";
import env from "./env";

const instance = axios.create({
  baseURL: env.baseApiUrl,
  // withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default instance;
