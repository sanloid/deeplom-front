import { UserAPIType } from "../../types/userApiType";
import axios from "../axios";

export default {
  async getOne(id: string): Promise<UserAPIType> {
    const response = axios.get(`users/${id}`);
    return response.then((e) => e.data);
  },
  async updateOne(id: string) {
    axios.patch(`users/${id}`);
  },
};
