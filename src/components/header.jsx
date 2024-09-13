import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-md text-black py-4">
      <nav className="container mx-auto flex justify-between items-center px-4 md:px-0">
        {/* Logo Image */}
        <a href="/" className="flex items-center">
          <img src="logo.png" alt="Logo" className="h-10" />
        </a>

        {/* Hamburger Icon */}
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

        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-4 absolute md:relative bg-white md:bg-transparent w-full md:w-auto md:flex-row flex-col md:flex md:items-center md:space-y-0 space-y-4 md:space-x-4 transition-transform duration-300 ease-in-out ${
            isOpen ? "top-16" : "-top-full"
          }`}
        >
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
          <li>
            <a href="Jeneliya_Gurung_Resume.pdf" className="hover:underline">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
