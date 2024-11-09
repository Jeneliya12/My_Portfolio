import React from "react";

const skillsData = {
  Frontend: [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Vue.js", level: 75 },
    { name: "TypeScript", level: 80 },
  ],
  Backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "Django", level: 70 },
    { name: "Java", level: 65 },
    { name: "GraphQL", level: 60 },
  ],
  Tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 75 },
    { name: "Jenkins", level: 70 },
    { name: "Webpack", level: 65 },
    { name: "Postman", level: 85 },
    { name: "CI/CD", level: 75 },
  ],
  Database: [
    { name: "MongoDB", level: 80 },
    { name: "MySQL", level: 75 },
    { name: "PostgreSQL", level: 70 },
    { name: "Firebase", level: 65 },
    { name: "Redis", level: 60 },
  ],
};

const Skills = () => (
  <section id="skills" className="py-16 bg-gray-100">
    <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
      {/* Skills Column */}
      <div className="lg:w-1/2 w-full lg:pr-8 space-y-6">
        <h2 className="text-4xl font-bold mb-8 text-center lg:text-left">
          Skills
        </h2>
        {Object.keys(skillsData).map((category, idx) => (
          <div key={idx} className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold mb-3 text-gray-800 text-center">
              {category}
            </h3>
            <div className="space-y-3">
              {skillsData[category].map((skill, index) => (
                <div key={index} className="flex items-center">
                  <p className="text-sm font-medium text-gray-700 w-1/3">
                    {skill.name}
                  </p>
                  <div className="relative w-2/3 h-3 bg-gray-200 rounded-full mr-2">
                    <div
                      className="absolute top-0 left-0 h-full bg-orange-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-600">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Image Column */}
      <div className="lg:w-1/2 w-full flex justify-center mt-12 lg:mt-0">
        <img
          src="skills-image.jpg"
          alt="Skill Illustration"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto shadow-lg object-cover rounded-lg"
        />
      </div>
    </div>
  </section>
);

export default Skills;
