import React, { useState, useEffect } from 'react';
import { FaFeatherAlt, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    
    // Only close mobile menu if it's open (avoids affecting desktop state if shared)
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-dark/95 shadow-xl shadow-black/50 backdrop-blur-md'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="text-2xl font-black text-white flex items-center gap-2 cursor-pointer select-none"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <FaFeatherAlt className="text-white" />
          PUBLISH<span className="text-gold">GOLD</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.name} className="relative group">
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors duration-300 flex items-center gap-1 ${
                  link.isCta
                    ? 'bg-gold text-black px-5 py-2 rounded font-bold hover:bg-white'
                    : 'text-white hover:text-gold'
                }`}
              >
                {link.name}
                {link.subLinks && (
                  <FaChevronDown className="text-[10px] transition-transform duration-300 group-hover:rotate-180" />
                )}
              </a>

              {/* Dropdown Menu */}
              {link.subLinks && (
                <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 pt-2">
                  <div className="bg-card border border-gray-800 rounded-lg shadow-2xl overflow-hidden">
                    {link.subLinks.map((subLink) => (
                      <a
                        key={subLink.name}
                        href={subLink.href}
                        onClick={(e) => handleNavClick(e, subLink.href)}
                        className="block px-5 py-3 text-sm text-gray-300 hover:text-black hover:bg-gold transition-colors border-b border-gray-800 last:border-none"
                      >
                        {subLink.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white text-2xl focus:outline-none">
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-card border-b border-gray-dark shadow-2xl py-6 flex flex-col items-center gap-4 max-h-[80vh] overflow-y-auto">
             {NAV_LINKS.map((link) => (
               <div key={link.name} className="w-full flex flex-col items-center">
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-lg font-medium transition-colors duration-300 ${
                      link.isCta
                        ? 'bg-gold text-black px-6 py-2 rounded font-bold hover:bg-white mt-2'
                        : 'text-white hover:text-gold'
                    }`}
                  >
                    {link.name}
                  </a>
                  {/* Mobile Sublinks */}
                  {link.subLinks && (
                    <div className="flex flex-col items-center gap-3 mt-3 w-full bg-black/20 py-4 mb-2">
                      {link.subLinks.map((subLink) => (
                        <a
                          key={subLink.name}
                          href={subLink.href}
                          onClick={(e) => handleNavClick(e, subLink.href)}
                          className="text-sm text-gray-400 hover:text-gold"
                        >
                          {subLink.name}
                        </a>
                      ))}
                    </div>
                  )}
               </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;