
import React from 'react';
import { Project } from '../types';

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
  onImageClick: (url: string) => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onClose, onImageClick }) => {
  return (
    <div className="min-h-screen bg-light dark:bg-dark pt-32 pb-24">
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

      {/* Main Hero Image - Now Organic Pebble Shape */}
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

      {/* Overview */}
      <div className="max-w-7xl mx-auto px-6 mb-32 grid md:grid-cols-3 gap-16">
        <div className="md:col-span-1 space-y-8">
           <div className="space-y-2">
             <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-40">Services</h4>
             <p className="text-sm">{project.category}</p>
           </div>
           <div className="space-y-2">
             <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-40">Timeline</h4>
             <p className="text-sm">4 Weeks</p>
           </div>
        </div>
        <div className="md:col-span-2">
           <h3 className="text-3xl font-serif mb-8">The Challenge</h3>
           <p className="text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
             {project.fullDescription}
           </p>
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {project.process.map((step, idx) => (
          <div key={step.id} className={`grid md:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
             <div className={`${idx % 2 === 1 ? 'md:order-2' : ''} space-y-6`}>
                <span className="text-6xl font-serif italic opacity-10">0{idx + 1}</span>
                <h3 className="text-3xl font-serif font-bold">{step.title}</h3>
                <p className="text-lg text-zinc-500 leading-relaxed">{step.description}</p>
             </div>
             <div 
              className={`relative overflow-hidden aspect-video bg-zinc-100 dark:bg-zinc-900 group cursor-zoom-in rounded-[40%_60%_70%_30%_/_50%_40%_60%_50%]`}
              onClick={() => onImageClick(step.image)}
             >
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
             </div>
          </div>
        ))}
      </div>

      {/* Footer Navigation */}
      <div className="max-w-7xl mx-auto px-6 mt-48 pt-12 border-t border-zinc-200 dark:border-zinc-800">
         <button 
           onClick={onClose}
           className="text-4xl md:text-6xl font-serif font-bold hover:italic transition-all"
         >
           Next Project &rarr;
         </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
