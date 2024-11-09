import React from "react";

const projectData = [
  {
    image: "project5.png",
    link: "https://github.com/Jeneliya12/product-list.git",
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
    link: "https://github.com/Jeneliya12/product-list.git",
  },
  {
    image: "project6.png",
    link: "https://github.com/Jeneliya12/product-list.git",
  },
  {
    image: "project8.png",
    link: "https://github.com/Jeneliya12/product-list.git",
  },
  {
    image: "project9.png",
    link: "https://github.com/Jeneliya12/product-list.git",
  },
];

const Projects = ({ activeLink, theme }) => (
  <section id="projects" className="py-16">
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

      {/* Collage Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {projectData.map((project, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-lg border-2 ${
              theme === "dark" ? "border-gray-700" : "border-gray-200"
            } hover:shadow-2xl transition-shadow duration-300 ${
              index % 3 === 0
                ? "col-span-2 row-span-2 h-80 md:h-96"
                : "col-span-1 row-span-1 h-64 md:h-80"
            }`}
          >
            <img
              src={project.image}
              alt={`Project ${index + 1}`}
              className="w-full h-full object-contain"
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
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
