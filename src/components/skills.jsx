import { motion } from "framer-motion";

const skillsData = {
  Frontend: [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "Angular", level: 85 },
    { name: "Bootstrap", level: 80 },
    { name: "TypeScript", level: 80 },
    { name: "Highcharts", level: 70 },
  ],
  Backend: [
    { name: "Java", level: 95 },
    { name: "Spring Boot", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "Django", level: 70 },
    { name: "SOAP APIs", level: 80 },
    { name: "REST APIs", level: 90 },
  ],
  Tools: [
    { name: "Git", level: 90 },
    { name: "Postman", level: 85 },
    { name: "CI/CD", level: 85 },
    { name: "Docker", level: 80 },
    { name: "Jenkins", level: 80 },
    { name: "Kubernetes", level: 75 },
    { name: "SonarQube", level: 70 },
    { name: "JMeter", level: 70 },
  ],
  Database: [
    { name: "Oracle", level: 85 },
    { name: "Cassandra", level: 80 },
    { name: "MySQL", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "MongoDB", level: 75 },
    { name: "Redis", level: 70 },
  ],
};

const Skills = ({ activeLink, theme }) => (
  <section id="skills" className="py-20 px-4">
    <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
      {/* Image Column */}
      <motion.div
        className="lg:w-3/5 w-full flex justify-center lg:justify-start mb-10 lg:mb-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/skilltwo.jpg"
          alt="Skills Illustration"
          className="w-full max-w-3xl h-auto rounded-3xl shadow-xl object-cover"
        />
      </motion.div>

      {/* Skills Column */}
      <div className="lg:w-1/2 w-full space-y-10">
        <h2
          className={`text-4xl font-bold text-center mb-8 ${
            activeLink === "#skills"
              ? "after:content-[''] after:block after:mx-auto after:mt-2 after:h-[3px] after:bg-orange-500 after:w-20"
              : ""
          }`}
        >
          Skills
        </h2>

        {/* Skill Rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Object.keys(skillsData).map((category, idx) => (
            <motion.div
              key={idx}
              className={`p-5 rounded-lg shadow-lg transition duration-500 ${
                theme === "dark"
                  ? "bg-gradient-to-br from-gray-800 to-gray-700"
                  : "bg-gradient-to-br from-orange-100 to-yellow-200"
              } transform hover:scale-105`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.3, duration: 0.6 }}
            >
              <h3
                className={`text-xl font-semibold mb-4 text-center ${
                  theme === "dark" ? "text-gray-300" : "text-gray-800"
                }`}
              >
                {category}
              </h3>
              <div className="space-y-3">
                {skillsData[category].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span
                      className={`text-sm font-medium w-1/3 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {skill.name}
                    </span>
                    <div className="relative w-2/3 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`absolute top-0 left-0 h-full rounded-full ${
                          theme === "dark" ? "bg-orange-400" : "bg-orange-500"
                        }`}
                        style={{ width: `${skill.level}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: 0.1 * index }}
                      />
                    </div>
                    <span
                      className={`text-xs ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {skill.level}%
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
