"use client";
import Image from "next/image";

const Gallery = () => {
  const galleryImages = [
    { id: 1, src: "/images/gal1.jpg", type: "portrait" },
    { id: 2, src: "/images/gal2.jpg", type: "landscape" },
    { id: 3, src: "/images/gal3.jpg", type: "landscape" },
    { id: 4, src: "/images/pria.jpg", type: "landscape" },
    { id: 5, src: "/images/wanita.jpg", type: "portrait" },
    { id: 6, src: "/images/gal1.jpg", type: "landscape" },
    { id: 7, src: "/images/gal2.jpg", type: "portrait" },
    { id: 8, src: "/images/wanita.jpg", type: "landscape" },
    { id: 9, src: "/images/gal1.jpg", type: "portrait" },
    { id: 10, src: "/images/gal2.jpg", type: "landscape" },
    { id: 11, src: "/images/wanita.jpg", type: "portrait" },
    { id: 12, src: "/images/gal2.jpg", type: "landscape" },
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-white overflow-hidden flex flex-col items-center">
      <div className="max-w-6xl w-full z-10">
        
        {/* --- Header Seksi --- */}
        <div className="text-center mb-16 flex flex-col items-center" data-aos="fade-up">
          <div className="flex items-center gap-6 mb-4 w-full justify-center">
            <div className="h-[1px] flex-1 bg-slate-200" />
            <div className="text-slate-400 font-serif text-2xl">❤</div>
            <div className="h-[1px] flex-1 bg-slate-200" />
          </div>
          
          <p className="uppercase tracking-[0.4em] text-[10px] text-slate-400 font-bold mb-3">
            OUR MOMENT
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-slate-800 italic drop-shadow-sm">
            Wedding Gallery
          </h2>
        </div>

        {/* --- Grid Foto (Masonry-like) --- */}
        <div className="flex gap-4 md:gap-6 w-full">
          
          {/* Kolom Kiri */}
          <div className="flex-1 flex flex-col gap-4 md:gap-6">
            {galleryImages
              .filter((_, index) => index % 2 === 0)
              .map((img, idx) => (
                <div 
                  // REVISI: Pastikan key benar-benar unik dengan prefix
                  key={`gallery-left-${img.id}`} 
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="relative group rounded-3xl overflow-hidden border border-slate-100 shadow-lg"
                >
                  <Image 
                    src={img.src} 
                    alt={`Wedding Gallery Photo ${img.id}`}
                    width={500} 
                    height={img.type === 'portrait' ? 700 : 350} 
                    // REVISI: Sizes yang lebih akurat untuk 2 kolom
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 30vw"
                    className="w-full h-auto object-cover transition transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 transition duration-500 group-hover:bg-slate-900/20" />
                </div>
              ))}
          </div>

          {/* Kolom Kanan */}
          <div className="flex-1 flex flex-col gap-4 md:gap-6 pt-12"> 
            {galleryImages
              .filter((_, index) => index % 2 !== 0)
              .map((img, idx) => (
                <div 
                  // REVISI: Pastikan key benar-benar unik dengan prefix
                  key={`gallery-right-${img.id}`}
                  data-aos="fade-up"
                  data-aos-delay={idx * 150}
                  className="relative group rounded-3xl overflow-hidden border border-slate-100 shadow-lg"
                >
                  <Image 
                    src={img.src} 
                    alt={`Wedding Gallery Photo ${img.id}`}
                    width={500} 
                    height={img.type === 'portrait' ? 700 : 350} 
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 30vw"
                    className="w-full h-auto object-cover transition transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 transition duration-500 group-hover:bg-slate-900/20" />
                </div>
              ))}
          </div>
        </div>

        {/* Dekorasi Akhir */}
        <div className="mt-20 flex flex-col items-center opacity-40" data-aos="zoom-in">
            <div className="h-[1px] w-24 bg-slate-300 mb-4" />
            <div className="text-slate-400 font-serif italic">Vony & Kay</div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;