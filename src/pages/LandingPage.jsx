import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "../assets/image.jpg";
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project3.png";
import { Code, Palette, Globe } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css"; // Impor CSS AOS

export default function LandingPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inisialisasi AOS dengan durasi animasi
  }, []);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="container mx-auto p-12 pt-32">
        <div className="flex flex-wrap items-center justify-between">
          {/* Text Section */}
          <div className="w-full md:w-1/2 p-10" data-aos="fade-down">
            <h1 className="text-4xl font-bold text-gray-900">
              Shela Widiya Sari
            </h1>
            <p className="text-xl mt-2 text-gray-600">
              Hello, I'm a Freelance Web Developer
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 p-4" data-aos="fade-left">
            <img
              src={Image}
              className="w-full h-auto md:max-w-md"
              alt="Shela Widiya Sari"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-indigo-300">
        <div className="text-center py-10">
          <h1 className="text-3xl font-bold text-gray-900" data-aos="zoom-in">
            About Me
          </h1>
          <p className="text-lg mt-2 text-gray-700 max-w-2xl mx-auto" data-aos="fade-up">
            I am a freelance web developer with a passion for responsive and
            interactive web design. Armed with expertise in HTML, CSS,
            JavaScript, React, and other modern frameworks, I focus on providing
            an optimal user experience on every project I work on.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900" data-aos="fade-up">
            My Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Web Development Skill */}
            <div className="text-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in">
              <Code className="h-16 w-16 mx-auto mb-4 text-indigo-500" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Web Development
              </h3>
              <p className="text-gray-600">HTML, CSS, JavaScript, React, Laravel</p>
            </div>

            {/* Web Design Skill */}
            <div className="text-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in">
              <Palette className="h-16 w-16 mx-auto mb-4 text-indigo-500" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Web Design
              </h3>
              <p className="text-gray-600">UI/UX, Responsive Design, Figma</p>
            </div>

            {/* SEO Optimization Skill */}
            <div className="text-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in">
              <Globe className="h-16 w-16 mx-auto mb-4 text-indigo-500" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                SEO Optimization
              </h3>
              <p className="text-gray-600">On-page SEO, Performance Optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section id="projects" className="py-20 bg-indigo-300">
        <div className="container mx-auto px-4 pt-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900" data-aos="fade-down">
            Recent Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300" data-aos="flip-right">
              <img
                src={Project1}
                alt="Project One"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Quranify
                </h3>
                <p className="text-gray-600 mb-4">
                  Website untuk membuka al-quran secara online
                </p>
                <a
                  href="https://alquranify.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300" data-aos="flip-right">
              <img
                src={Project2}
                alt="Project Two"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  BiFlight
                </h3>
                <p className="text-gray-600 mb-4">
                  Website untuk pembelian tiket pesawat
                </p>
                <a
                  href="https://biflight.pro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300" data-aos="flip-right">
              <img
                src={Project3}
                alt="Project Three"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Capable
                </h3>
                <p className="text-gray-600 mb-4">
                  Website untuk membantu anak-anak berkebutuhan khusus
                </p>
                <a
                  href="https://www.capable.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
