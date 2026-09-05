import LanguageProvider from "./i18n/LanguageProvider"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import About from "./components/About"
import Director from "./components/Director"
import Services from "./components/Services"
import Developments from "./components/Developments"
import Gallery from "./components/Gallery"
import Approach from "./components/Approach"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"

export default function App() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Director />
        <Services />
        <Developments />
        <Gallery />
        <Approach />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </LanguageProvider>
  )
}
