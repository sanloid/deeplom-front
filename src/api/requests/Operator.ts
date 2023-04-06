import axios from "../axios";

export default {
  async getUsersData(id: number): Promise<any> {
    const response = axios.get(`/operators/users/${id}`);
    return response.then((e) => {
      return e.data;
    });
  },
};
