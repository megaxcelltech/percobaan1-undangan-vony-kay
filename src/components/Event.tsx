"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";

const Event = () => {
  // --- Data Carousel Foto Pernikahan ---
  const carouselSlides = [
    ['/images/gal1.jpg', '/images/gal2.jpg'], 
    ['/images/pria.jpg', '/images/wanita.jpg'], 
    ['/images/gal3.jpg', '/images/gal1.jpg'], 
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + carouselSlides.length) % carouselSlides.length);
  };

  // --- Data Acara Pernikahan ---
  const events = [
    {
      title: "Akad Nikah",
      date: "Sabtu, 12 Desember 2025",
      time: "Pukul 08.00 WIB",
      venue: "MASJID AGUNG CIMALAKA",
      address: "Jl. Raya Cimalaka, Kec. Cimalaka, Kabupaten Sumedang, Jawa Barat",
      mapsUrl: "https://maps.app.goo.gl/SwGiw6wh4zECvxtJ9", // Ganti link asli
    },
    {
      title: "Acara Resepsi",
      date: "Sabtu, 12 Desember 2025",
      time: "Pukul 11.00 WIB s.d Selesai",
      venue: "RUMAH MEMPELAI WANITA",
      address: "Cimalaka - Sumedang (Dekat Alun-alun Cimalaka)",
      mapsUrl: "https://maps.app.goo.gl/SwGiw6wh4zECvxtJ9", // Ganti link asli
    },
  ];

  return (
    <section id="event" className="relative min-h-screen py-24 px-6 flex flex-col items-center overflow-hidden">
      
      <div className="max-w-xl w-full z-10 flex flex-col items-center">
        
        {/* --- 1. CAROUSEL FOTO (AOS: Zoom In) --- */}
        <div 
          className="relative w-full mb-16 overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/10 h-72 md:h-80 group"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white transition active:scale-95 opacity-0 group-hover:opacity-100 duration-300"
          >
            <ChevronLeft size={22} />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white transition active:scale-95 opacity-0 group-hover:opacity-100 duration-300"
          >
            <ChevronRight size={22} />
          </button>

          {/* Slides Container */}
          <div className="flex h-full transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}>
            {carouselSlides.map((slidePair, index) => (
              <div key={index} className="flex-none w-full h-full flex gap-3 p-3">
                {slidePair.map((imgSrc, imgIndex) => (
                  <div key={imgIndex} className="relative flex-1 h-full rounded-2xl overflow-hidden border border-white/5">
                    <Image 
                      src={imgSrc} 
                      alt={`Foto Pernikahan`} 
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="absolute bottom-4 inset-x-0 z-20 flex justify-center gap-2">
            {carouselSlides.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentSlideIndex(index)}
                className={`w-2 h-2 rounded-full border border-white transition-all duration-300 ${currentSlideIndex === index ? 'bg-white w-6' : 'bg-transparent opacity-50'}`}
              />
            ))}
          </div>
        </div>

        {/* --- 2. HEADER TEKS (AOS: Fade Up) --- */}
        <div className="text-center text-white mb-20" data-aos="fade-up">
          <div className="h-[1px] w-12 bg-white/50 mx-auto mb-6" />
          <h2 className="font-serif text-3xl italic tracking-[0.2em] mb-6">Let's Celebrate Our Love</h2>
          <p className="font-sans text-sm leading-relaxed opacity-80 px-6 italic">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya."
          </p>
        </div>

        {/* --- 3. KARTU ACARA (AOS: Staggered Fade Up) --- */}
        <div className="space-y-12 w-full">
          {events.map((item, index) => (
            <div 
              key={index}
              data-aos={index === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="1000"
              className="relative group p-10 rounded-[2.5rem] text-center border border-white/10 backdrop-blur-md transition-all duration-500 hover:scale-[1.02]"
              style={{ 
                background: index === 0 ? 'rgba(15, 23, 42, 0.7)' : 'rgba(255, 255, 255, 0.95)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
            >
              {/* --- UPDATE: Decorative Icon Bergerak (animate-bounce) --- */}
              <div className={`mb-6 inline-flex p-4 rounded-full ${index === 0 ? 'bg-white/10' : 'bg-slate-100'}`}>
                 <MapPin className={`animate-bounce ${index === 0 ? 'text-white' : 'text-slate-800'}`} size={32} />
              </div>

              <h3 className={`font-serif text-4xl italic mb-6 tracking-wide ${index === 0 ? 'text-white' : 'text-slate-800'}`}>
                {item.title}
              </h3>

              <div className={`space-y-3 mb-10 ${index === 0 ? 'text-white/80' : 'text-slate-600'}`}>
                <p className="font-sans font-bold text-lg tracking-wider">{item.date}</p>
                <p className="font-sans text-sm opacity-90">{item.time}</p>
                <div className={`h-[1px] w-16 mx-auto my-4 ${index === 0 ? 'bg-white/20' : 'bg-slate-200'}`} />
                <p className="font-sans font-black tracking-widest uppercase text-sm">{item.venue}</p>
                <p className="font-sans text-[11px] leading-relaxed max-w-[250px] mx-auto opacity-70">{item.address}</p>
              </div>

              {/* TOMBOL MAPS */}
              <a 
                href={item.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-3 px-10 py-4 rounded-full font-sans text-[10px] font-bold uppercase tracking-[0.2em] shadow-2xl transition-all active:scale-95 ${
                  index === 0 
                  ? 'bg-white text-slate-900 hover:bg-slate-100' 
                  : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {/* --- UPDATE: Icon Tombol Bergerak (animate-bounce) --- */}
                <MapPin size={14} className="animate-bounce" />
                Kunjungi Lokasi
              </a>
            </div>
          ))}
        </div>

        {/* Dekorasi Akhir */}
        <div className="mt-24 flex flex-col items-center opacity-50" data-aos="fade-up">
            <div className="h-[1px] w-24 bg-white/40 mb-6" />
            <div className="text-white font-serif italic text-2xl tracking-widest">Vony & Kay</div>
        </div>
      </div>
    </section>
  );
};

export default Event;