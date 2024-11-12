import React from "react";
import { motion } from "framer-motion";

const projectData = [
  {
    image: "/My_Portfolio/project5.png",
    link: "https://github.com/Jeneliya12/E-COMMERCE-FULLSTACK.git",
  },
  {
    image: "/My_Portfolio/project1.png",
    link: "https://github.com/Jeneliya12/weatherapp.git",
  },
  {
    image: "/My_Portfolio/project2.png",
    link: "https://github.com/Jeneliya12/BudgetAllocation.git",
  },
  {
    image: "/My_Portfolio/project3.png",
    link: "https://github.com/Jeneliya12/product-list.git",
  },
  {
    image: "/My_Portfolio/project4.png",
    link: "https://github.com/Jeneliya12/-travelRecommendation.git",
  },
  {
    image: "/My_Portfolio/project6.png",
    link: "https://github.com/Jeneliya12/BloodBankingManagementSystem.git",
  },
  {
    image: "/My_Portfolio/project8.png",
    link: "https://github.com/Jeneliya12/Auction-System.git",
  },
  {
    image: "/My_Portfolio/project9.png",
    link: "https://github.com/Jeneliya12/Personal_Financial_Tracker.git",
  },
];

const staggeredContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectItem = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const hoverEffect = {
  scale: 1.05,
  rotateY: 15,
  transition: { duration: 0.4 },
};

const Projects = ({ activeLink, theme }) => (
  <section id="projects" className="relative pt-20">
    {/* Wall Image */}
    <div className="relative overflow-hidden mb-10">
      <img
        src="/My_Portfolio/wallproject.avif"
        alt="Wall Background"
        className="w-full h-70 md:h-80 lg:h-100 object-cover"
        style={{
          filter: theme === "dark" ? "brightness(0.6)" : "brightness(0.3)",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white shadow-lg mb-4">
          Projects Showcase
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-white font-semibold max-w-4xl px-4">
          "Every project is a stepping stone towards creating something
          meaningful and impactful. I’m driven by a desire to build applications
          that solve real problems, spark curiosity, and leave a lasting
          impression."
        </p>
        <p className="text-md md:text-lg lg:text-xl text-gray-200 mt-4 italic">
          — Excited to work on more projects that inspire and innovate
        </p>
      </div>
    </div>

    {/* Projects Grid */}
    <div className="container mx-auto px-4 text-center mt-10">
      <motion.div
        variants={staggeredContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            variants={projectItem}
            whileHover={hoverEffect}
            className={`relative overflow-hidden rounded-xl shadow-lg border-2 transform transition-transform ${
              theme === "dark" ? "border-gray-700" : "border-gray-200"
            }`}
          >
            {/* Project Image with Flip Animation */}
            <motion.div whileHover={{ rotateY: 180 }} className="w-full h-full">
              <img
                src={project.image}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover rounded-xl"
                style={{
                  filter:
                    theme === "dark" ? "brightness(0.8)" : "brightness(1)",
                }}
              />
            </motion.div>
            {/* Overlay with Zoom and Text Animation */}
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg font-semibold bg-orange-500 py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300 mb-2"
              >
                View Project
              </a>
              <p className="text-gray-300 italic px-4">
                Check out my code and live demo.
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Projects;
