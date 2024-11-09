import React from "react";
import { motion } from "framer-motion";

const projectData = [
  {
    image: "project5.png",
    link: "https://github.com/Jeneliya12/E-COMMERCE-FULLSTACK.git",
  },
  {
    image: "project1.png",
    link: "https://github.com/Jeneliya12/weatherapp.git",
  },
  {
    image: "project2.png",
    link: "https://github.com/Jeneliya12/BudgetAllocation.git",
  },
  {
    image: "project3.png",
    link: "https://github.com/Jeneliya12/product-list.git",
  },
  {
    image: "project4.png",
    link: "hhttps://github.com/Jeneliya12/-travelRecommendation.git",
  },
  {
    image: "project6.png",
    link: "https://github.com/Jeneliya12/BloodBankingManagementSystem.git",
  },
  {
    image: "project8.png",
    link: "https://github.com/Jeneliya12/Auction-System.git",
  },
  {
    image: "project9.png",
    link: "https://github.com/Jeneliya12/Personal_Financial_Tracker.git",
  },
];

const staggeredContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const projectItem = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const Projects = ({ activeLink, theme }) => (
  <section id="projects">
    <div className="container mx-auto px-4 text-center">
      <h2
        className={`text-4xl font-bold text-center mb-12 relative ${
          activeLink === "#projects"
            ? "after:content-[''] after:block after:mx-auto after:mt-2 after:h-[4px] after:bg-orange-500 after:w-16"
            : ""
        }`}
      >
        Featured Projects
      </h2>

      {/* Responsive and Animated Project Grid */}
      <motion.div
        variants={staggeredContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto"
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            variants={projectItem}
            className={`relative overflow-hidden rounded-lg shadow-lg border-2 ${
              theme === "dark" ? "border-gray-700" : "border-gray-200"
            } hover:shadow-2xl transition-shadow duration-300`}
          >
            <img
              src={project.image}
              alt={`Project ${index + 1}`}
              className="w-full h-full object-cover"
              style={{
                filter: theme === "dark" ? "brightness(0.8)" : "brightness(1)",
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg font-semibold bg-orange-500 py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Projects;
