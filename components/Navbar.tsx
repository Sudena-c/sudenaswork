import React, { useState, useEffect } from 'react';
import { Theme } from '../types';

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
  isProjectActive: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme, isProjectActive }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'work', 'about', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#fbfaf8]/90 dark:bg-[#0e0e10]/90 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800/80 py-4 shadow-sm' 
        : 'bg-transparent py-6'
    } px-6 md:px-12 lg:px-20 flex justify-between items-center`}>
      
      {/* Brand Signature */}
      <a 
        href="#home" 
        className="group flex items-center space-x-2 text-zinc-900 dark:text-zinc-100 font-serif font-bold text-lg sm:text-xl tracking-tight"
      >
        <span className="w-2 h-2 rounded-full bg-stone-900 dark:bg-stone-100 group-hover:scale-125 transition-transform"></span>
        <span className="tracking-tight">SUDENA CHANDNANI</span>
      </a>

      {/* Nav Links: 4 Sections in exact order */}
      <div className="flex items-center space-x-6 sm:space-x-8">
        {!isProjectActive && (
          <div className="hidden md:flex items-center space-x-6 text-xs font-mono tracking-wider uppercase">
            {[
              { id: 'home', label: '01 Home' },
              { id: 'work', label: '02 Work' },
              { id: 'about', label: '03 About' },
              { id: 'contact', label: '04 Contact' },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`transition-colors py-1 relative ${
                  activeSection === link.id
                    ? 'text-zinc-900 dark:text-zinc-100 font-semibold'
                    : 'text-stone-500 hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-zinc-900 dark:bg-zinc-100 rounded-full" />
                )}
              </a>
            ))}
          </div>
        )}

        {/* Theme Toggle Button */}
        <button
          onClick={onToggleTheme}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:scale-105 active:scale-95 transition-all border border-stone-200 dark:border-stone-700"
          aria-label="Toggle Theme"
          title={theme === Theme.DARK ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {theme === Theme.DARK ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
