import { NIKAH_DATE } from '../data/content';
import { useNow } from '../lib/useNow';

export default function Counter({ t }) {
  const now = useNow();

  const diff = now === null ? 0 : Math.max(0, now - NIKAH_DATE.getTime());
  const units = [
    { label: t.days, value: Math.floor(diff / 86400000) },
    { label: t.hours, value: Math.floor(diff / 3600000) % 24 },
    { label: t.minutes, value: Math.floor(diff / 60000) % 60 },
    { label: t.seconds, value: Math.floor(diff / 1000) % 60 },
  ];

  return (
    <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center">
      <p className="font-hand text-3xl text-pink-200 mb-4">{t.counterTitle}</p>

      <div className="grid grid-cols-4 gap-2">
        {units.map((u) => (
          <div key={u.label} className="bg-black/30 rounded-2xl py-3">
            <div className="text-2xl md:text-3xl font-bold tabular-nums">{now === null ? '–' : u.value}</div>
            <div className="text-[11px] text-gray-400 mt-1">{u.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
