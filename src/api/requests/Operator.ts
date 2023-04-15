import { SendRequestToUserDataDTO } from "../../types/UserApiRequest";
import axios from "../axios";

export default {
  async getUsersData(id: number): Promise<any> {
    const response = axios.get(`/operators/users/${id}`);
    return response.then((e) => {
      return e.data;
    });
  },
  async sendRequestToUserData(
    id: number,
    reqToData: SendRequestToUserDataDTO
  ): Promise<any> {
    console.log(reqToData);
    const response = axios.post(`/operators/request/${id}`, {
      ...reqToData,
    });
    return response
      .then((e) => {
        return e.data;
      })
      .catch((e) => {
        return e;
      });
  },
};
