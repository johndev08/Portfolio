import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(localStorage.theme === "dark");

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [dark]);

  const reloadPage = () => {
    window.location.href = "/";
  };

  return (
    <header className="sticky top-0 bg-white dark:bg-gray-800 transition-all duration-300 z-10">
      <div className="p-4 flex justify-between items-center max-w-6xl mx-auto">
        <div
          data-aos="fade-right"
          className="w-10 h-10 cursor-pointer"
          onClick={reloadPage}
        >
          <img src="./jlm.png" alt="" className="block dark:hidden" />
          <img src="./jlmwht.png" alt="" className="hidden dark:block" />
        </div>

        

        <nav data-aos="fade-down" className="hidden sm:flex">
          <ul className="flex gap-6 text-gray-700 dark:text-gray-300 font-medium">
            <li>
              <a
                href="#home"
                className="hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <button
          data-aos="fade-left"
            onClick={() => setDark(!dark)}
            className="p-2 text-xl"
            title="Change Theme"
          >
            {dark ? <Sun className="text-white" /> : <Moon className="text-gray-600"/>}
          </button>

          <button
            data-aos="fade-left"
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-2xl focus:outline-none text-gray-900 dark:text-white"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="sm:hidden bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
          <ul className="flex flex-col items-center gap-1 text-gray-700 dark:text-gray-300 font-medium">
            <li className="w-full text-center hover:bg-gray-200 dark:hover:bg-gray-700 p-2">
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                Home
              </a>
            </li>
            <li className="w-full text-center hover:bg-gray-200 dark:hover:bg-gray-700 p-2">
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                About
              </a>
            </li>
            <li className="w-full text-center hover:bg-gray-200 dark:hover:bg-gray-700 p-2">
              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                Skills
              </a>
            </li>
            <li className="w-full text-center hover:bg-gray-200 dark:hover:bg-gray-700 p-2">
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                Projects
              </a>
            </li>
            <li className="w-full text-center hover:bg-gray-200 dark:hover:bg-gray-700 p-2">
              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                Services
              </a>
            </li>
            <li className="w-full text-center hover:bg-gray-200 dark:hover:bg-gray-700 p-2">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
