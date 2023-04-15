import { observable, makeObservable, runInAction, action } from "mobx";
import User from "../api/requests/User";

export interface IProfile {
  id: number;
  FIO: {
    firstName: string;
    lastName: string;
  };
  email: string;
  description: string;
  photo: string;
}

class ProfileStore {
  profile: IProfile | null = null;
  loading: boolean = false;
  constructor() {
    makeObservable(this, {
      profile: observable,
      loading: observable,
      getProfile: action,
    });
  }

  getProfile = async (id: number): Promise<void> => {
    try {
      runInAction(() => {
        this.loading = true;
      });
      const response = await User.getProfile(id);
      runInAction(() => {
        this.profile = response;
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}

export default new ProfileStore();
