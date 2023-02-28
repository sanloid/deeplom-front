import { observable, makeObservable, runInAction } from "mobx";
import getUserInfo from "../api/requests/User";
import { UserAPIType } from "../types/userApiType";
import jwt_decode from "jwt-decode";

class UserDataStore {
  oneResponse: UserAPIType | undefined;

  loadingOne: boolean = false;

  constructor() {
    makeObservable(this, {
      oneResponse: observable,
    });
  }

  checkAuth = () => {
    let token = localStorage.getItem("token");
    if (token === null) return false;
    else {
      const decoded = jwt_decode(token);
      const expiresIn = decoded.exp;
      if (decoded.exp < Date.now()) return true;
      else return false;
    }
  };

  getOne = async (): Promise<void> => {
    try {
      this.loadingOne = true;
      let token = localStorage.getItem("token");
      let decoded = token ? jwt_decode(token) : null;
      if (decoded) {
        const response = await getUserInfo.getOne(decoded.id);
        runInAction(() => {
          this.oneResponse = response;
        });
      }
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
