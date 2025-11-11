
import { useState } from 'react';
import { Link } from 'wouter';
import { Header } from '../components/portfolio/Header';
import { Breadcrumb } from '../components/Breadcrumb';
import { ExternalLink, Calendar, Tag, ArrowLeft } from 'lucide-react';

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
import disasterCardsImage from '@assets/DISASTERCARDS_1750639835233.png';
import rateRaceImage from '@assets/ratrace-cover_1762790837005.png';
import futureAnalogImage from '@assets/future-analog-green_1762790846285.png';
import fameliImage from '@assets/fameli-2-large_1762794305680.jpeg';
import cryptografikImage from '@assets/cryptografik_1762842192091.jpeg';

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
    category: 'Corporate Design',
    description: 'Corporate identity and marketing materials for energy consulting services.',
    fullDescription: 'Created a professional corporate identity for Business Energy Checkup, focusing on sustainability and efficiency. The design emphasizes trust, expertise, and environmental responsibility through clean, modern aesthetics.',
    image: businessEnergyImage,
    year: '2021',
    client: 'Business Energy Checkup',
    technologies: ['Corporate Identity', 'Marketing Materials', 'Brand Guidelines'],
    featured: false
  },
  {
    id: 'worldnet-digital',
    title: 'WorldNet Digital Services',
    category: 'Logo Design',
    description: 'Modern logo design for digital services company.',
    fullDescription: 'Designed a contemporary logo for WorldNet Digital Services that conveys global connectivity and digital innovation. The mark combines geometric precision with dynamic elements to represent the company\'s forward-thinking approach.',
    image: worldnetImage,
    year: '2021',
    client: 'WorldNet Digital Services',
    technologies: ['Logo Design', 'Vector Graphics', 'Brand Identity'],
    featured: false
  },
  {
    id: 'cleaning-concepts',
    title: 'Cleaning Concepts',
    category: 'Brand Identity',
    description: 'Fresh brand identity for professional cleaning services.',
    fullDescription: 'Developed a clean, trustworthy brand identity for Cleaning Concepts that emphasizes professionalism and reliability. The design uses fresh colors and modern typography to differentiate from typical cleaning service branding.',
    image: cleaningImage,
    year: '2020',
    client: 'Cleaning Concepts',
    technologies: ['Brand Identity', 'Logo Design', 'Marketing Collateral'],
    featured: false
  },
  {
    id: 'focus-fest',
    title: 'Focus Fest 2013',
    category: 'Event Design',
    description: 'Complete event branding and promotional materials.',
    fullDescription: 'Designed comprehensive event branding for Focus Fest 2013, including logo, promotional materials, signage, and digital assets. The design captures the energy and focus of the event through dynamic typography and bold visuals.',
    image: focusFestImage,
    year: '2013',
    client: 'Focus Fest',
    technologies: ['Event Branding', 'Print Design', 'Digital Design', 'Signage'],
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
    id: 'chili-fest',
    title: 'Chili Fest 2009',
    category: 'Event Branding',
    description: 'Spicy event branding for annual chili festival.',
    fullDescription: 'Created energetic branding for Chili Fest 2009, capturing the heat and excitement of the annual chili festival. The design uses bold colors and playful typography to reflect the festive atmosphere.',
    image: chiliFestImage,
    year: '2009',
    client: 'Chili Fest',
    technologies: ['Event Branding', 'Illustration', 'Print Design'],
    featured: false
  },
  {
    id: 'arte-tecnologia',
    title: 'Arte + Tecnología',
    category: 'Educational Design',
    description: 'Educational materials bridging art and technology.',
    fullDescription: 'Designed educational materials for Arte + Tecnología program, creating visual resources that make technology accessible through artistic expression. The design emphasizes creativity and innovation in STEAM education.',
    image: arteImage,
    year: '2020',
    client: 'Educational Institution',
    technologies: ['Educational Design', 'STEAM', 'Print Materials', 'Digital Resources'],
    featured: false
  },
  {
    id: 'disaster-cards',
    title: 'Disaster Response Cards',
    category: 'Information Design',
    description: 'Clear information design for emergency response procedures.',
    fullDescription: 'Designed clear, accessible information cards for disaster response procedures. The design prioritizes legibility and quick comprehension during emergency situations, using universal symbols and clear typography.',
    image: disasterCardsImage,
    year: '2021',
    client: 'Emergency Services',
    technologies: ['Information Design', 'Emergency Communication', 'Print Design', 'Iconography'],
    featured: false
  },
  {
    id: 'rate-race',
    title: '3 Percent Rate Race (RPG)',
    category: 'Game Design',
    description: 'A hybrid Role Playing Game depicting the complex process of obtaining a Green Card in the USA.',
    fullDescription: '3% Rat Race is a hybrid Role Playing Game that depicts the complex, stressful, and often bureaucratic process of obtaining a Green Card in the USA. Through playful mechanics and immersive storytelling, the game highlights the hurdles, paperwork, and emotional rollercoaster faced by immigrants on their path to permanent residency. Players take on the roles of immigrants navigating the U.S. immigration system, encountering challenges such as paperwork delays, interviews, legal fees, and random setbacks that mirror real-life bureaucracy and uncertainty. The ultimate goal is to collect your Green Card by overcoming obstacles and outlasting the "rat race" - though the game design makes this nearly impossible, reflecting the harsh reality many face. By turning a stressful journey into an interactive experience, it sparks conversation about policy, perseverance, and the human side of migration.',
    image: rateRaceImage,
    year: '2023',
    client: 'Independent Project',
    technologies: ['Game Design', 'Social Impact Design', 'Educational Design', 'Role Playing Games', 'Immigration Policy', 'Interactive Storytelling'],
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
  }
];

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
          >
            Projects
          </h1>
          <p 
            className="text-xl max-w-3xl mx-auto font-['Roboto_Flex']"
            style={{ color: 'var(--text-secondary)' }}
          >
            A comprehensive collection of design projects spanning branding, digital interfaces, 
            educational materials, and social impact initiatives.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl font-['Fraunces'] font-bold mb-8 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group block"
              >
                <div 
                  className="rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2"
                  style={{ 
                    backgroundColor: 'var(--bg-primary)',
                    boxShadow: 'var(--shadow)'
                  }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <span 
                        className="px-2 py-1 text-xs font-medium rounded-full"
                        style={{ 
                          backgroundColor: 'var(--accent-primary)',
                          color: 'white'
                        }}
                      >
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Tag className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                      <span 
                        className="text-sm font-medium"
                        style={{ color: 'var(--accent-primary)' }}
                      >
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 
                      className="text-xl font-['Fraunces'] font-semibold mb-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {project.title}
                    </h3>
                    
                    <p 
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span 
                        className="text-sm font-medium"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {project.year}
                      </span>
                      <div className="flex items-center gap-1 text-sm font-medium" style={{ color: 'var(--accent-primary)' }}>
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

      {/* All Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl font-['Fraunces'] font-bold mb-8 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            All Projects
          </h2>
          
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
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group block"
              >
                <div 
                  className="rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2"
                  style={{ 
                    backgroundColor: 'var(--bg-secondary)',
                    boxShadow: 'var(--shadow)'
                  }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {project.featured && (
                      <div className="absolute top-2 right-2">
                        <span 
                          className="px-2 py-1 text-xs font-medium rounded-full"
                          style={{ 
                            backgroundColor: 'var(--accent-primary)',
                            color: 'white'
                          }}
                        >
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-3 h-3" style={{ color: 'var(--text-secondary)' }} />
                      <span 
                        className="text-xs"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {project.year}
                      </span>
                    </div>
                    
                    <h3 
                      className="text-lg font-['Fraunces'] font-semibold mb-2 line-clamp-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {project.title}
                    </h3>
                    
                    <p 
                      className="text-xs mb-2"
                      style={{ color: 'var(--accent-primary)' }}
                    >
                      {project.category}
                    </p>
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
