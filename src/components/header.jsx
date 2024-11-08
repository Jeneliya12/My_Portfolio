import { useState } from "react";
function Header({ activeLink, handleLinkClick }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full shadow-md text-black py-4 bg-white z-50 font-bold">
      <nav className="container mx-auto flex justify-between items-center px-4 md:px-0">
        <a href="/" className="flex items-center">
          <img src="logo.png" alt="Logo" className="h-10" />
        </a>

        <button
          className="block md:hidden text-black focus:outline-none"
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

        <ul
          className={`md:flex md:space-x-4 absolute md:relative bg-white md:bg-transparent w-full md:w-auto md:flex-row flex-col md:items-center md:space-y-0 space-y-4 transition-transform duration-300 ease-in-out ${
            isOpen ? "top-16" : "-top-full"
          }`}
        >
          <li>
            <a
              href="#about"
              onClick={() => handleLinkClick("#about")}
              className={`${
                activeLink === "#about" ? "border-b-4 border-black" : ""
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => handleLinkClick("#skills")}
              className={`${
                activeLink === "#skills" ? "border-b-4 border-black" : ""
              }`}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => handleLinkClick("#projects")}
              className={`${
                activeLink === "#projects" ? "border-b-4 border-black" : ""
              }`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handleLinkClick("#contact")}
              className={`${
                activeLink === "#contact" ? "border-b-4 border-black" : ""
              }`}
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
