import { useState, useEffect } from "react";

export const useCountdown = (targetDate: string) => {
  const [timeLeft, setTimeLeft] = useState({ Hari: 0, Jam: 0, Menit: 0, Detik: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const distance = new Date(targetDate).getTime() - new Date().getTime();
      if (distance < 0) {
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        Hari: Math.floor(distance / (1000 * 60 * 60 * 24)),
        Jam: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        Menit: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        Detik: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
};