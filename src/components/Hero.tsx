import ToggleText from './ToggleText';
import {  Linkedin, Mail, Download } from 'lucide-react';
import { Github } from 'lucide-react';
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Akash Kumar
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-4">
            <div><ToggleText/></div>
          </p>
          
          <p className="pt-6 text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Crafting exceptional digital experiences with modern technologies. 
            Passionate about Databases and Development, innovative solutions, and continuous learning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href='https://drive.google.com/file/d/1JZZ-NXenOpTf2ILbDEJaRKeL2jWTUwT8/view?usp=sharing' className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </a>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
             <a href='#projects'> View My Work</a>
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com/splakash" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/splakash26/" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="akashraj2726@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;