import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import LoginPage from "./pages/LoginPage";
import Cabinet from "./pages/Cabinet";
import Tables from "./pages/Tables";
import Profile from "./pages/Profile";
import UserDataStore from "./store/UserDataStore";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Layout />}>
        <Route path="cabinet" element={<Cabinet />} />
        <Route path="tables" element={<Tables />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default App;
