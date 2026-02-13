import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, PROCESS } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-dark relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
        >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Expertise</h2>
            <p className="text-gray-light max-w-2xl mx-auto">Comprehensive publishing solutions tailored to bring your manuscript to life.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {SERVICES.map((service, index) => {
            // Generate a safe ID for linking
            const serviceId = service.title.toLowerCase().replace(/\s+/g, '-');
            return (
                <motion.div
                key={index}
                id={serviceId}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-10 rounded-2xl border border-gray-800 hover:border-gold hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(255,215,0,0.1)] transition-all duration-300 group scroll-mt-28"
                >
                <service.icon className="text-4xl text-gold mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-light leading-relaxed text-sm">
                    {service.description}
                </p>
                </motion.div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="border-t border-gray-800 pt-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
                <p className="text-gray-light">Your journey from draft to bookshelf in four simple steps.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {PROCESS.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative p-6 rounded-xl hover:bg-white/5 transition-colors duration-300"
                    >
                        {/* Connecting Line (Desktop) */}
                        {index < PROCESS.length - 1 && (
                            <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-gold/50 to-transparent -z-10 transform translate-x-12 opacity-30"></div>
                        )}
                        
                        <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gold to-dark/0 mb-4 opacity-50">
                            {step.step}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {step.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;