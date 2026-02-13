import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="antialiased bg-dark min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}

export default App;