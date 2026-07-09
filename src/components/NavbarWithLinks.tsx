import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const NavbarWithLinks: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#fdfbf7]/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
        
        <Link to="/" onClick={closeMenu} className="text-xl font-extrabold tracking-tighter text-gray-900 cursor-pointer">
          RS.
        </Link>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-600">
          <Link to="/about" className="hover:text-blue-800 transition-colors">About</Link>
          <Link to="/experiences" className="hover:text-blue-800 transition-colors">Experiences</Link>
          <Link to="/projects" className="hover:text-blue-800 transition-colors">Projects</Link>
          <Link to="/contact" className="hover:text-blue-800 transition-colors">Contacts</Link>
        </div>

        {/* Mobile Hamburger Button (Hidden on Desktop) */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:text-blue-800 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            // Close (X) Icon
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          ) : (
            // Hamburger Icon
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[#fdfbf7] border-b border-gray-200 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4 font-medium text-gray-800 shadow-inner">
          <Link to="/about" onClick={closeMenu} className="block w-full hover:text-blue-800 transition-colors">About</Link>
          <Link to="/experiences" onClick={closeMenu} className="block w-full hover:text-blue-800 transition-colors">Experience</Link>
          <Link to="/projects" onClick={closeMenu} className="block w-full hover:text-blue-800 transition-colors">Projects</Link>
          <Link to="/contact" onClick={closeMenu} className="block w-full hover:text-blue-800 transition-colors">Contacts</Link>
        </div>
      </div>
    </nav>
  );
};