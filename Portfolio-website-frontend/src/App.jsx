import { useState } from "react";

function App() {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Change this to the actual path of your resume
    link.download = "Somanath_Maharana_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-screen w-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-slate-800 py-4 px-8 flex justify-between items-center shadow-md z-10">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">Somanath Maharana</h1>
          <button 
            onClick={handleResumeDownload} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Download Resume
          </button>
        </div>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-gray-400 cursor-pointer">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400 cursor-pointer">About</a></li>
          <li><a href="#projects" className="hover:text-gray-400 cursor-pointer">Projects</a></li>
          <li><a href="#skill-summary" className="hover:text-gray-400 cursor-pointer">Skill Summary</a></li>
          <li><a href="#contact" className="hover:text-gray-400 cursor-pointer">Contact</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-8">
        <h2 className="text-5xl font-bold">Hi, I'm Somanath Maharana</h2>
        <p className="text-lg mt-4 text-gray-300">A passionate Full-Stack Developer</p>
      </section>

      {/* About Section */}
      <section id="about" className="h-screen flex flex-col justify-center items-center px-8">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-300 max-w-2xl text-center">
          I'm a software developer with expertise in frontend and backend technologies. I love building scalable and user-friendly applications.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="h-screen flex flex-col justify-center items-center px-8">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">Project 1</h3>
            <p className="text-gray-300">Description of the project.</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">Project 2</h3>
            <p className="text-gray-300">Description of the project.</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">Project 3</h3>
            <p className="text-gray-300">Description of the project.</p>
          </div>
        </div>
      </section>

      {/* Skill Summary Section */}
      <section id="skill-summary" className="h-screen flex flex-col justify-center items-center px-8">
        <h2 className="text-4xl font-bold mb-4">Skill Summary</h2>
        <div className="grid grid-cols-4 gap-6">
          {[ 
            { src: "https://tse3.mm.bing.net/th?id=OIP.R8BX1SsHhpwgi4boNKS6OAHaFj&pid=Api&P=0&h=220", alt: "HTML" },
            { src: "https://tse4.mm.bing.net/th?id=OIP.owmQeY-CMXmx8j9ppMo3rgHaHa&pid=Api&P=0&h=220", alt: "CSS" },
            { src: "https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Emblem.png", alt: "JavaScript" },
            { src: "https://images.seeklogo.com/logo-png/35/2/tailwind-css-logo-png_seeklogo-354675.png?v=1957907763835204384", alt: "Tailwind CSS" },
            { src: "https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol-700x394.png", alt: "GitHub" },
            { src: "https://i0.wp.com/blog.zenika.com/wp-content/uploads/2016/04/spring-boot-logo-1.png?w=300&ssl=1", alt: "Spring Boot" },
            { src: "https://www.pngplay.com/wp-content/uploads/7/Mysql-Logo-PNG-Photos.png", alt: "MySQL" }
          ].map((skill, index) => (
            <div key={index} className="w-40 h-40 flex justify-center items-center bg-slate-800 rounded-lg shadow-md transition-transform transform hover:scale-125">
              <img src={skill.src} alt={skill.alt} className="h-24" />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="h-screen flex flex-col justify-center items-center px-8">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <form className="bg-slate-800 p-6 rounded-lg shadow-md w-96">
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Name</label>
            <input type="text" className="w-full p-2 rounded bg-slate-700 text-white focus:outline-none" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Gmail</label>
            <input type="email" className="w-full p-2 rounded bg-slate-700 text-white focus:outline-none" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea className="w-full p-2 rounded bg-slate-700 text-white focus:outline-none" placeholder="Your Message"></textarea>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">Send</button>
        </form>
      </section>
    </div>
  );
}

export default App;