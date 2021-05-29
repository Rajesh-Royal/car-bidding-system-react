import React, { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (
      localStorage.bid_Theme === "dark" ||
      (!("bid_Theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const setDarkMode = () => {
    dark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };
  return (
    <div className="fixed bottom-4 right-2 text-right">
      <button
        className="bg-gray-300 px-3 py-3 rounded-full focus:outline-none shadow-lg border mr-4"
        onClick={() => {
          setDark(!dark);
          dark ? (localStorage.bid_Theme = "dark") : (localStorage.bid_Theme = "light");
          setDarkMode();
        }}>
        {/* ToDo: Why the wrong emoji renders on first click */}
        {dark ? "🌞" : "🌜 "}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
