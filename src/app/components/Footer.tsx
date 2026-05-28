import { motion } from 'motion/react';
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="px-8 py-32">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl text-white tracking-tight mb-8">
            Let's Work<br />Together
          </h2>
          <p className="text-xl text-white/50 tracking-wide max-w-2xl">
            Available for freelance projects and full-time opportunities. 
            Always excited to collaborate on meaningful design work.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-6 mb-24"
        >
          <a
            href="mailto:benhamouche.ayoub11@gmail.com"
            className="group flex items-center justify-between px-8 py-6 bg-white text-black hover:bg-white/90 rounded-2xl transition-all"
          >
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6" />
              <div>
                <div className="text-sm text-black/60 mb-1">Email</div>
                <div className="tracking-wide">benhamouche.ayoub11@gmail.com</div>
              </div>
            </div>
            <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
          
          <a
            href="https://www.linkedin.com/in/ayoub-benhamouche-64335429b/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between px-8 py-6 bg-white/5 border border-white/10 text-white hover:bg-white/10 rounded-2xl transition-all"
          >
            <div className="flex items-center gap-4">
              <Linkedin className="w-6 h-6" />
              <div>
                <div className="text-sm text-white/40 mb-1">LinkedIn</div>
                <div className="tracking-wide">Ayoub Benhamouche</div>
              </div>
            </div>
            <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-12 border-t border-white/10"
        >
          <div className="text-white/30 tracking-wide">
            © 2025 Ayoub Benhamouche
          </div>
          
          <div className="flex gap-8 text-white/30">
            <a 
              href="https://www.behance.net/ayoub-benhamouche" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors tracking-wide"
            >
              Behance
            </a>
            <a 
              href="https://www.linkedin.com/in/ayoub-benhamouche-64335429b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors tracking-wide"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:benhamouche.ayoub11@gmail.com"
              className="hover:text-white transition-colors tracking-wide"
            >
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}