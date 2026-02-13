import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { HERO_STATS } from '../constants';

const Hero: React.FC = () => {
  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1500&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/80"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-0">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-center lg:text-left"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white">
            Write. Publish. <br />
            <span className="text-gold">Conquer.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-light mb-8 max-w-lg mx-auto lg:mx-0">
            From a rough draft to a global bestseller. We handle the technicalities, you keep the glory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#services" 
              className="px-8 py-4 bg-gold text-black font-bold rounded hover:bg-white hover:scale-105 transition-all duration-300 border-2 border-gold"
            >
              Explore Services
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 text-gold font-bold rounded border-2 border-gold hover:bg-gold hover:text-black hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Free Consultation 
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6 w-full lg:w-auto"
        >
          {HERO_STATS.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-xl border-l-4 border-gold hover:bg-white/10 transition-colors duration-300 w-full lg:w-64"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gold mb-1">{stat.value}</h2>
              <p className="text-white font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </header>
  );
};

export default Hero;