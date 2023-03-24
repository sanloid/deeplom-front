import UserDataStore from "../../store/UserDataStore";
import axios from "../axios";

export default {
  async getOne(id: number): Promise<any> {
    const response = axios.get(`users/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.then((e) => {
      return e.data;
    });
  },
  async updateOne(id: string, updated: any) {
    axios.patch(`users/${id}`, updated);
  },
  async updateOneAtr(id: string | undefined, value: string, name: string) {
    if (id) axios.patch(`users/one/${id}`);
  },
  async getAdress(id: string) {
    const response = axios.get(`users/adress/${id}`);
    return response.then((e) => e.data);
  },
};
