"use client";

import Image from "next/image";

const Story = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center">
      
      {/* 1. BACKGROUND DIAM (FIXED LAYER) */}
      <div className="fixed inset-0 w-full h-full -z-50 pointer-events-none">
        <Image
          src="/images/gal3.jpg" 
          alt="Background Story"
          fill
          // REVISI: Tambahkan sizes untuk menghilangkan warning
          sizes="100vw"
          className="object-cover object-center brightness-[0.4]"
          priority
        />
      </div>

      {/* --- KONTEN UTAMA --- */}
      <div className="relative w-full py-48 px-6 flex flex-col items-center justify-center bg-transparent">
        
        {/* --- SHAPE DIVIDER ATAS --- */}
        <div className="absolute top-[-1px] left-0 w-full overflow-hidden leading-[0] z-20">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[100px]"
          >
            <path 
              d="M0,0V120C480,0,720,0,1200,120V0Z" 
              fill="#FFFFFF"
            ></path>
          </svg>
        </div>

        {/* --- TEKS CERITA --- */}
        {/* REVISI: Tambahkan data-aos agar muncul dengan halus saat di-scroll */}
        <div 
          className="relative z-30 max-w-2xl text-center text-white space-y-8 px-4 py-10"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h2 className="font-serif text-5xl sm:text-7xl italic drop-shadow-2xl">
            Love Story
          </h2>
          
          <div className="space-y-6 font-serif text-base sm:text-lg leading-loose tracking-wider italic opacity-95">
            <p className="drop-shadow-md">
              "Kita dipertemukan bukan karena kebetulan, <br />
              tetapi karena semesta merestui doa-doa yang kita panjatkan diam-diam."
            </p>
            <p className="drop-shadow-md">
              Sejak saat itu, aku tahu, <br />
              kamu adalah bagian dari takdir yang telah lama kucari.
            </p>
            <p className="drop-shadow-md">
              Hari ini, kita menulis bab baru, <br />
              kisah cinta yang tak lagi sekadar mimpi, <br />
              tapi nyata dalam ikatan suci pernikahan.
            </p>
          </div>
        </div>

        {/* --- SHAPE DIVIDER BAWAH --- */}
        <div className="absolute bottom-[-100px] left-0 w-full overflow-hidden leading-[0] z-20">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[100px]"
          >
            <path 
              d="M0,120V0C480,120,720,120,1200,0V120Z" 
              fill="#FFFFFF"
            ></path>
          </svg>
        </div>

      </div>
    </section>
  );
};

export default Story;