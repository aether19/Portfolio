import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Ayoub's design work transformed our platform completely. His attention to detail and user-centric approach resulted in a 94% satisfaction rate from our users. He's a true design leader.",
    author: 'Sarah C.',
    role: 'Product Manager',
    company: 'OPALO Technologies',
    rating: 5,
  },
  {
    quote: "Working with Ayoub was exceptional. He not only delivered beautiful designs but also deeply understood our business goals. The NordWave platform exceeded all our expectations.",
    author: 'Moatez O.',
    role: 'Solo entrepreneur',
    company: 'NordWave Financial',
    rating: 5,
  },
  {
    quote: "Ayoub has an incredible ability to simplify complex problems. His work on AD Forge helped us reduce campaign creation time by 18 hours while improving engagement rates significantly.",
    author: 'Yacine L.',
    role: 'Marketing Director',
    company: 'AD Forge Inc',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="eyebrow mono-label text-white/50 mb-6">Testimonials</p>
          <h2 className="text-5xl md:text-7xl text-white tracking-tight">What people say</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 bg-[var(--surface-1)] border border-[var(--hairline)] rounded-2xl hover:border-[var(--accent-brand)] transition-all group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4" style={{ fill: 'var(--accent-brand)', color: 'var(--accent-brand)' }} />
                ))}
              </div>
              
              <blockquote className="text-lg text-white/75 leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="pt-6 border-t border-white/10">
                <div className="text-white mb-1">{testimonial.author}</div>
                <div className="text-sm text-white/50">{testimonial.role}</div>
                <div className="mono-label text-accent mt-1">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
