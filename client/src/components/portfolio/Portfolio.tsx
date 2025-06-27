import { Link } from 'react-router-dom';
import { Briefcase, Globe, Heart, Palette, Film, Users, Lightbulb, Award, Camera, Building, Utensils, Home } from 'lucide-react';

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
    projectId: "cleaning-concepts",
    title: "Cleaning Concepts",
    category: "Brand Identity",
    image: cleaningImage,
    icon: Home
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
  }
];

export function Portfolio() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-['Fraunces'] font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Selected Works
          </h2>
          <p 
            className="text-lg max-w-3xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            A collection of design projects spanning branding, digital interfaces, 
            and educational materials created over years of creative practice.
          </p>
        </div>

        {/* Portfolio Masonry Grid */}
        <div className="masonry-grid columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6">
          {portfolioItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.id}
                to={`/projects/${item.projectId}`}
                className="masonry-item group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 break-inside-avoid mb-6 block"
                style={{ 
                  backgroundColor: 'var(--bg-secondary)',
                  boxShadow: 'var(--shadow)'
                }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="w-4 h-4 text-white" />
                        <span className="text-xs font-medium text-white/80 font-['Roboto_Flex']">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-white font-['Fraunces'] font-semibold text-base leading-tight">
                        {item.title}
                      </h3>
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