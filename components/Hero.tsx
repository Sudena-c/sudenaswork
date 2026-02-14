
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video - Full Screen Stretched */}
      <div className="absolute inset-0 z-0 bg-dark">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover grayscale brightness-[0.35] contrast-125"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-front-of-a-mirror-34138-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-transparent to-dark/80"></div>
      </div>

      {/* "SC" Background Watermark - The "Side/Style" element */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none select-none z-[5]">
        <span className="text-[40vw] font-serif font-bold italic tracking-tighter text-white leading-none">SC</span>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="space-y-1 animate-in fade-in zoom-in duration-1000">
          <p className="text-lg md:text-2xl font-sans font-light text-white/70 uppercase tracking-[0.25em] mb-4">
            Hi, I am
          </p>
          <h1 className="text-5xl md:text-[8rem] font-serif font-bold text-white leading-[0.9] tracking-tighter mb-8">
            Sudena<br/>
            <span className="italic">Chandnani</span>
          </h1>
        </div>
        
        <div className="flex items-center justify-center space-x-6 opacity-50 mt-8">
          <div className="w-10 h-[1px] bg-white"></div>
          <p className="text-white text-[9px] md:text-xs uppercase tracking-[0.5em] font-bold">
            Communication Designer
          </p>
          <div className="w-10 h-[1px] bg-white"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 flex flex-col items-center gap-4 opacity-30">
        <div className="w-[1px] h-12 bg-white animate-bounce"></div>
        <span className="text-[7px] uppercase tracking-[0.4em] text-white">Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
