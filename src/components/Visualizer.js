import { motion } from 'framer-motion';

// Süs amaçlı ses dalgası: çalarken oynar, durunca söner
const BARS = Array.from({ length: 28 }, (_, i) => ({
  peak: 0.4 + ((i * 37) % 60) / 100,
  duration: 0.7 + ((i * 53) % 50) / 100,
}));

export default function Visualizer({ isPlaying }) {
  return (
    <div className="flex items-end justify-center gap-1 h-10" aria-hidden="true">
      {BARS.map((bar, i) => (
        <motion.span
          key={i}
          className="w-1 h-full origin-bottom rounded-full bg-white/80"
          animate={{ scaleY: isPlaying ? [0.2, bar.peak, 0.35, bar.peak * 0.7, 0.2] : 0.1 }}
          transition={
            isPlaying ? { duration: bar.duration, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.4 }
          }
        />
      ))}
    </div>
  );
}
