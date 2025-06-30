import { Code, Coffee, Lightbulb } from 'lucide-react';

function About(){
    return (
        <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Hello! I'm a passionate full-stack developer, Spring boot developer
              building web applications. I love turning complex problems into simple, 
              beautiful, and intuitive solutions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the 
              developer community.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-colors duration-300">
                <Code className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Clean Code</h3>
                <p className="text-gray-400 text-sm">Writing maintainable and scalable code</p>
              </div>
              <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-colors duration-300">
                <Lightbulb className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-gray-400 text-sm">Always exploring new technologies</p>
              </div>
              <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-colors duration-300">
                <Coffee className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Dedication</h3>
                <p className="text-gray-400 text-sm">Committed to delivering excellence</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-2xl p-8 border border-gray-700">
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Quick Facts</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex justify-between">
                    <span>Experience:</span>
                    <span className="text-cyan-400"> &lt; 1 Years</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Projects Completed:</span>
                    <span className="text-cyan-400">10+</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Technologies:</span>
                    <span className="text-cyan-400">15+</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Location:</span>
                    <span className="text-cyan-400">Banglore India</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default About