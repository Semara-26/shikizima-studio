import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import ValueProposition from "./components/ValueProposition";
import DesignCatalog from "./components/DesignCatalog";
import ServicePackages from "./components/ServicePackages";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-900">
          <Header />
          <main>
            <Hero />
            <Problem />
            <ValueProposition />
            <DesignCatalog />
            <ServicePackages />
            <Process />
            <Testimonials />
            <FAQ />
            <FinalCTA />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
