
import { motion } from 'motion/react';
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
  return (
    <section id="work" className="px-6 md:px-12 lg:px-16 py-32">
      <div className="max-w-[1500px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8 }} className="mb-16 flex items-end justify-between gap-8">
          <div><p className="eyebrow mono-label text-white/50 mb-6">Selected work</p><h2 className="display text-5xl md:text-7xl lg:text-8xl text-white">Projects</h2></div>
          <span className="mono-label text-white/40 hidden md:block">{String(projects.length).padStart(2, '0')} Case Studies</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onSelectProject(project.id)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--surface-1)] aspect-[4/3] transition-colors duration-500 group-hover:border-[var(--accent-brand)]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-5 left-5 mono-label text-white/70">{String(index + 1).padStart(2, '0')}</span>
                <span className="absolute top-5 right-5 mono-label text-white/60">{project.year}</span>
                <span className="absolute bottom-5 right-5 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-500 group-hover:bg-[var(--accent-brand)] group-hover:border-transparent group-hover:text-[var(--accent-ink)] group-hover:rotate-45">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 mt-5">
                <div>
                  <h3 className="display text-2xl md:text-3xl text-white transition-colors duration-300 group-hover:text-accent">{project.title}</h3>
                  <p className="text-white/45 mt-1.5 tracking-tight">{project.subtitle}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">{project.tags.map((tag) => (<span key={tag} className="mono-label text-white/35">{tag}</span>))}</div>
            </motion.article>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center py-20">
          <a href="https://www.behance.net/ayoub-benhamouche" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-5 border border-[var(--hairline)] hover:border-[var(--accent-brand)] text-white rounded-full transition-all group"><span className="text-lg tracking-wide">View More Work on Behance</span><ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
        </motion.div>
      </div>
    </section>
  );
}
