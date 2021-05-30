import React, { useState, useEffect } from "react";
import { GitHub, Moon, Sun } from "react-feather";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
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
    <header className="sticky top-0 w-full z-40 py-3 h-14 dark:bg-gray-800 bg-white shadow-md overflow-hidden">
      <div className="flex justify-between px-2 dark:text-green-400 text-green-500">
        <div className="flex flex-shrink-0 justify-between">
          <button
            type="button"
            className="mr-1 focus:outline-none"
            onClick={() => {
              history.push("/");
            }}>
            <span className="flex text-2xl subpixel-antialiased font-black leading-none">
              Bidding Dashboard
            </span>
          </button>
        </div>
        <div className="item-center flex flex-shrink-0 justify-between space-x-6">
          <a
            href="https://github.com/Rajesh-Royal/car-bidding-system-react"
            target="_blank"
            className="focus:shadow-outline-green p-1 rounded-md focus:outline-none"
            aria-label="github repository link"
            rel="noreferrer">
            <GitHub />
          </a>
          <button
            type="button"
            className="focus:shadow-outline-green p-1 rounded-md focus:outline-none"
            onClick={() => {
              setDark(!dark);
              dark ? (localStorage.bid_Theme = "dark") : (localStorage.bid_Theme = "light");
              setDarkMode();
            }}
            aria-label="Toggle color mode">
            {localStorage.bid_Theme === "dark" ? (
              <Sun aria-hidden="true" />
            ) : (
              <Moon aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
