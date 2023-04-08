import React, { useState, useEffect } from "react";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "default";
  });

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "default" : "dark";
    setTheme(newTheme);
  };

  return (
    <button className="mx-5" onClick={toggleTheme}>
      {theme === "dark" ? (
        <BsFillMoonFill className="text-gray-400 " />
      ) : (
        <BsSunFill />
      )}
    </button>
  );
};

export default ThemeToggle;
