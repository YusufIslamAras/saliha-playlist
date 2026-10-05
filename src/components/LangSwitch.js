import { LANGS } from '../data/content';

export default function LangSwitch({ lang, onChange }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => onChange(l.code)}
          aria-pressed={lang === l.code}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition ${
            lang === l.code
              ? 'bg-white text-black border-white'
              : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
