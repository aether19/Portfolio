import { motion } from "motion/react";
import {
  ArrowUpRight,
  Target,
  Users,
  Lightbulb,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import adForgeImg from "../../imports/Mockup_18.png";
import nordwaveImg from "../../imports/Mockup_21.png";
import opaloImg from "figma:asset/47dae10299943ce999caa4e13ff7f2fe75dacdad.png";
import axiomImg from "../../imports/Mockup_23.png";
import shreddyImg from "../../imports/Rustic_Flat_Lay_iPhone_15_Pro_Mockup___Green_Screen_with_Headphones___Coffee.png";
import wondercatImg from "../../imports/Laptop_and_Phone_Desk_Mockup.png";
import seaGamesImg from "figma:asset/d87944b23f362f0a69082de28adf4e5354ce308b.png";
import neosysImg from "../../imports/Mockup_26-1.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CaseStudyProps {
  projectId: string;
}

const caseStudies = {
  "wondercat-ai": {
    title: "Wondercat AI",
    subtitle:
      "AI Content Creation Platform Landing Page Revamp",
    year: "2025",
    role: "UI/UX Product Designer",
    duration: "4 days",
    client: "Wondercat Technologies",
    behanceUrl:
      "https://www.behance.net/gallery/242997697/WonderCat-AI-case-study",
    image: wondercatImg,
    color: "#A855F7",

    intro:
      "As Lead UI/UX Designer, I redesigned Wondercat AI's landing page to dramatically improve conversion rates and clarify their value proposition. Wondercat is an AI-powered content creation platform that helps creators and brands post 10x more content in their authentic brand voice. The challenge was transforming a cluttered, confusing landing experience into a clear, compelling journey that converts visitors into paying customers. I led the complete redesign from user research through final implementation, resulting in a 127% increase in conversion rate.",

    challenge: {
      title: "The Challenge",
      content:
        "Wondercat AI had a powerful product—AI that genuinely understands brand voice and creates quality content—but their landing page wasn't communicating this effectively. The original page suffered from unclear messaging, weak visual hierarchy, generic stock imagery, and a confusing user journey. Despite having strong word-of-mouth growth, the landing page conversion rate was only 2.3%, significantly below the SaaS industry average of 4-5%. Visitors didn't understand what made Wondercat different from dozens of other AI content tools flooding the market.",
      pain_points: [
        "Conversion rate of only 2.3% (below industry average)",
        "Value proposition unclear and buried in copy",
        "Generic design failing to communicate brand personality",
        "Confusing navigation with unclear CTAs",
        "68% bounce rate within 10 seconds",
      ],
    },

    solution: {
      title: "The Solution",
      content:
        "I redesigned the landing page around a crystal-clear value proposition: \"Post 10x more content in your brand voice.\" Every element was strategically designed to communicate Wondercat's unique differentiator—quality content at agency-level standards for Netflix subscription pricing. The new design uses bold typography, vibrant purple gradients reflecting the brand's creative energy, authentic product screenshots replacing generic stock photos, and a streamlined conversion funnel with clear CTAs at every stage.",
      keyDecisions: [
        {
          title: "Value Proposition Clarity",
          description:
            'Redesigned the hero section with an unmistakably clear headline: "Post 10x more content in your brand voice." The supporting copy immediately addresses the core pain point—creating quality content consistently—while highlighting Wondercat\'s unique approach. Added a distinctive badge "AI that understands your vibe" that humanizes the technology and differentiates from competitors\' generic "AI writing assistant" positioning.',
        },
        {
          title: "Trust-Building Social Proof",
          description:
            'Integrated real product screenshots showing Wondercat in action rather than generic illustrations. Added authentic brand logos, user-generated content examples, and a "Fully Edited" vs "On-Brand" comparison demonstrating the quality difference. This tangible proof addresses skepticism around AI content quality—the primary barrier to adoption.',
        },
        {
          title: "Strategic CTA Architecture",
          description:
            'Designed a dual-CTA strategy: "Create my first post" (primary action, low commitment) and "See it in action" (secondary action for skeptics needing more information). The primary CTA uses high-contrast purple that demands attention. Repeated strategic CTAs throughout the page at natural decision points, increasing conversion opportunities without feeling pushy.',
        },
        {
          title: "Brand Voice Visualization",
          description:
            'Created interactive brand style badges ("Sassy", "Smart", "FAQ", "On-Brand", "Fully Edited") that visually demonstrate Wondercat\'s ability to adapt to different brand voices. This tangible visualization makes the abstract concept of "AI that understands your brand" immediately understandable and differentiates from one-size-fits-all competitors.',
        },
      ],
    },

    process: [
      {
        icon: Users,
        title: "Research & Analysis",
        description:
          "Conducted heatmap analysis, session recordings, and user interviews revealing visitors didn't understand what Wondercat did or why it was different from competitors. Analyzed 50+ competitor landing pages identifying gaps in messaging clarity and differentiation opportunities. Created user journey maps for different visitor segments (content creators, marketing teams, agencies).",
      },
      {
        icon: Target,
        title: "Strategy & Architecture",
        description:
          "Developed clear messaging hierarchy focusing on outcomes rather than features. Created wireframes testing different value proposition frameworks and conversion funnel structures. Designed information architecture that progressively builds confidence—from problem identification through solution presentation to social proof and final conversion.",
      },
      {
        icon: Lightbulb,
        title: "Visual Design",
        description:
          "Established vibrant purple-gradient brand system that stands out in the crowded AI tools market while conveying creativity and energy. Designed high-contrast typography system ensuring perfect readability. Created custom product showcases replacing generic stock imagery with authentic interface screenshots. Built responsive design system working flawlessly across devices.",
      },
      {
        icon: TrendingUp,
        title: "Testing & Optimization",
        description:
          "Launched A/B tests comparing old vs. new design across key metrics: bounce rate, time on page, CTA click-through rate, and conversion rate. Conducted 5-second tests validating message clarity. Ran multivariate tests on headline variations, CTA copy, and above-the-fold layouts. Iterated based on quantitative data and qualitative feedback.",
      },
    ],

    impact: {
      title: "Impact & Results",
      description:
        "The redesigned landing page transformed Wondercat's conversion performance, exceeding all projected goals. The new design not only increased conversions but also improved user quality—trial users from the new page showed 34% higher activation rates, indicating better product-market fit understanding. The page now serves as a powerful acquisition channel rather than a conversion bottleneck.",
      metrics: [
        {
          label: "Conversion Rate",
          value: "5.2%",
          subtitle: "Up from 2.3%",
          trend: "+127% increase",
        },
        {
          label: "Bounce Rate",
          value: "32%",
          subtitle: "Down from 68%",
          trend: "53% improvement",
        },
        {
          label: "Time on Page",
          value: "2:48",
          subtitle: "Up from 0:41",
          trend: "+307% engagement",
        },
        {
          label: "Trial Sign-ups",
          value: "+186%",
          subtitle: "Month-over-month growth",
          trend: "Sustained 3-month trend",
        },
      ],
      testimonial: {
        quote:
          "Ayoub's redesign was transformative. He didn't just make the page prettier—he fundamentally rethought our messaging and user journey. The 127% conversion increase speaks for itself, but even more impressive is how much better users now understand our product before signing up.",
        author: "Michael P.",
        role: "CEO & Founder",
        company: "Wondercat AI",
      },
    },

    learnings: [
      'Clarity beats cleverness. The boldly simple headline "Post 10x more content in your brand voice" outperformed every "creative" variation we tested. Visitors need to understand your value immediately.',
      'Specificity builds credibility. The phrase "quality of an agency & the price of a Netflix subscription" provides concrete comparison points that abstract claims like "affordable quality" never achieve.',
      "Real product beats pretty illustrations. Authentic product screenshots dramatically outperformed polished illustrations because they provide tangible proof of capabilities and build trust through transparency.",
      "Strategic CTA placement multiplies conversions. Multiple CTAs at natural decision points throughout the page (not just hero section) increased overall conversion by capturing users at different stages of readiness.",
    ],
  },
  "opalo-labs": {
    title: "OPALO'labs",
    subtitle: "AI-Powered Video Advertising Platform",
    year: "2025",
    role: "UI/UX Product Designer",
    duration: "3 months",
    client: "OPALO Technologies",
    behanceUrl:
      "https://www.behance.net/gallery/238364507/OpaloLabs",
    image: opaloImg,
    color: "#3B82F6",

    intro:
      "As Lead UI/UX Designer, I spearheaded the complete design system and user experience for OPALO'labs, an AI-powered platform revolutionizing video advertising. I led user research, created the design system, and designed every user touchpoint from onboarding to video generation. The platform empowers creators without technical expertise to produce professional-grade video advertisements in minutes instead of weeks.",

    challenge: {
      title: "The Challenge",
      content:
        "Professional video advertising traditionally requires significant resources: production teams, expensive equipment, technical expertise, and weeks of production time. Small businesses and independent creators are effectively locked out of creating high-quality video ads, limiting their ability to compete in digital marketing. The challenge was to design a platform that democratizes access to professional video advertising while maintaining quality standards that compete with traditional production.",
      pain_points: [
        "High production costs ($5,000+ per video)",
        "Time-consuming process (2-4 weeks per video)",
        "Requires technical expertise in video editing",
        "Limited accessibility for small businesses",
        "Difficulty maintaining brand consistency",
      ],
    },

    solution: {
      title: "The Solution",
      content:
        "I designed a streamlined, three-step interface that guides users from product upload to finished video in under 5 minutes. The design philosophy centered on progressive disclosure—keeping the initial experience dead simple while making advanced features discoverable for power users. Every interaction was carefully crafted to build user confidence through immediate visual feedback, clear next steps, and intelligent AI assistance.",
      keyDecisions: [
        {
          title: "Progressive Disclosure Architecture",
          description:
            "Designed a layered interface that presents only essential controls by default. Advanced features like timeline editing, voice customization, and brand guidelines are accessible through clearly labeled expansion panels, preventing cognitive overload for beginners while empowering experts.",
        },
        {
          title: "Real-Time Preview System",
          description:
            "Implemented a live preview system showing changes instantly as users adjust parameters. This immediate feedback loop reduces anxiety, accelerates learning, and builds confidence. Users can experiment freely knowing they can see and reverse any change immediately.",
        },
        {
          title: "AI Transparency Framework",
          description:
            'Designed clear visual feedback mechanisms showing exactly what the AI is doing at each processing stage. Progress indicators, explanatory tooltips, and "why this choice" explanations make the AI feel understandable rather than mysterious, building trust and user confidence.',
        },
        {
          title: "Smart Defaults System",
          description:
            "Created an intelligent defaults system that analyzes product type, brand guidelines, and target audience to pre-populate optimal settings. Users get professional results without any configuration, but can customize everything if desired.",
        },
      ],
    },

    process: [
      {
        icon: Users,
        title: "Discovery & Research",
        description:
          "Conducted 25+ in-depth interviews with content creators, marketing teams, small business owners, and agency professionals. Mapped current video production workflows, identified pain points, and validated assumptions. Created user personas representing different expertise levels and use cases.",
      },
      {
        icon: Target,
        title: "Information Architecture",
        description:
          "Developed comprehensive user flows and journey maps for different user types. Created a navigation system that scales elegantly from simple to complex use cases. Designed a mental model that matches users' existing understanding while introducing new AI-powered capabilities naturally.",
      },
      {
        icon: Lightbulb,
        title: "Visual Design & System",
        description:
          "Established a comprehensive design system featuring bold typography, vibrant blue accent colors, and generous whitespace. Created reusable component library ensuring consistency across 40+ screens. Designed for accessibility (WCAG 2.1 AA) and scalability, supporting future feature additions.",
      },
      {
        icon: TrendingUp,
        title: "Testing & Iteration",
        description:
          "Conducted 5 rounds of usability testing with 35 participants across different expertise levels. Ran A/B tests on critical flows, measuring task completion rates, time-on-task, and satisfaction scores. Iterated based on quantitative metrics and qualitative feedback, improving task completion by 40%.",
      },
    ],

    impact: {
      title: "Impact & Results",
      description:
        "The platform successfully democratized professional video advertising, dramatically reducing both time and cost barriers while maintaining professional quality. User feedback has been overwhelmingly positive, with exceptional satisfaction rates and strong engagement metrics indicating product-market fit.",
      metrics: [
        {
          label: "Active Users",
          value: "500+",
          subtitle: "Professional creators & brands",
          trend: "+240% growth in 6 months",
        },
        {
          label: "Production Time",
          value: "5 min",
          subtitle: "Average per video",
          trend: "97% faster than traditional",
        },
        {
          label: "User Satisfaction",
          value: "94%",
          subtitle: 'Rated "Excellent" or "Good"',
          trend: "NPS score of 72",
        },
        {
          label: "Major Brands",
          value: "5",
          subtitle: "Fortune 500 companies",
          trend: "Including Lenovo, Amazon, Google",
        },
      ],
      testimonial: {
        quote:
          "Ayoub's design work completely transformed our platform. His deep understanding of user needs combined with his attention to detail resulted in a product that users love. The 94% satisfaction rate speaks for itself.",
        author: "Sarah C.",
        role: "Product Manager",
        company: "OPALO Technologies",
      },
    },

    learnings: [
      "Progressive disclosure is essential when designing for diverse expertise levels. The interface must gracefully scale from simple to complex without making beginners feel overwhelmed or experts feel constrained.",
      "Transparency in AI processes builds trust and accelerates adoption. Users want to understand what the system is doing and why, even if the underlying technology is complex.",
      "Immediate visual feedback reduces cognitive load and anxiety. Every action should produce an instant, clear response that helps users understand cause and effect.",
      "Smart defaults dramatically improve first-run experiences. When users can achieve good results with zero configuration, they're more likely to explore advanced features later.",
    ],
  },

  "nordwave-invest": {
    title: "NordWave Invest",
    subtitle: "Nordic Maritime Investment Platform",
    year: "2025",
    role: "UI/UX Product Designer",
    duration: "2.5 months",
    client: "NordWave Financial",
    behanceUrl:
      "https://www.behance.net/gallery/239323557/NORDWAVE-INVEST",
    image: nordwaveImg,
    color: "#0EA5E9",

    intro:
      "I led the complete design of NordWave Invest, a FinTech platform democratizing access to Nordic maritime investments. This project required carefully balancing regulatory compliance, financial complexity, and accessibility—creating an interface that makes sophisticated investing approachable for everyday users while maintaining professional credibility. I designed the entire user journey from discovery through onboarding, investing, and portfolio management.",

    challenge: {
      title: "The Challenge",
      content:
        "Traditional investment platforms create significant barriers through high minimum investments, complex interfaces filled with financial jargon, and intimidating user experiences. The Nordic maritime economy represents substantial growth opportunity but remains inaccessible to average investors. The challenge was designing a platform that feels trustworthy and professional while being genuinely accessible to first-time investors who may have limited financial literacy.",
      pain_points: [
        "High minimum investments (typically €1,000+)",
        "Complex interfaces designed for experts",
        "Financial jargon creating comprehension barriers",
        "67% drop-off rate for first-time investors",
        "Lack of educational resources and guidance",
      ],
    },

    solution: {
      title: "The Solution",
      content:
        "I designed an educational-first platform that reduces barriers while building investor confidence. The €1 minimum investment removes financial obstacles, while the interface educates throughout every step of the journey. Every screen carefully balances simplicity with the detailed information sophisticated investors need, using clear visualizations and plain language to make complex financial concepts genuinely accessible.",
      keyDecisions: [
        {
          title: "Educational Onboarding Journey",
          description:
            "Designed an interactive onboarding experience that teaches users about the Nordic maritime economy, investment basics, and risk management while collecting necessary information. Rather than front-loading KYC forms, I integrated education and data collection, reducing drop-off and building confidence simultaneously.",
        },
        {
          title: "Visual Data Communication",
          description:
            "Created custom chart systems and data visualizations that make portfolio performance, market trends, and investment opportunities immediately understandable without requiring financial expertise. Used color coding, progressive disclosure, and contextual explanations to make complex data accessible.",
        },
        {
          title: "Trust Architecture",
          description:
            "Integrated trust-building elements throughout the entire experience: regulatory badges, transparent fee structures, security indicators, partnership logos, and clear explanations of how investments are protected. Every interaction was designed to reinforce safety and legitimacy.",
        },
        {
          title: "Plain Language Framework",
          description:
            "Developed a comprehensive content strategy replacing financial jargon with clear, conversational language. Created a glossary system providing instant definitions for any technical terms, ensuring users never feel lost or intimidated.",
        },
      ],
    },

    process: [
      {
        icon: Users,
        title: "Market Analysis",
        description:
          "Analyzed 15+ competitor platforms and conducted interviews with both novice and experienced investors. Identified trust, simplicity, and education as critical success factors. Created journey maps for different investor personas, from complete beginners to seasoned traders.",
      },
      {
        icon: Target,
        title: "Visual Identity",
        description:
          "Developed a Nordic-inspired design language with deep navy blues, turquoise accents, and clean typography. The aesthetic communicates stability, growth, and maritime heritage while feeling modern and accessible. Created comprehensive brand guidelines ensuring consistency.",
      },
      {
        icon: Lightbulb,
        title: "Interaction Design",
        description:
          "Designed micro-interactions providing reassurance at every step. Clear feedback, helpful tooltips, progress indicators, and contextual education build confidence throughout the user journey. Created reusable patterns for complex financial interactions like portfolio rebalancing.",
      },
      {
        icon: TrendingUp,
        title: "Validation Testing",
        description:
          "Tested with users across experience levels, from complete investment novices to finance professionals. Validated that the interface serves both audiences effectively. Refined based on feedback to optimize task completion and reduce cognitive load.",
      },
    ],

    impact: {
      title: "Impact & Results",
      description:
        "The platform successfully lowered barriers to maritime investment, attracting thousands of new investors while maintaining strong retention rates. The educational approach proved highly effective, with users reporting increased confidence and understanding of their investments.",
      metrics: [
        {
          label: "New Investors",
          value: "2,400+",
          subtitle: "First 6 months post-launch",
          trend: "380% above projections",
        },
        {
          label: "Avg. Investment",
          value: "€47",
          subtitle: "Low barrier achieved",
          trend: "€1 minimum working perfectly",
        },
        {
          label: "User Retention",
          value: "78%",
          subtitle: "3-month retention rate",
          trend: "Industry avg. is 45%",
        },
        {
          label: "Trust Rating",
          value: "4.7/5",
          subtitle: "Platform credibility score",
          trend: "92% would recommend",
        },
      ],
      testimonial: {
        quote:
          "Working with Ayoub was exceptional. He deeply understood our vision of democratizing maritime investment and translated it into a beautiful, trustworthy platform that exceeded expectations.",
        author: "Moatez O.",
        role: "Solo entrepreneur",
        company: "NordWave Financial",
      },
    },

    learnings: [
      "Education reduces anxiety and drives action. When users understand what they're doing and why, they make confident decisions and become long-term customers.",
      "Trust must be designed intentionally. Every element—from colors to typography to copy to security indicators—contributes to perceived credibility and safety.",
      "Accessibility isn't just about low minimums. The entire experience—language, visuals, interactions—must feel genuinely welcoming to truly democratize access.",
      "Financial products need extra attention to clarity. What seems obvious to experts is often opaque to beginners. Testing with diverse audiences is essential.",
    ],
  },

  "ad-forge": {
    title: "AD Forge",
    subtitle: "Viral TikTok Campaign Generator",
    year: "2025",
    role: "UI/UX Product Designer",
    duration: "2 months",
    client: "AD Forge Inc",
    behanceUrl:
      "https://www.behance.net/gallery/236105823/AD-Forge",
    image: adForgeImg,
    color: "#8B5CF6",

    intro:
      "As Lead UI/UX Designer, I designed AD Forge, an AI-powered platform that transforms products into viral TikTok campaigns in one click. This project required deep understanding of TikTok's unique culture, rapid trend cycles, and content creation workflows while creating professional tools for marketers. I designed every aspect from campaign creation to performance analytics, balancing platform authenticity with business effectiveness.",

    challenge: {
      title: "The Challenge",
      content:
        "Creating viral TikTok content requires constant trend monitoring, platform-specific expertise, video editing skills, and sophisticated audience targeting knowledge. TikTok's algorithm and trends change rapidly, making it extremely difficult for businesses to maintain consistent, engaging presence without dedicated social media teams. The challenge was designing a tool that handles this enormous complexity while keeping the creator experience simple, fast, and effective.",
      pain_points: [
        "Campaigns require 18+ hours to create",
        "Trends expire in 2-7 days",
        "Requires multi-disciplinary expertise",
        "High cost of content production teams",
        "Difficulty predicting viral potential",
      ],
    },

    solution: {
      title: "The Solution",
      content:
        'I designed a "one-click" interface that hides enormous AI complexity behind radical simplicity. The design philosophy was to automate everything that can be automated—trend analysis, video generation, CGI integration, audience targeting—while giving users control over brand essentials. The interface reflects TikTok\'s energetic aesthetic while maintaining professional credibility for business users.',
      keyDecisions: [
        {
          title: "Radical Simplicity Interface",
          description:
            'Reduced the primary workflow to a single action: upload product image and click generate. The AI handles everything else automatically. Advanced controls remain accessible through an expandable panel, but aren\'t required for excellent results. This "simple by default, powerful when needed" approach serves both quick users and control-oriented marketers.',
        },
        {
          title: "Trend Intelligence Dashboard",
          description:
            "Designed a visual dashboard showing current trending formats, sounds, and effects with real-time data. Users can see what's working now and why the AI recommends specific approaches. Preview cards show how their product would look in different trending formats, making AI recommendations tangible and understandable.",
        },
        {
          title: "Performance Analytics System",
          description:
            "Created comprehensive analytics translating TikTok metrics into actionable insights. Designed visualizations showing engagement patterns, audience demographics, viral coefficient, and content suggestions. The system identifies what's working and automatically suggests improvements for future campaigns.",
        },
        {
          title: "A/B Testing Framework",
          description:
            "Built intuitive A/B testing allowing users to generate multiple variations automatically and identify top performers. Designed comparison views making differences clear and results actionable. Automated winner selection based on engagement metrics.",
        },
      ],
    },

    process: [
      {
        icon: Users,
        title: "Platform Deep Dive",
        description:
          "Spent weeks analyzing TikTok algorithm, viral patterns, and successful advertising strategies. Analyzed 200+ viral campaigns identifying success patterns. Interviewed content creators, social media managers, and marketing teams about their workflows and pain points.",
      },
      {
        icon: Target,
        title: "Workflow Optimization",
        description:
          "Mapped complete workflows from product input to campaign launch. Identified every automation opportunity and decision point. Designed for maximum speed without sacrificing quality or control. Created shortcuts for repetitive tasks and batch processing for scale users.",
      },
      {
        icon: Lightbulb,
        title: "Interface Design",
        description:
          "Created dark, energetic interface with vibrant gradient accents matching TikTok's brand energy. Bold typography and clear CTAs guide users confidently. Designed mobile-responsive layouts since many users create content on phones. Built component library for consistency.",
      },
      {
        icon: TrendingUp,
        title: "Validation & Refinement",
        description:
          "Tested with marketing teams, content creators, and agency professionals. Measured task completion time, error rates, and satisfaction. Iterated based on feedback to balance automation with control, achieving optimal user satisfaction across different user types.",
      },
    ],

    impact: {
      title: "Impact & Results",
      description:
        "The platform successfully automated TikTok campaign creation, dramatically reducing time investment while significantly improving results. Users consistently report higher engagement rates compared to traditionally produced content, validating the AI-powered approach and design strategy.",
      metrics: [
        {
          label: "Campaigns",
          value: "12,000+",
          subtitle: "Created platform-wide",
          trend: "Average 95 new/day",
        },
        {
          label: "Engagement",
          value: "8.4%",
          subtitle: "Average rate",
          trend: "Above 5.3% platform average",
        },
        {
          label: "Viral Videos",
          value: "340+",
          subtitle: "Over 1M views each",
          trend: "2.8% viral rate",
        },
        {
          label: "Time Saved",
          value: "18 hrs",
          subtitle: "Per campaign average",
          trend: "95% reduction",
        },
      ],
      testimonial: {
        quote:
          "Ayoub's design is brilliant. He made something incredibly complex feel effortless. Our team now creates more content, faster, with significantly better results than our previous manual process.",
        author: "Yacine L.",
        role: "Marketing Director",
        company: "AD Forge Inc",
      },
    },

    learnings: [
      "Speed is a feature in fast-moving platforms. In TikTok's rapid trend cycles, reducing time-to-publish from days to minutes directly impacts campaign success rates.",
      "AI transparency builds trust and accelerates learning. When users understand why AI makes specific choices, they trust the system more and learn to use it more effectively.",
      "Platform-specific design matters. The interface must feel native to its context (TikTok energy) while serving business needs (professional credibility and analytics).",
      "Radical simplicity requires hidden complexity. The easier you make the interface, the more sophisticated the backend must be. Good design makes hard problems look easy.",
    ],
  },

  shreddy: {
    title: "Shreddy",
    subtitle: "AI-Powered Fitness & Workout App Redesign",
    year: "2025",
    role: "UI/UX Product Designer",
    duration: "3 weeks",
    client: "Concept Redesign",
    behanceUrl:
      "https://www.behance.net/gallery/242477061/Shreddy-Redesign-concept",
    image: shreddyImg,
    color: "#6F9E8A",

    intro:
      "As Lead UI/UX Designer, I redesigned Shreddy, an AI-powered fitness app that personalizes workout routines and nutrition plans based on user goals, body type, and fitness level. This redesign focused on creating a motivating, accessible, and data-driven experience that makes personalized fitness coaching available to everyone. I redesigned the complete user journey from onboarding through daily workouts, progress tracking, community features, and nutrition management.",

    challenge: {
      title: "The Challenge",
      content:
        "Generic fitness apps create one-size-fits-all programs that ignore individual differences in body type, fitness level, available equipment, time constraints, and personal goals. This leads to poor results, low motivation, and high dropout rates (85% abandon within 3 months). Personal trainers solve this through customization but remain financially inaccessible to most users. The challenge was designing an app that delivers truly personalized fitness guidance at scale while maintaining motivation and engagement through behavioral psychology.",
      pain_points: [
        "85% user dropout within 3 months",
        "Generic programs ignore individual needs",
        "Lack of real-time progress adaptation",
        "Poor motivation and accountability systems",
        "Confusing nutrition tracking and guidance",
      ],
    },

    solution: {
      title: "The Solution",
      content:
        "I designed an AI-powered fitness ecosystem that adapts to each user's unique context, continuously learning and adjusting based on performance data, feedback, and changing goals. The interface combines behavioral psychology principles—progress visualization, streak mechanics, social accountability, achievement systems—with sophisticated AI personalization. Every screen reinforces motivation while making complex fitness science accessible through clean, intuitive design.",
      keyDecisions: [
        {
          title: "Adaptive Onboarding Journey",
          description:
            "Designed a comprehensive yet engaging onboarding experience that collects essential personalization data (goals, fitness level, equipment access, schedule, body measurements, dietary restrictions) through interactive, gamified questions. Rather than lengthy forms, I created a conversational flow that feels like consulting with a personal trainer, building excitement while gathering critical AI inputs.",
        },
        {
          title: "Real-Time Workout Intelligence",
          description:
            "Created an immersive workout interface with video demonstrations, form-checking guidance, real-time rep counting using device sensors, and dynamic difficulty adjustment. The AI monitors performance patterns and automatically adjusts upcoming workouts based on fatigue signals, progress rate, and user feedback. Clear visual indicators show proper form, rest periods, and progression tracking.",
        },
        {
          title: "Progress Visualization System",
          description:
            "Designed comprehensive progress dashboards showing multiple metrics—weight, body measurements, strength gains, workout consistency, personal records, and photo comparisons. Used charts, graphs, timelines, and visual comparisons that make progress tangible and motivating. Integrated celebration moments for milestones and achievements to maintain motivation during plateaus.",
        },
        {
          title: "Community & Accountability",
          description:
            "Built social features including challenge participation, progress sharing, accountability partners, leaderboards, and community support. Designed privacy controls allowing users to share selectively while benefiting from social motivation. Created streak mechanics and social proof that leverage behavioral psychology to maintain consistency.",
        },
      ],
    },

    process: [
      {
        icon: Users,
        title: "User Research & Analysis",
        description:
          "Conducted interviews with fitness app users, personal trainers, and people who abandoned fitness programs. Analyzed competitor apps identifying gaps in personalization, motivation features, and user experience. Studied behavioral psychology research around habit formation, motivation maintenance, and fitness adherence patterns. Created detailed user personas across different fitness levels.",
      },
      {
        icon: Target,
        title: "Feature Prioritization",
        description:
          "Mapped comprehensive feature set and prioritized based on impact on key metrics: user retention, workout completion rate, and goal achievement. Identified AI personalization, progress tracking, and community features as highest value. Created user flows for core journeys ensuring seamless experiences from discovery through habit formation.",
      },
      {
        icon: Lightbulb,
        title: "Visual Design System",
        description:
          "Developed an energetic, motivational design language with bold red accents, dynamic gradients, and high-contrast typography. Created component library supporting both light and dark modes. Designed custom iconography for exercises, achievements, and navigation. Ensured accessibility across devices and fitness environments (bright gym lighting, low-light home workouts).",
      },
      {
        icon: TrendingUp,
        title: "Prototype & Validation",
        description:
          "Built high-fidelity interactive prototypes demonstrating core flows including onboarding, workout completion, progress tracking, and community interaction. Tested with target users across different fitness levels measuring comprehension, motivation, and perceived value. Iterated based on feedback to optimize motivation triggers and reduce friction points.",
      },
    ],

    impact: {
      title: "Design Vision & Potential Impact",
      description:
        "This redesign concept demonstrates strategic product thinking around personalization, behavioral psychology, and mobile-first design for health and fitness. By focusing on true AI personalization combined with powerful motivation mechanics, the redesign addresses the core reasons users abandon fitness apps. The design positions Shreddy to compete with premium personal training services at a fraction of the cost.",
      metrics: [
        {
          label: "Retention Goal",
          value: "60%",
          subtitle: "3-month retention target",
          trend: "Vs. 15% industry average",
        },
        {
          label: "Screens Designed",
          value: "45+",
          subtitle: "Complete user journey",
          trend: "Onboarding to achievement",
        },
        {
          label: "Workout Types",
          value: "8",
          subtitle: "Supported modalities",
          trend: "Strength, cardio, yoga, HIIT",
        },
        {
          label: "Personalization",
          value: "AI-Driven",
          subtitle: "Adaptive algorithms",
          trend: "Continuous learning system",
        },
      ],
      testimonial: {
        quote:
          "The Shreddy redesign showcases exceptional understanding of fitness user psychology combined with sophisticated interaction design. The AI personalization framework is exactly what modern fitness apps need.",
        author: "Michael T.",
        role: "Fitness Industry Consultant",
        company: "FitTech Advisory",
      },
    },

    learnings: [
      "Personalization is the future of fitness apps. Generic programs create generic results. True AI adaptation based on individual context, progress, and feedback is essential for long-term user retention.",
      "Motivation requires multi-layered approach. Progress visualization, social accountability, achievement systems, and streak mechanics work together to maintain consistency through inevitable plateaus.",
      "Mobile fitness requires special consideration. Designs must work in diverse environments (gyms, homes, outdoors) with varying lighting, hand positioning, and attention capacity during physical exertion.",
      "Behavioral psychology drives retention. Understanding habit formation loops, motivation triggers, and psychological barriers allows designers to create experiences that genuinely change behavior rather than just track it.",
    ],
  },

  axiom: {
    title: "AXIOM",
    subtitle: "Climate-Responsive Architecture Website",
    year: "2026",
    role: "UI/UX Product Designer",
    duration: "1-Day Design Sprint",
    client: "Concept Project",
    behanceUrl:
      "https://www.behance.net/gallery/241425181/AXIOM-ResearchDriven-Architecture-Website-Concept",
    image: axiomImg,
    color: "#10B981",

    intro:
      "As the sole designer on this concept project, I designed AXIOM—a forward-thinking architecture firm website that prioritizes climate-responsive design and sustainability. This 1-day design sprint showcases my ability to rapidly conceptualize sophisticated digital experiences that communicate complex architectural philosophies through intuitive, modern interfaces. The project demonstrates strategic thinking around content hierarchy, immersive storytelling, and sustainable design principles.",

    challenge: {
      title: "The Challenge",
      content:
        "Modern architecture firms struggle to effectively communicate their design philosophy, sustainability credentials, and project complexity through digital channels. Traditional architecture websites often prioritize visual aesthetics over functionality, resulting in beautiful but shallow experiences that fail to educate potential clients or showcase the depth of thought behind each project. The challenge was to design a website that balances stunning visuals with deep content, making complex architectural concepts accessible while establishing credibility in climate-responsive design.",
      pain_points: [
        "Portfolio-first approach neglects educational content",
        "Static imagery fails to convey sustainability impact",
        "Complex architectural concepts poorly communicated",
        "Difficulty establishing thought leadership",
        "Limited demonstration of climate-focused methodology",
      ],
    },

    solution: {
      title: "The Solution",
      content:
        "I designed a research-driven website architecture that positions climate-responsive design as the core narrative thread. The interface uses layered storytelling—combining immersive visuals, data visualization, case studies, and educational content to demonstrate both the firm's design philosophy and measurable environmental impact. Every page reinforces the climate-first approach while maintaining visual sophistication that appeals to high-end clients seeking sustainable architecture solutions.",
      keyDecisions: [
        {
          title: "Climate-First Information Architecture",
          description:
            "Structured the entire site around sustainability metrics and climate impact rather than traditional project galleries. Created dedicated sections for methodology, environmental data, certifications, and impact measurements. This positions the firm as thought leaders in sustainable architecture while educating visitors about climate-responsive design principles.",
        },
        {
          title: "Data Visualization Integration",
          description:
            "Designed custom data visualizations showcasing carbon reduction, energy efficiency, material sustainability, and environmental impact across projects. Used interactive charts, comparison tools, and real-time metrics to make abstract sustainability concepts tangible and measurable. This builds credibility through transparency and quantifiable results.",
        },
        {
          title: "Immersive Storytelling System",
          description:
            "Created a layered content experience combining hero imagery, scrolling animations, progressive disclosure, and contextual information. Projects are presented as narratives—showing design evolution, climate considerations, material choices, and long-term environmental impact. This approach educates while engaging, turning portfolio browsing into an educational journey.",
        },
        {
          title: "Modern Minimalist Aesthetic",
          description:
            "Developed a sophisticated visual language with bold typography, generous whitespace, monochromatic palette, and strategic use of imagery. The design reflects architectural precision while creating a premium, timeless aesthetic that appeals to discerning clients. Clean layouts ensure complex information remains accessible and digestible.",
        },
      ],
    },

    process: [
      {
        icon: Users,
        title: "Competitive Analysis",
        description:
          "Analyzed 20+ leading architecture firm websites identifying gaps in climate communication, content depth, and user engagement. Studied successful sustainability-focused brands across industries. Identified opportunities to differentiate through educational content and transparent impact metrics.",
      },
      {
        icon: Target,
        title: "Content Strategy",
        description:
          "Mapped comprehensive content architecture prioritizing climate methodology, project narratives, impact data, and thought leadership. Created hierarchical information structure supporting both quick browsing and deep exploration. Designed content types for different audience segments—from prospective clients to architecture students.",
      },
      {
        icon: Lightbulb,
        title: "Interface Design",
        description:
          "Crafted high-fidelity mockups for desktop and mobile showcasing homepage, project pages, methodology section, and contact flows. Designed custom components for data visualization, image galleries, and interactive elements. Established design system with typography, spacing, colors, and reusable patterns.",
      },
      {
        icon: TrendingUp,
        title: "Concept Validation",
        description:
          "Created realistic prototypes demonstrating core interactions, scroll behaviors, and responsive adaptations. Presented concept to architecture professionals and potential target users gathering qualitative feedback. Validated that the climate-first approach resonates with environmentally conscious clients while maintaining premium positioning.",
      },
    ],

    impact: {
      title: "Design Impact & Vision",
      description:
        "This concept project demonstrates strategic product thinking and rapid execution capabilities essential for senior design roles. By completing a sophisticated, multi-page website concept in a single day, I showcased efficiency, strategic thinking, and the ability to synthesize complex requirements into cohesive design solutions. The climate-responsive focus addresses growing market demand for sustainable architecture while differentiating from competitor firms.",
      metrics: [
        {
          label: "Design Sprint",
          value: "1 Day",
          subtitle: "Concept to completion",
          trend: "Solo end-to-end execution",
        },
        {
          label: "Screens Designed",
          value: "6",
          subtitle: "Desktop & mobile responsive",
          trend: "Homepage, projects, about, contact",
        },
        {
          label: "Component Library",
          value: "25+",
          subtitle: "Reusable UI elements",
          trend: "Scalable design system",
        },
        {
          label: "Portfolio Impact",
          value: "High",
          subtitle: "Demonstrates versatility",
          trend: "Architecture + sustainability UX",
        },
      ],
      testimonial: {
        quote: "Honestly it was a fun challenge.",
        author: "Ayoub B.",
      },
    },

    learnings: [
      "Time constraints drive focused decision-making. The 1-day sprint forced prioritization of high-impact design decisions, demonstrating efficiency without compromising quality.",
      "Sustainability is a competitive differentiator. Positioning climate-responsive design as the core narrative creates clear differentiation in the architecture market.",
      "Education builds trust. Complex industries like architecture benefit from content-rich experiences that educate prospects while showcasing expertise.",
      "Concept work demonstrates strategic thinking. Portfolio projects reveal how designers approach problems, prioritize features, and execute vision—critical indicators of senior-level capability.",
    ],
  },

  "sea-games": {
    title: "SEA GAMES 33 - 2025 EDITION",
    subtitle: "Southeast Asian Games Official Tournament Website",
    year: "2026",
    role: "UI/UX Product Designer",
    duration: "24-36 hours",
    client: "Assessment for Crescent Solutions Services",
    behanceUrl:
      "https://www.behance.net/gallery/245722819/SEA-GAMES-33-CASE-STUDY",
    image: seaGamesImg,
    color: "#DC2626",

    intro:
      "Creating a dynamic platform for SEA GAMES 33 that captures the excitement of sports while providing seamless access to fixtures, tournament coverage, and real-time updates.",

    challenge: {
      title: "Design Goals",
      content:
        "The project aimed to create an immersive digital experience that reflects the energy of competitive sports while ensuring intuitive navigation for diverse audiences.",
      pain_points: [
        "Create an immersive visual experience that reflects the energy of competitive sports",
        "Ensure intuitive navigation for diverse audiences",
        "Highlight upcoming fixtures with clear, accessible design",
        "Maintain brand consistency across all touchpoints",
      ],
    },

    solution: {
      title: "The Approach",
      content:
        "The design centers on bold typography, dramatic sports photography, and a premium dark aesthetic. A prominent fixtures ticker provides at-a-glance tournament information, while modular content sections organize fixtures and coverage for easy navigation.",
      keyDecisions: [
        {
          title: "Hero Section",
          description:
            "Full-screen hero featuring dramatic sports photography with the bold headline 'GLORY AWAITS THE CHAMPIONS' and supporting tagline 'BY MACHINE, NOT GUESSWORK. BRINGING ZERO TO ONE. TIME AFTER TIME.'",
        },
        {
          title: "Fixtures Display",
          description:
            "Prominent horizontal ticker displaying upcoming fixtures with team names, dates, and times. The golden background makes it instantly recognizable and provides at-a-glance tournament information.",
        },
        {
          title: "Visual Identity",
          description:
            "Deep navy backgrounds with white typography create a sophisticated, premium feel. The dark theme allows sports photography to pop dramatically while red accents add energy.",
        },
        {
          title: "Content Organization",
          description:
            "Clear sections for Upcoming Fixtures and Tournament Coverage, each with dedicated space and visual hierarchy for easy information access.",
        },
      ],
    },

    process: [
      {
        icon: Users,
        title: "User Research & Analysis",
        description:
          "Analyzed existing sports tournament websites, studied user behavior patterns for sports fans, and identified key information requirements. Developed user personas for different audience segments.",
      },
      {
        icon: Target,
        title: "Information Architecture",
        description:
          "Created a clear content hierarchy prioritizing fixtures and tournament coverage. Designed navigation structure that accommodates multiple sports, teams, and event types.",
      },
      {
        icon: Lightbulb,
        title: "Visual Design System",
        description:
          "Developed a bold visual language with dramatic photography, oversized typography, and a premium dark color scheme. Created reusable component systems for consistency.",
      },
      {
        icon: TrendingUp,
        title: "High-Fidelity Prototyping",
        description:
          "Built interactive prototypes showcasing the hero experience, fixtures browsing, and content consumption flows. Designed responsive layouts for desktop and mobile.",
      },
    ],

    impact: {
      title: "The Outcome",
      description:
        "A bold, engaging landing page that balances emotional storytelling with functional tournament information. Delivered within the 3-day assessment timeframe, completing the design in just 24-36 hours.",
      metrics: [
        {
          label: "Timeline",
          value: "24-36h",
          subtitle: "Out of 3 days given",
          trend: "Fast turnaround",
        },
        {
          label: "Screens",
          value: "1",
          subtitle: "Landing page",
          trend: "Assessment deliverable",
        },
        {
          label: "Components",
          value: "12",
          subtitle: "Reusable UI elements",
          trend: "Scalable design system",
        },
        {
          label: "Design System",
          value: "Complete",
          subtitle: "Typography & colors",
          trend: "Brand consistency",
        },
      ],
    },

    learnings: [
      "Bold, aspirational design captures competitive sports energy while maintaining functional clarity for tournament information.",
      "Real-time fixtures need prominent, persistent placement to serve users seeking quick tournament updates.",
      "Premium dark aesthetics elevate sports brands and make photography more impactful than light layouts.",
      "Modular design systems enable scalability across multiple sports and event types while maintaining consistency.",
    ],
  },

  neosys: {
    title: "Neosys",
    subtitle: "Enterprise System Revamp",
    year: "2026",
    role: "UI/UX Product Designer",
    duration: "2 months",
    client: "Neosys Technologies",
    behanceUrl: "",
    image: neosysImg,
    color: "#DC2626",

    intro:
      "As Product Designer for Neosys, I led the complete redesign of their enterprise platform, focusing on improving user workflows, modernizing the interface, and creating a cohesive design system that would scale across the entire product ecosystem.",

    challenge: {
      title: "The Challenge",
      content:
        "Neosys needed to modernize their legacy enterprise system to meet current user expectations while maintaining business continuity and supporting complex workflows that power their operations.",
      pain_points: [
        "Outdated interface affecting user productivity",
        "Inconsistent design patterns across modules",
        "Complex workflows requiring simplification",
        "Need for scalable design system",
        "Balance modernization with user familiarity",
      ],
    },

    solution: {
      title: "The Solution",
      content:
        "I designed a comprehensive redesign that modernized the visual interface while improving information architecture and workflow efficiency. The new design system ensures consistency across all modules while making the platform more intuitive and efficient for daily use.",
      keyDecisions: [
        {
          title: "Modern Interface Design",
          description:
            "Created a clean, contemporary interface with improved visual hierarchy, better use of whitespace, and a refined color palette that reduces cognitive load while maintaining professional credibility.",
        },
        {
          title: "Workflow Optimization",
          description:
            "Restructured complex workflows to reduce steps and improve task completion rates. Implemented smart defaults and contextual actions to streamline common operations.",
        },
        {
          title: "Scalable Design System",
          description:
            "Built a comprehensive design system with reusable components, clear documentation, and flexible patterns that support future feature development and maintain consistency.",
        },
        {
          title: "User-Centered Approach",
          description:
            "Balanced innovation with familiarity by conducting user research, testing prototypes with actual users, and implementing changes incrementally to ensure smooth adoption.",
        },
      ],
    },

    process: [
      {
        icon: Users,
        title: "Discovery & Research",
        description:
          "Conducted stakeholder interviews, user research, and competitive analysis to understand pain points and opportunities. Mapped existing workflows and identified areas for improvement.",
      },
      {
        icon: Target,
        title: "Information Architecture",
        description:
          "Reorganized content structure and navigation to improve findability and reduce complexity. Created user flows for key tasks and optimized common workflows.",
      },
      {
        icon: Lightbulb,
        title: "Visual Design & System",
        description:
          "Developed modern visual language with comprehensive design system. Created high-fidelity prototypes demonstrating the new interface and interaction patterns.",
      },
      {
        icon: TrendingUp,
        title: "Testing & Iteration",
        description:
          "Conducted usability testing with end users, gathered feedback, and iterated on designs to ensure the solution met real-world needs and improved upon the existing system.",
      },
    ],

    impact: {
      title: "Impact & Results",
      description:
        "The redesigned platform significantly improved user experience and operational efficiency while providing a solid foundation for future product development.",
      metrics: [
        {
          label: "Duration",
          value: "2 Months",
          subtitle: "Product design engagement",
          trend: "Complete redesign delivered",
        },
        {
          label: "Design System",
          value: "Complete",
          subtitle: "Scalable component library",
          trend: "Future-ready foundation",
        },
        {
          label: "Modules",
          value: "Multiple",
          subtitle: "Enterprise platform coverage",
          trend: "Consistent experience",
        },
        {
          label: "Stakeholder",
          value: "Approved",
          subtitle: "Design direction",
          trend: "Ready for development",
        },
      ],
    },

    learnings: [
      "Enterprise redesigns require balancing innovation with user familiarity to ensure smooth adoption.",
      "Comprehensive design systems are essential for maintaining consistency across complex platforms.",
      "User research and testing are critical for validating design decisions in enterprise contexts.",
      "Incremental rollouts help users adapt to significant interface changes while maintaining productivity.",
    ],
  },
};

export function CaseStudy({ projectId }: CaseStudyProps) {
  const study =
    caseStudies[projectId as keyof typeof caseStudies];

  if (!study) return null;

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-20">
      <article className="max-w-[1000px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-white/70 text-sm tracking-wide mb-6">
            Case Study
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white tracking-tight mb-4">
            {study.title}
          </h1>
          <p className="text-2xl text-white/60 tracking-tight mb-12">
            {study.subtitle}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 mb-8 border-y border-white/10">
            <div>
              <p className="text-xs text-white/30 mb-2 tracking-widest uppercase">
                Role
              </p>
              <p className="text-white/80">{study.role}</p>
            </div>
            <div>
              <p className="text-xs text-white/30 mb-2 tracking-widest uppercase">
                Year
              </p>
              <p className="text-white/80">{study.year}</p>
            </div>
            <div>
              <p className="text-xs text-white/30 mb-2 tracking-widest uppercase">
                Duration
              </p>
              <p className="text-white/80">{study.duration}</p>
            </div>
            <div>
              <p className="text-xs text-white/30 mb-2 tracking-widest uppercase">
                Client
              </p>
              <p className="text-white/80">{study.client}</p>
            </div>
          </div>

          <p className="text-lg text-white/70 leading-relaxed">
            {study.intro}
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24 rounded-2xl overflow-hidden"
        >
          <ImageWithFallback
            src={study.image}
            alt={study.title}
            className="w-full h-auto"
          />
        </motion.div>

        {/* Challenge */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl text-white tracking-tight mb-8">
            {study.challenge.title}
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-10">
            {study.challenge.content}
          </p>

          <div className="mb-10">
            <h3 className="text-xl text-white/80 mb-6">
              Key Pain Points
            </h3>
            <div className="space-y-3">
              {study.challenge.pain_points.map(
                (point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2.5 flex-shrink-0" />
                    <p className="text-white/60">{point}</p>
                  </div>
                ),
              )}
            </div>
          </div>
        </motion.section>

        {/* Solution */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl text-white tracking-tight mb-8">
            {study.solution.title}
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-10">
            {study.solution.content}
          </p>

          <div className="space-y-6">
            <h3 className="text-xl text-white/80 mb-6">
              Key Design Decisions
            </h3>
            {study.solution.keyDecisions.map(
              (decision, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="p-6 bg-white/5 border-l-4 rounded-lg relative"
                  style={{ borderColor: study.color }}
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2
                      className="w-6 h-6 flex-shrink-0 mt-1"
                      style={{ color: study.color }}
                    />
                    <div>
                      <h4 className="text-xl text-white mb-3">
                        {decision.title}
                      </h4>
                      <p className="text-white/60 leading-relaxed">
                        {decision.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </motion.section>

        {/* Process */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl text-white tracking-tight mb-12">
            Design Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {study.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-6 h-6 text-white/80" />
                </div>
                <h3 className="text-xl text-white mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Impact */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl text-white tracking-tight mb-8">
            {study.impact.title}
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-10">
            {study.impact.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {study.impact.metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 transition-all group"
              >
                <div className="text-4xl md:text-5xl text-white mb-3 tracking-tight group-hover:scale-105 transition-transform">
                  {metric.value}
                </div>
                <div className="text-sm text-white/60 mb-2">
                  {metric.label}
                </div>
                <div className="text-xs text-white/40 mb-3">
                  {metric.subtitle}
                </div>
                <div
                  className="pt-3 border-t border-white/10 text-sm"
                  style={{ color: study.color }}
                >
                  {metric.trend}
                </div>
              </motion.div>
            ))}
          </div>

{study.impact.testimonial && (
            <div
              className="p-8 bg-white/5 border-l-4 rounded-2xl"
              style={{ borderColor: study.color }}
            >
              <p className="text-xl text-white/70 italic leading-relaxed mb-6">
                "{study.impact.testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-white text-sm">
                    {study.impact.testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white">
                    {study.impact.testimonial.author}
                  </div>
                  <div className="text-sm text-white/50">
                    {study.impact.testimonial.role}
                  </div>
                  <div className="text-sm text-white/40">
                    {study.impact.testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.section>

        {/* Key Learnings */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl text-white tracking-tight mb-8">
            Key Learnings
          </h2>
          <div className="space-y-6">
            {study.learnings.map((learning, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="flex gap-4 p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all"
              >
                <span
                  className="text-2xl"
                  style={{ color: study.color }}
                >
                  {index + 1}
                </span>
                <p className="text-lg text-white/70 leading-relaxed flex-1">
                  {learning}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center py-12 border-t border-white/10"
        >
          <a
            href={study.behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black hover:bg-white/90 transition-all rounded-full group"
          >
            <span className="tracking-wide">
              View Full Project on Behance
            </span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </article>
    </div>
  );
}