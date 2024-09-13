const Footer = () => (
  <footer className="bg-gray-500 shadow-lg py-8">
    <div className="container mx-auto px-4">
      {/* Site Information */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl font-semibold text-white">
            Jeneliya Gurung
          </h1>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            Full-Stack Developer
          </p>
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-left">
          <h2 className="text-lg sm:text-xl font-semibold text-white">
            Contact
          </h2>
          <p className="mt-2 text-gray-400 text-sm sm:text-base">
            Email:{" "}
            <a
              href="mailto:gurungjeneliya@gmail.com"
              className="hover:underline"
            >
              gurungjeneliya@gmail.com
            </a>
          </p>
          <p className="mt-1 text-gray-400 text-sm sm:text-base">
            Phone:{" "}
            <a href="tel:+123456789" className="hover:underline">
              +1 251-373-6731
            </a>
          </p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mb-6 flex-wrap">
        <a
          href="https://www.linkedin.com/in/jeneliya-gurung-26903422a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 0H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5zm-13 19.002h-2v-11h2v11zm-1-12.79c-.645 0-1.172-.527-1.172-1.172 0-.644.527-1.172 1.172-1.172.644 0 1.171.528 1.171 1.172 0 .645-.527 1.172-1.171 1.172zm16.002 12.79h-2v-5.727c0-1.36-.049-3.118-1.91-3.118-1.911 0-2.207 1.492-2.207 3.027v5.818h-2v-11h2v1.495c.281-.535.966-1.305 2.094-1.305 2.244 0 2.662 1.485 2.662 3.418v5.392z" />
          </svg>
        </a>

        <a
          href="https://github.com/Jeneliya12"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.86 8.16 6.84 9.49.5.09.68-.22.68-.49v-1.91c-2.8.61-3.39-1.35-3.39-1.35-.46-1.17-1.14-1.48-1.14-1.48-.93-.64.07-.63.07-.63 1.03.07 1.57 1.06 1.57 1.06.92 1.56 2.42 1.11 3.01.85.09-.67.36-1.11.65-1.36-2.35-.26-4.83-1.17-4.83-5.22 0-1.15.41-2.09 1.08-2.83-.11-.27-.47-1.35.1-2.81 0 0 .9-.28 2.95 1.07.85-.24 1.76-.36 2.66-.36s1.8.12 2.66.36c2.04-1.35 2.94-1.07 2.94-1.07.58 1.46.22 2.54.11 2.81.67.74 1.07 1.68 1.07 2.83 0 4.06-2.49 4.95-4.85 5.2.37.32.69.96.69 1.95v2.91c0 .28.18.59.68.49C21.14 20.16 24 16.42 24 12c0-5.52-4.48-10-10-10z" />
          </svg>
        </a>

        <a
          href="https://www.instagram.com/jeneliya_gurung_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.5C6.48 2.5 2.5 6.48 2.5 12S6.48 21.5 12 21.5 21.5 17.52 21.5 12 17.52 2.5 12 2.5zm0 16.9c-4.83 0-8.7-3.87-8.7-8.7 0-4.83 3.87-8.7 8.7-8.7 4.83 0 8.7 3.87 8.7 8.7 0 4.83-3.87 8.7-8.7 8.7zm4.7-8.7c0-2.47-2-4.7-4.7-4.7-2.47 0-4.7 2-4.7 4.7 0 2.47 2 4.7 4.7 4.7 2.47 0 4.7-2 4.7-4.7zm-2.5 0c0 1.21-1 2.2-2.2 2.2-1.21 0-2.2-1-2.2-2.2 0-1.21 1-2.2 2.2-2.2 1.21 0 2.2 1 2.2 2.2zm2.3-4.7c0-.6-.5-1.1-1.1-1.1s-1.1.5-1.1 1.1.5 1.1 1.1 1.1c.6 0 1.1-.5 1.1-1.1z" />
          </svg>
        </a>
      </div>

      {/* Copyright Notice */}
      <div className="text-center text-gray-400 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Jeneliya Gurung. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
