import axios from "../axios";
import env from "../env";

export interface LoginDTO {
  login: string;
  password: string;
}

export interface LoginResponseDTO {
  access_token: string;
}

export default {
  async login({ login, password }: LoginDTO) {
    const token: LoginResponseDTO = (
      await axios.post(`auth/login`, {
        login: login,
        password: password,
      })
    ).data;
    localStorage.setItem("token", token.access_token);
    return token;
  },
};
