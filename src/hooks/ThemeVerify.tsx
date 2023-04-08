import React, { useEffect } from "react";

const ThemeVerify = () => {
  useEffect(() => {
    const theme = localStorage.getItem("theme") || "default";
    if (theme === "dark") {
      document.body.classList.add("dark");
    }
  }, []);

  return null;
};

export default ThemeVerify;
