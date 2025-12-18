function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div data-aos="zoom-in" className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-2 text-gray-900">Let's Connect</h2>
        <div className="h-0.5 w-80 bg-blue-800 mx-auto mb-8 rounded-full"></div>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto leading-relaxed">
          I’m always open to new opportunities, collaborations, or just a
          friendly chat. Feel free to reach out and I’ll get back to you as soon
          as I can.
        </p>

        <div data-aos="fade-up" className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          <a
            href="mailto:jlmm101903@gmail.com"
            className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-2 rounded-lg font-medium transition duration-300"
          >
            Send me an Email
          </a>

          <a
            href="https://github.com/johndev08"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-gray-300 hover:border-blue-800 hover:bg-blue-50 text-gray-900 px-8 py-2 rounded-lg font-medium transition duration-300"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/john-lloyd-mortel-a9bab8379/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-gray-300 hover:border-blue-800 hover:bg-blue-50 text-gray-900 px-8 py-2 rounded-lg font-medium transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/jlmortz08"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-gray-300 hover:border-blue-800 hover:bg-blue-50 text-gray-900 px-8 py-2 rounded-lg font-medium transition duration-300"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/jlmortz_08/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-gray-300 hover:border-blue-800 hover:bg-blue-50 text-gray-900 px-8 py-2 rounded-lg font-medium transition duration-300"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
