"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronDown } from "lucide-react"; 

// Import Semua Komponen
import Hero from "@/components/Hero";
import Couple from "@/components/Couple";
import Navbar from "@/components/Navbar";
import AudioPlayer from "@/components/AudioPlayer";
import Opening from "@/components/Opening";
import Event from "@/components/Event";
import Gallery from "@/components/Gallery";
import Story from "@/components/Story";
import RSVP from "@/components/RSVP";
import Gift from "@/components/Gift";
import Closing from "@/components/Closing";

export default function Home() {
  const [stage, setStage] = useState<"cover" | "video" | "main">("cover");
  const [videoFinished, setVideoFinished] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleOpenInvitation = () => {
    setStage("video");
    if (audioRef.current) {
      audioRef.current.play().catch((err) => console.log("Autoplay dicegah:", err));
    }
  };

  const handleVideoEnded = () => {
    setVideoFinished(true);
  };

  const handleStartMainContent = () => {
    setStage("main");
    setTimeout(() => {
      const coupleSection = document.getElementById("couple");
      coupleSection?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  useEffect(() => {
    document.body.style.overflow = stage === "main" ? "auto" : "hidden";
  }, [stage]);

  return (
    <main className="relative min-h-screen">
      
      {/* --- BACKGROUND GLOBAL (REVISI DI SINI) --- */}
      <div className="fixed inset-0 w-full h-full -z-50 pointer-events-none">
        <Image 
          src="/images/gal3.jpg" 
          alt="Wedding Background"
          fill
          priority
          className="object-cover object-center brightness-[0.3]"
          sizes="100vw" // <--- Perbaikan: Menghilangkan warning "fill" but missing "sizes"
          unoptimized 
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <AudioPlayer audioRef={audioRef} isVisible={stage === "main"} />

      {/* --- LAYER 1: OPENING --- */}
      {stage === "cover" && (
        <div className="fixed inset-0 z-[100]">
          <Opening onOpen={handleOpenInvitation} />
        </div>
      )}

      {/* --- LAYER 2: VIDEO INTRO 3D --- */}
      {stage === "video" && (
        <div className="fixed inset-0 z-[110] bg-black flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            className="w-full h-full object-cover md:object-contain"
          >
            <source src="/videos/intro-3d.mp4" type="video/mp4" />
            Browser Anda tidak mendukung video.
          </video>

          {videoFinished && (
            <div 
              className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer z-[120] animate-fade-in"
              onClick={handleStartMainContent}
            >
              <p className="text-white font-serif italic text-lg tracking-[0.3em] drop-shadow-lg">Scroll Down</p>
              <div className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white animate-bounce border border-white/20 shadow-2xl">
                <ChevronDown size={32} />
              </div>
            </div>
          )}
        </div>
      )}

      {/* --- LAYER 3: KONTEN UTAMA --- */}
      {stage === "main" && (
        <div className="relative z-10 animate-fade-in">
          <Hero />
          <section id="couple" className="bg-white relative z-20">
            <Couple />
          </section>
          <Event />
          <section className="bg-white relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
            <Gallery />
          </section>
          <Story />
          <section className="bg-white relative z-20 pb-10">
            <Gift />
            <RSVP />
          </section>
          <Closing />
          <Navbar />
        </div>
      )}
    </main>
  );
}