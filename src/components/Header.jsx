import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const reloadPage = () => {
    window.location.href = "/";
  };

  return (
    <header  className="sticky top-0 bg-white z-10 ">
      <div className="p-4 flex justify-between items-center max-w-6xl mx-auto">

        <div data-aos="fade-right" className="w-10 h-10 cursor-pointer" onClick={reloadPage}>
          <img src="./jlm.png" alt="" className="" />
        </div>

        
        <button data-aos="fade-left"
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-2xl focus:outline-none"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav data-aos="fade-down" className="hidden sm:flex">
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li><a href="#home" className="hover:text-blue-500 transition">Home</a></li>
            <li><a href="#projects" className="hover:text-blue-500 transition">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-500 transition">Skills</a></li>
            <li><a href="#about" className="hover:text-blue-500 transition">About</a></li>
            <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
          </ul>
        </nav>
      </div>

      {menuOpen && (
        <nav className="sm:hidden bg-white border-t border-gray-100">
          <ul className="flex flex-col items-center gap-1 text-gray-700 font-medium">
            <li className="w-full text-center hover:bg-gray-200 p-2"><a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition">Home</a></li>
            <li className="w-full text-center hover:bg-gray-200 p-2"><a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition">Projects</a></li>
            <li className="w-full text-center hover:bg-gray-200 p-2"><a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition">Skills</a></li>
            <li className="w-full text-center hover:bg-gray-200 p-2"><a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition">About</a></li>
            <li className="w-full text-center hover:bg-gray-200 p-2"><a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition">Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
