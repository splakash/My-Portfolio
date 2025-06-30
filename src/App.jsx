import About from "./components/About"
import Navigation from "./components/Navigation"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
function App() {

  return (
    
      <div className="min-h-screen bg-gray-900 text-transparent">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
    
  )
}

export default App
