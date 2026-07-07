import React from 'react';

export const Navbar: React.FC  =() => {
    return (
        <nav className="w-full flex justify-between items-center py-6 px-8 md:px-16 bg-white">
            {/* Logo Area */}
            <div className="flex items-center justify-center w-10 h-10 bg-gray-900 text-white rounded-full font-bold text-xl">
                R
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8 text-sm font-bold tracking-widest text-gray-500 uppercase">
                <a href="#home" className="hover:text-gray-900 transition-colors">Home</a>
                <a href="#about" className="hover:text-gray-900 transition-colors">About Me</a>
                <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
                <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
            </div>
            
            {/* Dark Mode / Action Icon Placeholder */}
            <button className="text-gray-500 hover:text-gray-900">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                </svg>
            </button>
        </nav>
    )
}