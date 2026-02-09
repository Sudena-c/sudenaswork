
import React from 'react';
import { INTERESTS } from '../constants';

const AfterHours: React.FC = () => {
  return (
    <section id="after-hours" className="py-32 relative overflow-hidden bg-light dark:bg-dark">
      {/* Decorative Background Text */}
      <div className="absolute top-0 left-0 w-full opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[20rem] font-serif font-bold italic -translate-x-20 -translate-y-20 whitespace-nowrap">ME</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        <h2 className="text-6xl md:text-8xl font-serif font-bold mb-6 tracking-tighter">Beyond<br/>The Screen</h2>
        <p className="text-zinc-500 max-w-lg text-xl font-light">
          The mosaic of personal interests that fuel my creative process. 
          Aerial arts to culinary experiments—each hobby adds a layer to who I am.
        </p>
      </div>

      {/* Floating Cloud Layout */}
      <div className="relative max-w-7xl mx-auto px-6 h-[800px] hidden md:block">
        {INTERESTS.map((interest, idx) => {
          const positions = [
            { top: '0%', left: '0%', size: 'w-80 h-80' },
            { top: '10%', left: '60%', size: 'w-72 h-72' },
            { top: '40%', left: '25%', size: 'w-96 h-96' },
            { top: '55%', left: '70%', size: 'w-64 h-64' },
            { top: '65%', left: '0%', size: 'w-72 h-72' },
          ];
          const pos = positions[idx];
          
          return (
            <div 
              key={interest.id}
              className={`absolute ${pos.size} group cursor-pointer transition-all duration-700 hover:z-50`}
              style={{ top: pos.top, left: pos.left }}
            >
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl group-hover:scale-110 transition-transform duration-500 ring-1 ring-zinc-200 dark:ring-zinc-800">
                <img src={interest.image} alt={interest.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-8 text-center">
                  <span className="text-white font-serif italic text-3xl mb-2">{interest.name}</span>
                  <p className="text-white/70 text-[10px] uppercase tracking-widest">{interest.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Scroll Layout */}
      <div className="md:hidden flex space-x-6 overflow-x-auto px-6 pb-12 no-scrollbar snap-x">
        {INTERESTS.map((interest) => (
          <div key={interest.id} className="flex-shrink-0 w-72 snap-center">
             <div className="aspect-square rounded-full overflow-hidden mb-4 shadow-xl">
                <img src={interest.image} alt={interest.name} className="w-full h-full object-cover" />
             </div>
             <div className="text-center">
               <h4 className="text-2xl font-serif italic mb-2">{interest.name}</h4>
               <p className="text-sm text-zinc-500 leading-relaxed">{interest.description}</p>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AfterHours;
