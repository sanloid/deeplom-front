import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthVerify from "./AuthVerify";
import Layout from "./Layout";
import LoginPage from "./pages/LoginPage";
import Operators from "./pages/Operators";
import Profile from "./pages/Profile";
import { TestPage } from "./pages/TestPage";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="test" element={<TestPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="operators" element={<Operators />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
      <AuthVerify />
    </>
  );
};

export default App;
