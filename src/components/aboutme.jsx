import { useNavigate } from "react-router-dom";

function AboutMe({ theme }) {
  const navigate = useNavigate();
  const textColor = theme === "dark" ? "text-white" : "text-black";
  const sectionBgColor = theme === "dark" ? "bg-gray-900" : "bg-white";
  const cardBgColor = theme === "dark" ? "bg-gray-800" : "bg-brown-200";

  const goToProjects = () => {
    navigate("/projects");
  };

  const goToContacts = () => {
    navigate("/contact");
  };

  return (
    <section
      id="about"
      className={`container mx-auto px-4 sm:px-6 lg:px-8 py-12 transition-colors duration-500 ${sectionBgColor}`}
    >
      {/* Introduction Section */}
      <div className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="flex justify-center items-center mt-6 lg:mt-0 overflow-hidden rounded-3xl">
            <img
              src="/jen.jpg"
              alt="Jeneliya Gurung"
              j
              className="w-[90%] lg:w-[80%] max-w-2xl h-auto rounded-3xl shadow-lg object-cover transform transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-1"
              style={{
                maxHeight: "60vh",
                objectPosition: "top",
              }}
            />
          </div>

          <div
            className={`flex flex-col justify-center space-y-4 lg:space-y-6 px-4 lg:px-8 ${textColor}`}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Hello and Welcome!
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-relaxed">
              I’m Jeneliya Gurung, a passionate Full Stack Developer crafting
              seamless digital solutions.
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed">
              With over 5 years of experience, I specialize in building robust,
              scalable web applications using Java, Spring Boot, React, and
              Angular. From designing microservices to optimizing cloud
              deployments with Docker and Kubernetes, I thrive on solving
              challenges and creating efficient solutions. Explore my portfolio
              to see how I transform ideas into impactful digital experiences.
            </p>
            <div
              onClick={() => window.open("resume.pdf", "_blank")}
              className="mt-4 flex items-center text-brown-400 cursor-pointer space-x-2 hover:text-orange-600 transition-colors duration-300"
            >
              <span className="font-semibold text-lg">View Resume</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Career Section */}
      <div
        className={`w-full ${cardBgColor} py-12 rounded-3xl ${textColor} mb-16`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Career
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6">
            With a solid background in full-stack development and experience
            across diverse tech stacks, I've delivered robust applications that
            enhance user experience and streamline business processes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Each career card */}
            {[
              {
                title: "Full Stack Jave Developer",
                company: "JPMorgan Chase, New York, NY - Apr 2023 - Present",
                responsibilities: [
                  "Designed and implemented scalable microservices architecture, ensuring seamless integration through RESTful and SOAP web services.",
                  "Developed dynamic and responsive user interfaces using React and Angular, enhancing user experience with efficient state management tools like Redux and RxJS.",
                  "Improved application performance by 20% through systematic optimization and performance testing across environments.",
                ],
              },
              {
                title: "Full Stack Developer",
                company:
                  "Cedar Gate Technologies, Greenwich, Connecticut - Aug 2020 - Dec 2021",
                responsibilities: [
                  "Designed and implemented ETL pipelines with Spring Batch and Apache Kafka, enabling real-time processing of large-scale healthcare data.",
                  "Developed SOAP-based web services using XML and XSD, ensuring seamless integration with third-party healthcare systems.",
                  "Created a predictive analytics dashboard using Angular and Highcharts, providing actionable insights through KPI visualization for healthcare administrators.",
                ],
              },
              {
                title: "Front-End Developer",
                company:
                  "Riddhasoft Pvt. Ltd., Kathmandu, Nepal - Feb 2018 - Jun 2020",
                responsibilities: [
                  "Designed and developed responsive interfaces using AngularJS and Bootstrap, ensuring compatibility across mobile, tablet, and desktop devices.",
                  "Optimized front-end performance by implementing lazy loading, enhancing initial page load speed.",
                  "Collaborated with UI/UX teams to translate wireframes into visually appealing, responsive web pages.",
                ],
              },
            ].map((job, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg shadow-lg bg-white w-full"
              >
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-md font-medium mb-4">{job.company}</p>
                <ul className="list-disc list-inside">
                  {job.responsibilities.map((res, i) => (
                    <li key={i}>{res}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div
        className={`w-full ${cardBgColor} py-12 rounded-3xl ${textColor} mb-16`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Projects
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6">
            Click the arrow below to view my recent projects.
          </p>
          <button
            onClick={goToProjects}
            className="flex items-center space-x-2 text-lg sm:text-xl lg:text-2xl font-medium focus:outline-none"
          >
            <span>View Projects</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Education Section */}
      <div className={`w-full ${cardBgColor} py-12 rounded-3xl ${textColor}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Education
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6">
            My educational journey has been driven by a strong interest in
            technology and software engineering.
          </p>
          <div className="space-y-2">
            <div className="p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">
                Master of Science in Computer Science, GPA: 3.92
              </h3>
              <p className="text-md font-medium">Monroe College</p>
              <p>
                Focusing on software engineering techniques, cloud computing,
                and scalable application development.
              </p>
            </div>
            <hr className="border-t border-gray-300 my-4" />
            <div className="p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">
                Bachelor of Science in Computing, First Class Honors
              </h3>
              <p className="text-md font-medium">Leeds Beckett University</p>
              <p>
                Acquired a solid foundation in programming, data structures,
                algorithms, and software development.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Get in Touch Section */}
      <div className="flex flex-col items-center mt-20">
        <h2 className="text-5xl font-bold mb-4">Get in Touch</h2>
        <button
          onClick={goToContacts}
          className="bg-brown-200 text-black px-6 py-5 font-semibold transition duration-300 rounded-3xl"
        >
          Contact Me
        </button>
      </div>
    </section>
  );
}

export default AboutMe;
