function Home() {
  return (
    <div
      id="home"
      className="min-h-screen flex justify-center items-center"
    >
      <section data-aos="zoom-out" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl font-bold mb-2">
          Hi, I’m <span className="text-blue-900">John Lloyd Mortel</span>
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          A passionate Web Developer crafting clean, responsive, and
          user-focused websites.
        </p>
        <p className="max-w-xl text-gray-500 mb-6">
          I specialize in building modern web applications with a focus on
          performance, accessibility, and elegant design. I enjoy turning ideas
          into interactive digital experiences using technologies like
          JavaScript, React, and PHP.
        </p>
        <a
          href="#projects"
          className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-xl font-medium transition"
        >
          View My Projects
        </a>
      </section>
    </div>
  );
}

export default Home;
