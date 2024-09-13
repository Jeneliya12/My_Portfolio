function AboutMe() {
  return (
    <section id="about" className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Introduction Column */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Hi there!!
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              I am Jeneliya
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              A passionate full-stack developer with a keen interest in creating
              dynamic and user-friendly web applications. I have experience in
              both front-end and back-end development, and I'm always eager to
              learn new technologies and improve my skills.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              In my free time, I enjoy exploring new tech trends, contributing
              to open-source projects, and working on personal coding
              challenges.
            </p>
          </div>
        </div>

        {/* Picture Column */}
        <div className="flex justify-center items-center mt-10">
          <img
            src="jen.jpg"
            alt="Jeneliya Gurung"
            className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
