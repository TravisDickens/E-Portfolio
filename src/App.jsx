import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { Typewriter } from 'react-simple-typewriter';
import { useEffect } from "react";


export default function EPortfolio() {
  
useEffect(() => {
  const canvas = document.getElementById("fractalTree");
  const ctx = canvas.getContext("2d");

  function drawTree(x, y, angle, depth, branchWidth, color1, color2) {
    if (depth === 0) return;

    const xEnd = x + Math.cos(angle) * depth * 7; // shorter branches
    const yEnd = y + Math.sin(angle) * depth * 7;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(xEnd, yEnd);
    ctx.strokeStyle = depth < 3 ? color2 : color1;
    ctx.lineWidth = branchWidth;
    ctx.stroke();

    drawTree(xEnd, yEnd, angle - 0.4, depth - 1, branchWidth * 0.7, color1, color2);
    drawTree(xEnd, yEnd, angle + 0.4, depth - 1, branchWidth * 0.7, color1, color2);
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height); // start at bottom center
  drawTree(0, 0, -Math.PI / 2, 8, 6, "#E84A27", "#D63E1A"); // reduced depth & width
  ctx.restore();
}, []);



  return (
    <div className="relative min-h-screen bg-[#0D0D0D] text-gray-200 flex flex-col items-center p-6 overflow-hidden">
    

      {/* == Navbar == */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 w-full bg-[#1A1A1A] bg-opacity-80 border-b border-gray-800 py-4 px-8 flex justify-between items-center z-50"
      >
        <h1 className="text-2xl font-bold">TD</h1>
        <div className="space-x-6 text-gray-200">
          {["about", "projects", "skills", "courses", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="hover:text-[#E84A27] transition"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <a
            href="https://drive.google.com/…"
            target="_blank"
            rel="noopener"
            className="font-semibold hover:text-[#E84A27] transition"
          >
            Resume
          </a>
        </div>
      </motion.nav>

      {/* == Hero == */}
    <div className="relative w-full h-screen overflow-hidden">
  
  
  {/* Hero Content */}
 <motion.div
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center"
>
  {/* Fractal Tree Canvas */}
  <canvas
    id="fractalTree"
    className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10"
    width={600}
    height={400}
  ></canvas>

   <motion.h1
  initial={{ scale: 0.8 }}
  animate={{ scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="text-7xl font-extrabold text-white neonText mb-4 mt-20"
>
  Hi, I’m{" "}
  <span className="text-[#E84A27]">
    <Typewriter
      words={['Travis Dickens']}
      loop={false}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span>
</motion.h1>

   <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6, duration: 0.8 }}
  className="text-xl text-gray-400 mb-8"
>
  <span className="block text-2xl md:text-3xl  font-medium bg-gradient-to-r from-[#E84A27] to-[#D63E1A] text-transparent bg-clip-text mb-8">

    Software Developer
  </span>
{/* 
  <span className="inline-block text-lg md:text-xl text-gray-300 font-mono">
    I build{" "}
    <span className="text-[#E84A27]">
      <Typewriter
        words={['full-stack Applications.', 'secure APIs.', 'intuitive UIs.', 'cloud solutions.']}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </span>
  </span>
   */}
</motion.p>


    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
    >
    
    </motion.div>
  </motion.div>
</div>


      {/* == Sections Wrapper == */}
      {[
        {
          id: "about",
          title: "About Me",
          body: (
            <>
              <p className="text-lg leading-relaxed">
              I am a dedicated and passionate software developer with expertise in both front-end and back-end technologies. With a strong focus on creating modern, user-centric digital experiences, I specialize in delivering intuitive, seamless interfaces and robust, scalable back-end solutions.   <br /><br />
              Driven by a passion for innovation, I thrive in Agile environments, embracing collaboration and continuous learning. Whether I’m debugging complex issues or managing projects from inception to completion, I always prioritize quality code, creative problem-solving, and a user-first approach. I’m constantly exploring new technologies and design patterns to stay ahead of industry trends and push the boundaries of what’s possible.
              <br /><br />
              For me, software development is about more than just solving problems. it's about crafting meaningful, engaging experiences that make an impact. I’m known for my resilience, adaptability, and commitment to personal growth, always eager to take on new challenges and expand my skill set. As I continue to evolve in my career, I’m excited to contribute to forward-thinking projects that shape the future of technology.

              </p>
            </>
          ),
        },
       {
      id: "projects",
      title: "Projects",
      body: (
        <div className="mt-6 flex flex-wrap gap-6">
          {[
            {
              title: "Fitness App (INSHAPE)",
              desc: "A mobile app to track fitness goals, calories, hydration, and workouts",
              link: "https://github.com/TravisDickens/InShape",
            },
            {
              title: "ILK Foundation",
              desc: "Website for the ILK Foundation, focusing on community development and social impact initiatives.",
              link: "https://ilkfoundation.co.za/",
            },
            {
              title: "Municipality App",
              desc: "A C# application for reporting issues and tracking service requests for municipalities.",
              link: "https://github.com/TravisDickens/Municipality-Application.git",
            },
          ].map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 aspect-square"
            >
              <Card className="bg-[#0D0D0D] border border-gray-800 rounded-3xl p-6 hover:shadow-xl transition h-full flex flex-col">
                <CardContent className="flex flex-col flex-1">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-200">
                      {p.title}
                    </h3>
                    <p className="text-sm mt-2 text-gray-400">{p.desc}</p>
                  </div>
                  <Button
                    variant="link"
                    className="mt-auto text-gray-200 hover:text-[#D63E1A] transition"
                    onClick={() => window.open(p.link, "_blank")}
                  >
                    View Project
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      ),
    },
        {
          id: "skills",
          title: "Skills",
          body: (
            <div className="flex flex-wrap gap-4 mt-4">
              {[
                 'HTML', 'CSS', 'JavaScript', 'Java', 'C#', '.NET', 'Springboot', 'Kotlin', 'Mongo', 'React.js', 'Express.js',
                 'Node.js', 'Tailwind CSS', 'Chakra UI', 'Shadcn UI', 'Azure', 'Cloud Development', 'REST API', 'Firebase', 'MongoDB', 'PL/SQL', 'MYSQL', 'GitHub',
                 'Git', 'XML', 'XAML', 'WPF', 'ASP.NET', 'SQL Server', 'SQL Server Management Studio',
                 'API Integrations', 'Agile', 'SDLC', 'Cyber Security',
              ].map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="px-4 py-2 border border-gray-700 rounded-full text-sm text-gray-200 hover:border-[#E84A27] hover:text-[#E84A27] transition"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          ),
        },
        {
          id: "courses",
          title: "Courses",
          body: (
            <div className="mt-6 flex flex-wrap gap-6">
              {[
                {
                  title: "Introduction to Cyber Security",
                  prov: "Cisco",
                  link:
                    "https://www.credly.com/badges/7428be95-8f25-444a-bdec-86a48f8c5361",
                },
                {
                  title: "JavaScript Essentials 1",
                  prov: "Cisco",
                  link:
                    "https://www.credly.com/badges/f431aeb9-8319-4591-803f-dcaf539f85fd",
                },
                {
                  title: "JavaScript Essentials 2",
                  prov: "Cisco",
                  link:
                    "https://www.credly.com/badges/d979f8a7-52a9-4d35-9938-5c058b0ab816/public_url",
                },
                {
                  title: "C# Basic",
                  prov: "HackerRank",
                  link:
                    "https://www.hackerrank.com/certificates/68c1f344ea96",
                },
                {
                  title: "Software Engineer",
                  prov: "HackerRank",
                  link:
                    "https://www.hackerrank.com/certificates/7056228840d1",
                },
              ].map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-48"
                >
                  <Card className="bg-[#0D0D0D] border border-gray-800 rounded-3xl p-4 hover:shadow-xl transition h-full flex flex-col">
                    <CardContent className="flex flex-col flex-1">
                      <div>
                        <h3 className="font-semibold text-gray-200 text-base">
                          {c.title}
                        </h3>
                        <p className="text-sm mt-1 text-gray-400">{c.prov}</p>
                      </div>
                      <Button
                        variant="link"
                        className="mt-auto text-gray-200 hover:text-[#D63E1A] transition text-sm"
                        onClick={() => window.open(c.link, "_blank")}
                      >
                        View Course
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ),
        },
        
        
        {
          id: "contact",
          title: "Get in Contact",
          body: (
            
            
            <div className="mt-6 flex flex-wrap justify-center gap-6">
              {[
                {
                  icon: <Github size={20} />,
                  label: "GitHub",
                  link: "https://github.com/TravisDickens",
                },
                {
                  icon: <Linkedin size={20} />,
                  label: "LinkedIn",
                  link: "https://www.linkedin.com/in/travis-dickens-010a84250",
                },
                {
                  icon: <Mail size={20} />,
                  label: "Email",
                  link: "mailto:Travis.Dickens@outlook.com",
                },
              ].map((c) => (
                <Button
                  key={c.label}
                  variant="outline"
                  className="
                    flex items-center space-x-2
                    border border-gray-700
                    bg-transparent
                    text-gray-200
                    hover:border-[#E84A27]
                    hover:text-[#E84A27]
                    hover:bg-transparent
                    transition
                  "
                  onClick={() => window.open(c.link, "_blank")}
                >
                  {c.icon}
                  <span>{c.label}</span>
                </Button>
              ))}
            </div>
          ),
        },
        
      ].map((section, idx) => (
        <motion.section
        key={section.id}
        id={section.id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
        className="max-w-5xl w-full mt-16"
      >
        <h2
          className={`text-3xl font-bold text-[#E84A27] mb-4 ${
            section.id === "contact" ? "text-center" : ""
          }`}
        >
          {section.title}
        </h2>
        {section.body}
      </motion.section>
      ))}
    </div>
  );
}
