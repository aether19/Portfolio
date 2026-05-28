import { motion } from 'motion/react';
import { Mail, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl text-white/90 mb-6">Let's Work Together</h2>
          <p className="text-xl text-white/40 mb-12">
            Available for freelance projects and collaborations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="mailto:benhamouche.ayoub11@gmail.com"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white text-black hover:bg-white/90 rounded-lg transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>Email Me</span>
          </a>
          
          <a
            href="https://www.linkedin.com/in/ayoub-benhamouche-64335429b/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-white/30 text-sm"
        >
          <p>© 2025 Ayoub Benhamouche. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
