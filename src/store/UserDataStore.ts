import { observable, makeObservable, runInAction, action, toJS } from "mobx";
import User from "../api/requests/User";
import { DecodedToken } from "../types/decodedTokenType";
import jwt_decode from "jwt-decode";
import { OperatorsPermissions, UserApiReponse } from "../types/UserApiResponse";
import Operator from "../api/requests/Operator";

class UserDataStore {
  oneResponse: UserApiReponse | undefined | null;

  userOperator: OperatorsPermissions | undefined | null;

  operatorUsersData: UserApiReponse[] | undefined | null;

  loadingOne: boolean = false;
  constructor() {
    makeObservable(this, {
      oneResponse: observable,
      userOperator: observable,
      operatorUsersData: observable,
      getOne: action,
      getOperatorsPerm: action,
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
    this.oneResponse = undefined;
    this.userOperator = undefined;
  };

  getOne = async (): Promise<void> => {
    try {
      runInAction(() => {
        this.loadingOne = true;
      });
      const response = await User.getOne(this.getDecodedAccessToken().id);
      runInAction(() => {
        console.log(response);
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

  getOperatorsPerm = async (): Promise<void> => {
    try {
      runInAction(() => {
        this.loadingOne = true;
      });
      const response = await User.getOperatorsPermission(
        this.getDecodedAccessToken().id
      );
      runInAction(() => {
        this.userOperator = response;
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.loadingOne = false;
      });
    }
  };

  getOperatorUsersData = async (): Promise<void> => {
    try {
      runInAction(() => {
        this.loadingOne = true;
      });
      const response = await Operator.getUsersData(
        this.getDecodedAccessToken().id
      );
      runInAction(() => {
        this.operatorUsersData = response;
        // console.log(response);
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
