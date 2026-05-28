import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export function Hero() {
  const handleDownloadResume = () => {
    // Create ATS-friendly resume content
    const resumeContent = `Ayoub Benhamouche
Product Designer | UI/UX | Fintech & SaaS | Arabic–English–French | RTL/LTR
benhamouche.ayoub11@gmail.com | LinkedIn | Portfolio | Behance | Annaba, Algeria | Open to Relocation

SUMMARY
Product Designer with 5+ years of experience across SaaS, fintech, banking, and government systems. End-to-end UX ownership across product flows including research, information architecture, UI systems, and production-ready delivery. Specialized in Arabic RTL and bilingual product design for complex, regulated environments. Experience working with international and GCC-based clients across freelance and studio engagements.

EXPERIENCE

Product Designer, Persoluxe (SaaS Product)
Sep 2025 – Mar 2026
• Designed and shipped features for a SaaS platform with 5,000+ active users
• Owned end-to-end UX delivery across core product flows from discovery to developer handoff
• Built a modular Figma design system ensuring consistency across the product
• Improved onboarding flow and task completion through iterative UX improvements
• Worked in Agile sprints with product managers and engineers

Founder / Product Designer, Seyru Studio (Design Consultancy)
Jun 2024 – Sep 2025
• Led end-to-end product design for SaaS and fintech clients
• Built scalable design systems and reusable UI architecture across projects
• Translated business requirements into structured user flows and interfaces
• Delivered production-ready designs reducing development ambiguity and rework
• Worked with international and GCC-based clients across multiple engagements

UI/UX Designer, Freelance / Contract (Fintech, Banking, Government)
Jan 2021 – Present
• Designed digital banking and internal systems for large financial institutions (NDA)
• Worked on onboarding, account management, and compliance dashboard systems
• Improved user workflows and activation through UX restructuring
• Specialized in Arabic RTL and bilingual UI systems (Arabic–English)
• Delivered 30+ digital products across fintech, SaaS, and government sectors
• Collaborated with GCC-based clients on product design engagements

EDUCATION

M.Sc. Automation & Systems Engineering, Badji Mokhtar University (2023–2025)
B.Sc. Automation Engineering, Badji Mokhtar University (2019–2023)

SKILLS

UX & Product: User Research, User Flows, Information Architecture, Usability Testing, Product Strategy
Design Systems: Design Systems, Design Tokens, Component Architecture, Responsive Design
UI & Interaction: UI Design, Interaction Design, Prototyping, Mobile & Web Design
Specialization: Arabic RTL/LTR, Bilingual UX, Fintech UX, Government Systems
Workflow: Agile/Scrum, Developer Handoff, Design QA
Tools: Figma, Adobe XD, Framer, ProtoPie, Adobe Creative Suite

LANGUAGES

Arabic (Native) · French (Fluent) · English (Professional)
    `.trim();
    
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Ayoub_Benhamouche_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 overflow-hidden">
      <div className="brand-glow w-[60vw] h-[60vw] -top-[12vw] -left-[6vw]" />
      <div className="brand-glow alt w-[36vw] h-[36vw] bottom-[-8vw] right-[-6vw]" />
      <div className="relative max-w-[1400px] w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-8">
            <h1 className="text-[15vw] md:text-[12vw] lg:text-[10vw] leading-[0.9] tracking-tighter">
              <motion.span 
                className="block text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Ayoub
              </motion.span>
              <motion.span 
                className="block text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Benhamouche
              </motion.span>
            </h1>
          </div>
          
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-0">
              <div className="space-y-2">
                <p className="text-2xl md:text-3xl text-white/90 tracking-tight">Product Designer</p>
                <p className="text-lg text-white/55 tracking-wide">5 years of experience</p>
              </div>
              
              <div className="flex gap-10 text-white/70 tracking-wide">
                <div>
                  <p className="mono-label text-white/40 mb-2">Based in</p>
                  <p>Algeria</p>
                </div>
                <div>
                  <p className="mono-label text-white/40 mb-2">Status</p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent-brand)' }} />
                    Available
                  </p>
                </div>
              </div>
            </div>
            
            <div className="max-w-3xl">
              <p className="text-xl text-white/65 leading-relaxed mb-8">
                Specialized in crafting intuitive digital experiences for SaaS, FinTech, and AI-powered platforms. 
                I transform complex systems into simple, user-centered designs that drive engagement and business growth. 
                Passionate about creating accessible interfaces that solve real problems.
              </p>
              
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center gap-3 px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[var(--accent-brand)] text-white rounded-full transition-all group"
              >
                <Download className="w-5 h-5 transition-transform group-hover:translate-y-1" />
                <span className="tracking-wide">Download Resume</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}