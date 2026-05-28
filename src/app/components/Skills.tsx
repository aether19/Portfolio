import { motion } from 'motion/react';

const skills = [
  'User Research',
  'User Flows',
  'Information Architecture',
  'Usability Testing',
  'Product Strategy',
  'Design Systems',
  'Design Tokens',
  'Component Architecture',
  'Responsive Design',
  'UI Design',
  'Interaction Design',
  'Prototyping',
  'Mobile & Web Design',
  'Arabic RTL/LTR',
  'Bilingual UX',
  'Fintech UX',
  'Government Systems',
  'Agile/Scrum',
  'Developer Handoff',
  'Design QA',
  'Figma',
  'Adobe XD',
  'Framer',
  'ProtoPie',
  'Adobe Creative Suite',
  'English',
  'French',
  'Arabic',
];

const expertise = [
  {
    title: 'UX & Product',
    description: 'User Research, User Flows, Information Architecture, Usability Testing, Product Strategy',
  },
  {
    title: 'Design Systems',
    description: 'Design Systems, Design Tokens, Component Architecture, Responsive Design',
  },
  {
    title: 'UI & Interaction',
    description: 'UI Design, Interaction Design, Prototyping, Mobile & Web Design',
  },
  {
    title: 'Specialization',
    description: 'Arabic RTL/LTR, Bilingual UX, Fintech UX, Government Systems',
  },
  {
    title: 'Workflow',
    description: 'Agile/Scrum, Developer Handoff, Design QA',
  },
  {
    title: 'Tools',
    description: 'Figma, Adobe XD, Framer, ProtoPie, Adobe Creative Suite',
  },
];

export function Skills() {
  return (
    <section className="py-32 px-8 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl text-white tracking-tight mb-16">
            Areas of Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group"
              >
                <h3 className="text-xl text-white mb-2 tracking-tight group-hover:text-white transition-colors">
                  {area.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl text-white tracking-tight mb-16">
            Tools & Skills
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
              >
                <span className="tracking-wide text-sm">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}