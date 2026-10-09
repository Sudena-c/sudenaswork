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
  { label: 'All Works', value: 'All' },
  { label: 'UI/UX', value: 'UI/UX' },
  { label: 'Editorial Design', value: 'Editorial Design' },
  { label: 'Immersive Design', value: 'Immersive Design Studio' },
  { label: 'Production Design', value: 'Production Design' },
  { label: 'Internship Work', value: 'Internship Work' },
  { label: 'Illustration', value: 'Illustration' },
];

type WorkSectionFilter = 'all' | 'college' | 'internship-freelance';

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ 
  selectedCategory, 
  onSelectCategory,
  onOpenProject 
}) => {
  const [showArchived, setShowArchived] = useState(false);
  const [workSectionFilter, setWorkSectionFilter] = useState<WorkSectionFilter>('all');

  // All eligible projects base
  const allAvailableProjects = showArchived ? [...PROJECTS, ...ARCHIVED_PROJECTS] : PROJECTS;

  // Filter by category if selected
  const categoryFiltered = selectedCategory === 'All'
    ? allAvailableProjects
    : allAvailableProjects.filter(p => p.category === selectedCategory);

  // Split into the 2 requested parts: College Projects & Internship/Freelance Projects
  const collegeProjects = categoryFiltered.filter(p => p.projectSection === 'college' || (!p.projectSection && !p.isInternship));
  const internshipFreelanceProjects = categoryFiltered.filter(p => p.projectSection === 'internship-freelance' || p.isInternship);

  return (
    <section id="work" className="relative py-24 px-6 md:px-12 lg:px-20 bg-light dark:bg-dark transition-colors duration-500">
      
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-zinc-200 dark:border-zinc-800 pb-8">
          <div>
            <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.3em] font-medium text-zinc-500 dark:text-zinc-400 mb-3">
              <span className="w-2 h-2 rounded-full bg-sky-300"></span>
              <span>SELECTED WORKS</span>
            </div>
            {/* "My Work" in baby pastel blue heading */}
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              The Work{' '}
              <span className="italic font-normal font-serif text-[#7dd3fc] dark:text-[#7dd3fc] bg-gradient-to-r from-sky-300 via-sky-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_2px_14px_rgba(125,211,252,0.4)]">
                My Work
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm md:text-base text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
            Curated stories divided into two key chapters: exploratory <strong className="font-medium text-zinc-700 dark:text-zinc-300">College Projects</strong> and real-world <strong className="font-medium text-zinc-700 dark:text-zinc-300">Internship & Freelance</strong> campaigns.
          </p>
        </div>

        {/* Two-Part Section Quick Filter Switcher + Discipline Tags */}
        <div className="mt-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            
            {/* The 2-Part Section Tab Switcher */}
            <div className="inline-flex p-1 bg-stone-100 dark:bg-zinc-800/80 rounded-xl border border-stone-200 dark:border-zinc-700">
              <button
                onClick={() => setWorkSectionFilter('all')}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                  workSectionFilter === 'all'
                    ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-sm font-semibold'
                    : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
              >
                All Works ({categoryFiltered.length})
              </button>
              <button
                onClick={() => setWorkSectionFilter('college')}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all flex items-center space-x-2 ${
                  workSectionFilter === 'college'
                    ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-sm font-semibold'
                    : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
              >
                <span>🎓 College Projects</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-pink-100 dark:bg-pink-950/80 text-pink-600 dark:text-pink-300 font-bold">
                  {collegeProjects.length}
                </span>
              </button>
              <button
                onClick={() => setWorkSectionFilter('internship-freelance')}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all flex items-center space-x-2 ${
                  workSectionFilter === 'internship-freelance'
                    ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-sm font-semibold'
                    : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
              >
                <span>💼 Internship & Freelance</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 font-bold">
                  {internshipFreelanceProjects.length}
                </span>
              </button>
            </div>

            {/* Archives Toggle */}
            <button
              onClick={() => setShowArchived(!showArchived)}
              className="text-xs font-mono tracking-wider text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center space-x-1.5 py-1 px-3 rounded border border-dashed border-zinc-300 dark:border-zinc-700"
            >
              <span>{showArchived ? 'Hide' : '+ View'} Archived Explorations ({ARCHIVED_PROJECTS.length})</span>
            </button>
          </div>

          {/* Discipline Filters */}
          <div className="flex flex-wrap gap-2 pt-1">
            {CATEGORIES.map(cat => (
              <button
                key={cat.value}
                onClick={() => onSelectCategory(cat.value)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 border ${
                  selectedCategory === cat.value
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 shadow-md'
                    : 'border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-600 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Works Presentation Divided in Two Parts */}
      <div className="max-w-5xl mx-auto space-y-28 md:space-y-36 pb-24 relative">
        
        {/* PART 1: COLLEGE PROJECTS */}
        {(workSectionFilter === 'all' || workSectionFilter === 'college') && collegeProjects.length > 0 && (
          <div className="space-y-16">
            
            {/* Section Divider Banner */}
            <div className="flex items-center justify-between gap-4 border-b-2 border-stone-300 dark:border-stone-700 pb-4">
              <div className="flex items-center space-x-3">
                <span className="w-3 h-3 rounded-full bg-pink-400"></span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-zinc-900 dark:text-zinc-100">
                  Part 01 — College Projects
                </h3>
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                {collegeProjects.length} Curated Works
              </span>
            </div>

            {/* Postcard Stack for College Projects */}
            <div className="space-y-24 md:space-y-36">
              <AnimatePresence mode="wait">
                {collegeProjects.map((project, index) => (
                  <PostcardItem
                    key={project.id}
                    project={project}
                    index={index}
                    total={collegeProjects.length}
                    onClick={() => onOpenProject(project)}
                  />
                ))}
              </AnimatePresence>
            </div>

          </div>
        )}

        {/* PART 2: INTERNSHIP & FREELANCE PROJECTS */}
        {(workSectionFilter === 'all' || workSectionFilter === 'internship-freelance') && internshipFreelanceProjects.length > 0 && (
          <div className="space-y-16 pt-12">
            
            {/* Section Divider Banner */}
            <div className="flex items-center justify-between gap-4 border-b-2 border-emerald-300/70 dark:border-emerald-800/70 pb-4">
              <div className="flex items-center space-x-3">
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-zinc-900 dark:text-zinc-100">
                  Part 02 — Internship & Freelance Projects
                </h3>
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                {internshipFreelanceProjects.length} Professional Cases
              </span>
            </div>

            {/* Postcard Stack for Internship & Freelance */}
            <div className="space-y-24 md:space-y-36">
              <AnimatePresence mode="wait">
                {internshipFreelanceProjects.map((project, index) => (
                  <PostcardItem
                    key={project.id}
                    project={project}
                    index={index}
                    total={internshipFreelanceProjects.length}
                    onClick={() => onOpenProject(project)}
                  />
                ))}
              </AnimatePresence>
            </div>

          </div>
        )}

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
        <div className="h-1.5 w-full bg-gradient-to-r from-pink-400/50 via-rose-400/40 to-amber-400/40 opacity-80"></div>

        <div className="p-6 sm:p-8 md:p-10">
          
          {/* Postcard Top Meta Bar */}
          <div className="flex items-start justify-between gap-4 mb-6 border-b border-stone-200/70 dark:border-stone-800 pb-5">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-xs font-bold tracking-widest text-zinc-900 dark:text-zinc-100 px-2 py-0.5 bg-stone-100 dark:bg-stone-800 rounded">
                POSTCARD {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              {project.projectSection === 'internship-freelance' || project.isInternship ? (
                <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 rounded font-semibold border border-emerald-300/40">
                  ★ Internship / Freelance
                </span>
              ) : (
                <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest bg-pink-50 text-pink-700 dark:bg-pink-950/60 dark:text-pink-300 rounded font-semibold border border-pink-200/50 dark:border-pink-800/40">
                  🎓 College Project
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
                <div className="p-4 rounded bg-stone-100/70 dark:bg-stone-800/40 border-l-2 border-pink-400/60 dark:border-pink-500/60">
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
                  <span className="underline decoration-pink-300 underline-offset-4 group-hover:decoration-pink-500 dark:group-hover:decoration-pink-400">
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
