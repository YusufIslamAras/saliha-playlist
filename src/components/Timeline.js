import { Check, Heart } from 'lucide-react';
import { MILESTONES } from '../data/content';
import { useNow } from '../lib/useNow';

// Geçmiş ve gelecek günlerimiz; sıradaki güne geri sayım yapar
export default function Timeline({ t }) {
  const now = useNow();
  const nextIndex = now === null ? -1 : MILESTONES.findIndex((m) => m.date.getTime() > now);

  const countdown = (date) => {
    const diff = date.getTime() - now;
    const time = [
      `${Math.floor(diff / 86400000)} ${t.dShort}`,
      `${Math.floor(diff / 3600000) % 24} ${t.hShort}`,
      `${Math.floor(diff / 60000) % 60} ${t.mShort}`,
    ].join(' ');
    return t.countdown.replace('{time}', time);
  };

  return (
    <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
      <p className="font-hand text-3xl text-pink-200 text-center mb-5">{t.timelineTitle}</p>

      <ol className="relative space-y-5 before:absolute before:left-[13px] before:top-2 before:bottom-2 before:w-px before:bg-white/15">
        {MILESTONES.map((m, i) => {
          const done = now !== null && m.date.getTime() <= now;
          const isNext = i === nextIndex;
          return (
            <li key={m.key} className="relative flex items-start gap-4">
              <span
                className={`relative z-10 flex w-7 h-7 shrink-0 items-center justify-center rounded-full border ${
                  done
                    ? 'bg-pink-500 border-pink-500'
                    : isNext
                      ? 'bg-zinc-900 border-pink-400 animate-pulse'
                      : 'bg-zinc-900 border-white/20'
                }`}
              >
                {done ? <Check size={14} /> : <Heart size={12} className={isNext ? 'text-pink-400 fill-pink-400' : 'text-gray-500'} />}
              </span>
              <div className="min-w-0">
                <p className={`font-semibold ${isNext ? 'text-pink-300' : 'text-white'}`}>{t[`${m.key}Label`]}</p>
                <p className="text-xs text-gray-400">{t[`${m.key}Date`]}</p>
                {isNext && <p className="mt-1 text-sm font-bold text-pink-200 tabular-nums">{countdown(m.date)}</p>}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
