import { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { FINALE_PHOTO, letter } from '../data/content';
import { celebrate, heartBurst } from '../lib/hearts';
import Counter from './Counter';
import Timeline from './Timeline';

export default function Finale({ t, lang, onBack }) {
  const text = letter[lang];

  useEffect(() => {
    celebrate();
    const timer = setTimeout(() => heartBurst({ x: 0.5, y: 0.4 }, 60), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center gap-8 px-6 py-10"
    >
      <motion.div
        initial={{ scale: 0.9, rotate: -3 }}
        animate={{ scale: 1, rotate: -2 }}
        transition={{ duration: 1 }}
        className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden border-8 border-white shadow-2xl"
      >
        <Image
          src={FINALE_PHOTO.src}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, 576px"
          className="object-cover"
          style={{ objectPosition: FINALE_PHOTO.focus }}
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="font-hand text-6xl md:text-7xl text-center text-transparent bg-clip-text bg-linear-to-r from-pink-300 to-purple-300 py-2"
      >
        {t.finaleTitle} ❤️
      </motion.h1>

      {/* Mektup */}
      <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 font-hand text-2xl md:text-[1.7rem] leading-snug text-pink-50">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mb-4 text-pink-300">
          {text.greeting}
        </motion.p>
        {text.paragraphs.map((paragraph, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 + i * 1.2, duration: 0.8 }}
            className="mb-4"
          >
            {paragraph}
          </motion.p>
        ))}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 + text.paragraphs.length * 1.2 }}
          className="text-right text-pink-300"
        >
          {text.sign}
        </motion.p>
      </div>

      <Counter t={t} />

      <Timeline t={t} />

      <button
        onClick={onBack}
        className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/10 font-semibold hover:bg-white/20 transition"
      >
        <ArrowLeft size={18} />
        {t.back}
      </button>
    </motion.section>
  );
}
