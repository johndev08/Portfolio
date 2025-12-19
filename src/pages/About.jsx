function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-all duration-300 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            data-aos="fade-right"
            src="/profile-nbg.png"
            alt="John Lloyd Mortel"
            className="w-64 h-64 object-cover rounded-2xl border-2 dark:border-gray-500 border-gray-200 hover:border-blue-800 dark:hover:border-blue-400 transition duration-300"
          />
        </div>

        <div data-aos="fade-left" className="md:text-left">
          <h2 className="text-5xl font-bold mb-2 text-gray-900 dark:text-white" >About Me</h2>
          <div className="h-0.5 w-50 bg-blue-800 mb-5  rounded-full"></div>

          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            I’m{" "}
            <span className="font-semibold text-gray-900 dark:text-white">John Lloyd Mortel</span>
            , a passionate Web Developer who enjoys transforming ideas into
            elegant, functional web experiences.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed dark:text-gray-400">
            I focus on building clean, responsive, and efficient websites using
            modern technologies like React, PHP Laravel. I’m always eager to
            learn new tools and frameworks to expand my skills and create
            solutions that make a real impact.
          </p>
          <p className="text-gray-600 leading-relaxed dark:text-gray-400">
            When I’m not coding, I enjoy exploring design ideas, learning new
            workflows, and improving my craft to stay sharp and creative.
          </p>

          <div data-aos="fade-up" className="mt-8 gap-3 flex flex-wrap">
            <a
              href="#contact"
              className="border-2 border-blue-800 bg-blue-800 hover:bg-blue-900 hover:border-blue-900 text-white px-6 py-2 rounded-lg font-medium transition duration-300"
            >
              Contact Me
            </a>
            <a
              href="/public/John_Lloyd_Mortel_Resume.png"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 dark:text-white dark:border-gray-500 border-gray-300 dark:hover:border-blue-800 hover:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-800 text-gray-900 px-6 py-2 rounded-lg font-medium transition duration-300"
            >
              View Resume
            </a>
            <a
              href="/Resume.pdf"
              download="Resume.pdf"
              className="border-2 dark:text-white dark:border-gray-500 border-gray-300 dark:hover:border-blue-800 hover:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-800 text-gray-900 px-6 py-2 rounded-lg font-medium transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
