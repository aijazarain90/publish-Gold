import React from 'react';
import { motion } from 'framer-motion';
import { CORE_VALUES, TEAM_MEMBERS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-[#121212] overflow-hidden">
      <div className="container mx-auto">
        
        {/* Mission Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <span className="text-gold font-bold tracking-widest uppercase mb-4 block">Our Mission</span>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8">
            "Empowering voices to shape the future through the <span className="text-gold border-b-4 border-gold">written word.</span>"
          </h2>
          <p className="text-xl text-gray-light leading-relaxed">
            At PublishGold, we don't just print books; we launch careers. We exist to bridge the gap between raw talent and commercial success, ensuring every story finds its audience.
          </p>
        </motion.div>

        {/* History Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-32">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2"
            >
                <div className="relative">
                    <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-gold z-0"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
                        alt="Office History" 
                        className="rounded-lg shadow-2xl relative z-10 w-full object-cover h-[400px]"
                    />
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-gold z-0"></div>
                </div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:w-1/2"
            >
                <h3 className="text-3xl font-bold text-white mb-6">A Decade of Storytelling</h3>
                <p className="text-gray-light mb-6 leading-relaxed">
                    Founded in 2015 by Sarah Gold, what began as a boutique editing studio in a small London apartment has evolved into a global publishing powerhouse. 
                </p>
                <p className="text-gray-light mb-6 leading-relaxed">
                    Frustrated by the gatekeepers of traditional publishing, Sarah set out to build a hybrid model that gave authors the quality of a major house with the freedom of self-publishing.
                </p>
                <p className="text-gray-light leading-relaxed">
                    Today, PublishGold has helped over 500 authors achieve their dreams, with millions of copies sold worldwide. We are proud to be the catalyst for the next generation of bestsellers.
                </p>
            </motion.div>
        </div>

        {/* Values Grid */}
        <div className="mb-32">
            <div className="text-center mb-16">
                <h3 className="text-3xl font-bold text-white">Our Core Values</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {CORE_VALUES.map((val, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="bg-card p-8 rounded-xl border border-gray-800 hover:border-gold transition-colors duration-300 text-center group"
                    >
                        <div className="inline-block p-4 rounded-full bg-gold/10 mb-6 group-hover:bg-gold/20 transition-colors">
                            <val.icon className="text-3xl text-gold" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3">{val.title}</h4>
                        <p className="text-gray-400 text-sm">{val.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Team Section */}
        <div>
            <div className="text-center mb-16">
                 <h3 className="text-3xl font-bold text-white mb-4">Meet The Team</h3>
                 <p className="text-gray-400">The experts behind the bestsellers.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {TEAM_MEMBERS.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group text-center"
                    >
                        <div className="relative mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-transparent group-hover:border-gold transition-colors duration-300">
                            <img 
                                src={member.imageUrl} 
                                alt={member.name} 
                                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                            />
                        </div>
                        <h4 className="text-xl font-bold text-white">{member.name}</h4>
                        <p className="text-gold text-sm font-medium uppercase tracking-wide">{member.role}</p>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;
