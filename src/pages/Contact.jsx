function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Let’s Connect</h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto leading-relaxed">
          I’m always open to new opportunities, collaborations, or just a
          friendly chat. Feel free to reach out and I’ll get back to you as soon
          as I can.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="mailto:jlmm101903@gmail.com"
            className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-xl font-medium transition"
          >
            Send me an Email
          </a>

          <a
            href="https://github.com/johndev08"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition font-medium"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/john-lloyd-mortel-a9bab8379/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition font-medium"
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/jlmortz08"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition font-medium"
          >
            FaceBook
          </a>
          <a
            href="https://www.instagram.com/jlmortz_08/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition font-medium"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
