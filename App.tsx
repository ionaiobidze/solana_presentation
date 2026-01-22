import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './constants';
import { SlideVisuals } from './components/SlideVisuals';
import { ChevronRight, ChevronLeft, Maximize2, Minimize2 } from 'lucide-react';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentSlide = SLIDES[currentSlideIndex];
  const progress = ((currentSlideIndex + 1) / SLIDES.length) * 100;

  const nextSlide = useCallback(() => {
    if (currentSlideIndex < SLIDES.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  }, [currentSlideIndex]);

  const prevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  }, [currentSlideIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div className="h-screen bg-[#050505] text-white overflow-hidden relative selection:bg-solana-purple selection:text-white font-sans flex flex-col">
      
      {/* Cinematic Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
         {/* Deep ambient glows */}
         <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-solana-purple/5 blur-[120px] rounded-full mix-blend-screen animate-pulse" style={{animationDuration: '8s'}} />
         <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-solana-green/5 blur-[120px] rounded-full mix-blend-screen animate-pulse" style={{animationDuration: '10s'}} />
         
         {/* Mesh pattern overlay */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50"></div>
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-50 pointer-events-none">
        <div className="text-xs font-mono font-bold tracking-[0.2em] text-white/30 pointer-events-auto">
          SOLANA_ARCH_V1.0
        </div>
        <button onClick={toggleFullscreen} className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/30 hover:text-white pointer-events-auto backdrop-blur-sm border border-transparent hover:border-white/10">
          {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
        </button>
      </header>

      {/* Main Content Area - Full Bleed Split Screen */}
      <main className="flex-1 w-full h-full relative z-10 grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Column: Text Content */}
          <div className="h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 xl:px-32 py-20 relative overflow-y-auto">
             <div className="space-y-6 md:space-y-10 max-w-4xl mx-auto md:mx-0 w-full">
                
                {/* Slide Number */}
                <div className="flex items-center gap-3 text-[10px] md:text-xs font-mono tracking-widest text-solana-green/80 uppercase">
                    <span className="text-solana-green">0{currentSlide.id}</span>
                    <div className="h-[1px] w-8 md:w-12 bg-gradient-to-r from-solana-green to-transparent opacity-50"></div>
                    <span className="text-gray-500">/ 0{SLIDES.length}</span>
                </div>

                {/* Titles */}
                <div>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-lg">
                      {currentSlide.title}
                    </h1>
                    {currentSlide.subtitle && (
                      <p className="mt-4 md:mt-6 text-lg md:text-xl lg:text-2xl text-gray-400 font-light leading-relaxed border-l-2 border-solana-purple/50 pl-4 md:pl-6">
                        {currentSlide.subtitle}
                      </p>
                    )}
                </div>

                {/* Content Points */}
                <ul className="space-y-4 md:space-y-5">
                    {currentSlide.content.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-4 group">
                         <div className="mt-2.5 min-w-[6px] h-[6px] rounded-full bg-gray-700 group-hover:bg-solana-green group-hover:shadow-[0_0_8px_#14F195] transition-all duration-300"></div>
                         <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed font-light group-hover:text-white transition-colors">
                           {point}
                         </p>
                      </li>
                    ))}
                </ul>
             </div>
          </div>

          {/* Right Column: Visuals */}
          <div className="hidden md:block h-full w-full relative border-l border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden">
             {/* Inner Glow */}
             <div className="absolute inset-0 bg-gradient-to-br from-solana-purple/5 via-transparent to-solana-green/5 pointer-events-none" />
             
             {/* Visual Component Render */}
             <div className="absolute inset-0 flex items-center justify-center p-12 lg:p-20">
                 <SlideVisuals slide={currentSlide} />
             </div>
             
             {/* Tech Decorative Corners */}
             <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-white/5 opacity-50" />
             <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-white/5 opacity-50" />
          </div>

      </main>

      {/* Footer & Navigation */}
      <footer className="absolute bottom-0 left-0 w-full z-40 pointer-events-none">
        {/* Progress Line */}
        <div className="h-[2px] w-full bg-gray-800/30">
            <div 
              className="h-full bg-gradient-to-r from-solana-purple to-solana-green shadow-[0_0_15px_rgba(20,241,149,0.8)] transition-all duration-500 ease-out" 
              style={{ width: `${progress}%` }} 
            />
        </div>
        
        {/* Nav Controls */}
        <div className="p-8 flex items-center justify-end pointer-events-auto">
           <div className="flex gap-4">
              <button 
                onClick={prevSlide}
                disabled={currentSlideIndex === 0}
                className="p-4 rounded-full bg-black/40 hover:bg-white/10 border border-white/10 hover:border-white/30 backdrop-blur-md transition-all disabled:opacity-20 disabled:cursor-not-allowed group active:scale-95"
              >
                <ChevronLeft size={24} className="text-gray-400 group-hover:text-white" />
              </button>
              <button 
                onClick={nextSlide}
                disabled={currentSlideIndex === SLIDES.length - 1}
                className="p-4 rounded-full bg-black/40 hover:bg-white/10 border border-white/10 hover:border-white/30 backdrop-blur-md transition-all disabled:opacity-20 disabled:cursor-not-allowed group active:scale-95"
              >
                <ChevronRight size={24} className="text-gray-400 group-hover:text-white" />
              </button>
           </div>
        </div>
      </footer>

    </div>
  );
};

export default App;