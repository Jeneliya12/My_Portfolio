import React from "react";

const Projects = ({ activeLink, theme }) => (
  <section id="projects" className="py-16">
    <div className="container mx-auto px-4">
      <h2
        className={`text-4xl font-bold text-center mb-12 relative ${
          activeLink === "#projects"
            ? "after:content-[''] after:block after:mx-auto after:mt-2 after:h-[4px] after:bg-orange-500 after:w-16"
            : ""
        }`}
      >
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Weather App",
            image: "project1.png",
            link: "https://github.com/Jeneliya12/weatherapp.git",
          },
          {
            title: "Budget Allocation",
            image: "project2.png",
            link: "https://github.com/Jeneliya12/BudgetAllocation.git",
          },
          {
            title: "Product List with Cart",
            image: "project3.png",
            link: "https://github.com/Jeneliya12/product-list.git",
          },
        ].map((project, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transform transition-all duration-300 ease-in-out"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-72 object-cover"
              style={{
                filter: theme === "dark" ? "brightness(0.8)" : "brightness(1)",
              }}
            />

            {/* Hover Overlay */}
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

            {/* Project Title */}
            <h3
              className={`absolute bottom-4 left-4 text-xl font-bold ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              {project.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
