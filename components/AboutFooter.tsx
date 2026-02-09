
import React from 'react';

const AboutFooter: React.FC = () => {
  return (
    <div className="flex flex-col justify-between space-y-16">
      <div className="space-y-8">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-10 border-4 border-zinc-100 dark:border-zinc-800 shadow-xl group">
           <img 
            src="https://picsum.photos/id/64/400/400" 
            alt="Sudena Chandnani" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" 
           />
        </div>
        <div className="space-y-4">
          <h3 className="text-3xl font-serif font-bold tracking-tight">Sudena Chandnani</h3>
          <p className="text-zinc-500 leading-relaxed max-w-md text-lg font-light">
            I am a Communication Design student dedicated to uncovering the soul of brands. 
            By blending traditional artistic sensibilities with modern digital strategy, 
            I create visual languages that speak louder than words.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30">Follow My Process</h4>
          <ul className="space-y-3">
            <li><a href="#" className="group flex items-center space-x-3 text-sm hover:translate-x-2 transition-transform">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
              <span className="group-hover:italic group-hover:font-serif group-hover:text-lg transition-all">Instagram</span>
            </a></li>
            <li><a href="#" className="group flex items-center space-x-3 text-sm hover:translate-x-2 transition-transform">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
              <span className="group-hover:italic group-hover:font-serif group-hover:text-lg transition-all">LinkedIn</span>
            </a></li>
            <li><a href="#" className="group flex items-center space-x-3 text-sm hover:translate-x-2 transition-transform">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
              <span className="group-hover:italic group-hover:font-serif group-hover:text-lg transition-all">Behance</span>
            </a></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30">Direct Reach</h4>
          <ul className="space-y-3">
            <li><a href="mailto:hello@sudena.design" className="group block">
              <span className="block text-[10px] uppercase text-zinc-400 mb-1">Email</span>
              <span className="text-sm font-medium border-b border-transparent group-hover:border-current pb-0.5 transition-all">hello@sudena.design</span>
            </a></li>
            <li><a href="tel:+919876543210" className="group block">
              <span className="block text-[10px] uppercase text-zinc-400 mb-1">Phone</span>
              <span className="text-sm font-medium border-b border-transparent group-hover:border-current pb-0.5 transition-all">+91 98765 43210</span>
            </a></li>
          </ul>
        </div>
      </div>

      <div className="pt-12 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] uppercase tracking-[0.3em] opacity-40 font-bold">
        <span>© Sudena Chandnani Studio 2024</span>
        <div className="flex items-center space-x-6">
          <span>Communication Designer</span>
          <span className="hidden sm:inline">•</span>
          <span>Mumbai / Remote</span>
        </div>
      </div>
    </div>
  );
};

export default AboutFooter;
