import React from "react";
import RoleVerify from "../hooks/RoleVerify";

const TestPage: React.FC = () => {
  return (
    <>
      <img src="" alt="" />
      <RoleVerify to={"/profile"} role={"OPERATOR"} />
    </>
  );
};

export default TestPage;
