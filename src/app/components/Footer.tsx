import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="relative px-6 md:px-12 lg:px-16 py-32 overflow-hidden">
      <div className="brand-glow w-[50vw] h-[50vw] -bottom-[20vw] left-[10vw]" />
      <div className="relative max-w-[1500px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="eyebrow mono-label text-white/50 mb-10"
        >
          Available for 2026
        </motion.p>

        <a href="mailto:benhamouche.ayoub11@gmail.com" className="group block">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="display text-[13vw] md:text-[11vw] lg:text-[9vw] text-white/40 group-hover:text-white transition-colors duration-500"
          >
            Let's work
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="display text-[13vw] md:text-[11vw] lg:text-[9vw] text-white flex items-center gap-4"
          >
            together
            <span className="flex items-center justify-center w-[8vw] h-[8vw] max-w-24 max-h-24 rounded-full border border-[var(--hairline)] transition-all duration-500 group-hover:bg-[var(--accent-brand)] group-hover:border-transparent group-hover:rotate-45">
              <ArrowUpRight className="w-[3vw] h-[3vw] max-w-10 max-h-10" />
            </span>
          </motion.h2>
        </a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div>
            <p className="mono-label text-white/35 mb-3">Email</p>
            <a href="mailto:benhamouche.ayoub11@gmail.com" className="text-white/80 hover:text-white transition-colors link-underline break-all">benhamouche.ayoub11@gmail.com</a>
          </div>
          <div>
            <p className="mono-label text-white/35 mb-3">Social</p>
            <div className="flex flex-col gap-1">
              <a href="https://www.linkedin.com/in/ayoub-benhamouche-64335429b/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors link-underline w-fit">LinkedIn</a>
              <a href="https://www.behance.net/ayoub-benhamouche" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors link-underline w-fit">Behance</a>
            </div>
          </div>
          <div>
            <p className="mono-label text-white/35 mb-3">Based in</p>
            <p className="text-white/80">Annaba, Algeria</p>
          </div>
          <div>
            <p className="mono-label text-white/35 mb-3">Languages</p>
            <p className="text-white/80">AR · FR · EN</p>
          </div>
        </motion.div>

        <div className="mt-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-10 border-t border-[var(--hairline)]">
          <div className="text-white/30 tracking-wide">© 2026 Ayoub Benhamouche</div>
          <div className="mono-label text-white/30">Designed & built with intent</div>
        </div>
      </div>
    </footer>
  );
}
