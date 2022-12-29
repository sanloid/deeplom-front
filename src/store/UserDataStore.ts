import { observable, makeObservable, runInAction } from "mobx";
import getUserInfo from "../api/requests/User";
import { UserAPIType } from "../types/userApiType";

class UserDataStore {
  oneResponse: UserAPIType | undefined;

  loadingOne: boolean = false;

  constructor() {
    makeObservable(this, {
      oneResponse: observable,
    });
  }

  getOne = async (id: string): Promise<void> => {
    try {
      this.loadingOne = true;

      const response = await getUserInfo.getOne(id);

      runInAction(() => {
        this.oneResponse = response;
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.loadingOne = false;
      });
    }
  };
}

export default new UserDataStore();
