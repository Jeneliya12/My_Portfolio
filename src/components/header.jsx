import { useState } from "react";

function Header({ activeLink, handleLinkClick, theme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full shadow-md py-4 z-50 font-bold transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo / Name */}
        <a href="/" className="flex items-center">
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
              className="text-base sm:text-lg font-semibold mr-2"
              style={{ color: theme === "dark" ? "white" : "black" }}
            >
              SWE.
            </span>
            Jeneliya G.
          </h1>
        </a>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden focus:outline-none transition-colors duration-300 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          style={{ zIndex: 50 }}
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
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex md:space-x-4 absolute md:relative ${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          } md:bg-transparent w-full md:w-auto flex-col md:flex-row items-center md:space-y-0 space-y-4 top-16 md:top-auto transition-transform duration-300 ease-in-out`}
          style={{ zIndex: 40 }}
        >
          {["#about", "#skills", "#projects", "#contact"].map((link, index) => (
            <li key={link} className="w-full md:w-auto text-center">
              <a
                href={link}
                onClick={() => {
                  handleLinkClick(link);
                  setIsOpen(false); // Close menu on mobile after click
                }}
                className={`block md:inline ${
                  activeLink === link
                    ? theme === "dark"
                      ? "border-b-4 border-orange-500"
                      : "border-b-4 border-black"
                    : ""
                } hover:text-orange-500 transition-colors duration-300 py-2`}
              >
                {link.replace("#", "").charAt(0).toUpperCase() + link.slice(2)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
