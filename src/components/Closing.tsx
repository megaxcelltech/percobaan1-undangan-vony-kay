"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Globe, X } from "lucide-react"; // Hapus Instagram dari sini

const backgroundImages = [
  "/images/gal1.jpg",
  "/images/gal2.jpg",
  "/images/gal1.jpg",
];

const Closing = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // --- KOMPONEN IKON INSTAGRAM MANUAL (Agar tidak error) ---
  const InstagramIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="22" height="22" 
      viewBox="0 0 24 24" fill="none" 
      stroke="currentColor" strokeWidth="2" 
      strokeLinecap="round" strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="closing" className="relative w-full flex flex-col items-center overflow-hidden">
      
      {/* --- 1. SLIDESHOW BACKGROUND --- */}
      <div className="relative w-full min-h-[90vh] flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 z-0 bg-slate-900">
          {backgroundImages.map((src, index) => (
  <div
    key={`closing-bg-${index}`} // <--- REVISI: Gunakan index
    className={`absolute inset-0 transition-opacity ...`}
  >
    <Image
      src={src}
      alt="Closing background"
      fill
      sizes="100vw" // <--- Pastikan ini ada
      className={`object-cover brightness-[0.4] ...`}
    />
  </div>
))}
        </div>

        {/* --- 2. KARTU GLASSMORPHISM --- */}
        <div 
          className="relative z-10 max-w-2xl w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-[2.5rem] p-10 sm:p-16 text-center text-white shadow-2xl mx-4"
          data-aos="zoom-in"
        >
          <div className="space-y-6">
            <h2 className="font-serif text-5xl sm:text-6xl italic drop-shadow-md">
              Terima Kasih
            </h2>
            <h3 className="font-sans text-lg sm:text-xl font-light tracking-[0.2em] uppercase">
              Atas Kehadiran & Doa Restunya
            </h3>

            <div className="h-[1px] w-20 bg-white/30 mx-auto my-8" />

            <div className="space-y-4 text-sm sm:text-base leading-relaxed opacity-90 font-serif italic">
              <p>Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu berkenan hadir untuk memberikan doa restu.</p>
              <p>Atas kehadiran serta doa restu, kami ucapkan terima kasih.</p>
            </div>

            <div className="pt-10 border-t border-white/10 mt-10">
              <p className="font-serif text-lg italic mb-6 opacity-80">Sampai Jumpa Di Hari Bahagia Kami,</p>
              <h4 className="font-serif text-5xl sm:text-6xl italic tracking-tighter">Vony & Kay</h4>
            </div>
          </div>
        </div>
      </div>

      {/* --- 3. FOOTER --- */}
      <div className="w-full bg-[#0a0f1d] py-20 px-6 flex flex-col items-center text-white text-center z-20">
        <div className="flex gap-8 mb-12">
          <a href="#" className="hover:text-blue-400 transition-all"><X size={22} /></a>
          
          {/* PAKAI IKON MANUAL DI SINI */}
          <a href="#" className="hover:text-pink-400 transition-all"><InstagramIcon /></a>
          
          <a href="#" className="hover:text-emerald-400 transition-all"><Globe size={22} /></a>
        </div>

        <div className="space-y-6">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 border border-white/20 flex items-center justify-center rotate-45 transform">
               <span className="rotate-[-45deg] text-3xl font-light text-white">V</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <h5 className="font-sans font-bold tracking-[0.5em] text-sm opacity-80">POWERED BY</h5>
            <h6 className="font-sans font-black tracking-[0.3em] text-2xl text-blue-400">MEGAXCELL.TECH</h6>
          </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-16 text-[10px] uppercase tracking-[0.25em] opacity-40 font-bold">
           <a href="#home">Home</a>
           <a href="#couple">Couple</a>
           <a href="#event">Event</a>
           <a href="#gallery">Gallery</a>
           <a href="#rsvp">RSVP</a>
        </nav>
        
        <p className="mt-12 text-[9px] opacity-20 tracking-widest uppercase">
          © 2026 Vony & Kay Wedding Invitation
        </p>
      </div>
    </section>
  );
};

export default Closing;