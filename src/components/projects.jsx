const Projects = () => (
  <section id="projects" className="py-8">
    <h2 className="text-3xl font-bold mb-4">Projects</h2>
    <div className="space-y-4">
      <div className="bg-white p-4 shadow rounded">
        <h3 className="text-xl font-semibold">Project 1</h3>
        <p>Description of project 1.</p>
      </div>
      <div className="bg-white p-4 shadow rounded">
        <h3 className="text-xl font-semibold">Project 2</h3>
        <p>Description of project 2.</p>
      </div>
      {/* Add more projects as needed */}
    </div>
  </section>
);

export default Projects;
