import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import { TESTIMONIALS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">What Our Authors Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#111] p-8 md:p-10 rounded-2xl border border-gray-800 hover:border-gold/50 transition-colors duration-300 relative flex flex-col items-center text-center h-full"
              >
                <div className="absolute -top-6 bg-dark p-3 rounded-full border border-gray-800 text-gold">
                    <FaQuoteLeft className="text-2xl" />
                </div>
                
                <div className="mt-4 mb-8 flex-grow">
                     <p className="text-lg text-gray-light leading-relaxed italic">
                    "{testimonial.text}"
                    </p>
                </div>
               
                <div className="flex flex-col items-center mt-auto border-t border-gray-800 pt-6 w-full">
                  <h4 className="text-white font-bold text-lg mb-1">{testimonial.author}</h4>
                  <span className="text-gold text-xs font-bold tracking-widest uppercase">{testimonial.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;