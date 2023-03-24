import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserDataStore from "../store/UserDataStore";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const logout = () => {
    UserDataStore.logout();
    navigate("/login");
  };

  const headerContent = [
    { title: "Операторы", to: "operators" },
    { title: "Профиль", to: "profile" },
  ];
  return (
    <header className="text-gray-600 body-font">
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
          <span className="ml-3 text-xl">PARA</span>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {headerContent.map((e) => (
            <NavLink
              key={e.title}
              className="flex text-center align-middle cursor-pointer mr-5 hover:text-gray-900"
              to={e.to}
            >
              {e.title}
            </NavLink>
          ))}
          <div className="flex space-x-2 justify-center">
            <button
              onClick={() => logout()}
              type="button"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Выйти
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
