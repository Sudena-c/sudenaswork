
import React, { useState, useEffect } from 'react';
import { Interest } from '../types';

interface InterestGalleryProps {
  interest: Interest;
  onClose: () => void;
  onImageClick: (url: string) => void;
}

const InterestGallery: React.FC<InterestGalleryProps> = ({ interest, onClose, onImageClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const gallery = interest.gallery || [interest.image];

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % gallery.length);
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setActiveIndex((prev) => (prev + 1) % gallery.length);
      if (e.key === 'ArrowLeft') setActiveIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [gallery.length, onClose]);

  return (
    <div 
      className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-xl flex flex-col items-center justify-center p-6 animate-in fade-in duration-500 overflow-hidden"
      onClick={onClose}
    >
      {/* Editorial Header */}
      <div className="absolute top-12 left-12 right-12 flex justify-between items-start pointer-events-none">
        <div className="space-y-2">
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 block">Behind the scenes</span>
          <h2 className="text-4xl md:text-7xl font-serif font-bold italic text-white tracking-tighter">
            {interest.name}
          </h2>
        </div>
        <button 
          onClick={onClose}
          className="pointer-events-auto bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all border border-white/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Slider Container - Zoomed out feel by restricting height and using object-contain */}
      <div className="relative w-full max-w-4xl h-[50vh] md:h-[60vh] mt-24">
        {gallery.map((img, idx) => (
          <div 
            key={idx}
            className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
              idx === activeIndex 
                ? 'opacity-100 scale-100 translate-x-0' 
                : idx < activeIndex 
                  ? 'opacity-0 scale-90 -translate-x-full' 
                  : 'opacity-0 scale-90 translate-x-full'
            }`}
          >
            <div className="w-full h-full flex items-center justify-center overflow-hidden">
              <img 
                src={img} 
                alt={`${interest.name} ${idx + 1}`} 
                className="max-w-full max-h-full object-contain cursor-zoom-in transition-transform duration-500 hover:scale-[1.02]"
                onClick={(e) => {
                  e.stopPropagation();
                  onImageClick(img);
                }}
              />
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
          <button 
            onClick={prev}
            className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 hover:bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/10 text-white transition-all transform hover:scale-110 active:scale-95 group"
          >
            <span className="text-xl md:text-2xl group-hover:-translate-x-1 transition-transform">←</span>
          </button>
          <button 
            onClick={next}
            className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 hover:bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/10 text-white transition-all transform hover:scale-110 active:scale-95 group"
          >
            <span className="text-xl md:text-2xl group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>

      {/* Bottom Info & Progress */}
      <div className="max-w-xl w-full text-center mt-12 space-y-6">
        <p className="text-base md:text-lg text-white/60 font-light leading-relaxed">
          {interest.description}
        </p>
        
        <div className="flex items-center justify-center space-x-4">
          {gallery.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => { e.stopPropagation(); setActiveIndex(idx); }}
              className={`h-1 transition-all duration-500 rounded-full ${
                idx === activeIndex 
                  ? 'w-12 bg-[#3b4621]' 
                  : 'w-4 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        <div className="text-[9px] uppercase tracking-[0.4em] text-white/20">
          Photo {activeIndex + 1} of {gallery.length} • Click image to see properly
        </div>
      </div>
    </div>
  );
};

export default InterestGallery;
