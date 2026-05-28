import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
interface NavigationProps { onBack?: () => void; showBack?: boolean; isScrolled?: boolean; }
export function Navigation({ onBack, showBack, isScrolled }: NavigationProps) {
  return (
    <motion.nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ backgroundColor: isScrolled ? 'rgba(10, 10, 15, 0.7)' : 'transparent', backdropFilter: isScrolled ? 'blur(20px)' : 'none', borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent' }}>
      {!isScrolled && <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-transparent" />}
      <div className="relative max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16 py-5 flex items-center justify-between">
        {showBack && onBack ? (
          <button onClick={onBack} className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"><ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" /><span className="tracking-wide">Back to index</span></button>
        ) : (
          <a href="#" className="flex items-center gap-3 group">
            <span className="text-white tracking-wide link-underline">Ayoub Benhamouche</span>
          </a>
        )}
        <div className="flex items-center gap-7 lg:gap-9">
          <a href="#work" className="mono-label text-white/60 hover:text-white transition-colors link-underline">Work</a>
          <a href="#about" className="mono-label text-white/60 hover:text-white transition-colors link-underline hidden sm:inline">About</a>
          <a href="#contact" className="px-5 py-2.5 rounded-full tracking-wide transition-transform hover:scale-[1.03]" style={{ backgroundColor: 'var(--accent-brand)', color: 'var(--accent-ink)' }}>Let's talk</a>
        </div>
      </div>
    </motion.nav>
  );
}
