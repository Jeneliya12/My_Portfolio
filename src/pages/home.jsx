import React from "react";
import Header from "../components/header";
import AboutMe from "../components/aboutme";
import Skills from "../components/skills";
import Contact from "../components/contact";
import Projects from "../components/projects";
import Footer from "../components/footer";

function Home() {
  return (
    <div className="font-sans antialiased overflow-x-hidden">
      <Header />
      <main className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 shadow-lg rounded-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
