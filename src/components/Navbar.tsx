"use client"; // Wajib agar navigasi & efek hover berjalan lancar di Next.js App Router

import React from 'react';
// Kita ganti nama 'Image' menjadi 'ImageIcon' untuk menghindari konflik dengan 'next/image'
import { 
  Home, 
  Heart, 
  Calendar, 
  Image as ImageIcon, 
  MessageCircle 
} from 'lucide-react';

const Navbar = () => {
  const menus = [
    { name: 'Home', icon: <Home size={20} />, link: '#home' },
    { name: 'Couple', icon: <Heart size={20} />, link: '#couple' },
    { name: 'Event', icon: <Calendar size={20} />, link: '#event' },
    { name: 'Gallery', icon: <ImageIcon size={20} />, link: '#gallery' },
    { name: 'Wishes', icon: <MessageCircle size={20} />, link: '#wishes' },
  ];

  return (
    <div className="fixed bottom-6 inset-x-0 z-[999] flex justify-center px-4">
      <nav className="flex items-center gap-2 sm:gap-6 bg-white/70 backdrop-blur-lg px-6 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20">
        {menus.map((menu) => (
          <a 
            key={menu.name} 
            href={menu.link} 
            className="group flex flex-col items-center min-w-[50px] text-slate-500 hover:text-wedding-gold transition-all duration-300"
          >
            <div className="group-hover:scale-110 group-active:scale-95 transition-transform">
              {menu.icon}
            </div>
            <span className="text-[10px] mt-1 font-semibold uppercase tracking-tighter">
              {menu.name}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;