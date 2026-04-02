"use client";

import { useState } from "react";
// Import icons
import { Copy, Check, Gift as GiftIcon, MapPin, Truck, CreditCard } from "lucide-react";

const Gift = () => {
  const [copiedState, setCopiedState] = useState<string | null>(null);

  const accounts = [
    {
      id: "bca",
      bankName: "BCA",
      // Pakai URL logo yang lebih stabil
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/1200px-Bank_Central_Asia.svg.png",
      accountNumber: "1234567890",
      holderName: "Vony Lestari",
    },
    {
      id: "mandiri",
      bankName: "MANDIRI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/1200px-Bank_Mandiri_logo_2016.svg.png",
      accountNumber: "0987654321",
      holderName: "Kay Ardiansyah",
    },
  ];

  const shippingAddress = {
    id: "address",
    receiver: "Vony Lestari (Vony & Kay Wedding)",
    phone: "0812-3456-7890",
    fullAddress: "Jl. Raya Cimalaka No. 123, RT 01/RW 02, Kec. Cimalaka, Kabupaten Sumedang, Jawa Barat 45353",
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedState(id);
    setTimeout(() => setCopiedState(null), 2000);
  };

  return (
    <section id="gift" className="py-24 px-6 bg-slate-50 flex flex-col items-center">
      <div className="max-w-2xl w-full text-center">
        
        {/* --- HEADER --- */}
        <div className="mb-16" data-aos="fade-up">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-slate-800 rounded-full text-white">
              <GiftIcon size={32} />
            </div>
          </div>
          <h2 className="font-serif text-4xl italic text-slate-800 mb-4">Wedding Gift</h2>
          <p className="font-sans text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
            Kehadiran Anda adalah kado terindah bagi kami. Namun jika Anda ingin memberikan tanda kasih, Anda dapat melalui fitur di bawah ini:
          </p>
        </div>

        {/* --- BANK ACCOUNTS --- */}
        <div className="grid gap-6 sm:grid-cols-2 mb-10">
          {accounts.map((account) => (
            <div 
              key={account.id}
              data-aos="zoom-in"
              className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col items-center group transition-all hover:scale-[1.03]"
            >
              {/* Pakai tag <img> biasa agar tidak error domain Next.js */}
              <div className="h-10 mb-6 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                <img 
                  src={account.logo} 
                  alt={account.bankName}
                  className="h-full object-contain"
                />
              </div>
              
              <p className="font-mono text-xl font-bold text-slate-800 mb-1 tracking-wider">
                {account.accountNumber}
              </p>
              
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-8 font-bold">
                a.n {account.holderName}
              </p>

              <button
                onClick={() => handleCopy(account.accountNumber, account.id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                  copiedState === account.id 
                    ? "bg-green-500 text-white" 
                    : "bg-slate-800 text-white hover:bg-slate-700"
                } shadow-lg shadow-slate-200`}
              >
                {copiedState === account.id ? <><Check size={14} /> Tersalin</> : <><Copy size={14} /> Salin Rekening</>}
              </button>
            </div>
          ))}
        </div>

        {/* --- PHYSICAL GIFT ADDRESS --- */}
        <div 
          data-aos="fade-up"
          className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-xl border border-slate-100 text-center relative overflow-hidden"
        >
          {/* Dekorasi Ikon Truck Transparan */}
          <div className="absolute -right-4 -bottom-4 opacity-[0.03] rotate-12 text-slate-900">
            <Truck size={150} />
          </div>

          <div className="flex justify-center mb-6">
            <div className="p-3 bg-slate-100 rounded-full text-slate-800">
              <MapPin size={24} className="animate-bounce" />
            </div>
          </div>

          <h3 className="font-serif text-2xl italic text-slate-800 mb-6 tracking-wide">Kirim Kado Fisik</h3>
          
          <div className="space-y-2 mb-8 relative z-10 text-sm">
            <p className="font-bold text-slate-800 tracking-wide">{shippingAddress.receiver}</p>
            <p className="text-slate-500 font-medium">{shippingAddress.phone}</p>
            <p className="text-slate-600 leading-relaxed max-w-sm mx-auto italic">
              "{shippingAddress.fullAddress}"
            </p>
          </div>

          <button
            onClick={() => handleCopy(shippingAddress.fullAddress, shippingAddress.id)}
            className={`inline-flex items-center gap-2 px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all shadow-md ${
              copiedState === shippingAddress.id 
                ? "bg-green-500 text-white" 
                : "bg-slate-100 text-slate-800 hover:bg-slate-200"
            }`}
          >
            {copiedState === shippingAddress.id ? <><Check size={14} /> Alamat Tersalin</> : <><Copy size={14} /> Salin Alamat</>}
          </button>
        </div>

        <div className="mt-16 opacity-40 italic text-xs font-serif tracking-widest" data-aos="fade-up">
           <p>Terima kasih atas segala doa & kado Anda untuk kami.</p>
        </div>

      </div>
    </section>
  );
};

export default Gift;