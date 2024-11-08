function AboutMe() {
  return (
    <section id="about" className="container mx-auto px-4 py-8 pt-40">
      {" "}
      {/* Adjusted top padding */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Introduction Column */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
              Hi there!!
            </h1>
          </div>
          <div className="space-y-4">
            <p className="font-[Lato] text-base sm:text-lg lg:text-xl text-gray-900 leading-relaxed">
              Hello, I'm{" "}
              <span className="font-semibold text-orange-600 font-[Merriweather]">
                Jeneliya
              </span>
              , and I specialize in full-stack web development with a proven
              track record of designing, developing, and deploying scalable and
              responsive web applications. Over the past three years, I've honed
              my skills in modern front-end technologies like{" "}
              <span className="font-semibold text-orange-600">
                React, Next.js, and Vue.js
              </span>
              , alongside mastering back-end development with{" "}
              <span className="font-semibold text-orange-600">
                Node.js, Python, and Java
              </span>
              . My expertise extends to enhancing code quality through{" "}
              <span className="font-semibold text-orange-600">TypeScript</span>{" "}
              and optimizing application performance.
            </p>

            <p className="font-[Lato] text-base sm:text-lg lg:text-xl text-gray-900 leading-relaxed">
              In my free time, I enjoy exploring new tech trends, contributing
              to{" "}
              <span className="font-semibold text-orange-600 font-[Merriweather]">
                open-source projects
              </span>
              , and working on personal coding challenges.
            </p>
          </div>
        </div>

        {/* Picture Column */}
        <div className="flex justify-center items-center mt-10 lg:mt-0">
          <img
            src="jen.jpg"
            alt="Jeneliya Gurung"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg max-h-[80vh] aspect-[3/4] shadow-lg object-cover rounded-lg 
             relative transform transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-1
             before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t before:from-orange-500 before:to-transparent before:opacity-50 before:rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
