import axios from "axios";
import env from "./env";

const instance = axios.create({
  baseURL: env.baseApiUrl,
  headers: { "Access-Control-Allow-Origin": "*" },
});

export default instance;
