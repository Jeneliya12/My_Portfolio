import React from "react";

function Contact({ activeLink, theme }) {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl font-bold text-center mb-12 relative ${
            activeLink === "#contact"
              ? "after:content-[''] after:block after:mx-auto after:mt-2 after:h-[4px] after:bg-orange-500 after:w-16"
              : ""
          }`}
        >
          Contact
        </h2>
        <form
          action="#"
          method="POST"
          className={`w-full max-w-lg md:max-w-2xl mx-auto space-y-6 p-6 sm:p-8 rounded-lg shadow-lg ${
            theme === "dark"
              ? "bg-gray-900 text-white border border-white" // Add white border in dark mode
              : "bg-white text-gray-900 border border-gray-300"
          }`}
        >
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className={`block text-sm sm:text-base font-medium mb-2 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                theme === "dark"
                  ? "border-gray-700 bg-gray-800 text-white focus:ring-white"
                  : "border-gray-300 bg-white text-gray-900 focus:ring-blue-500"
              }`}
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className={`block text-sm sm:text-base font-medium mb-2 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="gurungjeneliya@example.com"
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                theme === "dark"
                  ? "border-gray-700 bg-gray-800 text-white focus:ring-white"
                  : "border-gray-300 bg-white text-gray-900 focus:ring-blue-500"
              }`}
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className={`block text-sm sm:text-base font-medium mb-2 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                theme === "dark"
                  ? "border-gray-700 bg-gray-800 text-white focus:ring-white"
                  : "border-gray-300 bg-white text-gray-900 focus:ring-blue-500"
              }`}
              rows="6"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 transition-colors duration-300 ${
              theme === "dark"
                ? "bg-orange-500 text-white hover:bg-orange-600 focus:ring-white"
                : "bg-orange-500 text-white hover:bg-blue-700 focus:ring-white"
            }`}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
