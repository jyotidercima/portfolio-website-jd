import { useState } from 'react'
import viteLogo from '/favicon.png'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="app">
        <Navbar />

        <div className="content">
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />

          </main>
          <div className="footer1">
            <Footer />
          </div>


        </div>
      </div>
    </>
  )
}

export default App
