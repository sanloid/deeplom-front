import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthVerify from "./hooks/AuthVerify";
import Layout from "./Layout";
import LoginPage from "./pages/Login/LoginPage";
import Operators from "./pages/Operators/Operators";
import Profile from "./pages/Profile/Profile";
import TestPage from "./pages/TestPage";
import Users from "./pages/OperatorUsers/Users";
import SearchUsers from "./pages/SearchUsers/SearchUsers";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="test" element={<TestPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="operators" element={<Operators />} />
          <Route path="profile" element={<Profile />} />
          <Route path="users" element={<Users />} />
          <Route path="find" element={<SearchUsers />} />
        </Route>
      </Routes>
      <AuthVerify />
    </>
  );
};

export default App;
