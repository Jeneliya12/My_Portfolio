function AboutMe({ theme }) {
  return (
    <section
      id="about"
      className={`container mx-auto px-4 py-8 pt-10 pb-4 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } transition-colors duration-500`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Introduction Column */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Hi there!!
            </h1>
          </div>
          <div className="space-y-4">
            <p className="font-[Lato] text-base sm:text-lg lg:text-xl leading-relaxed">
              Hello, I'm{" "}
              <span
                className={`font-semibold ${
                  theme === "dark" ? "text-orange-400" : "text-orange-600"
                } font-[Merriweather]`}
              >
                Jeneliya
              </span>
              , and I specialize in full-stack web development...
            </p>

            <p className="font-[Lato] text-base sm:text-lg lg:text-xl leading-relaxed">
              In my free time, I enjoy exploring new tech trends, contributing
              to{" "}
              <span
                className={`font-semibold ${
                  theme === "dark" ? "text-orange-400" : "text-orange-600"
                } font-[Merriweather]`}
              >
                open-source projects
              </span>
              , and working on personal coding challenges.
            </p>
          </div>
        </div>

        {/* Picture Column */}
        <div className="flex justify-center items-center mt-6 lg:mt-0">
          <img
            src="jen.jpg"
            alt="Jeneliya Gurung"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg max-h-[80vh] aspect-[3/4] shadow-lg object-cover rounded-lg 
              transform transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-1"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
