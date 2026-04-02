"use client";

import { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: string; // Format: "2025-12-12T08:00:00"
}

const Countdown = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState({
    Hari: 0,
    Jam: 0,
    Menit: 0,
    Detik: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          Hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
          Jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
          Menit: Math.floor((difference / 1000 / 60) % 60),
          Detik: Math.floor((difference / 1000) % 60),
        });
      }
    };

    // Jalankan kalkulasi setiap 1 detik
    const timer = setInterval(calculateTime, 1000);
    
    // Bersihkan interval saat komponen tidak lagi digunakan
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center items-center gap-3 sm:gap-6 drop-shadow-sm">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center">
          {/* Kotak Angka */}
          <div className="w-14 h-14 sm:w-20 sm:h-20 bg-wedding-dark/90 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 shadow-xl">
            <span className="text-white font-serif text-xl sm:text-3xl font-bold italic">
              {value}
            </span>
          </div>
          {/* Label (Hari, Jam, dsb) */}
          <span className="mt-2 text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-gray-600 italic">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;