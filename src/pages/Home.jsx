import { useState, useEffect } from 'react';

function Home() {
  const roles = [
    "Web Developer",
    "UI/UX Designer",
    "Full Stack Developer",
    "Tech Enthusiast"
  ];
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setRoleIndex((roleIndex + 1) % roles.length);
        setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <div
      id="home"
      className="min-h-screen flex justify-center items-center bg-white dark:bg-gray-800 transition-all duration-300"
    >
      <section data-aos="zoom-out" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-6xl font-bold mb-4 text-gray-900 dark:text-white">
          Hi, I'm <span className="text-blue-800 ">John Lloyd Mortel</span>
        </h1>
        
        <div className="h-12 mb-6">
          <p className="text-2xl font-semibold text-blue-800 min-h-[2.5rem] flex items-center justify-center">
            {displayText}<span className="animate-pulse">|</span>
          </p>
        </div>

        <p className="text-lg text-gray-600 mb-4 dark:text-gray-300 max-w-xl">
          A passionate Web Developer crafting clean, responsive, and
          user-focused websites.
        </p>
        <p className="max-w-xl text-gray-500 mb-8 dark:text-gray-400">
          I specialize in building modern web applications with a focus on
          performance, accessibility, and elegant design. I enjoy turning ideas
          into interactive digital experiences using technologies like
          JavaScript, React, and PHP.
        </p>
        <a
          href="#projects"
          className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-medium transition duration-300 transform hover:-translate-y-1"
        >
          View My Projects
        </a>
      </section>
    </div>
  );
}

export default Home;
