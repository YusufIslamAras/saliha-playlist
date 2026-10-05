import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import LangSwitch from './LangSwitch';

export default function Intro({ t, lang, onLang, onOpen }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
      transition={{ duration: 0.6 }}
      className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-10 px-6 py-12 text-center"
    >
      <div>
        <motion.p
          key={`k-${lang}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-hand text-6xl md:text-7xl text-pink-200"
        >
          {t.introKicker}
        </motion.p>
        <motion.h1
          key={`t-${lang}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-2 text-xl md:text-2xl font-medium text-white"
        >
          {t.introTitle}
        </motion.h1>
      </div>

      {/* Açma tuşu */}
      <button onClick={onOpen} className="group relative flex items-center justify-center" aria-label={t.open}>
        <span className="absolute w-32 h-32 rounded-full bg-pink-500/30 animate-ping" />
        <motion.span
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-32 h-32 flex flex-col items-center justify-center gap-1 rounded-full bg-linear-to-br from-pink-500 to-purple-600 shadow-[0_0_60px_rgba(236,72,153,0.5)] group-hover:shadow-[0_0_80px_rgba(236,72,153,0.8)] transition-shadow"
        >
          <Heart className="w-10 h-10 fill-white text-white" />
          <span className="text-sm font-bold tracking-wide">{t.open}</span>
        </motion.span>
      </button>

      <p className="text-gray-400 text-sm">{t.introSub}</p>

      <LangSwitch lang={lang} onChange={onLang} />
    </motion.section>
  );
}
