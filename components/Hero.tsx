import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_PHOTO_URL } from '../constants';

const Hero: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-16 px-6 md:px-12 lg:px-20 overflow-hidden bg-light dark:bg-dark transition-colors duration-500">
      {/* Background Subtle Watermark & Texture */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-[0.03] dark:opacity-[0.05] z-0 flex items-center justify-center">
        <span className="text-[28vw] font-serif font-bold italic tracking-tighter leading-none">
          SUDENA
        </span>
      </div>

      {/* Top Header Badge */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-6">
        <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.3em] font-medium text-zinc-500 dark:text-zinc-400">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span> HOMEPAGE</span>
          <span className="opacity-40">·</span>
          <span className="hidden sm:inline">COMMUNICATION DESIGNER</span>
        </div>
        <div className="text-xs font-serif italic text-zinc-500 dark:text-zinc-400 tracking-wider">
          Ahmedabad, IN · Studio Portfolio 2026
        </div>
      </div>

      {/* Main Content Grid: Personal Editorial + Tactile Polaroid */}
      <div className="relative z-10 my-auto py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Bold Typography & Story Intro */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
              <span>✦</span>
              <span>GLAD YOU LANDED HERE!</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif font-bold tracking-tight leading-[0.95] text-zinc-900 dark:text-zinc-100">
              Sudena <br />
              <span className="italic font-normal font-serif text-zinc-700 dark:text-zinc-300">
                Chandnani
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-xl font-light leading-relaxed"
          >
            I craft narrative-driven visual identities, tactile editorial systems, and human digital products. 
            Exploring the delicate balance between <span className="text-zinc-900 dark:text-zinc-100 font-medium">structural rigidity</span> and <span className="text-zinc-900 dark:text-zinc-100 font-medium">organic expression</span>.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a 
              href="#work" 
              className="group inline-flex items-center space-x-3 px-6 py-3.5 bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 rounded-full font-medium text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl"
            >
              <span>Work Work Work</span>
              <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a 
              href="#about" 
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full border border-zinc-300 dark:border-zinc-700 text-xs uppercase tracking-widest font-medium text-zinc-700 dark:text-zinc-300 hover:border-zinc-900 dark:hover:border-zinc-100 transition-colors"
            >
              <span>03 — About Me</span>
            </a>

            <a 
              href="#contact" 
              className="text-xs uppercase tracking-widest font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors px-3 py-2"
            >
              Say Hello →
            </a>
          </motion.div>

          {/* Quick Glances / Traits */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="pt-6 grid grid-cols-3 gap-4 border-t border-zinc-200/60 dark:border-zinc-800/60 max-w-lg text-xs"
          >
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-zinc-400">Education</span>
              <span className="font-medium text-zinc-800 dark:text-zinc-200">UID, Karnavati University</span>
            </div>
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-zinc-400">Area of Interest</span>
              <span className="font-medium text-zinc-800 dark:text-zinc-200">Publication Design & UI/UX</span>
            </div>
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-zinc-400">Curated Work</span>
              <span className="font-medium text-zinc-800 dark:text-zinc-200">Selected Stories</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Physical Polaroid Photograph of Sudena */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          
          {/* Subtle Decorative stamp mark behind polaroid */}
          <div className="absolute -top-8 -right-4 w-28 h-28 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-full flex items-center justify-center opacity-60 pointer-events-none rotate-12">
            <span className="text-[9px] font-mono uppercase tracking-widest text-center text-zinc-400">
              STUDIO SUDENA<br/>★ 2026 ★<br/>PORTRAIT
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 6 }}
            animate={{ opacity: 1, scale: 1, rotate: -2.5 }}
            whileHover={{ 
              rotate: 0, 
              scale: 1.03,
              transition: { duration: 0.35, ease: "easeOut" } 
            }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative cursor-pointer group select-none"
            onClick={() => setIsFlipped(!isFlipped)}
            title="Click to flip polaroid"
          >
            {/* Washi Tape / Paper Strip at top */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-amber-100/80 dark:bg-amber-900/40 backdrop-blur-sm border border-amber-300/40 dark:border-amber-700/30 rotate-[-1.5deg] z-20 shadow-sm rounded-[1px] pointer-events-none"></div>

            {/* The Physical Polaroid Container */}
            <div className="bg-white dark:bg-zinc-900 p-4 pb-6 rounded-sm shadow-[0_20px_50px_-10px_rgba(0,0,0,0.25)] dark:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.7)] border border-zinc-200/90 dark:border-zinc-800 w-[290px] sm:w-[330px] transition-all duration-300">
              
              {!isFlipped ? (
                <>
                  {/* Photo area */}
                  <div className="aspect-[4/5] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 relative">
                    <img 
                      src={PERSONAL_PHOTO_URL} 
                      alt="Sudena Chandnani portrait" 
                      className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    {/* Vignette & subtle analog film grain */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none"></div>
                    <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/40 backdrop-blur-md rounded text-[9px] font-mono text-white/90 uppercase tracking-widest">
                      ORIGINAL · 35MM
                    </div>
                  </div>

                  {/* Handwritten Polaroid Bottom Chin */}
                  <div className="pt-4 flex flex-col items-center justify-center text-center">
                    <p className="font-hand text-2xl text-zinc-800 dark:text-zinc-200 font-semibold tracking-wide">
                      Sudena — in the studio ✦
                    </p>
                    <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400 mt-1">
                      Designer · Artist · Thinker
                    </p>
                  </div>
                </>
              ) : (
                /* Flipped Back of Polaroid Note */
                <div className="aspect-[4/5] w-full p-6 flex flex-col justify-between bg-amber-50/50 dark:bg-zinc-950/80 border border-dashed border-zinc-300 dark:border-zinc-800">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-[10px] font-mono uppercase text-zinc-400">
                      <span>Polaroid Back</span>
                      <span>#001</span>
                    </div>
                    <p className="font-hand text-xl text-zinc-800 dark:text-zinc-200 leading-relaxed">
                      "I believe the best design doesn't shout. It holds you in place, communicates honestly, and leaves room for wonder."
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-hand text-lg text-zinc-600 dark:text-zinc-400">— Sudena C.</span>
                    <span className="block text-[9px] font-mono text-zinc-400 uppercase tracking-widest mt-1">Click to turn over</span>
                  </div>
                </div>
              )}
            </div>

            {/* Little floating sticky pin / prompt */}
            <div className="absolute -bottom-3 -right-3 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 px-3 py-1 rounded-full text-[9px] font-mono tracking-widest shadow-md flex items-center space-x-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
              <span>↻</span>
              <span>{isFlipped ? 'Front' : 'Flip photo'}</span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Bottom Scroll Bar / Seamless Section Indicator */}
      <div className="relative z-10 pt-8 flex items-center justify-between border-t border-zinc-200/80 dark:border-zinc-800/80 text-xs">
        <a 
          href="#work" 
          className="group flex items-center space-x-3 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest">Next Section:</span>
          <span className="font-serif italic text-sm font-medium group-hover:translate-x-1 transition-transform">02 — Works (5)</span>
          <svg className="w-4 h-4 animate-bounce group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>

        <div className="hidden md:flex items-center space-x-6 text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
          <span>01 · Home</span>
          <span className="text-zinc-300 dark:text-zinc-700">—</span>
          <span>02 · Work</span>
          <span className="text-zinc-300 dark:text-zinc-700">—</span>
          <span>03 · About</span>
          <span className="text-zinc-300 dark:text-zinc-700">—</span>
          <span>04 · Contact</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
