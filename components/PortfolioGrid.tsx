
import React, { useEffect, useRef, useState } from 'react';
import { Category, Project } from '../types';
import { PROJECTS } from '../constants';

interface PortfolioGridProps {
  selectedCategory: Category;
  onSelectCategory: (cat: Category) => void;
}

const CATEGORIES: Category[] = ['All', 'UI/UX', 'Editorial Design', 'Web Development', 'Branding', 'Digital Marketing', 'Illustration'];

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ selectedCategory, onSelectCategory }) => {
  const filteredProjects = selectedCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === selectedCategory);

  // Velocity-based shooting origins
  const projectiles = [
    { start: 'translate-x-[-120%] translate-y-[20%] rotate-[-30deg]', shape: 'rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%]' },
    { start: 'translate-x-[120%] translate-y-[-20%] rotate-[30deg]', shape: 'rounded-[30%_70%_70%_30%_/_50%_40%_60%_50%]' },
    { start: 'translate-x-[-120%] translate-y-[-20%] rotate-[15deg]', shape: 'rounded-[50%_50%_20%_80%_/_25%_80%_20%_75%]' },
    { start: 'translate-x-[120%] translate-y-[20%] rotate-[-15deg]', shape: 'rounded-[70%_30%_50%_50%_/_30%_70%_30%_70%]' },
  ];

  return (
    <div className="relative">
      <div className="sticky top-24 z-50 mb-12 flex flex-wrap gap-3 overflow-x-auto pb-4 no-scrollbar bg-light/80 dark:bg-dark/80 backdrop-blur-md py-4 rounded-full px-6 border border-zinc-200 dark:border-zinc-800 shadow-sm mx-auto max-w-fit">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap border ${
              selectedCategory === cat 
                ? 'bg-dark text-light border-dark dark:bg-light dark:text-dark dark:border-light shadow-lg' 
                : 'border-transparent text-zinc-500 hover:text-dark dark:hover:text-light'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="relative">
        {filteredProjects.map((project, idx) => (
          <ProjectBall 
            key={project.id} 
            project={project} 
            index={idx} 
            // We give each project a higher z-index than the last so they stack correctly
            zIndex={10 + idx}
            motion={projectiles[idx % projectiles.length]}
          />
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="h-[50vh] flex flex-col items-center justify-center space-y-4">
          <div className="w-16 h-16 rounded-full border border-dashed border-zinc-300 dark:border-zinc-700 animate-spin"></div>
          <span className="text-zinc-400 font-serif italic text-xl">Curating more works...</span>
        </div>
      )}
    </div>
  );
};

interface ProjectBallProps {
  project: Project;
  index: number;
  zIndex: number;
  motion: { start: string, shape: string };
}

const ProjectBall: React.FC<ProjectBallProps> = ({ project, index, motion, zIndex }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // hasEntered triggers the "shooting in" animation
        if (entry.isIntersecting) {
          setHasEntered(true);
          setIsExiting(false);
        } else if (entry.boundingClientRect.top < 0) {
          // If the element is scrolled above the viewport, mark as exiting
          setIsExiting(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: "-5% 0px -5% 0px" 
      }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative h-[120vh] flex items-start justify-center"
      style={{ zIndex }}
    >
      <div 
        onClick={() => window.location.hash = `project/${project.id}`}
        className={`
          sticky top-[15vh] w-[85vw] md:w-[65vw] lg:w-[50vw] aspect-square
          transition-all duration-[1000ms] ease-[cubic-bezier(0.23,1,0.32,1)]
          cursor-pointer group pointer-events-auto
          ${hasEntered ? 'translate-x-0 translate-y-0 rotate-0 scale-100 opacity-100' : `${motion.start} opacity-0 scale-75`}
          ${isExiting ? 'scale-90 opacity-0 blur-md pointer-events-none' : ''}
        `}
      >
        {/* The Liquid Object */}
        <div className={`
          absolute inset-0 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.5)]
          transition-all duration-700 group-hover:scale-105 active:scale-95
          ${motion.shape} overflow-hidden bg-zinc-200 dark:bg-zinc-900
          ${hasEntered && !isExiting ? 'animate-liquid' : ''}
        `}>
          <img 
            src={project.coverImage} 
            alt={project.title}
            className={`
              w-full h-full object-cover transition-all duration-[1500ms] group-hover:scale-110
              ${hasEntered ? 'scale-100 blur-0' : 'scale-125 blur-2xl'}
            `}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-dark/95 via-dark/30 to-transparent opacity-80 group-hover:opacity-50 transition-opacity"></div>

          {/* Liquid Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 md:p-12">
            <div className={`transition-all duration-1000 delay-300 transform ${hasEntered ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <span className="inline-block px-4 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[9px] font-bold uppercase tracking-[0.3em] text-white mb-6">
                {project.category}
              </span>
              <h3 className="text-3xl md:text-6xl font-serif font-bold text-white mb-8 tracking-tighter leading-tight drop-shadow-2xl px-4">
                {project.title}
              </h3>
              <div className="inline-flex items-center space-x-3 text-white/60 group-hover:text-white transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <span className="text-[9px] uppercase tracking-widest font-bold">Dive into story</span>
                <div className="w-8 h-[1px] bg-white/40 group-hover:w-16 group-hover:bg-white transition-all"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Tag */}
        <div className={`
          absolute -top-4 -left-4 md:-top-8 md:-left-8 w-16 h-16 md:w-28 md:h-28 rounded-full bg-white dark:bg-zinc-100 flex items-center justify-center 
          shadow-2xl z-30 transition-all duration-1000 delay-500 transform
          ${hasEntered ? 'scale-100 rotate-[-12deg] opacity-100' : 'scale-0 rotate-45 opacity-0'}
        `}>
          <span className="text-dark font-serif italic font-bold text-2xl md:text-4xl tracking-tighter">0{index + 1}</span>
        </div>
      </div>

      <style>{`
        @keyframes liquid {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          33% { border-radius: 40% 60% 70% 30% / 40% 70% 30% 60%; }
          66% { border-radius: 70% 30% 50% 50% / 30% 70% 30% 70%; }
        }
        .animate-liquid {
          animation: liquid 15s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PortfolioGrid;
