import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode')
    if (savedDarkMode === 'enabled') {
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    // Apply dark mode class to body
    if (darkMode) {
      document.body.classList.add('dark-mode')
      localStorage.setItem('darkMode', 'enabled')
    } else {
      document.body.classList.remove('dark-mode')
      localStorage.setItem('darkMode', 'disabled')
    }
  }, [darkMode])

  return (
    <div className="wrapper">
      <div className="container">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <HeroSection />
      </div>
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
