import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INTERESTS, CV_URL } from '../constants';
import { Interest } from '../types';

interface AboutMeProps {
  onImageClick: (url: string) => void;
}

const AboutMe: React.FC<AboutMeProps> = ({ onImageClick }) => {
  const [activeInterest, setActiveInterest] = useState<Interest>(INTERESTS[0]);

  return (
    <section id="about" className="relative py-28 px-6 md:px-12 lg:px-20 bg-stone-50/60 dark:bg-stone-950/40 border-t border-stone-200 dark:border-stone-800/80 transition-colors duration-500">
      
      {/* Decorative Background Lettering */}
      <div className="absolute top-12 right-0 opacity-[0.02] dark:opacity-[0.03] select-none pointer-events-none overflow-hidden">
        <span className="text-[22vw] font-serif font-bold italic">HUMAN</span>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header with baby pastel blue "In Motion & Spirit" */}
        <div className="border-b border-stone-200 dark:border-stone-800 pb-8 mb-16">
          <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.3em] font-medium text-zinc-500 dark:text-zinc-400 mb-3">
            <span className="w-2 h-2 rounded-full bg-sky-300"></span>
            <span>03 / 04 — ABOUT ME</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Beyond Design, <br />
                <span className="italic font-normal font-serif text-[#7dd3fc] dark:text-[#7dd3fc] bg-gradient-to-r from-sky-300 via-sky-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_2px_14px_rgba(125,211,252,0.4)]">
                  In Motion & Spirit
                </span>
              </h2>
            </div>
            <div className="lg:col-span-4 text-sm font-light text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Design isn't just what happens behind software. It is fueled by the physical disciplines, curiosity, and messy experiments that happen when the laptop is closed.
            </div>
          </div>
        </div>

        {/* Dedicated "Moments Beyond The Screen" Section */}
        <div className="bg-white dark:bg-zinc-900/90 rounded-sm border border-stone-200 dark:border-stone-800 p-6 sm:p-10 shadow-sm mb-12">
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-stone-100 dark:border-stone-800 pb-6">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 block mb-1">
                Visual Scrapbook
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 dark:text-zinc-100">
                Moments Beyond The Screen
              </h3>
            </div>

            {/* Interest Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((interest) => (
                <button
                  key={interest.id}
                  onClick={() => setActiveInterest(interest)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                    activeInterest.id === interest.id
                      ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow'
                      : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 border border-stone-200 dark:border-stone-800'
                  }`}
                >
                  {interest.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Interest Showcase */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeInterest.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Main Feature Image */}
              <div 
                className="lg:col-span-5 relative group cursor-zoom-in rounded overflow-hidden aspect-[4/3] bg-stone-100 dark:bg-stone-800 shadow"
                onClick={() => onImageClick(activeInterest.image)}
              >
                <img 
                  src={activeInterest.image} 
                  alt={activeInterest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-white tracking-widest uppercase">
                  Click to Expand ↗
                </div>
              </div>

              {/* Personal Reflection & Story */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-pink-500 dark:text-pink-400 font-medium">
                    Passion Archive · {activeInterest.name}
                  </span>
                  <h4 className="text-3xl font-serif font-bold text-zinc-900 dark:text-zinc-100">
                    {activeInterest.description}
                  </h4>
                </div>

                {activeInterest.personalNote && (
                  <div className="p-4 bg-stone-50 dark:bg-stone-950/60 rounded border-l-2 border-stone-400 dark:border-stone-600">
                    <p className="font-hand text-xl text-stone-800 dark:text-stone-200 leading-snug">
                      "{activeInterest.personalNote}"
                    </p>
                  </div>
                )}

                {/* Gallery Thumbnails */}
                {activeInterest.gallery && activeInterest.gallery.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block">
                      Snapshots from this chapter ({activeInterest.gallery.length})
                    </span>
                    <div className="flex flex-wrap gap-3">
                      {activeInterest.gallery.map((imgUrl, idx) => (
                        <div
                          key={idx}
                          onClick={() => onImageClick(imgUrl)}
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded overflow-hidden cursor-zoom-in border border-stone-200 dark:border-stone-800 hover:scale-105 transition-transform"
                        >
                          <img 
                            src={imgUrl} 
                            alt={`${activeInterest.name} snapshot ${idx + 1}`} 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Dedicated CV Section directly under Moments Beyond The Screen */}
        <div className="p-6 sm:p-8 rounded-sm bg-white dark:bg-zinc-900 border border-stone-200 dark:border-stone-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-xs uppercase tracking-widest text-pink-500 dark:text-pink-400 font-semibold">
                ✦ Curriculum Vitae
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-pink-50 dark:bg-pink-950/80 text-pink-700 dark:text-pink-300 font-semibold border border-pink-200/50 dark:border-pink-800/40">
                Official Document
              </span>
            </div>
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-zinc-900 dark:text-zinc-100">
              Sudena Chandnani — Curriculum Vitae (CV)
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              Explore academic milestones at UID, design internship track records, art direction leadership, campaign work, and professional toolkit proficiencies.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={CV_URL}
              download="Sudena_Chandnani_CV.pdf"
              className="px-5 py-3 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-mono uppercase tracking-wider rounded-sm hover:scale-105 active:scale-95 transition-all shadow-sm flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download CV</span>
            </a>
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border border-stone-300 dark:border-stone-700 text-xs font-mono uppercase tracking-wider text-zinc-800 dark:text-zinc-200 rounded-sm hover:border-pink-400 hover:text-pink-500 dark:hover:border-pink-400 dark:hover:text-pink-400 transition-colors flex items-center space-x-2"
            >
              <span>Open in New Tab</span>
              <span>↗</span>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Section Link */}
      <div className="max-w-6xl mx-auto pt-16 mt-16 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between text-xs">
        <span className="font-mono uppercase text-zinc-400 tracking-widest">End of Personal Section</span>
        <a 
          href="#contact"
          className="group flex items-center space-x-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 font-serif italic text-sm transition-colors"
        >
          <span>Ready to talk? Jump to 04 — Contact Me</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
