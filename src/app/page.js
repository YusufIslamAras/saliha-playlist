'use client';

import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Heart, Music, Disc } from 'lucide-react';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [duration, setDuration] = useState(0);

  // Senin sözlerin (Şarkı sözü gibi akacak)
  const lyrics = [
    { text: "Hazır mısın Cadı?", time: 2000 },
    { text: "Bu şarkı değil, benim iç sesim...", time: 3000 },
    { text: "Seda...", time: 2000 },
    { text: "Seninle konuşurken zaman dursun istiyorum.", time: 3500 },
    { text: "Gülüşün, şu hayattaki en güzel melodi.", time: 3500 },
    { text: "Bütün şarkılar seni anlatıyor sanki.", time: 3500 },
    { text: "Sen benim en güzel nakaratımsın.", time: 3500 },
    { text: "Seni Seviyorum ❤️", time: 50000 } // Son mesaj ekranda kalır
  ];

  useEffect(() => {
    let interval;
    if (isPlaying && currentLine < lyrics.length) {
      // Progress bar simülasyonu
      const timer = setInterval(() => {
        setDuration(old => Math.min(old + 1, 100));
      }, 100);

      // Sözleri zamanla
      const lineTimer = setTimeout(() => {
        if (currentLine < lyrics.length - 1) {
          setCurrentLine(prev => prev + 1);
        } else {
          // Son satıra gelince konfeti patlat
          confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ef4444', '#ec4899', '#a855f7'] 
          });
        }
      }, lyrics[currentLine].time);

      return () => {
        clearInterval(timer);
        clearTimeout(lineTimer);
      };
    }
  }, [isPlaying, currentLine]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (currentLine === lyrics.length - 1) {
      // Başa sar
      setCurrentLine(0);
      setDuration(0);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-white relative overflow-hidden px-6">
      
      {/* Arka Plan Flu Renkler */}
      <div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-purple-900/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[500px] h-[500px] bg-pink-900/40 rounded-full blur-[120px] pointer-events-none" />

      {/* Müzik Çalar Kartı */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative z-10"
      >
        
        {/* Albüm Kapağı Alanı */}
        <div className="relative w-full aspect-square bg-gradient-to-tr from-gray-800 to-gray-900 rounded-2xl shadow-lg mb-8 flex items-center justify-center overflow-hidden">
          {/* Dönen Plak Efekti */}
          <motion.div
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className={`w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-gray-800 flex items-center justify-center relative shadow-[0_0_50px_rgba(236,72,153,0.2)] ${isPlaying ? 'opacity-100' : 'opacity-80'}`}
            style={{ background: 'conic-gradient(from 0deg, #18181b, #27272a, #18181b)' }}
          >
             <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-pink-500/20 animate-pulse"></div>
             {/* Ortadaki Kalp */}
             <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-inner">
                <Music className="text-white w-8 h-8" />
             </div>
          </motion.div>
        </div>

        {/* Şarkı Bilgileri */}
        <div className="flex justify-between items-end mb-2">
          <div>
            <motion.h2 
              key={currentLine}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold text-white mb-1"
            >
              {currentLine === lyrics.length - 1 ? "Seni Seviyorum" : "Kalbimin Ritmi"}
            </motion.h2>
            <p className="text-gray-400 text-sm">Seda'ya Özel &bull; Yusuf</p>
          </div>
          <Heart className={`w-6 h-6 transition-colors duration-500 ${isPlaying ? 'text-pink-500 fill-pink-500' : 'text-gray-500'}`} />
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-700 h-1.5 rounded-full mb-2 overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
            style={{ width: `${(currentLine / (lyrics.length - 1)) * 100}%` }}
            layout
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mb-8 font-mono">
          <span>0:{currentLine < 10 ? `0${currentLine}` : currentLine}</span>
          <span>0:0{lyrics.length}</span>
        </div>

        {/* Kontrol Tuşları */}
        <div className="flex items-center justify-center gap-8">
          <button className="text-gray-400 hover:text-white transition"><SkipBack size={28} /></button>
          
          <button 
            onClick={togglePlay}
            className="w-16 h-16 flex items-center justify-center bg-white rounded-full text-black hover:scale-105 hover:bg-gray-100 transition shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            {isPlaying ? <Pause size={32} fill="black" /> : <Play size={32} fill="black" className="ml-1" />}
          </button>
          
          <button className="text-gray-400 hover:text-white transition"><SkipForward size={28} /></button>
        </div>

      </motion.div>

      {/* ŞARKI SÖZÜ / MESAJ ALANI */}
      <div className="mt-8 h-24 text-center px-4">
        <AnimatePresence mode='wait'>
          {isPlaying && (
            <motion.p
              key={currentLine}
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl font-medium text-pink-200 leading-relaxed"
            >
              "{lyrics[currentLine].text}"
            </motion.p>
          )}
          {!isPlaying && currentLine === 0 && (
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="text-gray-500 text-sm animate-pulse"
            >
              (Başlatmak için Play tuşuna bas)
            </motion.p>
          )}
        </AnimatePresence>
      </div>

    </main>
  );
}