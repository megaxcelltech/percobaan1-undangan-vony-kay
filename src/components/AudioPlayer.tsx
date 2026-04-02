"use client";
import { useState, RefObject } from "react";
import { Music, Pause } from "lucide-react";

interface AudioProps {
  audioRef: RefObject<HTMLAudioElement | null>;
  isVisible: boolean; // Tambahkan prop ini
}

const AudioPlayer = ({ audioRef, isVisible }: AudioProps) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {/* Tombol Musik: Hanya muncul jika isVisible true (setelah Buka Undangan) */}
      <div className={`fixed top-6 right-6 z-[999] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <button 
          onClick={togglePlay}
          className={`p-3 rounded-full shadow-lg transition-all duration-500 ${
            isPlaying ? 'bg-wedding-gold text-white animate-spin-slow' : 'bg-white text-slate-800'
          }`}
        >
          {isPlaying ? <Music size={20} /> : <Pause size={20} />}
        </button>
      </div>
      
      {/* Element Audio: Harus selalu ada agar Ref tidak null */}
      <audio ref={audioRef} loop>
        <source src="/music/Lagu-wedding.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
};

export default AudioPlayer;