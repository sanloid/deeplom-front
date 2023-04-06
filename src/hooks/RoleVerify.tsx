import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type IRoleVerify = {
  to: string;
  role: string;
};

const RoleVerify: React.FC<IRoleVerify> = ({ to, role }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const decodedToken = JSON.parse(
      atob(localStorage.getItem("token")?.split(".")[1] || "")
    );
    const userRole = decodedToken.role;
    if (userRole && userRole !== role) navigate(to);
  }, [location]);
  return null;
};

export default RoleVerify;
