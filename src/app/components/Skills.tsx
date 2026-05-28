import { motion } from 'motion/react';

const principles = [
  { k: 'Research-led', d: 'Decisions trace back to real user behaviour and business context, not assumptions or trends.' },
  { k: 'System-driven', d: 'Scalable design systems and tokens that keep complex products consistent as they grow.' },
  { k: 'End-to-end', d: 'Ownership from discovery and information architecture through polished UI and developer handoff.' },
];

const tools = ['Figma', 'Adobe XD', 'Framer', 'ProtoPie', 'Adobe Creative Suite'];

const expertise = [
  { title: 'UX & Product', description: 'User Research, User Flows, Information Architecture, Usability Testing, Product Strategy' },
  { title: 'Design Systems', description: 'Design Systems, Design Tokens, Component Architecture, Responsive Design' },
  { title: 'UI & Interaction', description: 'UI Design, Interaction Design, Prototyping, Mobile & Web Design' },
  { title: 'Specialization', description: 'Arabic RTL/LTR, Bilingual UX, Fintech UX, Government Systems' },
  { title: 'Workflow', description: 'Agile/Scrum, Developer Handoff, Design QA' },
  { title: 'Tools', description: 'Figma, Adobe XD, Framer, ProtoPie, Adobe Creative Suite' },
];

export function Skills() {
  return (
    <section id="about" className="py-32">
      <div className="relative max-w-[1400px] mx-auto px-8 mb-40 overflow-hidden">
        <div className="brand-glow alt w-[40vw] h-[40vw] -top-[10vw] right-[-8vw]" />
        <p className="eyebrow mono-label text-white/50 mb-10">Approach</p>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="relative text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-white/30 max-w-[18ch]">
          I turn <span className="text-white">complex, regulated products</span> into interfaces people <span className="text-accent">actually finish using.</span>
        </motion.h2>
        <div className="relative grid md:grid-cols-3 gap-px bg-[var(--hairline)] rounded-2xl overflow-hidden border border-[var(--hairline)] mt-20">
          {principles.map((pr, i) => (
            <motion.div key={pr.k} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative bg-[#0a0a0f] p-10 hover:bg-[var(--surface-1)] transition-colors">
              <span className="mono-label text-white/25">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="text-2xl text-white mt-6 mb-3 tracking-tight">{pr.k}</h3>
              <p className="text-white/55 leading-relaxed">{pr.d}</p>
              <div className="absolute left-10 right-10 bottom-0 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" style={{ background: 'var(--accent-brand)' }} />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8 }} className="mb-16">
          <p className="eyebrow mono-label text-white/50 mb-6">What I do</p>
          <h2 className="display text-5xl md:text-7xl text-white">Areas of Expertise</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--hairline)] rounded-2xl overflow-hidden">
          {expertise.map((area, index) => (
            <motion.div key={area.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className="group relative p-10 bg-[#0a0a0f] hover:bg-[var(--surface-1)] transition-colors">
              <span className="mono-label text-accent">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="text-2xl text-white mt-6 mb-3 tracking-tight">{area.title}</h3>
              <p className="text-white/55 leading-relaxed">{area.description}</p>
              <div className="absolute left-10 right-10 bottom-0 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" style={{ background: 'var(--accent-brand)' }} />
            </motion.div>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap items-center gap-3">
          <span className="mono-label text-white/40 mr-2">Toolbox</span>
          {tools.map((t) => (<span key={t} className="px-4 py-2 rounded-full border border-[var(--hairline)] text-white/70 text-sm tracking-wide hover:border-[var(--accent-brand)] hover:text-white transition-colors">{t}</span>))}
        </div>
      </div>
    </section>
  );
}
