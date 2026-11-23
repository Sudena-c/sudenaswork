import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LightboxProps {
  images: string[];
  initialIndex?: number;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, initialIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(
    Math.min(Math.max(0, initialIndex), Math.max(0, images.length - 1))
  );
  const [zoom, setZoom] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const hasMultiple = images.length > 1;
  const activeImage = images[currentIndex] || images[0];

  useEffect(() => {
    setCurrentIndex(Math.min(Math.max(0, initialIndex), Math.max(0, images.length - 1)));
    setZoom(false);
  }, [images, initialIndex]);

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!hasMultiple) return;
    setZoom(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!hasMultiple) return;
    setZoom(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && hasMultiple) {
        setZoom(false);
        setCurrentIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === 'ArrowLeft' && hasMultiple) {
        setZoom(false);
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hasMultiple, images.length, onClose]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (zoom || !hasMultiple) return;
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (zoom || !hasMultiple || touchStartX.current === null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    if (Math.abs(delta) > 45) {
      if (delta < 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-zinc-950/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 select-none animate-in fade-in duration-200"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Bar: Counter, Zoom Toggle & Close */}
      <div
        className="w-full max-w-6xl flex items-center justify-between z-20 shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center space-x-3">
          {hasMultiple ? (
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-white tracking-wider">
              {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </span>
          ) : (
            <span className="text-[11px] font-mono uppercase tracking-widest text-white/50">
              Full View
            </span>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={() => setZoom((z) => !z)}
            className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-mono text-white transition-colors"
          >
            {zoom ? 'Fit Screen' : 'Zoom In +'}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-colors"
            aria-label="Close image preview"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Main Centered Viewport-Fitted Image Area */}
      <div className="relative flex-1 w-full flex items-center justify-center min-h-0 my-3">
        {/* Left Carousel Arrow */}
        {hasMultiple && (
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-1 sm:left-4 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-xl"
            aria-label="Previous image"
          >
            ←
          </button>
        )}

        {/* Image Wrapper: Always fits viewport cleanly when not zoomed */}
        <div
          className={`relative flex items-center justify-center ${
            zoom
              ? 'max-w-[94vw] max-h-[82vh] overflow-auto cursor-zoom-out p-2'
              : 'w-full h-full max-w-[88vw] max-h-[74vh] overflow-hidden cursor-zoom-in'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setZoom((z) => !z);
          }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={activeImage}
              src={activeImage}
              alt={`Preview ${currentIndex + 1}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className={
                zoom
                  ? 'max-w-none w-auto h-auto max-h-[140vh] object-contain rounded-sm shadow-2xl'
                  : 'max-w-full max-h-[74vh] w-auto h-auto object-contain rounded-sm shadow-2xl mx-auto'
              }
            />
          </AnimatePresence>
        </div>

        {/* Right Carousel Arrow */}
        {hasMultiple && (
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-1 sm:right-4 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-xl"
            aria-label="Next image"
          >
            →
          </button>
        )}
      </div>

      {/* Bottom Thumbnail Strip (for multi-image carousel) or Helper Hint */}
      <div
        className="w-full max-w-4xl flex flex-col items-center space-y-2 z-20 shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        {hasMultiple && (
          <div className="flex items-center space-x-2 overflow-x-auto max-w-full py-1 px-2 no-scrollbar">
            {images.map((imgUrl, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setZoom(false);
                  setCurrentIndex(idx);
                }}
                className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded overflow-hidden shrink-0 border-2 transition-all ${
                  idx === currentIndex
                    ? 'border-pink-400 scale-105 opacity-100 shadow-md'
                    : 'border-white/15 opacity-50 hover:opacity-85'
                }`}
                aria-label={`View slide ${idx + 1}`}
              >
                <img
                  src={imgUrl}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        <div className="text-white/45 text-[10px] font-mono uppercase tracking-widest text-center">
          {hasMultiple
            ? 'Swipe or use ← → keys to slide · Click image to toggle zoom · Esc to close'
            : 'Fitted to screen · Click image to toggle zoom · Esc to close'}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
