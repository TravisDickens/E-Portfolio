# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const treeParticles = Array.from({ length: 75 }, () => ({
      x: Math.random() * window.innerWidth,
      y: window.innerHeight,
      radius: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 1,
      dy: -Math.random() * 1.5 - 0.5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      treeParticles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#e63946";
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;

        if (p.y < 0 || p.x < 0 || p.x > canvas.width) {
          p.x = Math.random() * window.innerWidth;
          p.y = window.innerHeight;
        }
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    draw();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const sections = ["About", "Projects", "Skills", "Courses"];

  return (
    <div className="relative min-h-screen bg-[#1a1a1a] text-white overflow-x-hidden">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-0"
      ></canvas>

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full bg-[#121212] bg-opacity-90 shadow-md py-4 px-8 flex justify-between items-center z-50"
      >
        <h1 className="text-2xl font-bold text-[#e63946]">TD</h1>
        <div className="space-x-6">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-[#e63946] transition"
            >
              {item}
            </a>
          ))}
        </div>
      </motion.nav>

      <section className="flex flex-col items-center justify-center h-screen text-center px-4 z-10 relative">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold text-[#f1faee]"
        >
          Hi, I'm Travis Dickens
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-2xl md:text-3xl font-medium mt-4 text-[#e63946]"
        >
          Software Developer
        </motion.p>
      </section>

      <section
        id="about"
        className="min-h-screen flex flex-col justify-center items-center px-8 py-20 relative z-10 max-w-4xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold text-[#e63946] mb-6 self-start"
        >
          About Me
        </motion.h2>
        <div className="text-left space-y-4 text-lg text-gray-300">
          <p>
            I am a dedicated passionate software developer, with expertise in both front-end and back-end technologies. Driven by a passion for innovation, I thrive in Agile environments, embracing collaboration and continuous learning.
          </p>
          <p>
            Currently a student at [Office Fairice] with experience in developing creative solutions. I'm constantly evolving with resilience, adaptability, and commitment to personal growth and business trust.
          </p>
          <p>
            For me, software development is more than just coding - it's a commitment to personal growth and creating impactful solutions. I'm known for resilience, adaptability, and commitment to personal growth, and using my skills to communicate effectively through ongoing experiences that motivate and inspire.
          </p>
        </div>
      </section>

      <section
        id="projects"
        className="min-h-screen flex flex-col justify-center items-center px-8 py-20 relative z-10 max-w-4xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold text-[#e63946] mb-6 self-start"
        >
          Projects
        </motion.h2>
        <div className="w-full text-left">
          <p className="text-lg text-gray-300 mb-8">
            Explore a collection of my work, featuring innovative solutions and modern design implementations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#252525] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#e63946] mb-2">Fitness App (INSHAPE)</h3>
              <p className="text-gray-300 mb-4">
                A mobile app to track fitness goals, calories, hydration, and workouts.
              </p>
              <button className="text-[#e63946] hover:underline">View Project</button>
            </div>
            
            <div className="bg-[#252525] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#e63946] mb-2">ILX Foundation</h3>
              <p className="text-gray-300 mb-4">
                Website for the ILX Foundation, focusing on community work and social impact solutions.
              </p>
              <button className="text-[#e63946] hover:underline">View Project</button>
            </div>
            
            <div className="bg-[#252525] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#e63946] mb-2">Municipality Reporting APP</h3>
              <p className="text-gray-300 mb-4">
                A C# application for reporting issues for municipalities.
              </p>
              <button className="text-[#e63946] hover:underline">View Project</button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="min-h-screen flex flex-col justify-center items-center px-8 py-20 relative z-10 max-w-4xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold text-[#e63946] mb-6 self-start"
        >
          Skills
        </motion.h2>
        <div className="w-full">
          <div className="flex flex-wrap gap-2">
            <span className="bg-[#252525] px-4 py-2 rounded-full text-gray-300">HTML</span>
            <span className="bg-[#252525] px-4 py-2 rounded-full text-gray-300">CSS</span>
            <span className="bg-[#252525] px-4 py-2 rounded-full text-gray-300">JavaScript</span>
            <span className="bg-[#252525] px-4 py-2 rounded-full text-gray-300">Java</span>
            <span className="bg-[#252525] px-4 py-2 rounded-full text-gray-300">C#</span>
            <span className="bg-[#252525] px-4 py-2 rounded-full text-gray-300">Springboot</span>
            <span className="bg-[#252525] px-4 py-2 rounded-full text-gray-300">Express.js</span>
            <span className="bg-[#252525] px-4 py-2 rounded-full text-gray-300">Kotlin</span>
            <span className="bg-[#252525] px-4 py-2 rounded-full text-gray-300">Node.js</span>
            <span className="bg-[#252525] px-4 py-2 rounded-full text-gray-300">Tailwind CSS</span>
            <span className="bg-[#252525] px-4 py-2 rounded-full text-gray-300">Chakra UI</span>
            <span className="bg-[#252525] px-4 py-2 rounded-full text-gray-300">Azure</span>
            <span className="bg-[#252525] px-4 py-2 rounded-full text-gray-300">Cloud Development</span>
            <span className="bg-[#252525] px-4 py-2 rounded-full text-gray-300">REST API</span>
            <span className="bg-[#252525] px-4 py-2 rounded-full text-gray-300">Firebase</span>
            <span className="bg-[#252525] px-4 py-2 rounded-full text-gray-300">MongoDB</span>
            <span className="bg-[#252525] px-4 py-2 rounded-full text-gray-300">SQL</span>
            <span className="bg-[#252525] px-4 py-2 rounded-full text-gray-300">MySQL</span>
            <span className="bg-[#252525] px-4 py-2 rounded-full text-gray-300">GitHub</span>
            <span className="bg-[#252525] px-4 py-2 rounded-full text-gray-300">Git</span>
            <span className="bg-[#252525] px-4 py-2 rounded-full text-gray-300">XML</span>
            <span className="bg-[#252525] px-4 py-2 rounded-full text-gray-300">XAML</span>
            <span className="bg-[#252525] px-4 py-2 rounded-full text-gray-300">WPF</span>
            <span className="bg-[#252525] px-4 py-2 rounded-full text-gray-300">API Integrations</span>
            <span className="bg-[#252525] px-4 py-2 rounded-full text-gray-300">Agile</span>
            <span className="bg-[#252525] px-4 py-2 rounded-full text-gray-300">SDLC</span>
            <span className="bg-[#252525] px-4 py-2 rounded-full text-gray-300">Cyber Security</span>
          </div>
        </div>
      </section>

      <section
        id="courses"
        className="min-h-screen flex flex-col justify-center items-center px-8 py-20 relative z-10 max-w-4xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold text-[#e63946] mb-6 self-start"
        >
          Courses
        </motion.h2>
        <div className="w-full text-left">
          <p className="text-lg text-gray-300 mb-8">
            Feel free to reach out to me via any platforms below.
          </p>
          <ul className="space-y-4 text-lg text-gray-300">
            <li>Introduction to JavaScript</li>
            <li>JavaScript Essentials 1</li>
            <li>C# Basic</li>
          </ul>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-400 relative z-10">
        <p>© {new Date().getFullYear()} Travis Dickens. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;


*************************************************************************************************************************************************

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const App = () => {
  const sections = ["About", "Projects", "Skills", "Courses", "Contact"];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <div className="space-y-6 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold"
          >
            Hi, I'm <span className="text-blue-600">Travis Dickens</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-2xl md:text-3xl font-medium text-gray-600"
          >
            Software Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <Button variant="default" size="lg">
              View Resume
            </Button>
            <Button variant="outline" size="lg">
              Contact Me
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                I am a dedicated and passionate software developer with expertise in both front-end and back-end technologies. With a strong focus on creating modern, user-centric digital experiences.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Driven by a passion for innovation, I thrive in Agile environments, embracing collaboration and continuous learning. Whether I'm debugging complex issues or managing projects from inception to completion.
              </p>
              <p className="text-lg text-gray-700">
                For me, software development is about more than just solving problems. It's about crafting meaningful, engaging experiences that make an impact.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 h-full flex items-center justify-center">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Full Stack Development</h3>
                    <p className="text-gray-600">Frontend & Backend solutions</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Clean Code</h3>
                    <p className="text-gray-600">Readable and maintainable</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Problem Solving</h3>
                    <p className="text-gray-600">Creative solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Projects
          </motion.h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Explore a collection of my work, featuring innovative solutions and modern design implementations.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Fitness App (INSHAPE)</CardTitle>
                <CardDescription>A mobile app to track fitness goals, calories, hydration, and workouts.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline">View Project</Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>ILX Foundation</CardTitle>
                <CardDescription>Website for the ILX Foundation, focusing on community development and social impact initiatives.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline">View Project</Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Municipality Reporting App</CardTitle>
                <CardDescription>A C# application for reporting issues and tracking service requests for municipalities.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline">View Project</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Skills
          </motion.h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Frontend</h3>
              <ul className="space-y-1 text-gray-700">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Backend</h3>
              <ul className="space-y-1 text-gray-700">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Java</li>
                <li>C#</li>
                <li>Springboot</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Databases</h3>
              <ul className="space-y-1 text-gray-700">
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>PL/SQL</li>
                <li>Firebase</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Other</h3>
              <ul className="space-y-1 text-gray-700">
                <li>Git/GitHub</li>
                <li>REST API</li>
                <li>Azure</li>
                <li>Agile</li>
                <li>Cyber Security</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Courses
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Introduction to Cyber Security</CardTitle>
                <CardDescription>Cisco</CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>JavaScript Essentials 1</CardTitle>
                <CardDescription>Cisco</CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>JavaScript Essentials 2</CardTitle>
                <CardDescription>Cisco</CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>C# Basic</CardTitle>
                <CardDescription>HackerRank</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Get in Contact
          </motion.h2>
          
          <div className="flex flex-col items-center">
            <p className="text-lg text-gray-600 mb-8 max-w-2xl text-center">
              Feel free to reach out to me via any platforms below.
            </p>
            
            <div className="flex gap-6">
              <Button variant="outline" size="lg" className="gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </Button>
              
              <Button variant="outline" size="lg" className="gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </Button>
              
              <Button variant="outline" size="lg" className="gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-gray-300">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} Travis Dickens. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            {sections.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
