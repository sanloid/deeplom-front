import axios from "axios";
import UserDataStore from "../store/UserDataStore";
import env from "./env";

const instance = axios.create({
  baseURL: env.baseApiUrl,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default instance;
