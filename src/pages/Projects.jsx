// components/Projects.jsx
import React, { useState, useRef, useEffect } from "react";

function ProjectCard({ project }) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    // cleanup if component unmounts
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  const startCarousel = () => {
    if (!project.images || project.images.length <= 1) return;
    if (intervalRef.current) return; // already running
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % project.images.length);
    }, 2000); // change speed here (ms)
  };

  const stopCarousel = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setCurrent(0); // reset to first image (optional)
  };

  return (
    <div
      onMouseEnter={startCarousel}
      onMouseLeave={stopCarousel}
      onTouchStart={startCarousel}
      onTouchEnd={stopCarousel}
      className="bg-white rounded p-6  shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between cursor-pointer"
    >
      <div>
        {/* Image container: stack images on top of each other and fade via opacity */}
        <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
          {(project.images || []).map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`${project.title} screenshot ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                idx === current ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
            />
          ))}

          {/* Fallback if no images */}
          {(!project.images || project.images.length === 0) && (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
              No preview
            </div>
          )}
        </div>

        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>

        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {project.stack.map((tech, i) => (
            <span
              key={i}
              className="bg-white border border-gray-300 text-black text-sm font-medium px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-blue-800 hover:bg-blue-900 text-white px-5 py-2 rounded transition"
      >
        View on GitHub
      </a>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "Five Star Chicken",
      description:
        "A responsive landing page inspired by the Five Star Chicken brand in Dulangan San Luis Batangas.",
      stack: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/johndev08/FiveStarChicken",
      images: ["/images/01chicken.png", "/images/02chicken.png", "/images/03chicken.png", "/images/04chicken.png", "/images/05chicken.png"],
    },
    {
      title: "Balai De Claro",
      description: "A web app concept for browsing cotteges or room listings.",
      stack: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/johndev08/Balai",
      images: ["/images/06balai.png", "/images/07balai.png", "/images/08balai.png", "/images/09balai.png", "/images/10balai.png"],
    },
    {
      title: "Pasakay",
      description:
        "A driver-passenger system where drivers can grab passengers and prevent duplicates.",
      stack: ["HTML", "CSS", "PHP", "MySQL"],
      link: "https://github.com/johndev08/Pasakay",
      images: ["/images/14pasakay.png", "/images/16pasakay.png", "/images/17pasakay.png", "/images/18pasakay.png", "/images/19pasakay.png"],
    },
    {
      title: "Personal Website",
      description:
        "A clean, responsive portfolio built with React and Tailwind CSS to showcase my projects, skills, and contact details.",
      stack: ["React JS", "Tailwind CSS"],
      link: "https://github.com/johndev08/Pasakay",
      images: ["/images/21portfolio.png", "/images/22portfolio.png", "/images/pasakay3.png"],
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">My Projects</h2>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
