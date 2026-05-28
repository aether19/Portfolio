import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import adForgeImg from '../../imports/Mockup_18.png';
import nordwaveImg from '../../imports/Mockup_21.png';
import opaloImg from 'figma:asset/47dae10299943ce999caa4e13ff7f2fe75dacdad.png';
import axiomImg from '../../imports/Mockup_23.png';
import shreddyImg from '../../imports/Rustic_Flat_Lay_iPhone_15_Pro_Mockup___Green_Screen_with_Headphones___Coffee.png';
import wondercatImg from '../../imports/Laptop_and_Phone_Desk_Mockup.png';
import seaGamesImg from 'figma:asset/d87944b23f362f0a69082de28adf4e5354ce308b.png';
import neosysImg from '../../imports/Mockup_26-1.png';

interface ProjectsProps {
  onSelectProject: (projectId: string) => void;
}

const projects = [
  {
    id: 'neosys',
    title: 'Neosys',
    subtitle: 'Enterprise System Revamp',
    description: 'Redesigned enterprise platform as Product Designer, improving user workflows and interface consistency across the system.',
    image: neosysImg,
    year: '2026',
    role: 'UI/UX Product Designer',
    tags: ['Web Design', 'Enterprise', 'UX'],
    behance: '',
  },
  {
    id: 'sea-games',
    title: 'SEA GAMES 33 - 2025 EDITION',
    subtitle: 'Southeast Asian Games Official Tournament Website',
    description: 'Designed an immersive sports tournament website celebrating regional excellence with real-time fixtures, interactive features, and motivational storytelling.',
    image: seaGamesImg,
    year: '2026',
    role: 'UI/UX Product Designer',
    tags: ['Web Design', 'Sports', 'Landing Page'],
    behance: 'https://www.behance.net/gallery/245722819/SEA-GAMES-33-CASE-STUDY',
  },
  {
    id: 'wondercat-ai',
    title: 'Wondercat AI',
    subtitle: 'AI Content Creation Platform Landing Page Revamp',
    description: 'Redesigned the landing page to increase conversions by 127%, clarifying value proposition and streamlining user journey for the AI-powered content creation platform.',
    image: wondercatImg,
    year: '2026',
    role: 'UI/UX Product Designer',
    tags: ['Landing Page', 'AI', 'SaaS'],
    behance: 'https://www.behance.net/gallery/242997697/WonderCat-AI-case-study',
  },
  {
    id: 'shreddy',
    title: 'Shreddy',
    subtitle: 'AI-Powered Fitness & Workout App Redesign',
    description: 'Redesigned a comprehensive fitness platform with personalized AI workout plans, real-time tracking, and community-driven motivation features.',
    image: shreddyImg,
    year: '2026',
    role: 'UI/UX Product Designer',
    tags: ['Mobile Design', 'Health & Fitness', 'AI'],
    behance: 'https://www.behance.net/gallery/242477061/Shreddy-Redesign-concept',
  },
  {
    id: 'axiom',
    title: 'AXIOM',
    subtitle: 'Climate-Responsive Architecture Website',
    description: 'Conceptualized a sophisticated architecture website emphasizing climate-responsive design with immersive storytelling and modern UI.',
    image: axiomImg,
    year: '2026',
    role: 'UI/UX Product Designer',
    tags: ['Web Design', 'Architecture', 'Sustainability'],
    behance: 'https://www.behance.net/gallery/241425181/AXIOM-ResearchDriven-Architecture-Website-Concept',
  },
  {
    id: 'nordwave-invest',
    title: 'NordWave Invest',
    subtitle: 'Nordic Maritime Investment Platform',
    description: 'Created an accessible investment platform democratizing Nordic maritime economy with €1 minimum investment and educational onboarding.',
    image: nordwaveImg,
    year: '2025',
    role: 'UI/UX Product Designer',
    tags: ['FinTech', 'Web Design', 'Investment'],
    behance: 'https://www.behance.net/gallery/239323557/NORDWAVE-INVEST',
  },
  {
    id: 'opalo-labs',
    title: "OPALO'labs",
    subtitle: 'AI-Powered Video Advertising Platform',
    description: 'Designed an intuitive platform enabling creators to generate professional video ads with AI-powered personalization and voice technology.',
    image: opaloImg,
    year: '2025',
    role: 'UI/UX Product Designer',
    tags: ['Web Design', 'SaaS', 'AI'],
    behance: 'https://www.behance.net/gallery/238364507/OpaloLabs',
  },
  {
    id: 'ad-forge',
    title: 'AD Forge',
    subtitle: 'Viral TikTok Campaign Generator',
    description: 'Designed a one-click platform transforming products into viral TikTok campaigns with AI-powered targeting and CGI integration.',
    image: adForgeImg,
    year: '2025',
    role: 'UI/UX Product Designer',
    tags: ['AI', 'Marketing', 'Social'],
    behance: 'https://www.behance.net/gallery/236105823/AD-Forge',
  },
];

export function Projects({ onSelectProject }: ProjectsProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 250, damping: 30, mass: 0.5 });
  const py = useSpring(my, { stiffness: 250, damping: 30, mass: 0.5 });

  const handleMove = (e: React.MouseEvent) => {
    mx.set(e.clientX - 160);
    my.set(e.clientY - 110);
  };

  return (
    <section id="work" className="px-6 md:px-12 lg:px-16 py-32" onMouseMove={handleMove}>
      <div className="max-w-[1500px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8 }} className="mb-16 flex items-end justify-between gap-8">
          <div><p className="eyebrow mono-label text-white/50 mb-6">Selected work</p><h2 className="display text-5xl md:text-7xl lg:text-8xl text-white">Projects</h2></div>
          <span className="mono-label text-white/40 hidden md:block">{String(projects.length).padStart(2, '0')} Case Studies</span>
        </motion.div>
        <div className="border-t border-[var(--hairline)]">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.05 }}
              onClick={() => onSelectProject(project.id)}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered((h) => (h === index ? null : h))}
              className="group relative grid grid-cols-12 items-center gap-6 py-7 md:py-8 border-b border-[var(--hairline)] cursor-pointer transition-colors hover:bg-[var(--surface-1)]"
            >
              <div className="absolute left-0 top-0 bottom-0 w-px scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" style={{ background: 'var(--accent-brand)' }} />
              <div className="col-span-2 md:col-span-1 pl-4"><span className="mono-label text-white/30 group-hover:text-accent transition-colors">{String(index + 1).padStart(2, '0')}</span></div>
              <div className="col-span-8 md:col-span-7">
                <h3 className="display text-2xl md:text-5xl text-white group-hover:translate-x-3 transition-transform duration-500">{project.title}</h3>
                <p className="text-white/45 mt-2 tracking-tight group-hover:translate-x-3 transition-transform duration-500 delay-[40ms]">{project.subtitle}</p>
              </div>
              <div className="hidden md:flex col-span-3 flex-wrap gap-x-4 gap-y-1 justify-start">{project.tags.map((tag) => (<span key={tag} className="mono-label text-white/40">{tag}</span>))}</div>
              <div className="col-span-2 md:col-span-1 flex md:justify-end items-center gap-4">
                <span className="mono-label text-white/40 hidden lg:inline">{project.year}</span>
                <span className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--hairline)] text-white transition-all group-hover:border-transparent group-hover:bg-[var(--accent-brand)] group-hover:text-[var(--accent-ink)] group-hover:rotate-45"><ArrowUpRight className="w-5 h-5" /></span>
              </div>
            </motion.article>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center py-16">
          <a href="https://www.behance.net/ayoub-benhamouche" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-5 border border-[var(--hairline)] hover:border-[var(--accent-brand)] text-white rounded-full transition-all group"><span className="text-lg tracking-wide">View More Work on Behance</span><ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
        </motion.div>
      </div>

      <AnimatePresence>
        {hovered !== null && (
          <motion.div
            className="hover-preview hidden md:block"
            style={{ x: px, y: py }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src={projects[hovered].image} alt={projects[hovered].title} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
