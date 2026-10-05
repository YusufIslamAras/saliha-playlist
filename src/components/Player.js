import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Heart, Mail } from 'lucide-react';
import { tracks } from '../data/content';
import { heartBurst } from '../lib/hearts';
import LangSwitch from './LangSwitch';
import Visualizer from './Visualizer';
import Counter from './Counter';
import Timeline from './Timeline';

// Anı satırları şarkı ilerledikçe bu aralıkla değişir (saniye)
const LINE_SECONDS = 9;

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s < 10 ? `0${s}` : s}`;
}

export default function Player({
  t,
  lang,
  onLang,
  index,
  isPlaying,
  time,
  duration,
  onToggle,
  onNext,
  onPrev,
  onSeek,
  onSelect,
  onLetter,
}) {
  const [liked, setLiked] = useState(false);
  const [secretOpen, setSecretOpen] = useState(false);
  const taps = useRef({ count: 0, timer: null });

  const track = tracks[index];
  const memory = track.memory[lang];
  const lineIndex = Math.floor(time / LINE_SECONDS) % memory.lines.length;
  const progress = duration ? (time / duration) * 100 : 0;

  const burstFrom = (el, count) => {
    const rect = el.getBoundingClientRect();
    heartBurst(
      {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      },
      count
    );
  };

  const handleLike = (e) => {
    setLiked(true);
    burstFrom(e.currentTarget, 25);
  };

  // Kapağa art arda üç kez dokununca gizli mesaj açılır
  const handleCoverTap = (e) => {
    if (secretOpen) {
      setSecretOpen(false);
      return;
    }
    const state = taps.current;
    clearTimeout(state.timer);
    state.count += 1;
    if (state.count >= 3) {
      state.count = 0;
      setSecretOpen(true);
      burstFrom(e.currentTarget, 60);
    } else {
      state.timer = setTimeout(() => {
        state.count = 0;
      }, 1200);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center gap-6 px-6 py-8"
    >
      <LangSwitch lang={lang} onChange={onLang} />

      {/* Müzik Çalar Kartı */}
      <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
        {/* Albüm Kapağı */}
        <div
          onClick={handleCoverTap}
          className="relative w-full aspect-square rounded-2xl shadow-lg mb-6 overflow-hidden bg-zinc-900 cursor-pointer select-none"
        >
          <AnimatePresence>
            <motion.div
              key={track.src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <motion.div
                animate={{ scale: isPlaying ? [1, 1.08] : 1 }}
                transition={
                  isPlaying
                    ? { duration: 14, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
                    : { duration: 0.8 }
                }
                className="absolute inset-0"
              >
                <Image
                  src={track.cover}
                  alt={memory.title}
                  fill
                  sizes="(max-width: 480px) 100vw, 448px"
                  priority={index === 0}
                  className="object-cover"
                  style={{ objectPosition: track.focus }}
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-3 px-4">
            <Visualizer isPlaying={isPlaying} />
          </div>
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/50 text-xs font-mono">
            {index + 1} / {tracks.length}
          </span>

          <AnimatePresence>
            {secretOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-black/75 backdrop-blur-sm p-6"
              >
                <p className="font-hand text-3xl text-pink-200 text-center leading-snug">{t.secret}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Şarkı Bilgileri */}
        <div className="flex justify-between items-end gap-4 mb-4">
          <div className="min-w-0">
            <motion.h2
              key={track.src}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold text-white mb-1 truncate"
            >
              {track.title}
            </motion.h2>
            <p className="text-gray-400 text-sm truncate">{track.artist || t.by}</p>
          </div>
          <button onClick={handleLike} aria-label={t.like} className="shrink-0 active:scale-125 transition-transform">
            <Heart
              className={`w-7 h-7 transition-colors duration-500 ${
                liked ? 'text-pink-500 fill-pink-500' : 'text-gray-500'
              }`}
            />
          </button>
        </div>

        {/* Progress Bar */}
        <input
          type="range"
          className="seek"
          min={0}
          max={duration || 0}
          step="any"
          value={time}
          onChange={(e) => onSeek(Number(e.target.value))}
          aria-label={t.seek}
          style={{ '--progress': `${progress}%` }}
        />
        <div className="flex justify-between text-xs text-gray-500 mt-2 mb-6 font-mono">
          <span>{formatTime(time)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        {/* Kontrol Tuşları */}
        <div className="flex items-center justify-center gap-8">
          <button onClick={onPrev} aria-label={t.prev} className="text-gray-400 hover:text-white transition">
            <SkipBack size={28} />
          </button>

          <button
            onClick={onToggle}
            aria-label={isPlaying ? t.pause : t.play}
            className="w-16 h-16 flex items-center justify-center bg-white rounded-full text-black hover:scale-105 hover:bg-gray-100 transition shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            {isPlaying ? <Pause size={32} fill="black" /> : <Play size={32} fill="black" className="ml-1" />}
          </button>

          <button onClick={onNext} aria-label={t.next} className="text-gray-400 hover:text-white transition">
            <SkipForward size={28} />
          </button>
        </div>
      </div>

      {/* ANI / MESAJ ALANI */}
      <div className="min-h-36 w-full text-center px-2">
        <p className="font-hand text-4xl text-pink-300 mb-2">{memory.title}</p>
        <AnimatePresence mode="wait">
          <motion.p
            key={`${track.src}-${lang}-${lineIndex}`}
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            transition={{ duration: 0.5 }}
            className="text-lg md:text-xl font-medium text-pink-100 leading-relaxed"
          >
            {memory.lines[lineIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      <Counter t={t} />

      <Timeline t={t} />

      {/* Playlist */}
      <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4">
        <div className="flex items-baseline justify-between px-2 mb-3">
          <h3 className="font-bold">{t.playlistTitle}</h3>
          <span className="text-xs text-gray-400">{t.playlistSub.replaceAll('{n}', tracks.length)}</span>
        </div>
        <ul className="space-y-1">
          {tracks.map((item, i) => (
            <li key={item.src}>
              <button
                onClick={() => onSelect(i)}
                aria-current={i === index}
                className={`w-full flex items-center gap-3 p-2 rounded-2xl text-left transition ${
                  i === index ? 'bg-white/10' : 'hover:bg-white/5'
                }`}
              >
                <span className="relative w-12 h-12 shrink-0 rounded-xl overflow-hidden bg-zinc-900">
                  <Image
                    src={item.cover}
                    alt=""
                    fill
                    sizes="48px"
                    className="object-cover"
                    style={{ objectPosition: item.focus }}
                  />
                </span>
                <span className="min-w-0 flex-1">
                  <span className={`block truncate font-semibold ${i === index ? 'text-pink-300' : 'text-white'}`}>
                    {item.title}
                  </span>
                  <span className="block truncate text-xs text-gray-400">
                    {item.memory[lang].title}
                    {item.artist && ` · ${item.artist}`}
                  </span>
                </span>
                {i === index && isPlaying && <Heart className="w-4 h-4 shrink-0 text-pink-500 fill-pink-500 animate-pulse" />}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onLetter}
        className="flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-purple-500 to-pink-500 font-bold shadow-[0_0_30px_rgba(236,72,153,0.4)] hover:scale-105 transition"
      >
        <Mail size={20} />
        {t.letterBtn}
      </button>

      <p className="text-gray-500 text-xs pb-4">{t.by}</p>
    </motion.section>
  );
}
