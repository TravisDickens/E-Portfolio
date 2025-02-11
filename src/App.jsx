import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function EPortfolio() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center p-6">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full bg-white shadow-md py-4 px-8 flex justify-between items-center z-50"
      >
        <h1 className="text-2xl font-bold text-gray-900">TD</h1>
        <div className="space-x-6">
          <a href="#about" className="text-gray-700 hover:text-blue-500 transition">About</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-500 transition">Projects</a>
          <a href="#skills" className="text-gray-700 hover:text-blue-500 transition">Skills</a>
          <a href="#courses" className="text-gray-700 hover:text-blue-500 transition">Courses</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500 transition">Contact</a>
          <a
            href="https://drive.google.com/file/d/1rDv7MUR02V3O6q8nY8rtdZ_IvWWYKewS/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-500 transition font-semibold"
          >
            Resume
          </a>
        </div>
      </motion.nav>


      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mt-24"
      >
        <h1 className="text-6xl font-bold text-gray-900 drop-shadow-lg">Hi, I am Travis Dickens</h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl font-medium  mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
        >
          Software Developer
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-5xl w-full mt-14"
        id="about"
      >
        <Card className="shadow-2xl rounded-3xl p-8 bg-white hover:shadow-3xl transition">
          <CardContent>
            <h2 className="text-3xl text-center font-bold text-gray-900">About Me</h2>

            <p className="text-lg text-gray-700 mt-4 leading-relaxed">
              I am a dedicated and passionate software developer with expertise in both front-end and back-end technologies. With a strong focus on creating modern, user-centric digital experiences, I specialize in delivering intuitive, seamless interfaces and robust, scalable back-end solutions.   <br /><br />
              Driven by a passion for innovation, I thrive in Agile environments, embracing collaboration and continuous learning. Whether I’m debugging complex issues or managing projects from inception to completion, I always prioritize quality code, creative problem-solving, and a user-first approach. I’m constantly exploring new technologies and design patterns to stay ahead of industry trends and push the boundaries of what’s possible.
              <br /><br />
              For me, software development is about more than just solving problems—it's about crafting meaningful, engaging experiences that make an impact. I’m known for my resilience, adaptability, and commitment to personal growth, always eager to take on new challenges and expand my skill set. As I continue to evolve in my career, I’m excited to contribute to forward-thinking projects that shape the future of technology.
            </p>

          </CardContent>
        </Card>
      </motion.div>
      <motion.div


        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-5xl w-full mt-10"
        id="projects"
      >
        <Card className="shadow-2xl rounded-3xl p-8 bg-white hover:shadow-3xl transition">
          <CardContent>
            <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
            <p className="text-lg text-gray-700 mt-4 leading-relaxed">
              Explore a collection of my work, featuring innovative solutions and modern design implementations.
            </p>
            <div className="mt-6 flex flex-wrap gap-6">
              {[
                { title: 'Fitness App (INSHAPE)', description: 'A mobile app to track fitness goals, calories, hydration, and workouts.', link: 'https://github.com/TravisDickens/InShape' },
                { title: 'ILK Foundation', description: 'Website for the ILK Foundation, focusing on community development and social impact initiatives.', link: 'https://ilkfoundation.co.za/' },
                { title: 'Municipality Reporting App', description: 'A C# application for reporting issues and tracking service requests for municipalities.', link: 'https://github.com/TravisDickens/Municipality-Application.git' },

              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                >
                  <div className="bg-white text-black rounded-lg shadow-xl p-6 hover:shadow-2xl transition outline">
                    <h3 className="font-semibold text-lg text-gray-900">{project.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">{project.description}</p>
                    <Button
                      variant="link"
                      className="text-blue-500 mt-4 hover:text-blue-700"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      View Project
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>


      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-5xl w-full mt-10"
        id="skills"
      >
        <Card className="shadow-2xl rounded-3xl p-8 bg-white hover:shadow-3xl transition">
          <CardContent>
            <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
            <div className="flex flex-wrap gap-4 mt-6">
              {[
                'HTML', 'CSS', 'JavaScript', 'Java', 'C#', '.NET', 'Springboot', 'Kotlin', 'Mongo', 'React.js', 'Express.js',
                'Node.js', 'Tailwind CSS', 'Chakra UI', 'Shadcn UI', 'Azure', 'Cloud Development', 'REST API', 'Firebase', 'MongoDB', 'PL/SQL', 'MYSQL', 'GitHub',
                'Git', 'XML', 'XAML', 'WPF', 'ASP.NET', 'SQL Server', 'SQL Server Management Studio',
                'API Integrations', 'Agile', 'SDLC', 'Cyber Security'
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="px-5 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="max-w-5xl w-full mt-10"
        id="courses"
      >
        <Card className="shadow-2xl outlinerounded-3xl p-8 bg-white hover:shadow-3xl transition">
          <CardContent>
            <h2 className="text-3xl font-bold text-gray-900">Courses</h2>
            <div className="mt-6  flex flex-wrap gap-6">

              {[
                { title: 'Introduction to Cyber Security', provider: 'Cisco', link: 'https://www.credly.com/badges/7428be95-8f25-444a-bdec-86a48f8c5361/public_url' },
                { title: 'JavaScript Essentials 1', provider: 'Cisco', link: 'https://www.credly.com/badges/f431aeb9-8319-4591-803f-dcaf539f85fd/public_url' },
                { title: 'JavaScript Essentials 2', provider: 'Cisco', link: 'https://www.credly.com/badges/d979f8a7-52a9-4d35-9938-5c058b0ab816/public_url' },

              ].map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                >
                  <div className=" text-black outline p-4 rounded-lg shadow-lg hover:bg-gray-100 transition">
                    <h3 className="font-semibold">{course.title}</h3>
                    <p className="text-sm mt-2">{course.provider}</p>
                    <Button
                      variant="link"
                      className="text-blue-500 mt-4 hover:text-blue-700"
                      onClick={() => window.open(course.link, "_blank")}
                    >
                      View Course
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>


      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="max-w-5xl w-full mt-12 flex flex-col items-center gap-4"
        id="contact"
      >
        <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
        <div className="flex gap-6">
          <Button
            variant="outline"
            className="px-6 py-3 rounded-lg text-lg shadow-lg hover:shadow-xl transition"
            onClick={() => window.open("https://github.com/TravisDickens", "_blank")}
          >
            <Github className="mr-2" /> GitHub
          </Button>

          <Button
            variant="outline"
            className="px-6 py-3 rounded-lg text-lg shadow-lg hover:shadow-xl transition"
            onClick={() => window.open("https://www.linkedin.com/in/travis-dickens-010a84250", "_blank")}
          >
            <Linkedin className="mr-2" /> LinkedIn
          </Button>

          <Button
            variant="outline"
            className="px-6 py-3 rounded-lg text-lg shadow-lg hover:shadow-xl transition"
            onClick={() => window.open("mailto:Travis.Dickens@outlook.com", "_blank")}
          >
            <Mail className="mr-2" /> Contact Me
          </Button>

        </div>
      </motion.div>


    </div>
  );
}
