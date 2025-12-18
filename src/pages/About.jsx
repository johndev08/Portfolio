function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img data-aos="fade-right"
            src="/public/profile-nbg.png"
            alt="John Lloyd Mortel"
            className="w-64 h-64 object-cover rounded-2xl shadow-lg border border-gray-200"
          />
        </div>

        <div data-aos="fade-left" className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            I’m{" "}
            <span className="font-medium text-gray-900">John Lloyd Mortel</span>
            , a passionate Web Developer who enjoys transforming ideas into
            elegant, functional web experiences.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            I focus on building clean, responsive, and efficient websites using
            modern technologies like React, PHP Laravel. I’m always
            eager to learn new tools and frameworks to expand my skills and
            create solutions that make a real impact.
          </p>
          <p className="text-gray-600 leading-relaxed">
            When I’m not coding, I enjoy exploring design ideas, learning new
            workflows, and improving my craft to stay sharp and creative.
          </p>

          <div data-aos="fade-up" className="mt-8 gap-2 flex">
            <a 
              href="#contact"
              className="bg-blue-800 hover:bg-blue-900 text-white px-3 py-2 rounded font-medium transition"
            >
              Contact Me
            </a>
            <div>
              <p className="bg-blue-800 text-center hover:bg-blue-900 text-white px-3 py-2 rounded font-medium transition">
                <a
                  href="/public/John_Lloyd_Mortel_Resume.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
                /
                <a href="/Resume.pdf" download="Resume.pdf">
                  Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
