import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SparkleParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
}

interface SparklesProps {
  enabled?: boolean;
}

export const SparkleEffects: React.FC<SparklesProps> = ({ enabled = true }) => {
  const [particles, setParticles] = useState<SparkleParticle[]>([]);

  useEffect(() => {
    if (!enabled) {
      setParticles([]);
      return;
    }

    // Soft baby pastel blues and gentle soft cyan stardust with very low opacity
    const softPastelColors = [
      '#7dd3fc', // baby pastel blue (sky-300)
      '#a5f3fc', // soft pastel cyan (cyan-200)
      '#bae6fd', // light sky (sky-200)
      '#e0f2fe', // pale ice blue (sky-100)
      '#93c5fd', // baby periwinkle blue (blue-300)
    ];

    const count = 20;
    const items: SparkleParticle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 94 + 3, // percentage vw within hero
      y: Math.random() * 88 + 6, // percentage vh within hero
      size: Math.random() * 8 + 5,
      color: softPastelColors[Math.floor(Math.random() * softPastelColors.length)],
      delay: Math.random() * 2.5,
      duration: Math.random() * 3 + 3,
    }));

    setParticles(items);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <AnimatePresence>
      {/* Sparkles confined to Home Page with very light opacity (0.15 - 0.4 max) */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none z-10 overflow-hidden select-none"
      >
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{
              // Kept very light opacity as requested (peaks at 0.35, mostly 0.12 - 0.25)
              opacity: [0, 0.32, 0.12, 0.38, 0],
              scale: [0.5, 1.05, 0.75, 1.1, 0.4],
              y: ['0vh', '-3vh', '-6vh'],
              rotate: [0, 60, 120, 180],
            }}
            transition={{
              repeat: Infinity,
              duration: p.duration,
              delay: p.delay,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
          >
            <svg
              width={p.size}
              height={p.size}
              viewBox="0 0 24 24"
              fill="none"
              style={{ filter: `drop-shadow(0 0 4px ${p.color})` }}
            >
              <path
                d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
                fill={p.color}
              />
            </svg>
          </motion.div>
        ))}

        {/* Very faint, airy baby blue ambient glow spot on the home page */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-sky-300/[0.04] dark:bg-sky-400/[0.03] blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/5 w-80 h-80 rounded-full bg-cyan-300/[0.03] dark:bg-cyan-400/[0.025] blur-3xl pointer-events-none" />
      </div>
    </AnimatePresence>
  );
};

export default SparkleEffects;
