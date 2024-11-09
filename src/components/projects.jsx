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

      <div className="space-y-8">
        {[
          {
            title: "Weather App",
            description:
              "A React application for viewing weather information. This project displays current weather conditions, hourly forecasts, and weekly forecasts. It allows users to search for weather data by location or by using their current geographic location.",
            features: [
              "Current Weather: Displays current temperature, weather conditions, and an icon representing the weather.",
              "Hourly Forecast: Shows the weather forecast for the next 24 hours, including temperature and condition.",
              "Weekly Forecast: Provides a 7-day weather forecast with daily temperatures and conditions.",
              "Unit Toggle: Allows users to switch between Celsius and Fahrenheit for temperature readings.",
              "Search Functionality: Users can search for weather data based on a location name or coordinates.",
              "Geolocation: Fetches weather data based on the user's current location.",
            ],
            image: "project1.png",
            link: "https://github.com/Jeneliya12/weatherapp.git",
            apiLink: "https://openweathermap.org/api",
          },
          {
            title: "Budget Allocation",
            description:
              "A comprehensive React application designed to manage and track budgets effectively. This project allows users to allocate budgets to various departments, adjust budgets dynamically, and visualize the remaining budget and expenses.",
            features: [
              "Add or Reduce Budget: Users can increase or decrease the allocated budget for various departments.",
              "Dynamic Updates: The budget allocation updates in real-time, ensuring that users always see the current budget status.",
              "Total Expenses Calculation: Computes the total expenses based on unit prices and quantities.",
              "Remaining Budget Visualization: Displays the remaining budget after accounting for total expenses.",
              "Context API Integration: Utilizes React Context API for managing application state.",
              "Multi-Currency Support: Allows users to view budget and expenses in different currencies.",
            ],
            image: "project2.png",
            link: "https://github.com/Jeneliya12/BudgetAllocation.git",
          },
          {
            title: "Product List with Cart",
            description:
              "A web application designed to showcase products and manage a shopping cart. Built with React, this application allows users to browse products, add items to their cart, adjust quantities, and view order summaries.",
            features: [
              "Product display: Presents a grid of products with images, names, categories, and prices.",
              "Cart Management: Users can view and manage their cart, adjust quantities, and remove items.",
              "Order Confirmation: Provides a summary of items purchased and total cost in a confirmation modal.",
            ],
            image: "project3.png",
            link: "https://github.com/Jeneliya12/product-list.git",
          },
        ].map((project, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col md:flex-row items-center ${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="md:w-1/3 flex-shrink-0 mb-4 md:mb-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-md object-cover"
              />
            </div>
            <div className="md:w-2/3 md:ml-6">
              <h3
                className={`text-xl sm:text-2xl font-semibold mb-4 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                {project.title}
              </h3>
              <p
                className={`mb-4 text-sm sm:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-black"
                }`}
              >
                {project.description}
              </p>
              <div
                className={`mb-4 text-sm sm:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-black"
                }`}
              >
                <strong>Features:</strong>
                <ul className="list-disc list-inside ml-5">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              {project.apiLink && (
                <p
                  className={`mb-4 text-sm sm:text-base ${
                    theme === "dark" ? "text-gray-300" : "text-black"
                  }`}
                >
                  This project utilizes the{" "}
                  <a
                    href={project.apiLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    OpenWeather API
                  </a>{" "}
                  to fetch weather data.
                </p>
              )}
              <a
                href={project.link}
                className={`inline-block font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300 mt-4 ${
                  theme === "dark"
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "bg-orange-500 text-white hover:bg-blue-700"
                }`}
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
