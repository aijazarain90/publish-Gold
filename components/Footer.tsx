import React from 'react';
import { FaFeatherAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#050505] pt-20 pb-8 px-6 md:px-12 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div className="flex flex-col items-start">
            <div className="text-2xl font-black text-white flex items-center gap-2 mb-6">
              <FaFeatherAlt className="text-white" />
              PUBLISH<span className="text-gold">GOLD</span>
            </div>
            <p className="text-gray-light max-w-sm">
              Leading the industry in modern publishing solutions. We turn writers into recognized authors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-light hover:text-gold transition-colors duration-200 w-fit"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Follow Us</h4>
            <div className="flex gap-6">
              <a href="#" className="text-gold text-2xl hover:text-white transition-colors hover:scale-110 transform duration-200">
                <FaFacebook />
              </a>
              <a href="#" className="text-gold text-2xl hover:text-white transition-colors hover:scale-110 transform duration-200">
                <FaTwitter />
              </a>
              <a href="#" className="text-gold text-2xl hover:text-white transition-colors hover:scale-110 transform duration-200">
                <FaInstagram />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} PublishGold. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;