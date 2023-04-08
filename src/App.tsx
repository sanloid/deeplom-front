import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthVerify from "./hooks/AuthVerify";
import Layout from "./Layout";
import LoginPage from "./pages/Login/LoginPage";
import Operators from "./pages/Operators/Operators";
import MyData from "./pages/MyData/MyData";
import TestPage from "./pages/TestPage";
import Users from "./pages/UsersTable/Users";
import SearchUsers from "./pages/SearchUsers/SearchUsers";
import Profile from "./pages/Profile/Profile";
import ThemeVerify from "./hooks/ThemeVerify";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="test" element={<TestPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="operators" element={<Operators />} />
          <Route path="users" element={<Users />} />

          <Route path="mydata" element={<MyData />} />
          <Route path="find" element={<SearchUsers />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
      <AuthVerify />
      <ThemeVerify />
    </>
  );
};

export default App;
