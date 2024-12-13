import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

function Contact({ activeLink, theme }) {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d21pjj8",
        "template_goja61u",
        form.current,
        "4wYTLnQhl-pqaxwWR"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageStatus("success");
          form.current.reset();
          setTimeout(() => setMessageStatus(null), 3000);
        },
        (error) => {
          console.log(error.text);
          setMessageStatus("error");
          setTimeout(() => setMessageStatus(null), 3000);
        }
      );
  };

  return (
    <section id="contact">
      <div className="relative overflow-hidden mb-12 pt-20">
        <img
          src="/contact.avif"
          alt="Contact Wall Background"
          className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover"
          style={{
            filter: theme === "dark" ? "brightness(0.6)" : "brightness(0.4)",
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white shadow-lg leading-tight sm:leading-snug md:leading-snug">
            Want to connect?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mt-4 mb-6 max-w-2xl leading-normal md:leading-relaxed">
            Feel free to contact me via email, Instagram, or LinkedIn for
            inquiries or collaborative interests. Cheers!
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <a
              href="mailto:gurungjeneliya@gmail.com"
              className="text-white text-base sm:text-lg bg-black px-4 py-2 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/jeneliya-gurung-26903422a/"
              className="text-white text-base sm:text-lg bg-orange-400 px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/jeneliya_gurung_"
              className="text-white text-base sm:text-lg bg-gray-900 px-4 py-2 rounded-lg shadow-lg hover:bg-pink-600 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-center mb-12 ${
            activeLink === "#contact"
              ? "after:content-[''] after:block after:mx-auto after:mt-2 after:h-[4px] after:bg-orange-500 after:w-16"
              : ""
          }`}
        >
          Contact
        </h2>

        {messageStatus === "success" && (
          <div className="bg-green-100 text-green-700 font-semibold text-center mb-4 p-4 rounded-lg shadow-md">
            Message sent successfully!
          </div>
        )}
        {messageStatus === "error" && (
          <div className="bg-red-100 text-red-700 font-semibold text-center mb-4 p-4 rounded-lg shadow-md">
            An error occurred. Please try again.
          </div>
        )}

        <form
          ref={form}
          onSubmit={sendEmail}
          className={`w-full max-w-lg md:max-w-2xl mx-auto space-y-6 p-6 sm:p-8 rounded-lg shadow-lg ${
            theme === "dark"
              ? "bg-gray-900 text-white border border-white"
              : "bg-white text-gray-900 border border-gray-300"
          }`}
        >
          <div>
            <label
              htmlFor="from_name"
              className={`block text-sm sm:text-base font-medium mb-2 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Your Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              placeholder="Your Name"
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                theme === "dark"
                  ? "border-gray-700 bg-gray-800 text-white focus:ring-white"
                  : "border-gray-300 bg-white text-gray-900 focus:ring-blue-500"
              }`}
              required
            />
          </div>

          <div>
            <label
              htmlFor="from_email"
              className={`block text-sm sm:text-base font-medium mb-2 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Your Email
            </label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              placeholder="Your Email"
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                theme === "dark"
                  ? "border-gray-700 bg-gray-800 text-white focus:ring-white"
                  : "border-gray-300 bg-white text-gray-900 focus:ring-blue-500"
              }`}
              required
            />
          </div>

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

          <button
            type="submit"
            className={`w-full py-3 rounded-lg shadow-md transition-colors duration-300 ${
              theme === "dark"
                ? "bg-brown-400 text-white hover:bg-orange-600"
                : "bg-brown-400 text-white hover:bg-orange-600"
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
