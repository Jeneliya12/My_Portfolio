import { useState } from "react";

function Header({ activeLink, handleLinkClick, theme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full shadow-md py-4 z-50 font-bold transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <nav className="font-bold container mx-auto flex justify-between items-center px-4 md:px-0">
        {/* Logo / Name */}
        <a href="/" className="flex items-center justify-self-start">
          <h1
            className={`text-2xl sm:text-3xl font-extrabold transition-all duration-300 ease-in-out transform hover:scale-105 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
            style={{
              fontFamily: "Georgia, serif",
              letterSpacing: "1px",
              textShadow:
                theme === "dark"
                  ? "2px 2px 4px rgba(0, 0, 0, 0.4)"
                  : "1px 1px 2px rgba(0, 0, 0, 0.2)",
            }}
          >
            <span
              className="text-base sm:text-lg font-semibold mr-2 text-black"
              style={{ color: theme === "dark" ? "white" : "black" }}
            >
              SWE.
            </span>
            Jeneliya G.
          </h1>
        </a>

        {/* Mobile Menu Button */}
        <button
          className={`block md:hidden focus:outline-none transition-colors duration-300 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-4 absolute md:relative bg-${
            theme === "dark" ? "gray-800" : "white"
          } md:bg-transparent w-full md:w-auto md:flex-row flex-col md:items-center md:space-y-0 space-y-4 transition-transform duration-300 ease-in-out ${
            isOpen ? "top-16" : "-top-full"
          }`}
        >
          <li>
            <a
              href="#about"
              onClick={() => handleLinkClick("#about")}
              className={`${
                activeLink === "#about"
                  ? theme === "dark"
                    ? "border-b-4 border-orange-500"
                    : "border-b-4 border-black"
                  : ""
              } hover:text-orange-500 transition-colors duration-300`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => handleLinkClick("#skills")}
              className={`${
                activeLink === "#skills"
                  ? theme === "dark"
                    ? "border-b-4 border-orange-500"
                    : "border-b-4 border-black"
                  : ""
              } hover:text-orange-500 transition-colors duration-300`}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => handleLinkClick("#projects")}
              className={`${
                activeLink === "#projects"
                  ? theme === "dark"
                    ? "border-b-4 border-orange-500"
                    : "border-b-4 border-black"
                  : ""
              } hover:text-orange-500 transition-colors duration-300`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handleLinkClick("#contact")}
              className={`${
                activeLink === "#contact"
                  ? theme === "dark"
                    ? "border-b-4 border-orange-500"
                    : "border-b-4 border-black"
                  : ""
              } hover:text-orange-500 transition-colors duration-300`}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
