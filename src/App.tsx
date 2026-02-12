import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import ValueProposition from './components/ValueProposition';
import DesignCatalog from './components/DesignCatalog';
import ServicePackages from './components/ServicePackages';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Problem />
      <ValueProposition />
      <DesignCatalog />
      <ServicePackages />
      <Process />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
