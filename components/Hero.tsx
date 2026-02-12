
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-end md:items-center justify-start">
      {/* Background Video - Full Screen Stretched */}
      <div className="absolute inset-0 z-0 bg-dark">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover brightness-75 transition-all duration-1000 grayscale hover:grayscale-0"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-front-of-a-mirror-34138-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Soft Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-dark/20"></div>
      </div>

      {/* Landing Text Overlay */}
      <div className="relative z-10 px-6 md:px-12 pb-24 md:pb-0 max-w-5xl">
        <h1 className="text-5xl md:text-[9rem] font-serif font-bold text-white leading-[0.85] tracking-tighter mb-6 opacity-90">
          Hi, I am Sudena<br/>Chandnani
        </h1>
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
          <p className="text-white/60 text-base md:text-xl font-light uppercase tracking-widest max-w-xl">
            Communication Designer & Digital Artist
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-white/40"></div>
            <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] animate-pulse">Scroll to explore works</span>
          </div>
        </div>
      </div>

      {/* Bottom Right Brand Tag */}
      <div className="absolute bottom-12 right-12 hidden md:block text-right">
        <span className="text-white/20 text-[6rem] font-serif font-bold italic leading-none pointer-events-none">S.C</span>
      </div>
    </section>
  );
};

export default Hero;
