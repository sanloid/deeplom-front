import axios from "axios";
import UserDataStore from "../store/UserDataStore";
import env from "./env";

const instance = axios.create({
  // baseURL: import.meta.env.VITE_API_BASE_URL,
  baseURL: env.baseApiUrl,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// instance.interceptors.request.use(async (config) => {
//   const accessToken = await store.getState().auth.accessToken;

//   // @ts-ignore
//   if (config.skipAuth) {
//     return config;
//   }

//   const Authorization = `Bearer ${localStorage.getItem("token")}`;

//   return {
//     ...config,
//     headers: { ...config.headers, Authorization },
//   };
// });

export default instance;
