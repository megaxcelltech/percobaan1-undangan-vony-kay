"use client";
import { useState, useEffect } from "react";

const Couple = () => {
  const brideBackgrounds = [
    "/images/gal1.jpg",
    "/images/gal2.jpg",
    "/images/wanita.jpg",
  ];

  const groomBackgrounds = [
    "/images/gal1.jpg",
    "/images/gal2.jpg",
    "/images/pria.jpg",
  ];

  const [brideBgIndex, setBrideBgIndex] = useState(0);
  const [groomBgIndex, setGroomBgIndex] = useState(0);

  useEffect(() => {
    const brideInterval = setInterval(() => {
      setBrideBgIndex((prev) => (prev + 1) % brideBackgrounds.length);
    }, 4000);

    const groomInterval = setInterval(() => {
      setGroomBgIndex((prev) => (prev + 1) % groomBackgrounds.length);
    }, 4000);

    return () => {
      clearInterval(brideInterval);
      clearInterval(groomInterval);
    };
  }, [brideBackgrounds.length, groomBackgrounds.length]);

  const InstagramIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" height="20" 
      viewBox="0 0 24 24" fill="none" 
      stroke="currentColor" strokeWidth="2" 
      strokeLinecap="round" strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );

  return (
    // REVISI: flex-col untuk mobile, lg:flex-row untuk desktop. lg:gap-8 agar jarak tidak terlalu jauh.
    <section id="couple" className="py-20 px-6 bg-white flex flex-col lg:flex-row gap-12 lg:gap-8 items-center justify-center overflow-hidden">
      
      {/* --- MEMPELAI WANITA --- */}
      {/* REVISI: Penyesuaian max-w agar pas saat berdampingan di desktop (lg:max-w-[320px]) */}
      <div className="relative w-full max-w-[500px] sm:max-w-[380px] lg:max-w-[320px] aspect-[2/3] rounded-full overflow-hidden flex flex-col items-center justify-center text-white shadow-2xl">
        
        <div className="absolute inset-0 z-0">
          {brideBackgrounds.map((src, index) => {
            let positionClass = "translate-x-full opacity-0";
            if (index === brideBgIndex) {
              positionClass = "translate-x-0 opacity-100";
            } else if (index === (brideBgIndex - 1 + brideBackgrounds.length) % brideBackgrounds.length) {
              positionClass = "-translate-x-full opacity-0";
            }

            return (
              <div
                key={index}
                className={`absolute inset-0 bg-cover bg-center transition-all duration-[1500ms] ease-in-out blur-md scale-125 brightness-[0.6] ${positionClass}`}
                style={{ backgroundImage: `url(${src})` }}
              />
            );
          })}
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full border-2 border-white overflow-hidden mb-6 shadow-lg">
            <img 
              src="/images/wanita.jpg" 
              alt="Vony" 
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="font-serif text-5xl italic drop-shadow-md">Vony</h2>
          <div className="w-32 h-[1px] bg-white/60 my-6" />

          <div className="text-center space-y-1 px-4">
            <p className="text-xs uppercase tracking-[0.2em] font-light opacity-90">Putri dari</p>
            <p className="font-serif text-lg">Bapak Putra & Ibu Putri</p>
          </div>

          <a href="#" className="mt-8 p-2 border border-white rounded-full hover:bg-white hover:text-slate-800 transition transform hover:scale-110">
            <InstagramIcon />
          </a>
        </div>
      </div>

      {/* REVISI: Menyesuaikan margin "&" agar cantik saat horizontal */}
      <div className="font-serif text-5xl text-slate-300 animate-pulse lg:mx-4">&</div>

      {/* --- MEMPELAI PRIA --- */}
      <div className="relative w-full max-w-[500px] sm:max-w-[380px] lg:max-w-[320px] aspect-[2/3] rounded-full overflow-hidden flex flex-col items-center justify-center text-white shadow-2xl">
        
        <div className="absolute inset-0 z-0">
          {groomBackgrounds.map((src, index) => {
            let positionClass = "translate-x-full opacity-0";
            if (index === groomBgIndex) {
              positionClass = "translate-x-0 opacity-100";
            } else if (index === (groomBgIndex - 1 + groomBackgrounds.length) % groomBackgrounds.length) {
              positionClass = "-translate-x-full opacity-0";
            }

            return (
              <div
                key={index}
                className={`absolute inset-0 bg-cover bg-center transition-all duration-[1500ms] ease-in-out blur-md scale-125 brightness-[0.6] ${positionClass}`}
                style={{ backgroundImage: `url(${src})` }}
              />
            );
          })}
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full border-2 border-white overflow-hidden mb-6 shadow-lg">
            <img 
              src="/images/pria.jpg" 
              alt="Kai" 
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="font-serif text-5xl italic drop-shadow-md">Kai</h2>
          <div className="w-32 h-[1px] bg-white/60 my-6" />

          <div className="text-center space-y-1 px-4">
            <p className="text-xs uppercase tracking-[0.2em] font-light opacity-90">Putra dari</p>
            <p className="font-serif text-lg">Bapak Putra & Ibu Putri</p>
          </div>

          <a href="#" className="mt-8 p-2 border border-white rounded-full hover:bg-white hover:text-slate-800 transition transform hover:scale-110">
            <InstagramIcon />
          </a>
        </div>
      </div>

    </section>
  );
};

export default Couple;