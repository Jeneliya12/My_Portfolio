function Contact({ activeLink }) {
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
          className="w-full max-w-lg md:max-w-2xl mx-auto space-y-6 bg-white p-6 sm:p-8 rounded-lg shadow-lg"
        >
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-black text-sm sm:text-base font-medium mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm sm:text-base font-medium mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="gurungjeneliya@example.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm sm:text-base font-medium mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="6"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
