import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import ServicesSection from '../ServicesSection/ServicesSection';
import ProjectsSection from '../ProjectsSection/ProjectsSection';
import AboutSection from '../AboutSection/AboutSection';
import ContactSection from '../ContactSection/ContactSection';
import Footer from '../Footer/Footer';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />

      {/* Repère principal : permet aux lecteurs d'écran de sauter
          directement au contenu, en passant la navigation. */}
      <main>
        <Hero />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
