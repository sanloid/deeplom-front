import { Translate } from "../../types/paramName";
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
  async updateOneAtr(id: string | undefined, value: string, name: string) {
    const keys = Object.keys(Object(Translate));
    const realName = keys.filter((e) => Translate[e] == name)[0];
    // console.log(realName);
    if (id) axios.patch(`users/one/${id}`, { value: value, name: realName });
  },
  async getAdress(id: string) {
    const response = axios.get(`users/adress/${id}`);
    return response.then((e) => e.data);
  },
};
