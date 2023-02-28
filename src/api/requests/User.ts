import { UserAPIType } from "../../types/userApiType";
import axios from "../axios";

export default {
  async getOne(id: string): Promise<UserAPIType> {
    const response = axios.get(`users/${id}`);
    return response.then((e) => e.data);
  },
  async updateOne(id: string, updated: any) {
    axios.patch(`users/${id}`, updated);
  },
  async getAdress(id: string) {
    const response = axios.get(`users/adress/${id}`);
    return response.then((e) => e.data);
  },
};
