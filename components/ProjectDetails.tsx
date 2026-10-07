import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project, ProcessStep, CampaignIdea, ResearchData } from '../types';
import { PROJECTS } from '../constants';

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
  onImageClick: (url: string) => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onClose, onImageClick }) => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [selectedIteration, setSelectedIteration] = useState<number>(0);

  // Keyboard escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Find next project in the 5 projects list
  const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="fixed inset-0 z-50 bg-[#fbfaf8] dark:bg-[#0e0e10] overflow-y-auto selection:bg-stone-300 dark:selection:bg-stone-700 transition-colors duration-300">
      
      {/* Top Floating Story Bar */}
      <div className="sticky top-0 z-50 bg-[#fbfaf8]/90 dark:bg-[#0e0e10]/90 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 px-6 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={onClose}
            className="group flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 px-3 py-1.5 rounded-full border border-stone-200 dark:border-stone-800 hover:border-zinc-900 dark:hover:border-zinc-100 transition-all"
          >
            <span>←</span>
            <span>Return to Postcard Stack</span>
          </button>
          <span className="hidden sm:inline text-xs font-mono text-stone-300 dark:text-stone-700">|</span>
          <span className="hidden sm:inline text-xs font-mono text-stone-500 uppercase tracking-widest truncate max-w-xs">
            {project.title}
          </span>
        </div>

        {/* Phase Chapter Indicators */}
        <div className="hidden md:flex items-center space-x-1.5 text-[11px] font-mono">
          {project.process.map((step, idx) => (
            <a
              key={step.id}
              href={`#step-${step.id}`}
              className={`px-2.5 py-1 rounded transition-colors ${
                activePhaseIndex === idx 
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium' 
                  : 'text-stone-500 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
              onClick={() => setActivePhaseIndex(idx)}
            >
              {step.phase ?? `0${idx + 1}`}
            </a>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full flex items-center justify-center border border-stone-200 dark:border-stone-800 text-stone-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
          aria-label="Close project"
        >
          ✕
        </button>
      </div>

      {/* Main Story Container */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 space-y-24">
        
        {/* Story Dispatch Header (Envelope / Postcard Aesthetic) */}
        <div className="bg-[#fcfbfa] dark:bg-[#151518] rounded-sm p-8 sm:p-12 border border-stone-200 dark:border-stone-800 shadow-sm relative overflow-hidden">
          
          <div className="h-1.5 w-full absolute top-0 left-0 bg-gradient-to-r from-red-400/40 via-blue-400/40 to-amber-400/40 opacity-70"></div>

          <div className="flex flex-wrap items-start justify-between gap-6 border-b border-stone-200 dark:border-stone-800 pb-8 mb-8">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-stone-400">
                <span>DISPATCH FROM THE STUDIO</span>
                <span>·</span>
                <span>{project.category}</span>
                {project.isInternship && (
                  <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 rounded font-semibold text-[9px]">
                    INTERNSHIP
                  </span>
                )}
              </div>
              <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                {project.title}
              </h1>
            </div>

            {/* Vintage Postmark stamp */}
            <div className="border border-dashed border-stone-400 dark:border-stone-600 bg-stone-100 dark:bg-stone-800 p-2 text-center rounded-[2px] min-w-[70px]">
              <span className="block text-[8px] font-mono uppercase tracking-widest text-stone-500">YEAR</span>
              <span className="font-serif italic font-bold text-lg text-stone-800 dark:text-stone-200">
                {project.year ?? '2026'}
              </span>
              <span className="block text-[7px] font-mono text-stone-500 uppercase">CASE STORY</span>
            </div>
          </div>

          {/* Quick Specifications Metadata */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2 text-xs font-mono">
            <div>
              <span className="text-stone-400 block uppercase tracking-wider text-[10px]">Role</span>
              <span className="font-medium text-zinc-800 dark:text-zinc-200 mt-0.5 block">{project.role ?? 'Communication Design'}</span>
            </div>
            <div>
              <span className="text-stone-400 block uppercase tracking-wider text-[10px]">Timeline</span>
              <span className="font-medium text-zinc-800 dark:text-zinc-200 mt-0.5 block">{project.duration ?? '4 Weeks'}</span>
            </div>
            <div>
              <span className="text-stone-400 block uppercase tracking-wider text-[10px]">Context</span>
              <span className="font-medium text-zinc-800 dark:text-zinc-200 mt-0.5 block">{project.category}</span>
            </div>
            <div>
              <span className="text-stone-400 block uppercase tracking-wider text-[10px]">Core Tools</span>
              <span className="font-medium text-zinc-800 dark:text-zinc-200 mt-0.5 block truncate">
                {project.tools ? project.tools.join(', ') : 'Design Systems'}
              </span>
            </div>
          </div>

          {/* Handwritten Dispatch Note */}
          {project.postcardNote && (
            <div className="mt-8 p-4 rounded bg-stone-100/80 dark:bg-stone-800/40 border-l-2 border-stone-400 dark:border-stone-600">
              <span className="text-[9px] font-mono uppercase tracking-widest text-stone-400 block mb-1">
                Author's Note:
              </span>
              <p className="font-hand text-2xl text-stone-800 dark:text-stone-200 leading-snug">
                "{project.postcardNote}"
              </p>
            </div>
          )}
        </div>

        {/* Hero Cover Media / Video */}
        <div className="space-y-4">
          <div 
            className="w-full aspect-[16/10] md:aspect-[16/9] rounded-sm overflow-hidden bg-stone-200 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 cursor-zoom-in relative group"
            onClick={() => onImageClick(project.coverImage)}
          >
            <img 
              src={project.coverImage} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors"></div>
            <div className="absolute bottom-4 right-4 bg-stone-900/80 backdrop-blur-md px-3 py-1.5 rounded text-white text-xs font-mono uppercase tracking-wider">
              Click to view full size ↗
            </div>
          </div>
          <p className="text-xs font-mono text-stone-500 italic text-center">
            {project.shortDescription}
          </p>
        </div>

        {/* CHAPTER 1: The Spark & The Human Problem (Why I made it) */}
        <section className="space-y-8 border-t border-stone-200 dark:border-stone-800 pt-16">
          <div className="flex items-center space-x-3 text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400">
            <span>CHAPTER 01</span>
            <span>·</span>
            <span>THE SPARK & CORE QUESTION</span>
          </div>

          <div className="space-y-6 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
              "{project.problemHeadline}"
            </h2>
            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400 font-light leading-relaxed">
              {project.problemBody}
            </p>
          </div>

          {project.fullDescription && (
            <div className="p-6 bg-stone-100/60 dark:bg-stone-900/40 rounded-sm border-l-2 border-stone-400 dark:border-stone-600 text-sm sm:text-base text-stone-700 dark:text-stone-300 font-light leading-relaxed">
              {project.fullDescription}
            </div>
          )}
        </section>

        {/* PROCESS CHAPTERS: Unfolding Step by Step */}
        <div className="space-y-24">
          {project.process.map((step, idx) => (
            <section 
              key={step.id} 
              id={`step-${step.id}`}
              className="border-t border-stone-200 dark:border-stone-800 pt-16 space-y-10"
            >
              
              {/* Chapter Badge */}
              <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800/80 pb-4">
                <div className="flex items-center space-x-3 text-xs font-mono uppercase tracking-widest text-stone-400">
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">CHAPTER {String(idx + 2).padStart(2, '0')}</span>
                  <span>·</span>
                  <span className="text-amber-600 dark:text-amber-400 font-medium">{step.phase ?? 'PROCESS'}</span>
                </div>
                <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest">
                  PHASE {idx + 1} OF {project.process.length}
                </span>
              </div>

              {/* Title & Narrative Description */}
              <div className="space-y-4 max-w-3xl">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-zinc-900 dark:text-zinc-100">
                  {step.title}
                </h3>
                {step.description && (
                  <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400 font-light leading-relaxed">
                    {step.description}
                  </p>
                )}
              </div>

              {/* Decision Note Callout (Why this decision was made) */}
              {step.decisionNote && (
                <div className="p-4 rounded bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs sm:text-sm text-stone-700 dark:text-stone-300 flex items-start space-x-3">
                  <span className="text-amber-500 font-mono text-base font-bold">↳</span>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-stone-400 block mb-0.5">
                      Pivotal Decision:
                    </span>
                    <p className="font-medium">{step.decisionNote}</p>
                  </div>
                </div>
              )}

              {/* Research Data Section */}
              {step.research && (
                <div className="bg-[#fcfbfa] dark:bg-[#151518] p-6 sm:p-8 rounded-sm border border-stone-200 dark:border-stone-800 space-y-6">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-stone-400 block">
                    Discovery & Inquiry Data
                  </span>
                  
                  <div className="grid sm:grid-cols-2 gap-6 text-sm">
                    {step.research.primary && (
                      <div className="space-y-2">
                        <span className="font-mono text-xs text-amber-600 dark:text-amber-400 uppercase font-semibold">
                          Primary Inquiries
                        </span>
                        <p className="text-stone-600 dark:text-stone-400 font-light leading-relaxed">
                          {step.research.primary}
                        </p>
                      </div>
                    )}
                    {step.research.secondary && (
                      <div className="space-y-2">
                        <span className="font-mono text-xs text-stone-500 uppercase font-semibold">
                          Secondary Context
                        </span>
                        <p className="text-stone-600 dark:text-stone-400 font-light leading-relaxed">
                          {step.research.secondary}
                        </p>
                      </div>
                    )}
                  </div>

                  {step.research.insights && step.research.insights.length > 0 && (
                    <div className="pt-4 border-t border-stone-100 dark:border-stone-800 space-y-3">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-stone-500 block">
                        What We Discovered:
                      </span>
                      <div className="grid gap-2.5">
                        {step.research.insights.map((insight, i) => (
                          <div key={i} className="flex items-start space-x-3 text-sm text-stone-700 dark:text-stone-300">
                            <span className="text-amber-600 dark:text-amber-400 font-bold">✦</span>
                            <span>{insight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Iterations Comparison Switcher */}
              {step.iterations && step.iterations.length > 0 && (
                <div className="space-y-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-stone-400 block">
                    What Changed Across Iterations (Compare)
                  </span>
                  
                  <div className="flex space-x-2 border-b border-stone-200 dark:border-stone-800 pb-3">
                    {step.iterations.map((iter, iterIdx) => (
                      <button
                        key={iterIdx}
                        onClick={() => setSelectedIteration(iterIdx)}
                        className={`px-4 py-2 rounded-sm text-xs font-mono uppercase tracking-wider transition-all ${
                          selectedIteration === iterIdx
                            ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold'
                            : 'text-stone-500 hover:text-zinc-900 dark:hover:text-zinc-100 border border-stone-200 dark:border-stone-800'
                        }`}
                      >
                        {iter.label}
                      </button>
                    ))}
                  </div>

                  <div className="p-6 bg-stone-50 dark:bg-stone-900/60 rounded-sm border border-stone-200 dark:border-stone-800 space-y-4">
                    <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 font-light">
                      {step.iterations[selectedIteration].description}
                    </p>
                    {step.iterations[selectedIteration].image && (
                      <div 
                        className="rounded overflow-hidden aspect-[16/9] bg-stone-200 dark:bg-stone-800 cursor-zoom-in"
                        onClick={() => onImageClick(step.iterations[selectedIteration].image!)}
                      >
                        <img 
                          src={step.iterations[selectedIteration].image} 
                          alt={step.iterations[selectedIteration].label}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Video Player */}
              {step.video && (
                <div className="space-y-3">
                  <div className="rounded-sm overflow-hidden aspect-[16/9] bg-black shadow-xl border border-stone-200 dark:border-stone-800 relative">
                    <video
                      key={step.video}
                      controls
                      playsInline
                      poster={step.posterImage ?? project.coverImage}
                      className="w-full h-full object-contain"
                    >
                      <source src={step.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest block text-center">
                    Cinematic Outcome · Motion Showcase
                  </span>
                </div>
              )}

              {/* Deliverable Groups (Categorized outcome sections: Print, Social, OOH, Digital, Gallery) */}
              {step.deliverableGroups && step.deliverableGroups.length > 0 && (
                <div className="space-y-14 pt-4">
                  {step.deliverableGroups.map((group) => (
                    <div 
                      key={group.id} 
                      className="space-y-6 bg-[#fcfbfa] dark:bg-[#151518] p-6 sm:p-8 rounded-sm border border-stone-200 dark:border-stone-800 shadow-sm"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 dark:border-stone-800 pb-4">
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-widest text-amber-600 dark:text-amber-400 block mb-1">
                            Deliverable Series
                          </span>
                          <h4 className="text-xl sm:text-2xl font-serif font-bold text-zinc-900 dark:text-zinc-100">
                            {group.category}
                          </h4>
                        </div>
                        <span className="font-mono text-xs text-stone-400 bg-stone-100 dark:bg-stone-800 px-2.5 py-1 rounded">
                          {group.items.length} {group.items.length === 1 ? 'Item' : 'Items'}
                        </span>
                      </div>
                      
                      {group.description && (
                        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-light leading-relaxed">
                          {group.description}
                        </p>
                      )}

                      {/* Dynamic Layout per Group Type */}
                      {group.id === 'dg-social' ? (
                        /* 2) Social Media Grid for 6 posts: 3x2 authentic Instagram layout */
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                          {group.items.map((item, idx) => (
                            <div
                              key={idx}
                              onClick={() => onImageClick(item.image)}
                              className="group relative cursor-zoom-in rounded overflow-hidden aspect-square bg-stone-200 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm"
                            >
                              <img
                                src={item.image}
                                alt={item.title ?? `Post ${idx + 1}`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors" />
                              <div className="absolute bottom-2 left-2 right-2 p-1.5 bg-black/60 backdrop-blur-sm rounded text-[9px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity truncate">
                                {item.title ?? `Post ${idx + 1}`}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : group.id === 'dg-print' ? (
                        /* 1) Print Ads: 3 portrait frames */
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                          {group.items.map((item, idx) => (
                            <div key={idx} className="space-y-3">
                              <div
                                onClick={() => onImageClick(item.image)}
                                className="group relative cursor-zoom-in rounded overflow-hidden aspect-[3/4] bg-stone-200 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-md"
                              >
                                <img
                                  src={item.image}
                                  alt={item.title ?? `Print Ad ${idx + 1}`}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-stone-900/15 group-hover:bg-transparent transition-colors" />
                                <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded text-[9px] font-mono text-white">
                                  Ad 0{idx + 1}
                                </div>
                              </div>
                              {item.title && (
                                <h5 className="font-serif font-bold text-sm text-zinc-900 dark:text-zinc-100">{item.title}</h5>
                              )}
                              {item.caption && (
                                <p className="text-xs text-stone-500 font-light leading-relaxed">{item.caption}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : group.id === 'dg-ooh' ? (
                        /* 3) 6 OOH Collaterals: strictly horizontal across all 6 */
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                          {group.items.map((item, idx) => (
                            <div key={idx} className="space-y-3">
                              <div
                                onClick={() => onImageClick(item.image)}
                                className="group relative cursor-zoom-in rounded overflow-hidden aspect-[16/9] bg-stone-200 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm"
                              >
                                <img
                                  src={item.image}
                                  alt={item.title ?? `OOH ${idx + 1}`}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-stone-900/15 group-hover:bg-transparent transition-colors" />
                                <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded text-[9px] font-mono text-white">
                                  Horizontal OOH 0{idx + 1}
                                </div>
                              </div>
                              {item.title && (
                                <h5 className="font-serif font-bold text-sm text-zinc-900 dark:text-zinc-100">{item.title}</h5>
                              )}
                              {item.caption && (
                                <p className="text-xs text-stone-500 font-light leading-relaxed">{item.caption}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : group.id === 'dg-digital' ? (
                        /* 4) 1 Website Banner & 1 Facebook Cover: wide panoramic displays */
                        <div className="space-y-6">
                          {group.items.map((item, idx) => (
                            <div key={idx} className="space-y-2">
                              <div className="flex items-center justify-between text-xs font-mono text-stone-500">
                                <span className="font-bold text-zinc-900 dark:text-zinc-100">{item.title}</span>
                                <span className="uppercase">{idx === 0 ? 'Panoramic Web Banner' : 'Facebook Page Cover'}</span>
                              </div>
                              <div
                                onClick={() => onImageClick(item.image)}
                                className="group relative cursor-zoom-in rounded overflow-hidden aspect-[21/9] sm:aspect-[24/9] bg-stone-200 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-md"
                              >
                                <img
                                  src={item.image}
                                  alt={item.title ?? `Digital Banner ${idx + 1}`}
                                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors" />
                              </div>
                              {item.caption && (
                                <p className="text-xs text-stone-500 font-light">{item.caption}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        /* 5) 2 Gallery Photos: high-res feature spreads */
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {group.items.map((item, idx) => (
                            <div key={idx} className="space-y-3">
                              <div
                                onClick={() => onImageClick(item.image)}
                                className="group relative cursor-zoom-in rounded overflow-hidden aspect-[16/10] bg-stone-200 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-md"
                              >
                                <img
                                  src={item.image}
                                  alt={item.title ?? `Gallery Photo ${idx + 1}`}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-stone-900/15 group-hover:bg-transparent transition-colors" />
                                <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded text-[9px] font-mono text-white">
                                  Pitch Board {idx + 1} ↗
                                </div>
                              </div>
                              {item.title && (
                                <h5 className="font-serif font-bold text-sm text-zinc-900 dark:text-zinc-100">{item.title}</h5>
                              )}
                              {item.caption && (
                                <p className="text-xs text-stone-500 font-light leading-relaxed">{item.caption}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Step Images Gallery */}
              {step.images && step.images.length > 0 && !step.video && !step.deliverableGroups && (
                <div className={`grid gap-6 ${
                  step.images.length === 1 
                    ? 'grid-cols-1' 
                    : step.images.length === 2 
                    ? 'grid-cols-1 md:grid-cols-2' 
                    : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4'
                }`}>
                  {step.images.map((img, imgIdx) => (
                    <div
                      key={imgIdx}
                      onClick={() => onImageClick(img)}
                      className="group relative cursor-zoom-in rounded overflow-hidden aspect-[4/3] bg-stone-200 dark:bg-stone-900 border border-stone-200 dark:border-stone-800"
                    >
                      <img 
                        src={img} 
                        alt={`${step.title} visual ${imgIdx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                  ))}
                </div>
              )}

              {/* Campaign Pillars if any */}
              {step.campaignIdeas && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                  {step.campaignIdeas.map((idea, ideaIdx) => (
                    <div key={ideaIdx} className="space-y-3 p-4 bg-stone-50 dark:bg-stone-900 rounded border border-stone-200 dark:border-stone-800">
                      <div 
                        className="aspect-[4/3] rounded overflow-hidden cursor-zoom-in"
                        onClick={() => onImageClick(idea.image)}
                      >
                        <img src={idea.image} alt={idea.title} className="w-full h-full object-cover" />
                      </div>
                      <h4 className="font-serif font-bold text-sm text-zinc-900 dark:text-zinc-100">{idea.title}</h4>
                      <p className="text-xs text-stone-500 font-light leading-relaxed">{idea.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Designer's Honest Reflection (Sticky Margin Note) */}
              {step.reflection && (
                <div className="p-6 bg-amber-50/60 dark:bg-stone-900/50 rounded-sm border-l-2 border-amber-500/80 dark:border-amber-400/60 space-y-2">
                  <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400">
                    <span>✎</span>
                    <span>Designer's Honest Reflection:</span>
                  </div>
                  <p className="font-hand text-2xl text-stone-800 dark:text-stone-200 leading-snug">
                    "{step.reflection}"
                  </p>
                </div>
              )}

            </section>
          ))}
        </div>

        {/* FINAL SECTION: Next Postcard Teaser */}
        <div className="border-t border-stone-200 dark:border-stone-800 pt-16 pb-24">
          <div className="bg-[#fcfbfa] dark:bg-[#151518] p-8 sm:p-12 rounded-sm border border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center sm:text-left">
              <span className="font-mono text-xs uppercase tracking-widest text-stone-400 block">
                Next Story in Stack:
              </span>
              <h4 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 dark:text-zinc-100">
                {nextProject.title}
              </h4>
              <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                {nextProject.category} · {nextProject.duration ?? 'Featured'}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => {
                  window.location.hash = `project/${nextProject.id}`;
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-sm text-xs font-mono uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow"
              >
                Read Next Postcard →
              </button>
              <button
                onClick={onClose}
                className="px-6 py-3.5 border border-stone-300 dark:border-stone-700 rounded-sm text-xs font-mono uppercase tracking-widest text-stone-600 dark:text-stone-300 hover:border-zinc-900 dark:hover:border-zinc-100 transition-colors"
              >
                Back to Stack
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ProjectDetails;
