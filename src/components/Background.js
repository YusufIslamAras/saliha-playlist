import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

// Rastgele görünen ama her render'da aynı kalan kalp yerleşimi
const HEARTS = Array.from({ length: 36 }, (_, i) => ({
  left: (i * 37) % 100,
  size: 10 + ((i * 7) % 16),
  duration: 12 + ((i * 5) % 12),
  delay: -((i * 3) % 20),
  opacity: 0.15 + ((i * 11) % 30) / 100,
}));

export default function Background({ accent, dense }) {
  const hearts = dense ? HEARTS : HEARTS.slice(0, 14);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Şarkıya göre renk değiştiren flu ışıklar */}
      <motion.div
        animate={{ backgroundColor: accent[0] }}
        transition={{ duration: 1.5 }}
        className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-40"
      />
      <motion.div
        animate={{ backgroundColor: accent[1] }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-[-20%] right-[-20%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-40"
      />

      {/* Süzülen kalpler */}
      {hearts.map((h, i) => (
        <Heart
          key={i}
          className="floating-heart text-pink-400 fill-pink-400"
          style={{
            left: `${h.left}%`,
            width: h.size,
            height: h.size,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            '--heart-opacity': h.opacity,
          }}
        />
      ))}
    </div>
  );
}
