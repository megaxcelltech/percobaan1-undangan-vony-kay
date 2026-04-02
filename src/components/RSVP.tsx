"use client";

import { useState, useEffect } from "react"; // Tambahkan useEffect
import { Heart, User, MessageCircle, CheckCircle2, Loader2 } from "lucide-react";

interface WishEntry {
  name: string;
  attendance: string;
  message: string;
  date: string;
}

const RSVP = () => {
  const [isSending, setIsSending] = useState(false);
  const [isLoadingWishes, setIsLoadingWishes] = useState(true); // State loading untuk ambil data
  const [formData, setFormData] = useState({
    name: "",
    attendance: "Ya, Saya Akan Hadir",
    message: "",
  });

  const [wishes, setWishes] = useState<WishEntry[]>([]);

  // Masukkan URL Anda di sini
  const scriptURL = "https://script.google.com/macros/s/AKfycbxd1TnlCRidE8n01jPI_N1zG0QM4PtowP1AvLCaHLaD5otE-MyOUDjuwSG4LcUrx7dnSg/exec";

  // --- 1. FUNGSI AMBIL DATA DARI GOOGLE SHEETS ---
  useEffect(() => {
    const fetchWishes = async () => {
      try {
        const response = await fetch(scriptURL);
        const data = await response.json();
        setWishes(data);
      } catch (error) {
        console.error("Gagal mengambil ucapan:", error);
      } finally {
        setIsLoadingWishes(false);
      }
    };

    fetchWishes();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const dateNow = new Date().toLocaleString("id-ID", { 
      dateStyle: "medium", 
      timeStyle: "short" 
    });

    const requestBody = new URLSearchParams();
    requestBody.append("name", formData.name);
    requestBody.append("attendance", formData.attendance);
    requestBody.append("message", formData.message);
    requestBody.append("date", dateNow);

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: requestBody.toString(),
      });

      // Update tampilan lokal secara instan
      const newEntry: WishEntry = {
        ...formData,
        date: "Baru saja",
      };
      setWishes([newEntry, ...wishes]);
      
      setFormData({ name: "", attendance: "Ya, Saya Akan Hadir", message: "" });
      alert("Terima kasih! Ucapan Anda telah tersimpan.");

    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan teknis. Coba lagi ya!");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="rsvp" className="py-20 px-6 bg-white flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-12">
        
        {/* FORM KARTU */}
        <div className="bg-white rounded-[2rem] shadow-[0_10px_50px_rgba(0,0,0,0.1)] border-t-[6px] border-b-[6px] border-slate-800 p-8 sm:p-12 relative overflow-hidden">
          <div className="flex flex-col items-center mb-10">
            <div className="flex items-center gap-4 w-full mb-6">
              <div className="h-[1px] flex-1 bg-slate-300" />
              <Heart className="text-slate-800 fill-slate-800" size={20} />
              <div className="h-[1px] flex-1 bg-slate-300" />
            </div>
            <h2 className="font-serif text-4xl text-slate-800 italic">Wishes</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700 ml-1">Nama</label>
              <input
                type="text"
                placeholder="Isikan Nama Anda"
                required
                disabled={isSending}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-400 outline-none text-slate-800"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700 ml-1">Konfirmasi Kehadiran</label>
              <select
                disabled={isSending}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-400 outline-none bg-white text-slate-800"
                value={formData.attendance}
                onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
              >
                <option>Ya, Saya Akan Hadir</option>
                <option>Maaf, Saya Tidak Bisa Hadir</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700 ml-1">Pesan</label>
              <textarea
                placeholder="Berikan Ucapan Dan Doa Restu"
                required
                disabled={isSending}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-400 outline-none text-slate-800 resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className={`w-full sm:w-auto font-bold py-3 px-10 rounded-lg shadow-lg transition-all border-b-4 flex items-center justify-center gap-2
                ${isSending ? "bg-slate-300 border-slate-400 text-slate-500" : "bg-slate-500 hover:bg-slate-600 text-white border-slate-700"}`}
            >
              {isSending ? <><Loader2 className="animate-spin" size={18} /> Mengirim...</> : "Kirimkan Ucapan"}
            </button>
          </form>

          <div className="mt-14 text-center space-y-4">
            <p className="font-serif text-slate-600 text-sm tracking-wide">Tinggalkan kami doa terbaik anda untuk momen bahagia kami</p>
            <p className="font-serif text-2xl text-slate-800 italic">Hope to see you soon, Stay safe and healthy!</p>
          </div>
        </div>

        {/* DAFTAR UCAPAN PERMANEN */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 px-2">
            <MessageCircle size={20} className="text-slate-500" />
            <h3 className="font-bold text-slate-700 uppercase tracking-widest text-sm">
              {wishes.length} Ucapan & Doa Restu
            </h3>
          </div>

          <div className="max-h-[500px] overflow-y-auto pr-2 space-y-4">
            {isLoadingWishes ? (
              <div className="flex flex-col items-center py-10 opacity-50">
                <Loader2 className="animate-spin mb-2" size={24} />
                <p className="text-sm">Memuat ucapan...</p>
              </div>
            ) : wishes.length > 0 ? (
              wishes.map((wish, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm animate-fade-in">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-white rounded-full text-slate-600"><User size={16} /></div>
                      <span className="font-bold text-slate-800">{wish.name}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">{wish.date}</span>
                  </div>
                  <div className="mb-3">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                      wish.attendance?.includes("Ya") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    }`}>
                      <CheckCircle2 size={12} /> {wish.attendance}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm italic">"{wish.message}"</p>
                </div>
              ))
            ) : (
              <p className="text-center text-slate-400 py-10 italic">Belum ada ucapan.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;