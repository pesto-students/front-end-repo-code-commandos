import React, { useState, useEffect } from "react";

export default function Header() {
  const [Theme, setTheme] = useState("light");

  useEffect(() => {
    if (Theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [Theme]);

  const handleThemeSwitch = () => {
    setTheme(Theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className="topbar flex h-16 w-screen content-between items-center justify-between px-8 md:px-32">
        <div className="topbar-1 flex h-20 items-center justify-items-start">
          <a href="http://localhost:5173">
            <svg
              className="w-8 fill-bg_dark dark:fill-bg_light"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M10 8H14V6.5C14 4.567 15.567 3 17.5 3C19.433 3 21 4.567 21 6.5C21 8.433 19.433 10 17.5 10H16V14H17.5C19.433 14 21 15.567 21 17.5C21 19.433 19.433 21 17.5 21C15.567 21 14 19.433 14 17.5V16H10V17.5C10 19.433 8.433 21 6.5 21C4.567 21 3 19.433 3 17.5C3 15.567 4.567 14 6.5 14H8V10H6.5C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5V8ZM8 8V6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8H8ZM8 16H6.5C5.67157 16 5 16.6716 5 17.5C5 18.3284 5.67157 19 6.5 19C7.32843 19 8 18.3284 8 17.5V16ZM16 8H17.5C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5V8ZM16 16V17.5C16 18.3284 16.6716 19 17.5 19C18.3284 19 19 18.3284 19 17.5C19 16.6716 18.3284 16 17.5 16H16ZM10 10V14H14V10H10Z"></path>
            </svg>
          </a>
          <a href="http://localhost:5173">
            <h2 className="pl-2 text-xl md:text-xl font-bold text-font_light dark:text-font_dark">
              MATCH-MADE
            </h2>
          </a>
        </div>
        <div className="topbar-2 flex gap-4 h-20 items-center">
          <div className="aboutus-bar hidden md:flex md:gap-4 md:justify-items-start">
            <a href="http://localhost:5173/about-us">
              <h2 className="text-xs md:text-lg md:font-semibold text-font_light dark:text-font_dark">
                About Us
              </h2>
            </a>
            <a href="http://localhost:5173/help">
              <h2 className="text-xs md:text-lg md:font-semibold text-font_light dark:text-font_dark">
                Help
              </h2>
            </a>
          </div>
          <div className="flex justify-center justify-items-center">
            {Theme === "dark" ? (
              <button
                className="w-16 text-font_light rounded-full bg-bg_light border-2 border-bg_dark hover:ring-4 hover:ring-card_light focus:outline-none focus:ring-4 focus:ring-card_light font-medium text-sm px-5 py-2.5 dark:text-font_dark  dark:bg-bg_dark dark:border-2 dark:border-bg_light dark:hover:ring-4 dark:hover:ring-card_dark dark:focus:outline-none dark:focus:ring-4 dark:focus:ring-card_dark"
                onClick={handleThemeSwitch}
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex fill-bg_dark dark:fill-bg_light"
                  viewBox="0 0 20 20"
                  fill="#9333ea"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            ) : (
              <button
                className=" w-16 text-font_light rounded-full  bg-bg_light border-2 border-bg_dark hover:ring-4 hover:ring-card_light focus:outline-none focus:ring-4 focus:ring-card_light font-medium text-sm px-5 py-2.5 dark:text-font_dark  dark:bg-bg_dark dark:border-2 dark:border-bg_light dark:hover:ring-4 dark:hover:ring-card_dark dark:focus:outline-none dark:focus:ring-4 dark:focus:ring-card_dark"
                onClick={handleThemeSwitch}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#9333ea"
                  className="flex fill-bg_dark dark:fill-bg_light"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
