import { useState } from "react";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  const [activeLink, setActiveLink] = useState("#about");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <Header activeLink={activeLink} handleLinkClick={handleLinkClick} />
      <main>
        <AboutMe />
        <Skills activeLink={activeLink} />
        <Projects activeLink={activeLink} />
        <Contact activeLink={activeLink} />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
