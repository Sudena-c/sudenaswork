import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Category, Project } from '../types';
import { PROJECTS, ARCHIVED_PROJECTS } from '../constants';

interface PortfolioGridProps {
  selectedCategory: Category;
  onSelectCategory: (cat: Category) => void;
  onOpenProject: (project: Project) => void;
}

const CATEGORIES: { label: string; value: Category }[] = [
  { label: 'All 5 Works', value: 'All' },
  { label: 'UI/UX', value: 'UI/UX' },
  { label: 'Editorial Design', value: 'Editorial Design' },
  { label: 'Illustration', value: 'Illustration' },
  { label: 'Internship Work', value: 'Internship Work' },
];

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ 
  selectedCategory, 
  onSelectCategory,
  onOpenProject 
}) => {
  const [showArchived, setShowArchived] = useState(false);

  // Filter projects
  const activeProjects = selectedCategory === 'All'
    ? (showArchived ? [...PROJECTS, ...ARCHIVED_PROJECTS] : PROJECTS)
    : [...PROJECTS, ...ARCHIVED_PROJECTS].filter(p => p.category === selectedCategory);

  return (
    <section id="work" className="relative py-24 px-6 md:px-12 lg:px-20 bg-light dark:bg-dark transition-colors duration-500">
      
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-zinc-200 dark:border-zinc-800 pb-8">
          <div>
            <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.3em] font-medium text-zinc-500 dark:text-zinc-400 mb-3">
              <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100"></span>
              <span>02 / 04 — SELECTED WORKS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              The Work <span className="italic font-normal font-serif text-zinc-600 dark:text-zinc-400">My Work</span>
            </h2>
          </div>

          <p className="max-w-md text-sm md:text-base text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
            Five stories dispatched from the design studio. As you scroll, each project layers into a tactile archive of research, pivotal decisions, and craft.
          </p>
        </div>

        {/* Filter Navigation & Archives Toggle */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat.value}
                onClick={() => onSelectCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 border ${
                  selectedCategory === cat.value
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 shadow-md'
                    : 'border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-600 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowArchived(!showArchived)}
            className="text-xs font-mono tracking-wider text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center space-x-1.5 py-1 px-3 rounded border border-dashed border-zinc-300 dark:border-zinc-700"
          >
            <span>{showArchived ? 'Hide' : '+ View'} Archived Explorations ({ARCHIVED_PROJECTS.length})</span>
          </button>
        </div>
      </div>

      {/* The Postcard Stack Container */}
      <div className="max-w-5xl mx-auto space-y-24 md:space-y-36 pb-24 relative">
        <AnimatePresence mode="wait">
          {activeProjects.map((project, index) => (
            <PostcardItem
              key={project.id}
              project={project}
              index={index}
              total={activeProjects.length}
              onClick={() => onOpenProject(project)}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Bottom Transition to Section 03 */}
      <div className="max-w-6xl mx-auto pt-16 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs">
        <span className="font-mono uppercase text-zinc-400 tracking-widest">End of Selected Works</span>
        <a 
          href="#about"
          className="group flex items-center space-x-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 font-serif italic text-sm transition-colors"
        >
          <span>Continue to 03 — About Me & Passions</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </section>
  );
};

interface PostcardItemProps {
  project: Project;
  index: number;
  total: number;
  onClick: () => void;
}

const PostcardItem: React.FC<PostcardItemProps> = ({ project, index, total, onClick }) => {
  const rotation = project.postcardRotation ?? (index % 2 === 0 ? -1.5 : 1.5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        zIndex: 10 + index,
      }}
      className="sticky top-28 md:top-32"
    >
      <motion.div
        whileHover={{ 
          rotate: 0, 
          scale: 1.015,
          y: -4,
          transition: { duration: 0.3, ease: "easeOut" } 
        }}
        style={{ rotate: rotation }}
        onClick={onClick}
        className="group relative cursor-pointer bg-[#fcfbfa] dark:bg-[#161619] rounded-sm border border-stone-200 dark:border-stone-800 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.65)] overflow-hidden transition-shadow duration-300"
      >
        
        {/* Subtle Decorative Airmail Top Stripe */}
        <div className="h-1.5 w-full bg-gradient-to-r from-red-400/40 via-blue-400/40 to-amber-400/40 opacity-70"></div>

        <div className="p-6 sm:p-8 md:p-10">
          
          {/* Postcard Top Meta Bar */}
          <div className="flex items-start justify-between gap-4 mb-6 border-b border-stone-200/70 dark:border-stone-800 pb-5">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-xs font-bold tracking-widest text-zinc-900 dark:text-zinc-100 px-2 py-0.5 bg-stone-100 dark:bg-stone-800 rounded">
                POSTCARD {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              {project.isInternship && (
                <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 rounded font-semibold border border-emerald-300/40">
                  ★ Internship Case Study
                </span>
              )}
            </div>

            {/* Vintage Postage Stamp with Cancellation Mark */}
            <div className="flex items-center space-x-2 select-none pointer-events-none">
              {/* Franking lines */}
              <div className="hidden sm:flex flex-col space-y-1 opacity-40">
                <div className="w-12 h-[1px] bg-zinc-600 dark:bg-zinc-400"></div>
                <div className="w-16 h-[1px] bg-zinc-600 dark:bg-zinc-400"></div>
                <div className="w-10 h-[1px] bg-zinc-600 dark:bg-zinc-400"></div>
              </div>

              {/* The Stamp */}
              <div className="w-14 h-16 sm:w-16 sm:h-20 border border-dashed border-stone-400 dark:border-stone-600 bg-stone-100 dark:bg-stone-800/80 p-1 flex flex-col justify-between items-center text-center shadow-inner rounded-[2px]">
                <span className="text-[7px] font-mono tracking-widest uppercase text-stone-500">AIRMAIL</span>
                <span className="font-serif italic font-bold text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                  {project.year ?? '2026'}
                </span>
                <span className="text-[6px] font-mono uppercase text-stone-500">SUDENA·IN</span>
              </div>
            </div>
          </div>

          {/* Postcard Body: Two Columns (Image + Dispatches) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: The Postcard Visual */}
            <div className="md:col-span-6 relative group-hover:shadow-lg transition-all duration-500 rounded overflow-hidden aspect-[4/3] bg-stone-200 dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors"></div>

              {/* Photo Caption Strip */}
              <div className="absolute bottom-2 left-2 right-2 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-3 py-1.5 rounded-sm flex items-center justify-between text-[10px] font-mono text-stone-600 dark:text-stone-300">
                <span className="uppercase tracking-wider">{project.category}</span>
                <span className="opacity-60">{project.duration ?? 'Featured'}</span>
              </div>
            </div>

            {/* Right: The Handwritten Dispatch & Summary */}
            <div className="md:col-span-6 flex flex-col justify-between space-y-6">
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs font-mono uppercase text-stone-400 tracking-wider">
                  <span>{project.role ?? 'Communication Design'}</span>
                  <span>·</span>
                  <span>{project.category}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-stone-700 dark:group-hover:text-stone-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-stone-600 dark:text-stone-400 font-light leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>

              {/* Handwritten Note / Dispatch */}
              {project.postcardNote && (
                <div className="p-4 rounded bg-stone-100/70 dark:bg-stone-800/40 border-l-2 border-stone-400 dark:border-stone-600">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-stone-400 block mb-1">
                    Designer's Dispatch Note:
                  </span>
                  <p className="font-hand text-xl text-stone-800 dark:text-stone-200 leading-snug">
                    "{project.postcardNote}"
                  </p>
                </div>
              )}

              {/* Action Button & Tool Tags */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-2 text-xs font-mono font-medium text-zinc-900 dark:text-zinc-100 group-hover:translate-x-1 transition-transform">
                  <span className="underline decoration-stone-300 underline-offset-4 group-hover:decoration-zinc-900 dark:group-hover:decoration-zinc-100">
                    Open Case Story & Process
                  </span>
                  <span>→</span>
                </div>

                {project.tools && project.tools.length > 0 && (
                  <div className="hidden sm:flex flex-wrap gap-1.5 text-[10px] font-mono text-stone-500">
                    {project.tools.slice(0, 3).map((tool, i) => (
                      <span key={i} className="px-2 py-0.5 bg-stone-100 dark:bg-stone-800/80 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>

            </div>

          </div>

          {/* Tactile Bottom Rule */}
          <div className="mt-6 pt-4 border-t border-dashed border-stone-200 dark:border-stone-800 flex items-center justify-between text-[9px] font-mono text-stone-400 uppercase tracking-widest">
            <span>PAR AVION / BY AIR MAIL</span>
            <span>CLICK POSTCARD TO UNFOLD STORY</span>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioGrid;
