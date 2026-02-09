
import React from 'react';
import { Theme } from '../types';

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
  isProjectActive: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme, isProjectActive }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference flex justify-between items-center px-6 md:px-12 py-8">
      <a href="#" className="text-xl md:text-2xl font-serif font-bold text-white uppercase tracking-tighter">
        SUDENA CHANDNANI
      </a>
      
      <div className="flex items-center space-x-8">
        {!isProjectActive && (
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-white/80">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#after-hours" className="hover:text-white transition-colors">After Hours</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        )}
        
        <button 
          onClick={onToggleTheme}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/20"
          aria-label="Toggle Theme"
        >
          {theme === Theme.DARK ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
