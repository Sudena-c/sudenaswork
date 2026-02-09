
import React, { useState } from 'react';

interface LightboxProps {
  image: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ image, onClose }) => {
  const [zoom, setZoom] = useState(false);

  return (
    <div 
      className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-sm flex items-center justify-center cursor-zoom-out animate-in fade-in duration-300"
      onClick={onClose}
    >
      <button 
        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div 
        className="max-w-[90vw] max-h-[85vh] transition-transform duration-500 overflow-auto no-scrollbar"
        onClick={(e) => { e.stopPropagation(); setZoom(!zoom); }}
      >
        <img 
          src={image} 
          alt="Lightbox view" 
          className={`mx-auto object-contain transition-all duration-500 ${zoom ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'}`}
        />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-[10px] uppercase tracking-widest pointer-events-none">
        Click to {zoom ? 'Zoom Out' : 'Zoom In'}
      </div>
    </div>
  );
};

export default Lightbox;
