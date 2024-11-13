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
          gi;
        }
      );
  };

  return (
    <section id="contact">
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

        {/* Notification message */}
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
          {/* Name Field */}
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
              placeholder="Your Email"
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
