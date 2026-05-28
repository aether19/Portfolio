import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
interface NavigationProps { onBack?: () => void; showBack?: boolean; isScrolled?: boolean; }
export function Navigation({ onBack, showBack, isScrolled }: NavigationProps) {
  return (
    <motion.nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500" initial={{ y: -100 }} animate={{ y: 0 }}
      style={{ backgroundColor: isScrolled ? 'rgba(10, 10, 15, 0.8)' : 'transparent', backdropFilter: isScrolled ? 'blur(20px)' : 'none', borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent' }}>
      {!isScrolled && <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />}
      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-16 py-6 flex items-center justify-between">
        {showBack && onBack ? (
          <button onClick={onBack} className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"><ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" /><span className="tracking-wide">Back</span></button>
        ) : (
          <motion.a href="#" className="text-white tracking-wide" whileHover={{ x: 2 }} transition={{ type: 'spring', stiffness: 400 }}>Ayoub Benhamouche</motion.a>
        )}
        <div className="flex items-center gap-8 lg:gap-10">
          <a href="#work" className="mono-label text-white/60 hover:text-white transition-colors">Work</a>
          <a href="#about" className="mono-label text-white/60 hover:text-white transition-colors hidden sm:inline">About</a>
          <a href="#contact" className="px-5 py-2.5 rounded-full tracking-wide transition-transform hover:scale-[1.03]" style={{ backgroundColor: 'var(--accent-brand)', color: 'var(--accent-ink)' }}>Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}
