import Header from "../components/header";
import AboutMe from "../components/aboutme";
import Skills from "../components/skills";
import Contact from "../components/contact";
import Projects from "../components/projects";
import Footer from "../components/footer";
function Home() {
  return (
    <div className="font-sans antialiased">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
