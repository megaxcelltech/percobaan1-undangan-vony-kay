"use client";

import { MailOpen, Heart } from "lucide-react";
import Image from "next/image";

interface CoverProps {
  onOpen: () => void;
}

const Cover = ({ onOpen }: CoverProps) => {
  return (
    <section className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden">
      {/* Background Image dengan Overlay Gelap agar Teks Terbaca */}
      <div className="absolute inset-0">
        <Image
          src="/images/gal3.jpg" // Gunakan foto terbaikmu di sini
          alt="Wedding Cover"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* Konten Cover */}
      <div className="relative z-10 text-center text-white px-6 flex flex-col items-center">
        <div data-aos="fade-down" data-aos-duration="1500">
          <p className="font-sans tracking-[0.3em] text-xs uppercase mb-4 opacity-80">
            The Wedding of
          </p>
          <h1 className="font-serif text-6xl md:text-7xl italic mb-6 tracking-wide">
            Vony & Kay
          </h1>
        </div>

        <div className="h-[1px] w-24 bg-white/30 my-8 animate-pulse" />

        {/* Informasi Tamu (Opsional, biasanya untuk nama tamu) */}
        <div data-aos="fade-up" data-aos-duration="1500" className="mb-10">
          <p className="font-sans text-sm opacity-70 mb-2">Kepada Yth. Bapak/Ibu/Saudara/i</p>
          <h3 className="font-sans font-bold text-xl tracking-wider">Tamu Undangan</h3>
        </div>

        {/* Tombol Buka Undangan */}
        <button
          onClick={onOpen}
          className="group relative flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-sans font-bold text-xs uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          <MailOpen size={18} className="group-hover:rotate-12 transition-transform" />
          Buka Undangan
          <Heart size={14} className="fill-slate-900 animate-ping absolute -top-1 -right-1" />
        </button>
      </div>

      {/* Dekorasi Sudut (Opsional) */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent" />
    </section>
  );
};

export default Cover;