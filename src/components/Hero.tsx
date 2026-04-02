"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Countdown from "./Countdown";

const backgroundImages = [
  "/images/gal2.jpg",
  "/images/gal1.jpg",
  "/images/pria.jpg",
  "/images/wanita.jpg",
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 4000); // Saya ubah ke 4 detik agar tidak terlalu cepat perpindahannya

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="home" className="relative flex flex-col items-center w-full overflow-hidden">
      
      {/* --- BAGIAN ATAS: Slideshow & Nama --- */}
      <div className="relative w-full h-[80vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        
        {/* Background Slideshow Dinamis */}
        <div className="absolute inset-0 z-0 w-full h-full">
          {backgroundImages.map((src, index) => (
  <div
    key={`hero-bg-${index}-${src}`} // <--- REVISI: Dibuat unik dengan prefix
    className={`absolute inset-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out ${
      index === currentImageIndex ? "opacity-100" : "opacity-0"
    }`}
  >
    <Image
      src={src}
      alt="Wedding background"
      fill
      priority={index === 0}
      sizes="100vw" // <--- Pastikan ini ada
      className="object-cover object-center"
    />
  </div>
))}
        </div>

        {/* Overlay Transparan */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Konten Nama & Tanggal */}
        <div className="relative z-20 space-y-2 text-white drop-shadow-2xl" data-aos="fade-up">
          <p className="uppercase tracking-[0.4em] text-[10px] opacity-90 font-bold">The Wedding of</p>
          <h1 className="font-serif text-5xl sm:text-7xl italic my-4">Vony & Kay</h1>
          <p className="font-serif text-lg tracking-widest border-y border-white/30 py-2 inline-block">12 . 12 . 2025</p>
        </div>

        {/* --- DEKORASI GARIS LENGKUNG --- */}
        <div className="absolute bottom-[-1px] left-0 w-full leading-[0] z-20">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-full h-[70px] sm:h-[120px] fill-white"
          >
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,29.29,512.34,60,583.71,73.73c71.27,13.7,143.27,9.38,214.32-5.73,66.65-14.17,131.6-42.66,201.27-50.62,72.71-8.3,144.57,11.39,200.7,51.81V120H0Z" />
          </svg>
        </div>
      </div>

      {/* --- BAGIAN BAWAH: Ayat & Countdown --- */}
      <div className="w-full bg-white pt-10 pb-20 px-6 text-center flex flex-col items-center">
        <div className="max-w-2xl mb-12" data-aos="fade-up">
          <p className="italic text-gray-700 text-sm sm:text-base leading-relaxed font-serif">
            "Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri supaya kamu dapat ketenangan hati dan dijadikannya kasih sayang di antara kamu. Sesungguhnya yang demikian menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang berpikir."
          </p>
          <p className="font-serif font-bold text-gray-800 mt-4 tracking-widest text-base sm:text-lg">
            - Q.S Ar-Rum: 21 -
          </p>
        </div>

        <div className="w-full max-w-4xl" data-aos="zoom-in">
           <p className="text-gray-500 text-xs uppercase tracking-widest mb-6">Hitung Mundur Acara</p>
           <Countdown targetDate="2025-12-12T08:00:00" />
        </div>
      </div>
    </section>
  );
};

export default Hero;