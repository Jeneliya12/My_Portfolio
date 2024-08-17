const Projects = () => (
  <section id="projects" className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Featured Projects
      </h2>
      <div className="space-y-8">
        {/* Project 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col md:flex-row items-center">
          {/* Image */}
          <div className="md:w-1/3 flex-shrink-0 mb-4 md:mb-0">
            <img
              src="/project1.png"
              alt="Weather App"
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
          {/* Description */}
          <div className="md:w-2/3 md:ml-6">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              Weather App
            </h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              A React application for viewing weather information. This project
              displays current weather conditions, hourly forecasts, and weekly
              forecasts. It allows users to search for weather data by location
              or by using their current geographic location.
            </p>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              <strong>Features:</strong>
              <ul className="list-disc list-inside ml-5">
                <li>
                  <strong>Current Weather:</strong> Displays current
                  temperature, weather conditions, and an icon representing the
                  weather.
                </li>
                <li>
                  <strong>Hourly Forecast:</strong> Shows the weather forecast
                  for the next 24 hours, including temperature and condition.
                </li>
                <li>
                  <strong>Weekly Forecast:</strong> Provides a 7-day weather
                  forecast with daily temperatures and conditions.
                </li>
                <li>
                  <strong>Unit Toggle:</strong> Allows users to switch between
                  Celsius and Fahrenheit for temperature readings.
                </li>
                <li>
                  <strong>Search Functionality:</strong> Users can search for
                  weather data based on a location name or coordinates.
                </li>
                <li>
                  <strong>Geolocation:</strong> Fetches weather data based on
                  the user's current location.
                </li>
              </ul>
            </p>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              This project utilizes the{" "}
              <a
                href="https://openweathermap.org/api"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                OpenWeather API
              </a>{" "}
              to fetch weather data.
            </p>
            <a
              href="https://github.com/Jeneliya12/weatherapp.git"
              className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-colors duration-300 mt-4"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col md:flex-row items-center">
          {/* Image */}
          <div className="md:w-1/3 flex-shrink-0 mb-4 md:mb-0">
            <img
              src="project2.png"
              alt="Budget Allocation"
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
          {/* Description */}
          <div className="md:w-2/3 md:ml-6">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              Budget Allocation
            </h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              A comprehensive React application designed to manage and track
              budgets effectively. This project allows users to allocate budgets
              to various departments, adjust budgets dynamically, and visualize
              the remaining budget and expenses. Built with the React Context
              API and styled using Bootstrap and custom CSS, this application
              provides an intuitive user experience for financial management.
            </p>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              <strong>Features:</strong>
              <ul className="list-disc list-inside ml-5">
                <li>
                  <strong>Add or Reduce Budget:</strong> Users can increase or
                  decrease the allocated budget for various departments with
                  simple button interactions.
                </li>
                <li>
                  <strong>Dynamic Updates:</strong> The budget allocation
                  updates in real-time, ensuring that users always see the
                  current budget status.
                </li>
                <li>
                  <strong>Total Expenses Calculation:</strong> The application
                  computes the total expenses based on unit prices and
                  quantities, allowing users to track spending effectively.
                </li>
                <li>
                  <strong>Remaining Budget Visualization:</strong> Displays the
                  remaining budget after accounting for total expenses, helping
                  users stay within their financial limits.
                </li>
                <li>
                  <strong>Context API Integration:</strong> Utilizes React
                  Context API for managing application state, including
                  expenses, budget allocations, and currency settings.
                </li>
                <li>
                  <strong>Multi-Currency Support:</strong> Allows users to
                  choose their preferred currency (Dollar, Pound, Euro, Rupee)
                  and view budget and expenses in the selected currency.
                </li>
              </ul>
            </p>
            <a
              href="https://github.com/Jeneliya12/BudgetAllocation.git"
              className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-colors duration-300 mt-4"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col md:flex-row items-center">
          {/* Image */}
          <div className="md:w-1/3 flex-shrink-0 mb-4 md:mb-0">
            <img
              src="project3.png"
              alt="Product List with Cart"
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
          {/* Description */}
          <div className="md:w-2/3 md:ml-6">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              Product List with Cart
            </h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              The "Product List with Cart" project is a web application designed
              to showcase products and manage a shopping cart. Built with React,
              this application allows users to browse a list of products, add
              items to their cart, adjust quantities, and view order summaries.
              It demonstrates key functionality in e-commerce development and
              user interface design.
            </p>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              <strong>Features:</strong>
              <ul className="list-disc list-inside ml-5">
                <li>
                  <strong>Product display:</strong> Presents a grid of products
                  with images, names, categories, and prices. Each product can
                  be added to the cart with a dynamic button that toggles based
                  on the item’s presence in the cart.
                </li>
                <li>
                  <strong>Cart Management:</strong> Users can view their cart,
                  see the list of items they have added, adjust quantities, and
                  remove items. The cart provides a summary of the total price
                  and quantity of items.
                </li>
                <li>
                  <strong>Order Confirmation:</strong> Includes a modal that
                  appears upon confirming an order, summarizing the items
                  purchased and the total cost. This feature provides a seamless
                  user experience with clear feedback on their order.
                </li>
              </ul>
            </p>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              This project utilizes the{" "}
              <a
                href="https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d/hub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                Figma Design of Product List With Cart
              </a>{" "}
              to create the UI/UX.
            </p>
            <a
              href="https://github.com/steamnp/bfs56/tree/jeneliya"
              className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-colors duration-300 mt-4"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
