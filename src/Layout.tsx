import React from "react";
import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Footer from "./components/UI/Footer";
import Header from "./components/UI/Header";
import ErrorBase from "./error/ErrorBase";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <ErrorBoundary FallbackComponent={ErrorBase}>
        <Outlet />
      </ErrorBoundary>
      <Footer />
    </div>
  );
};

export default Layout;
