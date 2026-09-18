import { ThemeProvider } from './context/ThemeContext.jsx'
import { BackgroundFX } from './components/layout/BackgroundFX.jsx'
import { ScrollProgress } from './components/layout/ScrollProgress.jsx'
import { Navbar } from './components/layout/Navbar.jsx'
import { Footer } from './components/layout/Footer.jsx'
import { Hero } from './components/sections/Hero.jsx'
import { About } from './components/sections/About.jsx'
import { Skills } from './components/sections/Skills.jsx'
import { Projects } from './components/sections/Projects.jsx'
import { Journey } from './components/sections/Journey.jsx'
import { Experience } from './components/sections/Experience.jsx'
import { Achievements } from './components/sections/Achievements.jsx'
import { Exploring } from './components/sections/Exploring.jsx'
import { GithubActivity } from './components/sections/GithubActivity.jsx'
import { Contact } from './components/sections/Contact.jsx'

export default function App() {
  return (
    <ThemeProvider>
      <BackgroundFX />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Experience />
        <Achievements />
        <Exploring />
        <GithubActivity />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
