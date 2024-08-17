const Skills = () => (
  <section id="skills" className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
      <div className="space-y-8">
        {/* Front End Skills Card */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col md:flex-row items-center">
          {/* Title */}
          <div className="md:w-1/4 flex-shrink-0 mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Front End</h3>
          </div>
          {/* Skills Block */}
          <div className="md:w-3/4 md:ml-6 flex flex-wrap gap-4">
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              JavaScript
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              TypeScript
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              React
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              Next.js
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              Figma
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              Redux Toolkit
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              HTML
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              CSS
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              Tailwind CSS
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              Vue.js
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              Sass
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              Less
            </span>
          </div>
        </div>

        {/* Backend Skills Card */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col md:flex-row items-center">
          {/* Title */}
          <div className="md:w-1/4 flex-shrink-0 mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
          </div>
          {/* Skills Block */}
          <div className="md:w-3/4 md:ml-6 flex flex-wrap gap-4">
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              Node.js
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              Express
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              Python
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              Django
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              Flask
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              Java
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              Spring Boot
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              PHP
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              Laravel
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              MongoDB
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              SQL
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              PostgreSQL
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              Redis
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              GraphQL
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              RESTful APIs
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              OAuth
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              JWT
            </span>
          </div>
        </div>

        {/* Tools Skills Card */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col md:flex-row items-center">
          {/* Title */}
          <div className="md:w-1/4 flex-shrink-0 mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Tools</h3>
          </div>
          {/* Skills Block */}
          <div className="md:w-3/4 md:ml-6 flex flex-wrap gap-4">
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              Git
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              GitHub
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              GitLab
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              Webpack
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              Babel
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              Docker
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              Kubernetes
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              CI/CD
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              Jenkins
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              Postman
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              Nginx
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              Apache
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
