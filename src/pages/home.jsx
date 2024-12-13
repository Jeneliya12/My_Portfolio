// home.jsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  const [activeLink, setActiveLink] = useState("#about");
  const [theme, setTheme] = useState("light");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } min-h-screen flex flex-col transition-colors duration-300 ease-in-out`}
    >
      <Header
        activeLink={activeLink}
        handleLinkClick={handleLinkClick}
        theme={theme}
      />

      {/* Theme Toggle Switch */}
      <div
        onClick={toggleTheme}
        className="fixed md:top-4 md:right-4 bottom-4 right-4 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-all duration-300 ease-in-out z-50"
      >
        <div
          className={`w-5 h-5 rounded-full shadow-md transform transition-all duration-300 ease-in-out ${
            theme === "dark"
              ? "translate-x-6 bg-orange-500"
              : "translate-x-0 bg-gray-600"
          }`}
        ></div>
      </div>

      {/* Main content */}
      <main className="flex-grow space-y-20 py-10">
        <Routes>
          <Route path="/" element={<AboutMe theme={theme} />} />
          <Route path="/skills" element={<Skills theme={theme} />} />
          <Route path="/projects" element={<Projects theme={theme} />} />
          <Route path="/contact" element={<Contact theme={theme} />} />
        </Routes>
      </main>

      {/* Footer at the bottom */}
      <Footer theme={theme} />
    </div>
  );
}

export default Home;
