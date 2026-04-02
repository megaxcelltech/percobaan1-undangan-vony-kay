"use client";

import { useSearchParams } from "next/navigation";
import { MailOpen } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// --- 1. KOMPONEN HUJAN BERKILAU ---
const SparklingEffect = () => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 5 + 4,
      delay: Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[15]">
      <style>{`
        @keyframes fallAndTwinkle {
          0% { transform: translateY(-10vh) scale(0); opacity: 0; }
          25% { opacity: 1; transform: translateY(20vh) scale(1.2); }
          50% { opacity: 0.4; transform: translateY(50vh) scale(0.8); }
          75% { opacity: 1; transform: translateY(80vh) scale(1.2); }
          100% { transform: translateY(110vh) scale(0); opacity: 0; }
        }
      `}</style>

      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.9)]"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            top: '-20px',
            backgroundColor: '#FFF7ED',
            animation: `fallAndTwinkle ${p.duration}s linear -${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

// --- 2. KOMPONEN UTAMA ---
interface OpeningProps {
  onOpen: () => void;
}

const Opening = ({ onOpen }: OpeningProps) => {
  const searchParams = useSearchParams();
  // Sedikit perbaikan typo pada default value: "TAMU UNDANGAN"
  const guestName = searchParams.get("to")?.toUpperCase() || "TAMU UNDANGAN";

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Image (REVISI: Tambahkan sizes="100vw") */}
      <Image
        src="/images/gal1.jpg"
        alt="Background Undangan"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center -z-20 scale-105"
      />

      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-zinc-900/70 backdrop-blur-[1px] -z-10" />

      {/* Efek Kilau */}
      <SparklingEffect />

      {/* Konten Utama */}
      <div className="text-center text-white px-6 flex flex-col items-center z-20 animate-in fade-in zoom-in duration-1000">
        
        <p className="font-sans font-semibold uppercase tracking-[0.4em] text-[10px] text-white/80 mb-4">
          The Wedding of
        </p>
        
        <h1 className="font-serif text-6xl md:text-7xl text-white italic drop-shadow-2xl mb-14 tracking-tight">
          Vony & Kai
        </h1>

        <div className="mb-12 space-y-3">
          <p className="font-sans text-[12px] italic text-white/70">
            Kepada Yth. Bapak/Ibu/Saudara/i
          </p>
          <div className="h-[1px] w-12 bg-white/30 mx-auto my-2" />
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white tracking-[0.1em] drop-shadow-md">
            {guestName}
          </h2>
        </div>

        <button
          onClick={onOpen}
          className="group relative flex items-center gap-3 bg-white/10 hover:bg-white/25 backdrop-blur-md text-white px-10 py-3.5 rounded-full transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] border border-white/20 active:scale-95"
        >
          <MailOpen size={18} className="group-hover:translate-y-[-2px] transition-transform" />
          <span className="font-sans font-bold tracking-[0.2em] text-[11px] uppercase">
            Buka Undangan
          </span>
        </button>
      </div>

      {/* Watermark */}
      <div className="absolute bottom-8 left-8 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white font-serif text-xl border border-white/10 shadow-2xl z-20 transition-transform hover:rotate-12">
        N
      </div>
    </div>
  );
};

export default Opening;