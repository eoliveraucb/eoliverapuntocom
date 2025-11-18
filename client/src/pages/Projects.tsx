import { useState } from 'react';
import { Link } from 'wouter';
import { Header } from '../components/portfolio/Header';
import { Breadcrumb } from '../components/Breadcrumb';
import { ExternalLink, Calendar, Tag, ArrowLeft, Settings } from 'lucide-react';
import dsiLogo from '@assets/dsi_1763312718431.png';
import nyuLawLogo from '@assets/nyu-law_1763312718432.png';
import pgeLogo from '@assets/pge_1763312718432.png';
import ucbCatoLogo from '@assets/ucb-cato_1763312718432.png';
import ucbLogo from '../assets/ucb-logo.png';
import eastmanLogo from '@assets/eastman_1763312718432.png';
import germanCorpLogo from '@assets/german-corp_1763312718432.png';

// Import project images
import churchImage from '@assets/work--church_1750639835231.png';
import businessEnergyImage from '@assets/b6494416084587.562a5300002a5_1750639835231.jpg';
import worldnetImage from '@assets/worldnet-new-logo_1750639835232.png';
import cleaningImage from '@assets/cleaning-concets_1750639835232.png';
import focusFestImage from '@assets/Screenshot-2025-01-29-at-1.03.48PM_1750639835233.png';
import finanzgruppeImage from '@assets/finance-all_1762842992294.png';
import chiliFestImage from '@assets/chili_1750639835233.png';
import journeyMapImage from '@assets/Screenshot-2025-02-05-at-6.49.02PM_1750639835233.png';
import arteImage from '@assets/Untitled-5_1750639835233.jpg';
import artecnoImage from '@assets/artecno-2_1763435558472.png';

import rateRaceImage from '@assets/ratrace-cover_1762790837005.png';
import rateRaceCards from '@assets/ca9287cd-596c-42ef-aeaf-a806e1d175c5_1763417983959.jpg';
import rateRacePlaytest from '@assets/99b5b847-0d5a-49a3-9cb4-a1d56dab652c_1763417983959.jpg';
import futureAnalogImage from '@assets/future-analog-green_1762790846285.png';
import fameliImage from '@assets/fameli-2-large_1762794305680.jpeg';
import cryptografikImage from '@assets/cryptografik_1762842192091.jpeg';
import wocaImage from '@assets/WOCA2_1762845460292.png';
import trjcImage from '@assets/mockup+1_1762847734618.jpeg';

// Import MIAS app screenshots
import miasScreen1 from '@assets/0a52452c-ee66-40cb-9ad6-48ce4f487032_1763314559705.jpg';
import miasScreen2 from '@assets/0eca76e4-3bf4-48be-8a96-0d3e2dd2031e_1763314559705.jpg';
import miasScreen3 from '@assets/2626dd9e-a7e7-45b2-849d-187fa4cabaec_1763314559706.jpg';
import miasScreen4 from '@assets/45f02edf-e11b-4771-b389-ae0808ba777d_1763314559706.jpg';
import miasScreen5 from '@assets/5c79f027-de8e-4ea1-8e5f-bec315e1a081_1763314559705.jpg';

// Import MIAS logo and cover image
import miasCover from '@assets/Mias-main.png';
import ipasLogo from '@assets/ipas--logo_1763312718432.png';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  year: string;
  client?: string;
  technologies?: string[];
  externalLink?: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: 'crypto-design',
    title: 'Criptografik_ Design Student Project',
    category: 'Educational Design',
    description: 'A speculative design project where students created Bolivian cryptocurrency brands during economic uncertainty.',
    fullDescription: 'In a fictional future scenario, local currencies begin a devaluation process not unlike what Bolivia experienced in the 1980s. A digital consortium of citizens, investors, and hacktivists creates a Bolivian Stablecoin to protect common citizens from negative effects of devaluation. Ten emerging digital designers created visual identity proposals for the Bolivian cryptocurrency, addressing national identity amid regional diversity.',
    image: cryptografikImage,
    year: '2023',
    client: 'Universidad Privada de Santa Cruz',
    technologies: ['Speculative Design', 'Brand Identity', 'Blockchain', 'SVG Optimization'],
    externalLink: 'https://medium.com/@emauric.io/e7eac4d10a5b',
    featured: true
  },
  {
    id: 'church-emergence',
    title: 'Church of Emergence',
    category: 'Speculative Design',
    description: 'AI as Emergent Religion: A critical exploration of AI\'s mythologization in modern society.',
    fullDescription: 'A multidisciplinary speculative design project investigating how Artificial Intelligence is becoming a cultural phenomenon that resembles modern-day religions. This project examines AI\'s mythologization in a world fractured by trauma, misinformation, and rapid technological change. Through provocative narratives like "My God is a Bolivian Shoe-Shiner" and speculative rituals including AI-generated sermons, the project challenges our understanding of belief, technology, and power. The work includes street interventions, Sunday morning worship series, multi-faith inclusion initiatives, and social media interventions that critically engage with AI\'s ethical, social, and cultural implications in areas like criminal justice, cultural impact, and social reflection.',
    image: churchImage,
    year: '1990',
    client: 'Independent Research',
    technologies: ['Speculative Design', 'Social Commentary', 'Street Interventions', 'Critical Design', 'AI Ethics', 'Religious Studies'],
    featured: true
  },
  {
    id: 'business-energy',
    title: 'Business Energy Checkup',
    category: 'Branding & Visual Identity',
    description: 'Corporate identity and marketing materials for energy consulting services.',
    fullDescription: 'Created a professional corporate identity for Business Energy Checkup, focusing on sustainability and efficiency. The design emphasizes trust, expertise, and environmental responsibility through clean, modern aesthetics.',
    image: businessEnergyImage,
    year: '2021',
    client: 'Business Energy Checkup',
    technologies: ['Corporate Identity', 'Marketing Materials', 'Brand Guidelines'],
    featured: false
  },

  {
    id: 'cleaning-concepts',
    title: 'Cleaning Concepts',
    category: 'Branding & Visual Identity',
    description: 'Fresh brand identity for professional cleaning services.',
    fullDescription: 'Developed a clean, trustworthy brand identity for Cleaning Concepts that emphasizes professionalism and reliability. The design uses fresh colors and modern typography to differentiate from typical cleaning service branding.',
    image: cleaningImage,
    year: '2020',
    client: 'Cleaning Concepts',
    technologies: ['Brand Identity', 'Logo Design', 'Marketing Collateral'],
    featured: false
  },

  {
    id: 'finanzgruppe',
    title: 'Financial Literacy Calculator',
    category: 'Digital Design',
    description: 'Savings & Spending Calculator – UX/UI Design commissioned by Sparkassenstiftung für internationale Kooperation.',
    fullDescription: 'Developed in collaboration with Vulcan SRL (La Paz, Bolivia) and Planifica.bo, this sandbox project introduced a mobile-friendly financial calculator designed to help users in South America understand the long-term effects of savings and spending. The tool was part of the Sparkassenstiftung\'s international "Simulator" program and serves as a prototype for replication across other Global South contexts.',
    image: finanzgruppeImage,
    year: '2019',
    client: 'Sparkassenstiftung für internationale Kooperation',
    technologies: ['UI Design', 'UX Design', 'Financial Services', 'Web Design'],
    featured: true
  },
  {
    id: 'world-of-color-awards',
    title: 'World of Color Awards',
    category: 'Branding & Visual Identity',
    description: 'Branding and visual identity for Vanceva\'s architectural glass division.',
    fullDescription: 'Developed for Vanceva (Eastman) / Saflex and commissioned with Saint Louis\'s Schupp Company, this branding and visual identity initiative established a distinct, iconic presence for Vanceva\'s architectural glass division. At the project\'s core is a signature typographic ligature logomark, symbolizing the layered construction and transparent color effects achieved with Vanceva interlayers.',
    image: wocaImage,
    year: '2019',
    client: 'Vanceva / Saflex Eastman',
    technologies: ['Brand Identity', 'Logo Design', 'Typography', 'Graphic Standards'],
    featured: true
  },
  {
    id: 'trjc-branding',
    title: 'Technology & Racial Justice Collaborative',
    category: 'Branding & Visual Identity',
    description: 'Visual identity for Technology and Racial Justice Collaborative addressing AI-driven threats in criminal justice.',
    fullDescription: 'Developed in collaboration with NYU School of Law, this branding project created a cohesive visual identity for an online community platform addressing racial justice issues caused by AI in the criminal justice system. The project included comprehensive brand identity, logo design, and newsletter templates to strengthen stakeholder engagement and information sharing.',
    image: trjcImage,
    year: '2024',
    client: 'NYU School of Law',
    technologies: ['Brand Identity', 'UX Research', 'Visual Design', 'Community Engagement'],
    featured: true
  },

  {
    id: 'arte-tecnologia',
    title: 'Arte + Tecnología',
    category: 'Educational Design',
    description: 'Educational materials bridging art and technology.',
    fullDescription: 'Designed educational materials for Arte + Tecnología program, creating visual resources that make technology accessible through artistic expression. The design emphasizes creativity andinnovation in STEAM education.',
    image: arteImage,
    year: '2020',
    client: 'Educational Institution',
    technologies: ['Educational Design', 'STEAM', 'Print Materials', 'Digital Resources'],
    featured: false
  },

  {
    id: 'rate-race',
    title: '0.3% Rat Race',
    category: 'Game Design',
    description: 'An experiential tabletop game surfacing the absurdity and emotional wear of the U.S. Green Card process.',
    fullDescription: '0.3% Rat Race is an experiential tabletop game that surfaces the absurdity, unpredictability, and emotional wear of the U.S. Green Card process. Designed as a competitive RPG, the experience walks players through two immigration pathways—Employment and Marriage—using deliberately stressful mechanics: timed mini-games, arbitrary "government" rulings, evidence-gathering challenges, and tasks that replicate the waiting, mistakes, and inconsistencies inherent to the system. As players progress, they unfold a board that slowly reveals the U.S. flag, a visual metaphor for how "opportunity" is both deferred and tightly controlled. The emotional arc alternates between humor, frustration, and reflection, mirroring the contradictory nature of the real process. Developed within a Games for Social Impact course at SVA DSI, the game embraces speculative design and critical play, using discomfort as a tool. The mechanics reproduce systemic friction through randomized status cards, absurd tasks, verification mini-games, and scavenger hunts. Rather than offering escape, the game creates a temporary microcosm of a flawed system, prompting conversation and emotional resonance.',
    image: rateRaceImage,
    year: '2023',
    client: 'SVA DSI - Games for Social Impact',
    technologies: ['Game Design', 'Social Impact Design', 'Critical Play', 'Speculative Design', 'Immigration Policy', 'Interactive Storytelling'],
    externalLink: 'https://emolivera.cargo.site/3-percent-rate-race',
    featured: true
  },
  {
    id: 'fameli-bolivia',
    title: 'FAMELI Group Bolivia',
    category: 'Community Building',
    description: 'The first group of parents and friends supporting LGBTQ+ youth in Bolivia.',
    fullDescription: 'FAMELI is the first group of parents and friends in support of their LGBTQ+ youth in Bolivia, designed with the ethos of self-guidance and self-support to combat loneliness and isolation among parents. The group provides resources and compassionate guidance for families with diverse children. Over 9 years, FAMELI has grown to include 100+ members with international impact, becoming a significant force in Bolivia\'s LGBTQ+ rights movement. The group made history as the first to participate in the diversity march (pride) in La Paz, Bolivia, marking a milestone in tolerance and diversity. FAMELI hosted "¡Desde el Corazón!" (From the Heart!), an international convention of families and allies of LGBTQ+ youth in La Paz, Bolivia, solidifying a network of support across borders.',
    image: fameliImage,
    year: '2015-2024',
    client: 'FAMELI Bolivia',
    technologies: ['Community Organizing', 'LGBTQ+ Advocacy', 'International Relations', 'Event Management', 'Social Impact', 'Non-profit Leadership'],
    featured: true
  },
  {
    id: 'future-analog-voices',
    title: 'Future Analog Voices',
    category: 'Product Design',
    description: 'A graduate exploration into graphic language, prototyping physical artifacts and sound design.',
    fullDescription: 'Born from a graduate assignment on synthesis and facilitation, this exploration into a graphic language explored different expressions into prototyping physical artifacts and sound design. This graphic experiment proposes that in contemporary discussions about the future and innovation, analog and embodied expressions of technology transition from nostalgia to revaluation and sustainability. The work was exhibited at Design Week NYC 2025 and SVA Graduate Center Gallery 2025.',
    image: futureAnalogImage,
    year: '2025',
    client: 'SVA Graduate Studies',
    technologies: ['Product Design', 'Sound Design', 'Physical Prototyping', 'Graphic Language', 'Sustainability', 'Material Innovation'],
    externalLink: 'https://emolivera.cargo.site/edit/W2507643633',
    featured: true
  },
  {
    id: 'mias-reproductive-health',
    title: 'MIAS Reproductive Health App',
    category: 'Digital Health',
    description: 'A human-centered health tool designed for clinicians and patients across Latin America.',
    fullDescription: 'MIAS is a comprehensive reproductive health application providing evidence-based information in Spanish. The app empowers individuals with accurate medical protocols, symptom tracking, and legal framework guidance during critical healthcare decisions. Designed with accessibility and cultural sensitivity in mind, MIAS bridges the gap between medical knowledge and patient understanding across Latin American communities.',
    image: miasCover,
    year: '2024',
    client: 'Independent Project',
    technologies: ['Mobile App Design', 'UX/UI', 'Healthcare', 'Accessibility', 'Spanish Localization', 'Information Architecture'],
    featured: true
  },
  {
    id: 'artecno',
    title: 'ARTECNO',
    category: 'AI-Assisted Learning',
    description: 'An AI-powered platform for metacognitive leadership development.',
    fullDescription: 'ARTECNO is a cutting-edge AI-assisted learning platform designed to foster metacognitive leadership skills. It utilizes advanced artificial intelligence to provide personalized learning paths, real-time feedback, and adaptive challenges for leaders. The platform aims to enhance self-awareness, strategic thinking, and decision-making capabilities through a blend of AI-driven insights and expert-curated content.',
    image: artecnoImage,
    year: '2024',
    client: 'ARTECNO Initiative',
    technologies: ['AI', 'Machine Learning', 'EdTech', 'Leadership Development', 'Metacognition', 'Personalized Learning'],
    externalLink: 'https://example.com/artecno',
    featured: true
  }
];

// Logo mapping for each project
export const projectLogoMap: Record<string, string> = {
  'crypto-design': ucbCatoLogo, // Universidad Católica Boliviana logo
  'church-emergence': dsiLogo,
  'rate-race': dsiLogo,
  'future-analog-voices': dsiLogo,
  'business-energy': pgeLogo,
  'trjc-branding': nyuLawLogo,
  'world-of-color-awards': eastmanLogo,
  'finanzgruppe': germanCorpLogo,
  'mias-reproductive-health': ipasLogo, // IPAS Latinoamérica y el Caribe logo
  'artecno': dsiLogo, // Placeholder, assuming DSI logo for ARTECNO
};

// Helper function to get logo for a project
export const getProjectLogo = (projectId: string): string => {
  return projectLogoMap[projectId] || dsiLogo;
};

// MIAS app screenshots for carousel
export const miasScreenshots: string[] = [
  miasScreen1, // Misoprostol vaginal administration
  miasScreen2, // Mifepristona oral dosage
  miasScreen3, // Misoprostol sublingual administration
  miasScreen4, // Expected effects information
  miasScreen5, // Contraception options
];

// 0.3% Rat Race game images
export const rateRaceImages = {
  cards: rateRaceCards,
  playtest: rateRacePlaytest
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(projectsData.map(project => project.category)))];

  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  const featuredProjects = projectsData.filter(project => project.featured);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Header />

      {/* Breadcrumb Navigation */}
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb className="mb-4" />
        </div>
      </div>

      {/* Hero Section with Mobile Scroll Optimization */}
      <section className="pb-12 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 
            id="page-title"
            className="text-3xl md:text-6xl font-['Fraunces'] font-bold mb-4 md:mb-6 scroll-mt-20"
            style={{ color: 'var(--text-primary)' }}
            data-testid="text-projects-title"
          >
            Design Portfolio & Capabilities
          </h1>
          <p 
            className="text-xl max-w-3xl mx-auto font-['Roboto_Flex']"
            style={{ color: 'var(--text-secondary)' }}
            data-testid="text-projects-description"
          >
            Currently seeking opportunities in NYC. Over the years, I've gained experience working with clients both large and small, complemented by my hands-on teaching experience as an emerging technology design professor. I bring quick and proficient capabilities in creative ideation, prototyping, and research at the intersection of technology, creativity, and design.
          </p>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'text-white' 
                    : 'hover:transform hover:-translate-y-1'
                }`}
                style={{ 
                  backgroundColor: selectedCategory === category 
                    ? 'var(--accent-primary)' 
                    : 'var(--bg-secondary)',
                  color: selectedCategory === category 
                    ? 'white' 
                    : 'var(--text-secondary)'
                }}
                data-testid={`button-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/design/${project.id}`}
                className="group block"
                data-testid={`link-project-${project.id}`}
              >
                <div 
                  className="rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2"
                  style={{ 
                    backgroundColor: 'var(--bg-secondary)',
                    boxShadow: 'var(--shadow)'
                  }}
                  data-testid={`card-project-${project.id}`}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                      data-testid={`img-project-${project.id}`}
                    />
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span 
                          className="px-3 py-1 text-xs font-medium rounded-full"
                          style={{ 
                            backgroundColor: 'var(--accent-primary)',
                            color: 'white'
                          }}
                          data-testid={`badge-featured-${project.id}`}
                        >
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center flex-wrap gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        <Tag className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                        <span 
                          className="text-sm font-medium"
                          style={{ color: 'var(--accent-primary)' }}
                          data-testid={`text-category-${project.id}`}
                        >
                          {project.category}
                        </span>
                      </div>
                      {project.technologies && project.technologies[0] && (
                        <div className="flex items-center gap-2">
                          <Settings className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
                          <span 
                            className="text-sm font-medium"
                            style={{ color: 'var(--text-secondary)' }}
                            data-testid={`text-tech-${project.id}`}
                          >
                            {project.technologies[0]}
                          </span>
                        </div>
                      )}
                      <span 
                        className="text-sm font-medium ml-auto"
                        style={{ color: 'var(--text-secondary)' }}
                        data-testid={`text-year-${project.id}`}
                      >
                        {project.year}
                      </span>
                    </div>

                    <h3 
                      className="text-xl font-['Fraunces'] font-semibold mb-3"
                      style={{ color: 'var(--text-primary)' }}
                      data-testid={`text-title-${project.id}`}
                    >
                      {project.title}
                    </h3>

                    <p 
                      className="text-sm leading-relaxed mb-6"
                      style={{ color: 'var(--text-secondary)' }}
                      data-testid={`text-description-${project.id}`}
                    >
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                      <div 
                        className="px-3 py-2 rounded-lg"
                        style={{ 
                          boxShadow: 'inset 2px 2px 4px rgba(0, 0, 0, 0.08), inset -2px -2px 4px rgba(255, 255, 255, 0.05)'
                        }}
                      >
                        <img 
                          src={getProjectLogo(project.id)} 
                          alt="Organization Logo" 
                          className="h-8 md:h-16 lg:h-20 w-auto opacity-70"
                          data-testid={`img-logo-${project.id}`}
                        />
                      </div>
                      <div 
                        className="flex items-center gap-1 text-sm font-medium" 
                        style={{ color: 'var(--accent-primary)' }}
                        data-testid={`text-view-project-${project.id}`}
                      >
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}