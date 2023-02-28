import axios from "../axios";

export interface LoginDTO {
  login: string;
  password: string;
}

export default {
  async login({ login, password }: LoginDTO) {
    const token = (
      await axios.post(`/auth/login`, {
        login: login,
        password: password,
      })
    ).data.token;
    localStorage.setItem("token", token);
    return token;
  },
};
