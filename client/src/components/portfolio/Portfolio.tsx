import { Link } from 'wouter';
import { Briefcase, Globe, Heart, Palette, Film, Users, Lightbulb, Award, Camera, Building, Utensils, Home, ExternalLink, Tag, Settings } from 'lucide-react';
import { projectsData, getProjectLogo } from '../../pages/Projects';

// Import all portfolio images
import churchImage from '@assets/work--church_1750639835231.png';
import businessEnergyImage from '@assets/b6494416084587.562a5300002a5_1750639835231.jpg';
import worldnetImage from '@assets/worldnet-new-logo_1750639835232.png';
import cleaningImage from '@assets/cleaning-concets_1750639835232.png';
import somosImage from '@assets/Untitled-2_1750639835232.jpg';
import focusFestImage from '@assets/Screenshot-2025-01-29-at-1.03.48PM_1750639835233.png';
import finanzgruppeImage from '@assets/1604098117810_1750639835233.jpg';
import chiliFestImage from '@assets/chili_1750639835233.png';
import journeyMapImage from '@assets/Screenshot-2025-02-05-at-6.49.02PM_1750639835233.png';
import arteImage from '@assets/Untitled-5_1750639835233.jpg';
import prideImage from '@assets/Screenshot-2025-02-18-at-3.24.00PM_1750639835233.png';
import disasterCardsImage from '@assets/DISASTERCARDS_1750639835233.png';
import rateRaceImage from '@assets/ratrace-cover_1762790837005.png';
import futureAnalogImage from '@assets/future-analog-green_1762790846285.png';

interface PortfolioItem {
  id: number;
  projectId: string;
  title: string;
  category: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    projectId: "church-emergence",
    title: "Church of Emergence",
    category: "Branding & Identity",
    image: churchImage,
    icon: Heart
  },
  {
    id: 2,
    projectId: "business-energy",
    title: "Business Energy Checkup",
    category: "Corporate Design",
    image: businessEnergyImage,
    icon: Building
  },
  {
    id: 3,
    projectId: "worldnet-digital",
    title: "WorldNet Digital Services",
    category: "Logo Design",
    image: worldnetImage,
    icon: Globe
  },
  {
    id: 4,
    projectId: "rate-race",
    title: "3 Percent Rate Race",
    category: "Interactive Design",
    image: rateRaceImage,
    icon: Lightbulb
  },
  {
    id: 5,
    projectId: "somos-identity",
    title: "SOMOS Identity",
    category: "Cultural Design",
    image: somosImage,
    icon: Users
  },
  {
    id: 6,
    projectId: "focus-fest",
    title: "Focus Fest 2013",
    category: "Event Design",
    image: focusFestImage,
    icon: Film
  },
  {
    id: 7,
    projectId: "finanzgruppe",
    title: "Finanzgruppe Interface",
    category: "Digital Design",
    image: finanzgruppeImage,
    icon: Briefcase
  },
  {
    id: 8,
    projectId: "chili-fest",
    title: "Chili Fest 2009",
    category: "Event Branding",
    image: chiliFestImage,
    icon: Utensils
  },
  {
    id: 9,
    projectId: "crypto-design",
    title: "Student Journey Map",
    category: "UX Design",
    image: journeyMapImage,
    icon: Lightbulb
  },
  {
    id: 10,
    projectId: "arte-tecnologia",
    title: "Arte + Tecnología",
    category: "Educational Design",
    image: arteImage,
    icon: Palette
  },
  {
    id: 11,
    projectId: "pride-campaign",
    title: "Pride Campaign",
    category: "Social Impact",
    image: prideImage,
    icon: Heart
  },
  {
    id: 12,
    projectId: "disaster-cards",
    title: "Disaster Response Cards",
    category: "Information Design",
    image: disasterCardsImage,
    icon: Award
  },
  {
    id: 14,
    projectId: "fameli-bolivia",
    title: "FAMELI Group Bolivia",
    category: "Community Building",
    image: prideImage,
    icon: Heart
  },
  {
    id: 15,
    projectId: "future-analog-voices",
    title: "Future Analog Voices",
    category: "Product Design",
    image: futureAnalogImage,
    icon: Lightbulb
  }
];

interface PortfolioProps {
  id?: string;
}

export function Portfolio({ id }: PortfolioProps) {
  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-['Fraunces'] font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
            data-testid="text-portfolio-title"
          >
            Selected Works
          </h2>
          <p 
            className="text-lg max-w-3xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
            data-testid="text-portfolio-description"
          >
            A collection of design projects spanning branding, digital interfaces, 
            and educational materials created over years of creative practice.
          </p>
        </div>

        {/* View Selected Works Link */}
        <div className="text-center mb-12">
          <Link
            to="/selected-works"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 font-medium"
            style={{ 
              backgroundColor: 'var(--accent-primary)',
              color: 'white'
            }}
            data-testid="link-view-selected-works"
          >
            View Selected Works
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Portfolio Masonry Grid */}
        <div className="masonry-grid columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6">
          {portfolioItems.map((item) => {
            const IconComponent = item.icon;
            const projectData = projectsData.find(p => p.id === item.projectId);
            const firstTech = projectData?.technologies?.[0];
            return (
              <Link
                key={item.id}
                to={`/design/${item.projectId}`}
                className="masonry-item group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 break-inside-avoid mb-6 block"
                style={{ 
                  backgroundColor: 'var(--bg-secondary)',
                  boxShadow: 'var(--shadow)'
                }}
                data-testid={`link-portfolio-${item.projectId}`}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    data-testid={`img-portfolio-${item.projectId}`}
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent 
                          className="w-4 h-4 text-white" 
                          data-testid={`icon-portfolio-overlay-${item.projectId}`}
                        />
                        <span 
                          className="text-xs font-medium text-white/90 font-['Roboto_Flex']"
                          data-testid={`text-portfolio-overlay-category-${item.projectId}`}
                        >
                          {item.category}
                        </span>
                      </div>
                      <h3 
                        className="text-white font-['Fraunces'] font-semibold text-base leading-tight mb-3"
                        data-testid={`text-portfolio-overlay-title-${item.projectId}`}
                      >
                        {item.title}
                      </h3>
                      <div 
                        className="flex items-center gap-1 text-sm font-medium text-white"
                        data-testid={`text-portfolio-overlay-view-${item.projectId}`}
                      >
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-4">
                  <div className="flex items-center flex-wrap gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                      <span 
                        className="text-sm font-medium"
                        style={{ color: 'var(--accent-primary)' }}
                        data-testid={`text-portfolio-category-${item.projectId}`}
                      >
                        {item.category}
                      </span>
                    </div>
                    {firstTech && (
                      <div className="flex items-center gap-2">
                        <Settings className="w-3 h-3" style={{ color: 'var(--text-secondary)' }} />
                        <span 
                          className="text-xs font-medium"
                          style={{ color: 'var(--text-secondary)' }}
                          data-testid={`text-portfolio-tech-${item.projectId}`}
                        >
                          {firstTech}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <h3 
                    className="text-base font-['Fraunces'] font-semibold mb-4 line-clamp-2"
                    style={{ color: 'var(--text-primary)' }}
                    data-testid={`text-portfolio-title-${item.projectId}`}
                  >
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
                    <div 
                      className="px-2 py-1.5 rounded-lg"
                      style={{ 
                        boxShadow: 'inset 2px 2px 4px rgba(0, 0, 0, 0.08), inset -2px -2px 4px rgba(255, 255, 255, 0.05)'
                      }}
                    >
                      <img 
                        src={getProjectLogo(item.projectId)} 
                        alt="Organization Logo" 
                        className="h-1.5 md:h-9 lg:h-12 w-auto opacity-60"
                        data-testid={`img-portfolio-logo-${item.projectId}`}
                      />
                    </div>
                    <div 
                      className="flex items-center gap-1 text-xs font-medium" 
                      style={{ color: 'var(--accent-primary)' }}
                      data-testid={`text-portfolio-view-${item.projectId}`}
                    >
                      View
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        
      </div>
    </section>
  );
}
