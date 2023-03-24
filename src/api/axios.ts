import axios from "axios";
import UserDataStore from "../store/UserDataStore";
import env from "./env";

const instance = axios.create({
  baseURL: env.baseApiUrl,
  // "Access-Control-Allow-Origin": "http://127.0.0.1:5173/",
  // "Access-Control-Allow-Credentials": "true",
  // withCredentials: true,
});

export default instance;
