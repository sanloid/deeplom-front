import { observable, makeObservable, runInAction, action, toJS } from "mobx";
import User from "../api/requests/User";
import { DecodedToken } from "../types/decodedTokenType";
import jwt_decode from "jwt-decode";
import { UserApiReponse } from "../types/UserApiResponse";

class UserDataStore {
  oneResponse: UserApiReponse | undefined | null;

  loadingOne: boolean = false;
  constructor() {
    makeObservable(this, {
      oneResponse: observable,
      getOne: action,
      setDefaultOneResponse: action,
    });
  }

  getDecodedAccessToken = (): DecodedToken => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded: DecodedToken = jwt_decode(token);
      return decoded;
    } else
      return {
        id: 0,
        iat: 0,
        exp: 0,
        role: "",
        login: "",
      };
  };

  logout = () => {
    localStorage.removeItem("token");
    this.setDefaultOneResponse();
  };

  setDefaultOneResponse = () => {
    this.oneResponse = null;
  };

  getOne = async (): Promise<void> => {
    try {
      runInAction(() => {
        this.loadingOne = true;
        // console.log(this.loadingOne);
      });
      const response = await User.getOne(this.getDecodedAccessToken().id);
      runInAction(() => {
        this.oneResponse = response;
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.loadingOne = false;
        // console.log(this.loadingOne);
      });
    }
  };
}

export default new UserDataStore();
