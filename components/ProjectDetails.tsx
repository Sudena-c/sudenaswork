import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project, ProcessStep, CampaignIdea, ResearchData } from '../types';
import { PROJECTS } from '../constants';

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
  onImageClick: (url: string) => void;
}

// Helper to extract embeddable YouTube URL
function getYouTubeEmbedUrl(url: string): string | null {
  if (!url) return null;
  const regExp = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/;
  const match = url.match(regExp);
  if (match && match[1]) {
    return `https://www.youtube-nocookie.com/embed/${match[1]}?rel=0&modestbranding=1`;
  }
  // If user just provided an 11-char ID
  if (/^[\w-]{11}$/.test(url.trim())) {
    return `https://www.youtube-nocookie.com/embed/${url.trim()}?rel=0&modestbranding=1`;
  }
  return null;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onClose, onImageClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const oohScrollRef = useRef<HTMLDivElement>(null);
  const postersScrollRef = useRef<HTMLDivElement>(null);

  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [selectedIteration, setSelectedIteration] = useState<number>(0);
  const [showSectionMenu, setShowSectionMenu] = useState(false);

  // OOH horizontal view mode (carousel vs grid)
  const [oohViewMode, setOohViewMode] = useState<'horizontal' | 'grid'>('horizontal');
  const [activeOohIndex, setActiveOohIndex] = useState(0);

  // Internship 2nd poster collection view mode (pairs vs horizontal)
  const [posterCollectionMode, setPosterCollectionMode] = useState<'pairs' | 'horizontal'>('pairs');

  // YouTube video state (persisted per project in localStorage)
  const [youTubeUrl, setYouTubeUrl] = useState<string>(() => {
    const saved = localStorage.getItem(`yt_url_${project.id}`);
    return saved || project.youtubeUrl || '';
  });
  const [isEditingYouTube, setIsEditingYouTube] = useState(false);
  const [inputYouTubeUrl, setInputYouTubeUrl] = useState(youTubeUrl);

  // Update when project changes
  useEffect(() => {
    const saved = localStorage.getItem(`yt_url_${project.id}`);
    const initial = saved || project.youtubeUrl || '';
    setYouTubeUrl(initial);
    setInputYouTubeUrl(initial);
  }, [project.id, project.youtubeUrl]);

  const handleSaveYouTubeUrl = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanUrl = inputYouTubeUrl.trim();
    setYouTubeUrl(cleanUrl);
    localStorage.setItem(`yt_url_${project.id}`, cleanUrl);
    setIsEditingYouTube(false);
  };

  // Keyboard escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Safe container scroll to element that NEVER changes URL hash or triggers page exit
  const scrollToId = (id: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const container = containerRef.current;
    if (!container) return;

    if (id === 'top') {
      container.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetEl = document.getElementById(id);
    if (targetEl) {
      const containerRect = container.getBoundingClientRect();
      const targetRect = targetEl.getBoundingClientRect();
      const relativeTop = targetRect.top - containerRect.top + container.scrollTop - 90;
      container.scrollTo({ top: relativeTop, behavior: 'smooth' });
    }
  };

  // Find next project in the 7 projects list
  const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  // OOH horizontal carousel controls
  const handleScrollOOH = (direction: 'left' | 'right') => {
    if (oohScrollRef.current) {
      const scrollAmount = oohScrollRef.current.clientWidth * 0.85;
      oohScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Update active OOH index on scroll
  const handleOOHScrollEvent = () => {
    if (oohScrollRef.current) {
      const { scrollLeft, clientWidth } = oohScrollRef.current;
      const index = Math.round(scrollLeft / (clientWidth * 0.85));
      setActiveOohIndex(Math.max(0, Math.min(5, index)));
    }
  };

  // Check if project has deliverables with deliverableGroups
  const allDeliverableGroups = project.process.flatMap(p => p.deliverableGroups || []);

  const embedUrl = getYouTubeEmbedUrl(youTubeUrl);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 bg-[#fbfaf8] dark:bg-[#0e0e10] overflow-y-auto selection:bg-stone-300 dark:selection:bg-stone-700 transition-colors duration-300"
    >
      
      {/* Top Sticky Story Bar & In-Project Section Navigation */}
      <header className="sticky top-0 z-50 bg-[#fbfaf8]/95 dark:bg-[#0e0e10]/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 px-4 sm:px-8 md:px-12 py-3.5 flex items-center justify-between gap-4">
        
        {/* Left: Return to Postcard Stack */}
        <div className="flex items-center space-x-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="group flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white px-3 py-1.5 rounded-full border border-stone-300 dark:border-stone-700 hover:border-zinc-900 dark:hover:border-zinc-100 bg-white/70 dark:bg-stone-900/70 transition-all shadow-sm"
            title="Return to 7 Selected Works Stack"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
            <span className="font-semibold">Return to Stack</span>
          </button>
          
          <span className="hidden lg:inline text-xs font-mono text-stone-300 dark:text-stone-700">|</span>
          <span className="hidden lg:inline text-xs font-mono font-medium text-stone-500 uppercase tracking-widest truncate max-w-xs">
            {project.title}
          </span>
        </div>

        {/* Center / Right: Jump to Project Sections (Safe in-project navigation) */}
        <div className="flex items-center space-x-2">
          
          {/* Quick Deliverable Shortcuts for Internship projects if available */}
          {allDeliverableGroups.length > 0 && (
            <div className="hidden xl:flex items-center space-x-1 border-r border-stone-200 dark:border-stone-800 pr-3 mr-1 text-[11px] font-mono">
              <span className="text-stone-400 uppercase tracking-wider mr-1 text-[10px]">Deliverables:</span>
              {allDeliverableGroups.map((group) => (
                <button
                  key={group.id}
                  type="button"
                  onClick={(e) => scrollToId(`group-${group.id}`, e)}
                  className="px-2.5 py-1 rounded bg-stone-100 dark:bg-stone-800/80 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 transition-colors"
                >
                  {group.id === 'dg-ooh' ? '✦ OOH (Horizontal)' : group.category.replace(/^\d+\)\s*/, '')}
                </button>
              ))}
            </div>
          )}

          {/* Phase / Chapter Indicators */}
          <div className="hidden md:flex items-center space-x-1.5 text-[11px] font-mono">
            <button
              type="button"
              onClick={(e) => scrollToId('chapter-spark', e)}
              className="px-2.5 py-1 rounded text-stone-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-stone-100 dark:hover:bg-stone-800/60 transition-colors"
            >
              The Spark
            </button>

            {project.process.map((step, idx) => (
              <button
                key={step.id}
                type="button"
                className={`px-2.5 py-1 rounded transition-colors ${
                  activePhaseIndex === idx 
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold shadow-sm' 
                    : 'text-stone-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-stone-100 dark:hover:bg-stone-800/60'
                }`}
                onClick={(e) => {
                  setActivePhaseIndex(idx);
                  scrollToId(`step-${step.id}`, e);
                }}
              >
                {step.phase ?? `Phase ${idx + 1}`}
              </button>
            ))}
          </div>

          {/* Mobile / Compact Section Menu Button */}
          <div className="relative md:hidden">
            <button
              type="button"
              onClick={() => setShowSectionMenu(!showSectionMenu)}
              className="px-3 py-1.5 rounded text-xs font-mono bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700 flex items-center space-x-1.5"
            >
              <span>Sections</span>
              <span>▾</span>
            </button>

            {showSectionMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-sm shadow-xl p-2 z-50 space-y-1 text-xs font-mono">
                <div className="text-[10px] text-stone-400 uppercase tracking-widest px-2 py-1">Jump to Section:</div>
                <button
                  type="button"
                  onClick={(e) => { setShowSectionMenu(false); scrollToId('chapter-spark', e); }}
                  className="w-full text-left px-2.5 py-1.5 rounded hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 block"
                >
                  ✦ The Spark & Problem
                </button>
                {project.process.map((step, idx) => (
                  <button
                    key={step.id}
                    type="button"
                    onClick={(e) => { setShowSectionMenu(false); scrollToId(`step-${step.id}`, e); }}
                    className="w-full text-left px-2.5 py-1.5 rounded hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 block truncate"
                  >
                    {step.phase ?? `Phase ${idx + 1}`}: {step.title}
                  </button>
                ))}
                {allDeliverableGroups.map((group) => (
                  <button
                    key={group.id}
                    type="button"
                    onClick={(e) => { setShowSectionMenu(false); scrollToId(`group-${group.id}`, e); }}
                    className="w-full text-left px-2.5 py-1.5 rounded hover:bg-stone-100 dark:hover:bg-stone-800 text-amber-700 dark:text-amber-400 block truncate"
                  >
                    ↳ {group.category}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Close button with tooltip */}
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center border border-stone-200 dark:border-stone-800 text-stone-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            aria-label="Close project case story"
            title="Close and return to portfolio stack"
          >
            ✕
          </button>
        </div>

      </header>

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
                    INTERNSHIP WORK
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

        {/* Hero Cover Media / Main Visual */}
        <div className="space-y-4">
          <div 
            className="w-full aspect-[16/10] md:aspect-[16/9] rounded-sm overflow-hidden bg-stone-200 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 cursor-zoom-in relative group shadow-sm"
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

        {/* Dedicated YouTube Video Integration for Immersive Design Studio & Production Design */}
        {(project.category === 'Immersive Design Studio' || project.category === 'Production Design' || project.youtubeUrl) && (
          <section id="youtube-section" className="space-y-6 border-t border-stone-200 dark:border-stone-800 pt-16">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
              <div>
                <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-red-600 dark:text-red-400">
                  <span>▶</span>
                  <span>YOUTUBE VIDEO SHOWCASE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 dark:text-zinc-100 mt-1">
                  Cinematic Motion & Video Documentation
                </h3>
              </div>

              {/* Edit / Change YouTube Video URL Button */}
              <button
                type="button"
                onClick={() => setIsEditingYouTube(!isEditingYouTube)}
                className="px-3.5 py-1.5 rounded text-xs font-mono uppercase tracking-wider border border-stone-300 dark:border-stone-700 hover:border-zinc-900 dark:hover:border-zinc-100 text-stone-700 dark:text-stone-300 bg-stone-50 dark:bg-stone-900 transition-colors flex items-center space-x-2"
              >
                <span>{isEditingYouTube ? '✕ Cancel' : '✦ Add / Edit YouTube Video'}</span>
              </button>
            </div>

            {/* YouTube URL Editor Form */}
            {isEditingYouTube && (
              <form onSubmit={handleSaveYouTubeUrl} className="p-6 bg-stone-100/90 dark:bg-stone-900 rounded border border-stone-300 dark:border-stone-700 space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-2">
                    Paste YouTube Video Link or Video ID:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inputYouTubeUrl}
                      onChange={(e) => setInputYouTubeUrl(e.target.value)}
                      placeholder="e.g. https://www.youtube.com/watch?v=YOUR_VIDEO_ID or youtu.be/..."
                      className="flex-1 px-4 py-2.5 rounded text-sm bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-600 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-amber-500 font-mono"
                    />
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded font-mono text-xs uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity"
                    >
                      Save & Preview
                    </button>
                  </div>
                  <p className="text-[11px] font-mono text-stone-500 mt-2">
                    Supports any standard YouTube URL (watch, share youtu.be, shorts, or embed). Your video is saved instantly.
                  </p>
                </div>
              </form>
            )}

            {/* Responsive Embedded YouTube Player */}
            {embedUrl ? (
              <div className="space-y-3">
                <div className="aspect-[16/9] w-full rounded-sm overflow-hidden bg-black shadow-2xl border border-stone-200 dark:border-stone-800">
                  <iframe
                    src={embedUrl}
                    title={`${project.title} Video Showcase`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-stone-500 pt-1">
                  <span>Interactive YouTube Embed · Full 1080p High-Definition</span>
                  {youTubeUrl && (
                    <a
                      href={youTubeUrl.startsWith('http') ? youTubeUrl : `https://www.youtube.com/watch?v=${youTubeUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center space-x-1"
                    >
                      <span>Open on YouTube</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <div className="p-12 text-center border border-dashed border-stone-300 dark:border-stone-700 rounded-sm bg-stone-50/50 dark:bg-stone-900/30 space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-red-100 dark:bg-red-950 flex items-center justify-center text-red-600 dark:text-red-400 text-xl font-bold">
                  ▶
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-lg text-zinc-900 dark:text-zinc-100">Add YouTube Video</h4>
                  <p className="text-xs font-mono text-stone-500 max-w-md mx-auto">
                    You can easily embed any YouTube video in this project. Click the button above to paste your video link.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsEditingYouTube(true)}
                  className="px-4 py-2 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-mono uppercase tracking-wider rounded"
                >
                  Paste YouTube Link
                </button>
              </div>
            )}
          </section>
        )}

        {/* CHAPTER 1: The Spark & The Human Problem (Why I made it) */}
        <section id="chapter-spark" className="space-y-8 border-t border-stone-200 dark:border-stone-800 pt-16">
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

              {/* Decision Note Callout */}
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
                        type="button"
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

              {/* Direct HTML5 Video Player */}
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

              {/* Deliverable Groups (Categorized outcome sections: Print, Social, OOH, Digital, Gallery, Posters) */}
              {step.deliverableGroups && step.deliverableGroups.length > 0 && (
                <div className="space-y-16 pt-4">
                  {step.deliverableGroups.map((group) => (
                    <div 
                      key={group.id} 
                      id={`group-${group.id}`}
                      className="space-y-6 bg-[#fcfbfa] dark:bg-[#151518] p-6 sm:p-8 rounded-sm border border-stone-200 dark:border-stone-800 shadow-sm"
                    >
                      
                      {/* Group Header */}
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 dark:border-stone-800 pb-4">
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-widest text-amber-600 dark:text-amber-400 block mb-1">
                            Deliverable Series
                          </span>
                          <h4 className="text-xl sm:text-2xl font-serif font-bold text-zinc-900 dark:text-zinc-100">
                            {group.category}
                          </h4>
                        </div>

                        {/* View Mode controls if group is OOH or Posters Collection */}
                        {group.id === 'dg-ooh' ? (
                          <div className="flex items-center space-x-2">
                            <button
                              type="button"
                              onClick={() => setOohViewMode('horizontal')}
                              className={`px-3 py-1 rounded text-xs font-mono uppercase tracking-wider transition-colors ${
                                oohViewMode === 'horizontal'
                                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold'
                                  : 'bg-stone-100 dark:bg-stone-800 text-stone-500'
                              }`}
                            >
                              ⇄ Swipe Big View
                            </button>
                            <button
                              type="button"
                              onClick={() => setOohViewMode('grid')}
                              className={`px-3 py-1 rounded text-xs font-mono uppercase tracking-wider transition-colors ${
                                oohViewMode === 'grid'
                                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold'
                                  : 'bg-stone-100 dark:bg-stone-800 text-stone-500'
                              }`}
                            >
                              ⊞ Grid View
                            </button>
                          </div>
                        ) : group.id === 'dg-posters-collection' ? (
                          <div className="flex items-center space-x-2">
                            <button
                              type="button"
                              onClick={() => setPosterCollectionMode('pairs')}
                              className={`px-3 py-1 rounded text-xs font-mono uppercase tracking-wider transition-colors ${
                                posterCollectionMode === 'pairs'
                                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold'
                                  : 'bg-stone-100 dark:bg-stone-800 text-stone-500'
                              }`}
                            >
                              ⊞ Pairs View
                            </button>
                            <button
                              type="button"
                              onClick={() => setPosterCollectionMode('horizontal')}
                              className={`px-3 py-1 rounded text-xs font-mono uppercase tracking-wider transition-colors ${
                                posterCollectionMode === 'horizontal'
                                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold'
                                  : 'bg-stone-100 dark:bg-stone-800 text-stone-500'
                              }`}
                            >
                              ⇄ Horizontal Swipe
                            </button>
                          </div>
                        ) : (
                          <span className="font-mono text-xs text-stone-400 bg-stone-100 dark:bg-stone-800 px-2.5 py-1 rounded">
                            {group.items.length} {group.items.length === 1 ? 'Item' : 'Items'}
                          </span>
                        )}
                      </div>
                      
                      {group.description && (
                        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-light leading-relaxed">
                          {group.description}
                        </p>
                      )}

                      {/* 3) 6 OOH Collaterals: HORIZONTAL SCROLLWAY (User requested: "keep it scrollable horizontally so that a perosn can see it bigger, and swipe through it also") */}
                      {group.id === 'dg-ooh' ? (
                        oohViewMode === 'horizontal' ? (
                          <div className="space-y-4">
                            {/* Horizontal Slider Navigation bar */}
                            <div className="flex items-center justify-between text-xs font-mono text-stone-500 pb-1">
                              <span className="flex items-center space-x-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                <span>Swipe or use arrows to view all 6 horizontal OOHs in full scale</span>
                              </span>
                              
                              <div className="flex items-center space-x-2">
                                <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                                  {activeOohIndex + 1} / {group.items.length}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => handleScrollOOH('left')}
                                  className="w-8 h-8 rounded border border-stone-300 dark:border-stone-700 flex items-center justify-center hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
                                  aria-label="Previous OOH"
                                >
                                  ←
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleScrollOOH('right')}
                                  className="w-8 h-8 rounded border border-stone-300 dark:border-stone-700 flex items-center justify-center hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
                                  aria-label="Next OOH"
                                >
                                  →
                                </button>
                              </div>
                            </div>

                            {/* Horizontal Scroll Runway */}
                            <div 
                              ref={oohScrollRef}
                              onScroll={handleOOHScrollEvent}
                              className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
                              style={{ scrollSnapType: 'x mandatory' }}
                            >
                              {group.items.map((item, idx) => (
                                <div
                                  key={idx}
                                  className="flex-shrink-0 w-[85vw] max-w-[860px] sm:w-[740px] md:w-[860px] snap-center space-y-3 group"
                                >
                                  <div
                                    onClick={() => onImageClick(item.image)}
                                    className="relative cursor-zoom-in rounded overflow-hidden aspect-[16/9] bg-stone-900 border border-stone-300 dark:border-stone-700 shadow-xl group-hover:border-zinc-900 dark:group-hover:border-zinc-100 transition-all"
                                  >
                                    <img
                                      src={item.image}
                                      alt={item.title ?? `Horizontal OOH ${idx + 1}`}
                                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors" />
                                    
                                    <div className="absolute top-3 left-3 px-3 py-1 bg-black/75 backdrop-blur-md rounded text-[10px] font-mono text-white flex items-center space-x-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                      <span>HORIZONTAL OOH 0{idx + 1} OF 06</span>
                                    </div>

                                    <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-black/80 backdrop-blur-md rounded text-[10px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-1.5">
                                      <span>Click to view full screen</span>
                                      <span>↗</span>
                                    </div>
                                  </div>

                                  <div className="flex flex-wrap items-baseline justify-between gap-2 px-1">
                                    <h5 className="font-serif font-bold text-base text-zinc-900 dark:text-zinc-100">
                                      {item.title}
                                    </h5>
                                    {item.caption && (
                                      <p className="text-xs text-stone-500 font-light max-w-md">
                                        {item.caption}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Dot Indicators */}
                            <div className="flex justify-center items-center space-x-2 pt-2">
                              {group.items.map((_, dotIdx) => (
                                <button
                                  key={dotIdx}
                                  type="button"
                                  onClick={() => {
                                    if (oohScrollRef.current) {
                                      const cardWidth = oohScrollRef.current.clientWidth * 0.85;
                                      oohScrollRef.current.scrollTo({
                                        left: dotIdx * cardWidth,
                                        behavior: 'smooth'
                                      });
                                    }
                                  }}
                                  className={`h-2 rounded-full transition-all ${
                                    activeOohIndex === dotIdx 
                                      ? 'w-8 bg-zinc-900 dark:bg-zinc-100' 
                                      : 'w-2 bg-stone-300 dark:bg-stone-700'
                                  }`}
                                  aria-label={`Jump to OOH ${dotIdx + 1}`}
                                />
                              ))}
                            </div>
                          </div>
                        ) : (
                          /* Grid view fallback */
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
                        )
                      ) : group.id === 'dg-posters-collection' ? (
                        /* 6) Internship 2nd: Posters & Social Media Creatives Collation (Scroll in Pairs OR Horizontal) */
                        posterCollectionMode === 'pairs' ? (
                          <div className="space-y-8">
                            <div className="text-xs font-mono text-stone-500 flex items-center space-x-2">
                              <span>✦ Pairs View: scrolling brings up posters side-by-side in balanced pairs</span>
                            </div>

                            {/* Posters in Pairs Grid: 2 per row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                              {group.items.map((item, idx) => (
                                <div key={idx} className="space-y-4 group">
                                  <div
                                    onClick={() => onImageClick(item.image)}
                                    className={`relative cursor-zoom-in rounded overflow-hidden bg-stone-200 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-md group-hover:border-zinc-900 dark:group-hover:border-zinc-100 transition-all ${
                                      item.aspect === 'square' ? 'aspect-square' : 'aspect-[3/4]'
                                    }`}
                                  >
                                    <img
                                      src={item.image}
                                      alt={item.title ?? `Poster ${idx + 1}`}
                                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors" />
                                    <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/70 backdrop-blur-sm rounded text-[9px] font-mono text-white">
                                      Pair {(Math.floor(idx / 2)) + 1} · Item {idx + 1}
                                    </div>
                                    <div className="absolute bottom-3 left-3 right-3 p-2 bg-black/60 backdrop-blur-sm rounded text-[10px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity truncate">
                                      {item.title} ↗
                                    </div>
                                  </div>

                                  <div className="space-y-1">
                                    <div className="flex items-center space-x-2 text-[10px] font-mono uppercase text-amber-600 dark:text-amber-400">
                                      <span>CREATIVE {String(idx + 1).padStart(2, '0')}</span>
                                      <span>·</span>
                                      <span>{item.aspect === 'square' ? 'Social Creative' : 'Campaign Poster'}</span>
                                    </div>
                                    <h5 className="font-serif font-bold text-base text-zinc-900 dark:text-zinc-100">
                                      {item.title}
                                    </h5>
                                    {item.caption && (
                                      <p className="text-xs text-stone-500 font-light leading-relaxed">
                                        {item.caption}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          /* Horizontal Swipe Mode for Poster Collection */
                          <div className="space-y-4">
                            <div className="flex items-center justify-between text-xs font-mono text-stone-500">
                              <span>Swipe horizontally through the poster & social creative collection</span>
                              <div className="flex space-x-2">
                                <button
                                  type="button"
                                  onClick={() => {
                                    if (postersScrollRef.current) {
                                      postersScrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
                                    }
                                  }}
                                  className="w-8 h-8 rounded border border-stone-300 dark:border-stone-700 flex items-center justify-center hover:bg-stone-200 dark:hover:bg-stone-800"
                                >
                                  ←
                                </button>
                                <button
                                  type="button"
                                  onClick={() => {
                                    if (postersScrollRef.current) {
                                      postersScrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
                                    }
                                  }}
                                  className="w-8 h-8 rounded border border-stone-300 dark:border-stone-700 flex items-center justify-center hover:bg-stone-200 dark:hover:bg-stone-800"
                                >
                                  →
                                </button>
                              </div>
                            </div>

                            <div 
                              ref={postersScrollRef}
                              className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
                            >
                              {group.items.map((item, idx) => (
                                <div
                                  key={idx}
                                  className="flex-shrink-0 w-[300px] sm:w-[380px] snap-center space-y-3 group"
                                >
                                  <div
                                    onClick={() => onImageClick(item.image)}
                                    className={`relative cursor-zoom-in rounded overflow-hidden bg-stone-200 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-md group-hover:border-zinc-900 dark:group-hover:border-zinc-100 transition-all ${
                                      item.aspect === 'square' ? 'aspect-square' : 'aspect-[3/4]'
                                    }`}
                                  >
                                    <img
                                      src={item.image}
                                      alt={item.title ?? `Poster ${idx + 1}`}
                                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                                    />
                                    <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded text-[9px] font-mono text-white">
                                      0{idx + 1}
                                    </div>
                                  </div>
                                  <h5 className="font-serif font-bold text-sm text-zinc-900 dark:text-zinc-100">
                                    {item.title}
                                  </h5>
                                  {item.caption && (
                                    <p className="text-xs text-stone-500 font-light truncate">
                                      {item.caption}
                                    </p>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )
                      ) : group.id === 'dg-social' ? (
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

        {/* FINAL SECTION: Next Postcard Teaser in the 7 Stories Stack */}
        <div className="border-t border-stone-200 dark:border-stone-800 pt-16 pb-24">
          <div className="bg-[#fcfbfa] dark:bg-[#151518] p-8 sm:p-12 rounded-sm border border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-8 shadow-sm">
            <div className="space-y-2 text-center sm:text-left">
              <span className="font-mono text-xs uppercase tracking-widest text-stone-400 block">
                Next Story in Stack ({(currentIndex + 1) % PROJECTS.length + 1} of 7):
              </span>
              <h4 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 dark:text-zinc-100">
                {nextProject.title}
              </h4>
              <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                {nextProject.category} · {nextProject.duration ?? 'Featured Story'}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={() => {
                  window.location.hash = `project/${nextProject.id}`;
                  if (containerRef.current) {
                    containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="px-6 py-3.5 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-sm text-xs font-mono uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow"
              >
                Read Next Postcard →
              </button>
              <button
                type="button"
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
