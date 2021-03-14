import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import HeaderContent from "./HeaderContent";

const Header = ({ handleIsSidebarOpen }) => {
  // const history = useHistory();
  const twTheme = localStorage.getItem("twTheme");
  const [mode, setMode] = useState(twTheme || "light");
  const htmlElement = document.querySelector("html");

  useEffect(() => {
    if (!localStorage.getItem("twTheme")) {
      htmlElement.classList.add("dark");
      localStorage.setItem("twTheme", "dark");
      setMode("dark");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleDark = () => {
    if (localStorage.getItem("twTheme") === "dark") {
      htmlElement.classList.remove("dark");
      localStorage.setItem("twTheme", "light");
      setMode("light");
    } else {
      htmlElement.classList.add("dark");
      localStorage.setItem("twTheme", "dark");
      setMode("dark");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full py-4 shadow-md lg:shadow-none shadow-bottom bg-light-mode dark:bg-dark-mode">
      <div className="container flex items-center justify-between h-full px-3 mx-auto text-theme-color-light dark:text-theme-color-dark">
        <div className="w-full h-10">
          <NavLink to="/home" className="block">
            <HeaderContent />
          </NavLink>
        </div>
        <ul className="flex items-center flex-shrink-0 space-x-6">
          <li className="relative text-theme-color-light dark:text-theme-color-dark">
            <button
              onClick={toggleDark}
              className="relative align-middle rounded-md focus:outline-none"
              aria-label="Notifications"
              aria-haspopup="true"
            >
              {mode === "light" ? (
                <span className="w-5 h-5 animate-spin">🌚</span>
              ) : (
                <span className="w-5 h-5 animate-spin">💡</span>
              )}

              {/* <!-- Notification badge --> */}
              <span className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full animate-ping dark:border-gray-800" />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
