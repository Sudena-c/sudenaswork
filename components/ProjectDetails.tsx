
import React from 'react';
import { Project, ResearchData, ProcessStep } from '../types';

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
  onImageClick: (url: string) => void;
}

const ResearchSection: React.FC<{ data: ResearchData }> = ({ data }) => (
  <div className="mt-12 space-y-12">
    <div className="grid sm:grid-cols-2 gap-10">
      {data.primary && (
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">
            <span className="w-4 h-[1px] bg-zinc-400"></span>
            <span>Primary Research</span>
          </div>
          <p className="text-sm leading-relaxed text-zinc-500 font-light italic">
            {data.primary}
          </p>
        </div>
      )}
      {data.secondary && (
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">
            <span className="w-4 h-[1px] bg-zinc-400"></span>
            <span>Secondary Research</span>
          </div>
          <p className="text-sm leading-relaxed text-zinc-500 font-light italic">
            {data.secondary}
          </p>
        </div>
      )}
    </div>

    {data.insights && data.insights.length > 0 && (
      <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800">
        <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6 text-zinc-400">Key Insights</h5>
        <div className="grid gap-4">
          {data.insights.map((insight, idx) => (
            <div key={idx} className="flex items-start space-x-4 group">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-dark dark:bg-light flex-shrink-0 group-hover:scale-125 transition-transform"></span>
              <p className="text-sm md:text-base font-medium text-zinc-600 dark:text-zinc-300">
                {insight}
              </p>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

const FeaturedSection: React.FC<{ step: ProcessStep; onImageClick: (url: string) => void }> = ({ step, onImageClick }) => (
  <div className="relative w-full py-32 bg-dark text-white overflow-hidden">
    {/* Decorative element */}
    <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-white/[0.02] rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none"></div>
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="max-w-3xl mb-16 space-y-6">
        <div className="inline-flex items-center space-x-4">
          <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-white/40">The Final Reveal</span>
          <div className="w-12 h-[1px] bg-white/20"></div>
        </div>
        <h2 className="text-5xl md:text-8xl font-serif font-bold tracking-tighter leading-[0.9]">
          {step.title}
        </h2>
        {step.description && (
          <p className="text-xl md:text-2xl font-light text-white/50 leading-relaxed max-w-2xl">
            {step.description}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-12">
        {step.images?.map((img, idx) => (
          <div 
            key={idx}
            className="w-full relative group cursor-zoom-in rounded-3xl overflow-hidden shadow-[0_40px_100px_-30px_rgba(0,0,0,0.8)]"
            onClick={() => onImageClick(img)}
          >
            <img 
              src={img} 
              alt={step.title} 
              className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-12">
              <span className="text-[10px] uppercase tracking-widest font-bold">View Full Quality</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onClose, onImageClick }) => {
  return (
    <div className="min-h-screen bg-light dark:bg-dark pt-32 pb-24 transition-colors duration-500">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <button 
          onClick={onClose}
          className="group flex items-center space-x-2 text-[10px] uppercase tracking-widest mb-12 hover:opacity-60 transition-opacity"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Portfolio</span>
        </button>

        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">{project.category}</span>
            <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tighter leading-none">{project.title}</h1>
          </div>
          <div className="md:text-right">
             <p className="text-xl md:text-2xl font-light text-zinc-500 max-w-lg md:ml-auto">
              {project.shortDescription}
             </p>
          </div>
        </div>
      </div>

      {/* Main Hero Image */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div 
          className="w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] shadow-2xl cursor-zoom-in group"
          onClick={() => onImageClick(project.coverImage)}
        >
          <img 
            src={project.coverImage} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Problem Statement Section */}
      <div className="bg-dark text-white py-32 mb-32">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-20">
          <div className="inline-block relative">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold pb-2">Process & Development</h4>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20"></div>
          </div>

          <h2 className="text-3xl md:text-6xl font-sans font-bold leading-[1.1] tracking-tight max-w-4xl mx-auto">
            {project.problemHeadline}
          </h2>

          <div className="space-y-6 max-w-2xl mx-auto pt-12">
            <h3 className="text-2xl md:text-4xl font-serif font-bold italic">Identifying the Problem</h3>
            <p className="text-base md:text-lg text-white/60 leading-relaxed font-light">
              {project.problemBody}
            </p>
          </div>
        </div>
      </div>

      {/* Overview/Story */}
      <div className="max-w-7xl mx-auto px-6 mb-48 grid md:grid-cols-3 gap-16">
        <div className="md:col-span-1 space-y-8">
           <div className="space-y-2">
             <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-40">Services</h4>
             <p className="text-sm font-medium">{project.category}</p>
           </div>
           <div className="space-y-2">
             <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-40">Timeline</h4>
             <p className="text-sm font-medium">4-6 Weeks</p>
           </div>
        </div>
        <div className="md:col-span-2">
           <h3 className="text-3xl font-serif mb-8 italic">The Creative Context</h3>
           <p className="text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 font-light">
             {project.fullDescription}
           </p>
        </div>
      </div>

      {/* Process Section */}
      <div className="space-y-48">
        {project.process.map((step, idx) => (
          <React.Fragment key={step.id}>
            {step.layout === 'featured' ? (
              <FeaturedSection step={step} onImageClick={onImageClick} />
            ) : (
              <div className="max-w-7xl mx-auto px-6 space-y-16">
                <div className={`grid md:grid-cols-2 gap-16 items-start ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                   <div className={`${idx % 2 === 1 ? 'md:order-2' : ''} space-y-6 md:sticky md:top-32`}>
                      <span className="text-6xl font-serif italic opacity-10">0{idx + 1}</span>
                      <h3 className="text-3xl md:text-4xl font-serif font-bold leading-tight">{step.title}</h3>
                      {step.description && <p className="text-lg text-zinc-500 leading-relaxed font-light">{step.description}</p>}
                   </div>
                   
                   <div className="space-y-8">
                     {step.images && step.images.length > 0 ? (
                       <div className={`grid gap-6 ${step.images.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                         {step.images.map((img, imgIdx) => (
                           <div 
                              key={imgIdx}
                              className={`relative overflow-hidden aspect-video bg-zinc-100 dark:bg-zinc-900 group cursor-zoom-in rounded-[40%_60%_70%_30%_/_50%_40%_60%_50%] shadow-lg`}
                              onClick={() => onImageClick(img)}
                           >
                              <img 
                                src={img} 
                                alt={`${step.title} image ${imgIdx + 1}`} 
                                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/10 transition-colors"></div>
                           </div>
                         ))}
                       </div>
                     ) : (
                       <div className="aspect-video flex items-center justify-center border border-zinc-200 dark:border-zinc-800 rounded-[40%_60%_70%_30%_/_50%_40%_60%_50%] p-12 text-center opacity-40 italic font-serif">
                         Visual development in progress...
                       </div>
                     )}
                   </div>
                </div>

                {/* Structured Research Breakdown */}
                {step.research && (
                  <div className="max-w-4xl mx-auto pt-12">
                    <ResearchSection data={step.research} />
                  </div>
                )}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Footer Navigation */}
      <div className="max-w-7xl mx-auto px-6 mt-48 pt-12 border-t border-zinc-200 dark:border-zinc-800">
         <button 
           onClick={onClose}
           className="group flex items-center space-x-6 text-4xl md:text-6xl font-serif font-bold transition-all"
         >
           <span className="group-hover:italic">Back to Portfolio</span>
           <span className="group-hover:translate-x-4 transition-transform">&rarr;</span>
         </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
