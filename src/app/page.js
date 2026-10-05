'use client';

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { DEFAULT_LANG, tracks, ui } from '../data/content';
import Background from '../components/Background';
import Intro from '../components/Intro';
import Player from '../components/Player';
import Finale from '../components/Finale';

export default function Home() {
  const audioRef = useRef(null);
  const [lang, setLang] = useState(DEFAULT_LANG);
  const [screen, setScreen] = useState('intro'); // intro | player | finale
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const t = ui[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const loadTrack = (i, autoplay) => {
    const audio = audioRef.current;
    audio.src = tracks[i].src;
    setIndex(i);
    setTime(0);
    setDuration(0);
    if (autoplay) audio.play().catch(() => {});
  };

  const openGift = () => {
    setScreen('player');
    loadTrack(0, true);
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio.paused) audio.play().catch(() => {});
    else audio.pause();
  };

  const next = () => loadTrack((index + 1) % tracks.length, true);

  const prev = () => {
    // Şarkının başında değilse önce başa sar
    if (time > 3) seek(0);
    else loadTrack((index - 1 + tracks.length) % tracks.length, true);
  };

  const seek = (seconds) => {
    audioRef.current.currentTime = seconds;
    setTime(seconds);
  };

  const handleEnded = () => {
    if (index < tracks.length - 1) {
      loadTrack(index + 1, true);
    } else {
      // Son şarkı bitince final sahnesi açılır, müzik baştan devam eder
      loadTrack(0, true);
      showScreen('finale');
    }
  };

  const showScreen = (name) => {
    setScreen(name);
    window.scrollTo({ top: 0 });
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-zinc-950 text-white">
      <Background accent={tracks[index].accent} dense={screen === 'finale'} />

      <audio
        ref={audioRef}
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={handleEnded}
      />

      <AnimatePresence mode="wait">
        {screen === 'intro' && <Intro key="intro" t={t} lang={lang} onLang={setLang} onOpen={openGift} />}
        {screen === 'player' && (
          <Player
            key="player"
            t={t}
            lang={lang}
            onLang={setLang}
            index={index}
            isPlaying={isPlaying}
            time={time}
            duration={duration}
            onToggle={togglePlay}
            onNext={next}
            onPrev={prev}
            onSeek={seek}
            onSelect={(i) => loadTrack(i, true)}
            onLetter={() => showScreen('finale')}
          />
        )}
        {screen === 'finale' && <Finale key="finale" t={t} lang={lang} onBack={() => showScreen('player')} />}
      </AnimatePresence>
    </main>
  );
}
