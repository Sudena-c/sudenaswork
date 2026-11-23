import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CalendarFlipBookProps {
  images: string[];
  onImageClick: (url: string, gallery?: string[]) => void;
  scrollRootRef: React.RefObject<HTMLDivElement | null>;
}

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const SHORT_MONTHS = [
  'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC',
];

const CalendarFlipBook: React.FC<CalendarFlipBookProps> = ({
  images,
  onImageClick,
  scrollRootRef,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isInView, setIsInView] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hasEnteredOnce, setHasEnteredOnce] = useState(false);

  const total = images.length;

  // Detect when user scrolls to the Outcome calendar section inside ProjectDetails
  useEffect(() => {
    const target = wrapperRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) {
          setIsInView(entry.isIntersecting);
          if (entry.isIntersecting && !hasEnteredOnce) {
            setHasEnteredOnce(true);
            setIsAutoPlaying(true);
          }
        }
      },
      {
        root: scrollRootRef.current || null,
        threshold: 0.3,
      }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [scrollRootRef, hasEnteredOnce]);

  // Auto-flip months like a real calendar once the viewer reaches this section
  useEffect(() => {
    if (!isInView || !isAutoPlaying || total <= 1) return;

    const interval = window.setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 1700);

    return () => window.clearInterval(interval);
  }, [isInView, isAutoPlaying, total]);

  const goToMonth = (nextIdx: number, pauseAuto = true) => {
    if (nextIdx === currentIndex) return;
    setDirection(nextIdx > currentIndex ? 1 : -1);
    setCurrentIndex(nextIdx);
    if (pauseAuto) setIsAutoPlaying(false);
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
    setIsAutoPlaying(false);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
    setIsAutoPlaying(false);
  };

  const nextPreviewIndex = (currentIndex + 1) % total;
  const monthLabel = MONTHS[currentIndex] ?? `Month ${currentIndex + 1}`;

  return (
    <div ref={wrapperRef} className="space-y-6">
      {/* Top Calendar Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-[#f5efe6] dark:bg-[#191715] px-5 py-3.5 rounded-sm border border-stone-200 dark:border-stone-800">
        <div className="flex items-center space-x-3">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-600 dark:bg-amber-400 animate-pulse" />
          <div className="font-mono text-xs uppercase tracking-widest text-zinc-800 dark:text-zinc-200">
            <span className="font-bold">
              {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <span className="mx-2 text-stone-400">—</span>
            <span className="font-semibold text-amber-700 dark:text-amber-400">{monthLabel}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setIsAutoPlaying((prev) => !prev)}
            className={`px-3 py-1.5 rounded text-[11px] font-mono uppercase tracking-wider border transition-colors flex items-center space-x-1.5 ${
              isAutoPlaying
                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 font-semibold'
                : 'bg-white/80 dark:bg-stone-900 text-stone-600 dark:text-stone-300 border-stone-300 dark:border-stone-700 hover:border-zinc-900 dark:hover:border-zinc-100'
            }`}
          >
            <span>{isAutoPlaying ? '⏸ Pause Flip' : '▶ Auto-Flip'}</span>
          </button>

          <button
            type="button"
            onClick={() => onImageClick(images[currentIndex], images)}
            className="px-3 py-1.5 rounded text-[11px] font-mono uppercase tracking-wider border border-stone-300 dark:border-stone-700 bg-white/80 dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:border-zinc-900 dark:hover:border-zinc-100 transition-colors"
          >
            View Full Size ↗
          </button>
        </div>
      </div>

      {/* Physical Spiral-Bound 3D Flipping Calendar */}
      <div className="relative mx-auto max-w-3xl pt-5 pb-4">
        {/* Hanging Wall Hook / Brass Eyelet */}
        <div className="mx-auto w-8 h-5 border-2 border-stone-400 dark:border-stone-600 rounded-t-full -mb-1 relative z-0 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-amber-600/80 dark:bg-amber-400/80" />
        </div>

        {/* Calendar Pad Container with 3D Perspective */}
        <div
          className="relative rounded-b-md shadow-2xl"
          style={{ perspective: '1800px' }}
        >
          {/* Spiral Binding Bar & Wire Loops along the Top Edge */}
          <div className="relative z-30 h-7 bg-gradient-to-b from-stone-200 to-stone-300 dark:from-stone-800 dark:to-stone-900 border border-stone-300 dark:border-stone-700 rounded-t-md flex items-center justify-around px-6 shadow-sm">
            {Array.from({ length: 12 }).map((_, wireIdx) => (
              <div key={wireIdx} className="relative flex flex-col items-center">
                {/* Metallic wire loop */}
                <div className="w-2.5 h-6 -mt-3 rounded-full border-2 border-zinc-700 dark:border-zinc-300 bg-transparent shadow-inner" />
                {/* Punched hole on calendar header */}
                <div className="w-2 h-2 rounded-full bg-stone-500/70 dark:bg-black/70 -mt-1.5" />
              </div>
            ))}
          </div>

          {/* Stacked Paper Pad Depth Underneath */}
          <div className="relative bg-[#e8dfd1] dark:bg-[#1c1917] border-x border-b border-stone-300 dark:border-stone-800 rounded-b-md pb-2 pr-1.5 pl-1.5">
            <div className="relative overflow-hidden rounded-b bg-[#f9f4eb] dark:bg-[#23201d] border border-stone-300/80 dark:border-stone-700/80">
              {/* Underlying Next Sheet (visible beneath during page lift) */}
              <div
                aria-hidden="true"
                className="w-full h-[380px] sm:h-[480px] md:h-[520px] p-4 sm:p-6 flex items-center justify-center bg-[#f5ede0] dark:bg-[#1e1b18]"
              >
                <img
                  src={images[nextPreviewIndex]}
                  alt=""
                  className="max-h-full w-auto max-w-full object-contain opacity-90"
                />
              </div>

              {/* Active Flipping Calendar Page */}
              <AnimatePresence initial={false} mode="popLayout" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={{
                    enter: (dir: 1 | -1) =>
                      dir === 1
                        ? { rotateX: 0, opacity: 1, zIndex: 10 }
                        : { rotateX: -105, opacity: 0.4, zIndex: 25 },
                    center: {
                      rotateX: 0,
                      opacity: 1,
                      zIndex: 20,
                      transition: {
                        duration: 0.65,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                    exit: (dir: 1 | -1) =>
                      dir === 1
                        ? {
                            rotateX: -110,
                            opacity: 0,
                            zIndex: 30,
                            transition: {
                              duration: 0.65,
                              ease: [0.45, 0, 0.55, 1],
                            },
                          }
                        : {
                            rotateX: 0,
                            opacity: 1,
                            zIndex: 10,
                            transition: { duration: 0.65 },
                          },
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  style={{
                    transformOrigin: 'top center',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                  }}
                  className="absolute inset-0 w-full h-full bg-[#fbf7ef] dark:bg-[#24201c] p-4 sm:p-6 flex flex-col items-center justify-center shadow-[inset_0_8px_20px_rgba(0,0,0,0.04)]"
                >
                  {/* Top paper crease highlight */}
                  <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />

                  {/* Month Page Artwork */}
                  <div
                    onClick={() => {
                      setIsAutoPlaying(false);
                      onImageClick(images[currentIndex], images);
                    }}
                    className="relative w-full h-full flex items-center justify-center cursor-zoom-in group"
                    title="Click to zoom full resolution"
                  >
                    <img
                      src={images[currentIndex]}
                      alt={`Warli Art Calendar — ${monthLabel}`}
                      className="max-h-full w-auto max-w-full object-contain rounded-[2px] shadow-md group-hover:scale-[1.015] transition-transform duration-300"
                    />

                    {/* Subtle Month Stamp Overlay */}
                    <div className="absolute top-2 left-2 px-2.5 py-1 bg-stone-900/75 dark:bg-black/80 backdrop-blur-sm rounded text-[10px] font-mono uppercase tracking-widest text-amber-200 pointer-events-none">
                      {monthLabel} · 2026
                    </div>

                    {/* Hover Zoom Prompt */}
                    <div className="absolute bottom-2 left-2 px-2.5 py-1 bg-stone-900/75 backdrop-blur-sm rounded text-[10px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      Click artwork to inspect ↗
                    </div>
                  </div>

                  {/* Interactive Bottom-Right Page Curl Button to Flip */}
                  <button
                    type="button"
                    onClick={handleNext}
                    className="absolute bottom-0 right-0 w-14 h-14 overflow-hidden group/curl focus:outline-none"
                    aria-label="Flip to next month"
                    title="Flip page to next month"
                  >
                    <span className="absolute bottom-0 right-0 w-0 h-0 border-b-[48px] border-b-[#e2d5c1] dark:border-b-stone-700 border-l-[48px] border-l-transparent shadow-[-3px_-3px_8px_rgba(0,0,0,0.12)] group-hover/curl:border-b-amber-200 dark:group-hover/curl:border-b-amber-800 transition-colors" />
                    <span className="absolute bottom-1.5 right-2 text-[10px] font-mono font-bold text-stone-700 dark:text-stone-200">
                      ↻
                    </span>
                  </button>
                </motion.div>
              </AnimatePresence>

              {/* Left / Right Tactile Flip Controls */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/85 dark:bg-stone-900/85 backdrop-blur-md border border-stone-300 dark:border-stone-700 text-zinc-900 dark:text-zinc-100 shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
                aria-label="Previous month"
                title="Flip back one month"
              >
                ←
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/85 dark:bg-stone-900/85 backdrop-blur-md border border-stone-300 dark:border-stone-700 text-zinc-900 dark:text-zinc-100 shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
                aria-label="Next month"
                title="Flip forward one month"
              >
                →
              </button>
            </div>
          </div>

          {/* Realistic Stacked Paper Edges */}
          <div className="mx-2 h-1.5 bg-[#dfd4c3] dark:bg-stone-800 border-x border-b border-stone-300 dark:border-stone-700 rounded-b-sm" />
          <div className="mx-4 h-1 bg-[#d4c7b3] dark:bg-stone-900 border-x border-b border-stone-300 dark:border-stone-800 rounded-b-sm" />
        </div>
      </div>

      {/* 12-Month Quick Flip Tabs */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-stone-400">
          <span>Click any month to flip directly</span>
          <span>12 Months · Recycled Kraft Series</span>
        </div>
        <div className="grid grid-cols-6 sm:grid-cols-12 gap-1.5">
          {images.map((_, idx) => {
            const active = idx === currentIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => goToMonth(idx, true)}
                className={`py-2 rounded-sm text-[10px] font-mono uppercase tracking-wider transition-all border ${
                  active
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 font-bold shadow-sm scale-105'
                    : 'bg-stone-100/80 dark:bg-stone-900/80 text-stone-500 dark:text-stone-400 border-stone-200 dark:border-stone-800 hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
              >
                {SHORT_MONTHS[idx] ?? `M${idx + 1}`}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarFlipBook;
