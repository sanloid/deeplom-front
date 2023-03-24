import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserDataStore from "./store/UserDataStore";

const AuthVerify: React.FC = () => {
  let location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const exp = UserDataStore.getDecodedAccessToken().exp * 1000;
    const token = localStorage.getItem("token");
    if (exp < Date.now() && token) {
      UserDataStore.logout();
      navigate("/login");
    }
  }, [location]);

  return <></>;
};

export default AuthVerify;
