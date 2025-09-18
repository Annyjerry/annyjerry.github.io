import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './navbar.jsx'
import Hero from './hero.jsx'
import Skills from './skills.jsx'
import Portfolio from './portfolio.jsx'
import About from './about.jsx'
import Contact from './contact.jsx'
import Process from './process.jsx'
import Footer from './footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Skills />
    <Portfolio />
    <Process />
    
    <About />
    <Contact />
    <Footer />
  </StrictMode>,
)
