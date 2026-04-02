// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  // ... konfigurasi lainnya ...
  theme: {
    extend: {
      colors: {
        'wedding-dark': '#1a2a3a', // Biru gelap
        'wedding-gold': '#c5a059', // Warna aksen emas
      },
      fontFamily: {
        serif: ['var(--font-playfair-display)', 'serif'], // Font Serif Estetik (untuk nama)
        sans: ['var(--font-inter)', 'sans-serif'], // Font Sans-serif Bersih (untuk teks lainnya)
      },
    },
  },
  plugins: [],
};

export default config;