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
import { ImageWithFallback } from './figma/ImageWithFallback';

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
    <section id="work" className="min-h-screen px-8 py-32">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl text-white tracking-tight">
            Selected Work
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500">
                {/* Project Image */}
                <div 
                  className="relative overflow-hidden aspect-[16/10] cursor-pointer"
                  onClick={() => onSelectProject(project.id)}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                    <motion.div
                      className="text-white tracking-wider flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                    >
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 
                      className="text-3xl text-white tracking-tight cursor-pointer hover:text-white/80 transition-colors"
                      onClick={() => onSelectProject(project.id)}
                    >
                      {project.title}
                    </h3>
                    <span className="text-white/30 tracking-wide">{project.year}</span>
                  </div>
                  
                  <p className="text-lg text-white/50 mb-4 tracking-tight">
                    {project.subtitle}
                  </p>
                  
                  <p className="text-white/40 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/60 tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                    <button
                      onClick={() => onSelectProject(project.id)}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white text-black hover:bg-white/90 rounded-lg transition-colors group"
                    >
                      <span className="tracking-wide">View Case Study</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                    
                    <a
                      href={project.behance}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-colors"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        {/* View More on Behance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center py-16"
        >
          <a
            href="https://www.behance.net/ayoub-benhamouche"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white rounded-full transition-all group"
          >
            <span className="text-lg tracking-wide">View More Work on Behance</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}