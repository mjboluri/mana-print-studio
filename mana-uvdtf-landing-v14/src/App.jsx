import AboutServices from './components/AboutServices'
import Applications from './components/Applications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Portfolio from './components/Portfolio'
import useScrollReveal from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Portfolio />
        <AboutServices />
        <Applications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
