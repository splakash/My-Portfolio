import { Calendar, MapPin, Briefcase } from "lucide-react";

const WorkExperience = () => {
  const experiences = [
    {
      title: "Assistant System Engineer",
      company: "Tata Consultancy Services.",
      location: "Banglore, India",
      period: "April 2025 - Present",
      description: [],
      technologies: ["C#", "ASP.Net", "Microsoft Azure", "Nunit"],
    },
    {
      title: "AI /LLm Trainer",
      company: "Outlier",
      location: "Remote",
      period: "november 2024 - February 2025",
      description: [],
      technologies: ["GenAi", "LLm", "Prompt Engineering", "Problem Solving"],
    },
    {
      title: "Associate Developer Intern",
      company: "Streebo",
      location: "Banglore, India",
      period: "June 2024 - November 2024",
      description: [
        "hands-on experience in designing and integrating RESTful APIs for chatbot services across healthcare and banking domains.",
        "Worked on backend logic and API lifecycle management, including request/response handling, authentication, and third-party integrations.",
        "Optimized application performance resulting in 50% faster load times",
        "Integrated third-party APIs and payment processing systems",
      ],
      technologies: ["Vue.js", "Express.js", "MongoDB", "Stripe API", "Git"],
    },
    // {
    //   title: "Frontend Developer",
    //   company: "StartupHub",
    //   location: "Remote",
    //   period: "2024 - 2020",
    //   description: [
    //     "Built responsive web interfaces for early-stage startup products",
    //     "Worked closely with UX designers to implement modern design systems",
    //     "Contributed to open-source projects and internal component library",
    //     "Maintained 98% cross-browser compatibility across all projects",
    //   ],
    //   technologies: ["JavaScript", "SCSS", "Webpack", "Jest", "Figma"],
    // },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="lg:flex lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Briefcase className="w-5 h-5 text-cyan-400 mr-2" />
                    <h3 className="text-xl font-semibold text-white">
                      {experience.title}
                    </h3>
                  </div>
                  <h4 className="text-lg text-cyan-400 font-medium mb-3">
                    {experience.company}
                  </h4>
                  <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {experience.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {experience.location}
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {experience.description.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-gray-300 flex items-start"
                  >
                    <span className="text-cyan-400 mr-2 mt-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm border border-cyan-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
