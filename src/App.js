import React from 'react';
import { ScrollToTop, Portfolio, Home, About, Services, Pricing, Stats, Testimonials, Contact, Footer } from './components';
import { motion } from 'framer-motion';

function App () {
  return (
    <motion.div initial="hidden" animate="show">
      <Home />
      <About />
      <Services />
      <Portfolio/>
      <Stats/>
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </motion.div>
  )
}

export default App