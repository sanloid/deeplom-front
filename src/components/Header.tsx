import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";
import AvatarDropdown from "./UI/AvatarDropdown";
import { Navbar } from "flowbite-react";
import ThemeToggle from "./UI/ThemeToggle";
import UserDataStore from "../store/UserDataStore";

const Header: React.FC = () => {
  const role = useMemo(() => {
    const token = localStorage.getItem("token");
    const decodedToken = token ? JSON.parse(atob(token.split(".")[1])) : null;
    return decodedToken ? decodedToken.role : "";
  }, [localStorage.getItem("token")]);

  const headerContent = useMemo(
    () => [
      { title: "Поиск", to: "find" },
      {
        title: role === "USER" ? "Мои операторы" : "Мои пользователи",
        to: role === "USER" ? "operators" : "users",
      },
      { title: "Мои данные", to: "mydata" },
      {
        title: "Профиль",
        to: `profile/${UserDataStore.getDecodedAccessToken().id}`,
      },
    ],
    [role]
  );

  return (
    <>
      <header className="text-gray-600 body-font border-b-2 border-gray-200 dark:border-none dark:bg-gray-800">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl dark:text-gray-300">PARA</span>
          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {headerContent.map((e) => (
              <NavLink
                key={e.title}
                className="flex text-center align-middle cursor-pointer mr-5 transition duration-300 ease-in-out hover:text-gray-900 hover:scale-110 dark:text-gray-400 dark:hover:text-white"
                to={e.to}
              >
                {e.title}
              </NavLink>
            ))}
          </nav>
          <ThemeToggle />
          <AvatarDropdown />
          <div className="flex space-x-2 justify-center"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
