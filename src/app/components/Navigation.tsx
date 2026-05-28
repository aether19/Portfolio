import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface NavigationProps {
  onBack?: () => void;
  showBack?: boolean;
  isScrolled?: boolean;
}

export function Navigation({ onBack, showBack, isScrolled }: NavigationProps) {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-8 flex items-center justify-between">
        {showBack && onBack ? (
          <button
            onClick={onBack}
            className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="tracking-wide">Back</span>
          </button>
        ) : (
          <motion.div 
            className="text-white tracking-wider"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            AB
          </motion.div>
        )}
        
        <div className="flex items-center gap-12">
          <a
            href="#work"
            className="text-white/50 hover:text-white transition-colors tracking-wide"
          >
            Work
          </a>
          <a
            href="#contact"
            className="text-white/50 hover:text-white transition-colors tracking-wide"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
