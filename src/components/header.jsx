import { useState } from "react";
import { Link } from "react-router-dom";

function Header({ activeLink, handleLinkClick, theme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full shadow-md py-4 z-50 font-bold transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      } font-times`}
    >
      <nav className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo / Name */}
        <Link to="/" onClick={() => handleLinkClick("#about")}>
          <h1
            className={`text-2xl sm:text-3xl font-extrabold transition-all duration-300 ease-in-out transform hover:scale-105 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Jeneliya G.
          </h1>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden focus:outline-none transition-colors duration-300 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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
          } flex-col md:flex-row md:flex md:space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent ${
            theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
          } md:space-y-0 space-y-4 py-4 md:py-0 px-4 md:px-0`}
        >
          {[
            { path: "/", label: "About" },
            { path: "/skills", label: "Skills" },
            { path: "/projects", label: "Projects" },
            { path: "/contact", label: "Contact" },
          ].map(({ path, label }) => (
            <li key={path} className="text-center md:text-left">
              <Link
                to={path}
                onClick={() => {
                  handleLinkClick(`#${label.toLowerCase()}`);
                  setIsOpen(false);
                }}
                className={`hover:text-orange-500 transition-colors duration-300 py-2 block`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
