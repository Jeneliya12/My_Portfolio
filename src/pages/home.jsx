// Home.js
import { useState } from "react";
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
      } min-h-screen transition-colors duration-300 ease-in-out`}
    >
      <Header
        activeLink={activeLink}
        handleLinkClick={handleLinkClick}
        theme={theme} // Pass the theme prop here
      />

      {/* Theme Toggle Switch */}
      <div
        onClick={toggleTheme}
        className="fixed top-4 right-4 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-all duration-300 ease-in-out"
        style={{ zIndex: 1000 }}
      >
        <div
          className={`w-5 h-5 rounded-full shadow-md transform transition-all duration-300 ease-in-out ${
            theme === "dark"
              ? "translate-x-6 bg-orange-500"
              : "translate-x-0 bg-gray-600"
          }`}
        ></div>
      </div>

      <main className="space-y-20 py-10">
        <AboutMe theme={theme} />
        <Skills theme={theme} activeLink={activeLink} />
        <Projects theme={theme} activeLink={activeLink} />
        <Contact theme={theme} activeLink={activeLink} />
      </main>

      <Footer theme={theme} />
    </div>
  );
}

export default Home;
