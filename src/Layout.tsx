import React from "react";
import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import FooterComponent from "./components/Footer";
import Header from "./components/Header";
import ErrorBase from "./error/ErrorBase";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col h-full min-h-screen dark:bg-gray-900">
      <Header />
      {/* <SideBar /> */}
      <ErrorBoundary FallbackComponent={ErrorBase}>
        <Outlet />
      </ErrorBoundary>
      <FooterComponent />
    </div>
  );
};

export default Layout;
