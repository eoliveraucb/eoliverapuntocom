
import { useParams } from 'wouter';
import { Link } from 'wouter';
import { Header } from '../components/portfolio/Header';
import { ArrowLeft, ExternalLink, Calendar, User, Wrench } from 'lucide-react';
import { projectsData } from './Projects';

import rateRaceTitle from '@assets/ratrace-title_1762792515889.png';
import rateRaceTasks from '@assets/ratrace-tasks_1762792515888.png';
import rateRaceMotif from '@assets/ratrace-motif_1762792515889.png';
import rateRaceMarriage from '@assets/ratrace-marraige2_1762792515889.png';
import rateRaceSideBySide from '@assets/ratrace-sideside_1762792515889.jpg';
import rateRacePictures from '@assets/ratrace-pictures.jpb_1762792515889.png';
import templateCostas from '@assets/template-costas-large_1762792920403.jpeg';
import futureAnalogGreen from '@assets/future-analog-green_1762793065986.png';
import futureAnalog from '@assets/future-analog_1762793065989.jpeg';
import futureRace from '@assets/future-race_1762793065989.jpeg';
import futuresFirsts from '@assets/futures-firsts-large_1762793065990.jpeg';
import fameli1 from '@assets/fameli-1-large_1762794305679.jpeg';
import fameli2 from '@assets/fameli-2-large_1762794305680.jpeg';
import fameli3 from '@assets/fameli-3-large_1762794305680.jpeg';
import fameli4 from '@assets/fameli-4-large_1762794305680.jpeg';
import fameli5 from '@assets/fameli-5-large_1762794305681.jpeg';
import fameli6 from '@assets/fameli-6-large_1762794305681.jpeg';
import financeAll from '@assets/finance-all_1762842992294.png';
import financeFin2 from '@assets/FIN2_1762843650976.png';
import financeSimuladores from '@assets/SImuladores-Sparkassenstiftung-1_1762843666266.jpg';
import woca2 from '@assets/WOCA2_1762845460292.png';
import woca4 from '@assets/WOCA4_1762845460293.png';
import woca7 from '@assets/woca7_1762845460293.png';
import wocaVideo from '@assets/woca_1762846127912.mov';
import trjcMockup1 from '@assets/mockup+1_1762847734618.jpeg';
import trjcMockup3 from '@assets/Mockup+3_1762847734618.jpeg';
import trjcPinup from '@assets/branding+-+pin+up_1762847734619.jpeg';
import trjcProbes from '@assets/2024+Spring+COMM+Design+Final+Presentation+(1)_1762847734617.jpeg';
import trjcInterviews from '@assets/2024+Spring+COMM+Design+Final+Presentation_1762847734618.jpeg';
import trjcMoodboard from '@assets/截屏2025-01-03+下午10.22.49_1762847734619.jpeg';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 
              className="text-4xl font-['Fraunces'] font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Project Not Found
            </h1>
            <p 
              className="text-lg mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              The project you're looking for doesn't exist.
            </p>
            <Link
              to="/design"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1"
              style={{ 
                backgroundColor: 'var(--accent-primary)',
                color: 'white'
              }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Header />
      
      {/* Hero Section with Mobile Scroll Optimization */}
      <section className="pt-24 md:pt-12 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <Link
            to="/design"
            className="inline-flex items-center gap-2 mb-6 md:mb-8 text-sm font-medium transition-all duration-300 hover:transform hover:-translate-x-1"
            style={{ color: 'var(--accent-primary)' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          
          {/* Project Header */}
          <div className="mb-12">
            {project.featured && (
              <div className="mb-4">
                <span 
                  className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                  style={{ 
                    backgroundColor: 'var(--accent-primary)',
                    color: 'white'
                  }}
                >
                  Featured Project
                </span>
              </div>
            )}
            
            <h1 
              id="page-title"
              className="text-3xl md:text-5xl font-['Fraunces'] font-bold mb-4 scroll-mt-20"
              style={{ color: 'var(--text-primary)' }}
            >
              {project.title}
            </h1>
            
            <p 
              className="text-xl leading-relaxed mb-6 font-['Roboto_Flex']"
              style={{ color: 'var(--text-secondary)' }}
            >
              {project.description}
            </p>
            
            {/* Project Meta */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                <span style={{ color: 'var(--text-secondary)' }}>{project.year}</span>
              </div>
              
              {project.client && (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{project.client}</span>
                </div>
              )}
              
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                <span style={{ color: 'var(--text-secondary)' }}>{project.category}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-5xl mx-auto">
          <div 
            className="rounded-lg overflow-hidden"
            style={{ boxShadow: 'var(--shadow)' }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 
                className="text-3xl font-['Fraunces'] font-bold mb-6"
                style={{ color: 'var(--text-primary)' }}
              >
                Project Overview
              </h2>
              
              <div 
                className="prose prose-lg max-w-none"
                style={{ color: 'var(--text-secondary)' }}
              >
                <p className="text-lg leading-relaxed font-['Roboto_Flex']">
                  {project.fullDescription}
                </p>
              </div>
              
              {/* Special content for crypto project */}
              {project.id === 'crypto-design' && (
                <div className="mt-12">
                  <h3 
                    className="text-2xl font-['Fraunces'] font-semibold mb-6"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Project Video
                  </h3>
                  
                  <div className="aspect-video rounded-lg overflow-hidden mb-6">
                    <iframe
                      src="https://www.youtube.com/embed/WD1bq2K42W0"
                      title="Crypto Design Student Project"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  
                  <div 
                    className="p-6 rounded-lg border-l-4"
                    style={{ 
                      backgroundColor: 'var(--bg-secondary)',
                      borderLeftColor: 'var(--accent-primary)'
                    }}
                  >
                    <p 
                      className="text-lg italic leading-relaxed font-['Roboto_Flex']"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      "In a fictional future scenario, local currencies begin a devaluation process not unlike what Bolivia experienced in the 1980s. A digital consortium of citizens, investors, and hacktivists creates a Bolivian Stablecoin to protect common citizens from negative effects of devaluation."
                    </p>
                  </div>
                </div>
              )}

              {/* Special content for Church of Emergence project */}
              {project.id === 'church-emergence' && (
                <div className="mt-12">
                  <h3 
                    className="text-2xl font-['Fraunces'] font-semibold mb-6"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Project Components
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div 
                      className="p-6 rounded-lg"
                      style={{ backgroundColor: 'var(--bg-secondary)' }}
                    >
                      <h4 
                        className="text-xl font-['Fraunces'] font-semibold mb-4"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        Exploration Goals
                      </h4>
                      <ul 
                        className="space-y-2 font-['Roboto_Flex']"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <li>• <strong>Ethical Concerns:</strong> AI's increasing use in sensitive areas like criminal justice raises questions about bias, fairness, and accountability</li>
                        <li>• <strong>Cultural Impact:</strong> Just as televangelism has exploited vulnerable communities, AI-driven systems can perpetuate harm if left unchecked</li>
                        <li>• <strong>Social Reflection:</strong> In a world marked by war, climate change, and political instability, AI becomes a symbol of hope, fear, and control</li>
                      </ul>
                    </div>
                    
                    <div 
                      className="p-6 rounded-lg"
                      style={{ backgroundColor: 'var(--bg-secondary)' }}
                    >
                      <h4 
                        className="text-xl font-['Fraunces'] font-semibold mb-4"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        Project Elements
                      </h4>
                      <ul 
                        className="space-y-2 font-['Roboto_Flex']"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <li>• Street Interventions & Sunday Morning Worship series</li>
                        <li>• Multi-Faith Inclusion initiatives</li>
                        <li>• Mapping of Televangelist Churches with Financial Corruption Cases</li>
                        <li>• Social Media Interventions</li>
                        <li>• Speculative Rituals: AI-generated sermons and stories</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div 
                    className="p-6 rounded-lg border-l-4 mb-6"
                    style={{ 
                      backgroundColor: 'var(--bg-secondary)',
                      borderLeftColor: 'var(--accent-primary)'
                    }}
                  >
                    <h4 
                      className="text-lg font-['Fraunces'] font-semibold mb-3"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      "My God is a Bolivian Shoe-Shiner"
                    </h4>
                    <p 
                      className="text-lg leading-relaxed font-['Roboto_Flex']"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      A provocative narrative connecting AI worship to marginalized communities, inspired by the shoe-shiners of La Paz. This project invites thinkers, creators, and technologists to reflect on AI's role beyond code and algorithms, asking: How do we responsibly integrate AI into society without losing sight of human values?
                    </p>
                  </div>
                </div>
              )}

              {/* Special content for FAMELI project */}
              {project.id === 'fameli-bolivia' && (
                <div className="mt-12">
                  <h3 
                    className="text-2xl font-['Fraunces'] font-semibold mb-6"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Impact & Achievements
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div 
                      className="p-6 rounded-lg text-center"
                      style={{ backgroundColor: 'var(--bg-secondary)' }}
                    >
                      <div 
                        className="text-3xl font-bold mb-2"
                        style={{ color: 'var(--accent-primary)' }}
                      >
                        100+
                      </div>
                      <p 
                        className="text-sm font-medium"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        Active Members
                      </p>
                    </div>
                    
                    <div 
                      className="p-6 rounded-lg text-center"
                      style={{ backgroundColor: 'var(--bg-secondary)' }}
                    >
                      <div 
                        className="text-3xl font-bold mb-2"
                        style={{ color: 'var(--accent-primary)' }}
                      >
                        9
                      </div>
                      <p 
                        className="text-sm font-medium"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        Years Active
                      </p>
                    </div>
                    
                    <div 
                      className="p-6 rounded-lg text-center"
                      style={{ backgroundColor: 'var(--bg-secondary)' }}
                    >
                      <div 
                        className="text-3xl font-bold mb-2"
                        style={{ color: 'var(--accent-primary)' }}
                      >
                        1st
                      </div>
                      <p 
                        className="text-sm font-medium"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        Pride Participation in La Paz
                      </p>
                    </div>
                  </div>
                  
                  <div 
                    className="p-6 rounded-lg border-l-4 mb-6"
                    style={{ 
                      backgroundColor: 'var(--bg-secondary)',
                      borderLeftColor: 'var(--accent-primary)'
                    }}
                  >
                    <h4 
                      className="text-lg font-['Fraunces'] font-semibold mb-3"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      ¡Desde el Corazón! International Convention
                    </h4>
                    <p 
                      className="text-lg leading-relaxed font-['Roboto_Flex']"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      FAMELI hosted an international convention of families and allies of LGBTQ+ youth in La Paz, Bolivia, solidifying a network of support that transcends borders. This landmark event brought together parents, families, and allies from across Latin America to share experiences, resources, and build lasting connections in support of LGBTQ+ youth.
                    </p>
                  </div>
                  
                  <div 
                    className="p-6 rounded-lg"
                    style={{ backgroundColor: 'var(--bg-secondary)' }}
                  >
                    <h4 
                      className="text-xl font-['Fraunces'] font-semibold mb-4"
                      style={{ color: 'var(--text-primary)' }}
                    >
                    Historical Significance
                    </h4>
                    <p 
                      className="text-lg leading-relaxed font-['Roboto_Flex']"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      FAMELI made history as the first group to participate in the diversity march (pride) in La Paz, Bolivia, marking a significant milestone in the country's journey toward tolerance and diversity. This groundbreaking participation opened doors for greater LGBTQ+ visibility and acceptance in Bolivian society.
                    </p>
                  </div>
                  
                  <h3 
                    className="text-2xl font-['Fraunces'] font-semibold mb-6 mt-12"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Project Gallery
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="col-span-2 md:col-span-2 rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow)' }}>
                      <img
                        src={fameli6}
                        alt="FAMELI group at pride march with banner"
                        className="w-full h-full object-cover"
                        data-testid="img-fameli-6"
                      />
                    </div>
                    
                    <div className="rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow)' }}>
                      <img
                        src={fameli2}
                        alt="FAMELI logo and campaign message"
                        className="w-full h-full object-cover"
                        data-testid="img-fameli-2"
                      />
                    </div>
                    
                    <div className="rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow)' }}>
                      <img
                        src={fameli1}
                        alt="FAMELI supporters at community event"
                        className="w-full h-full object-cover"
                        data-testid="img-fameli-1"
                      />
                    </div>
                    
                    <div className="rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow)' }}>
                      <img
                        src={fameli3}
                        alt="FAMELI convention poster"
                        className="w-full h-full object-cover"
                        data-testid="img-fameli-3"
                      />
                    </div>
                    
                    <div className="rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow)' }}>
                      <img
                        src={fameli4}
                        alt="Parents showing support for LGBTQ+ children"
                        className="w-full h-full object-cover"
                        data-testid="img-fameli-4"
                      />
                    </div>
                    
                    <div className="col-span-2 md:col-span-1 rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow)' }}>
                      <img
                        src={fameli5}
                        alt="Family members holding support signs"
                        className="w-full h-full object-cover"
                        data-testid="img-fameli-5"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Special content for Financial Literacy Calculator project */}
              {project.id === 'finanzgruppe' && (
                <div className="mt-12">
                  <div 
                    className="p-6 rounded-lg mb-8"
                    style={{ backgroundColor: 'var(--bg-secondary)' }}
                  >
                    <h3 
                      className="text-2xl font-['Fraunces'] font-semibold mb-6"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Role & Approach
                    </h3>
                    
                    <ul 
                      className="space-y-4 font-['Roboto_Flex'] text-lg"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <li>• Led end-to-end <strong>UX/UI design</strong>, from research to high-fidelity prototype.</li>
                      <li>• Conducted <strong>contextual user research</strong> in La Paz using interviews, usability tests, and field observations to ensure cultural and linguistic relevance.</li>
                      <li>• Applied <strong>human-centered design</strong> and <strong>UX standards</strong> (including Nielsen heuristics, accessibility, and responsive principles) to make the interface intuitive for first-time financial-tool users.</li>
                      <li>• Created <strong>interactive calculator components</strong> showing real-world financial scenarios and future outcomes, supporting Sparkassenstiftung's "learn by doing" educational model.</li>
                      <li>• Collaborated on implementation guidelines and analytics touchpoints for monitoring adoption and usability.</li>
                    </ul>
                  </div>
                  
                  <div 
                    className="p-6 rounded-lg mb-8"
                    style={{ backgroundColor: 'var(--bg-secondary)' }}
                  >
                    <h3 
                      className="text-2xl font-['Fraunces'] font-semibold mb-6"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Impact
                    </h3>
                    
                    <p 
                      className="text-lg leading-relaxed font-['Roboto_Flex']"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      The product functions as a <strong>replicable model</strong> for financial-literacy tools in emerging markets—adaptable to other Latin American and Global South communities through scalable design systems, localization strategies, and user-validated UX frameworks.
                    </p>
                  </div>
                  
                  <h3 
                    className="text-2xl font-['Fraunces'] font-semibold mb-6"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Project Gallery
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow)' }}>
                      <img
                        src={financeAll}
                        alt="Financial literacy calculator interface overview"
                        className="w-full h-auto"
                        data-testid="img-finance-all"
                      />
                    </div>
                    
                    <div className="rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow)' }}>
                      <img
                        src={financeFin2}
                        alt="Calculator interface with savings goals"
                        className="w-full h-auto"
                        data-testid="img-finance-fin2"
                      />
                    </div>
                    
                    <div className="md:col-span-2 rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow)' }}>
                      <img
                        src={financeSimuladores}
                        alt="Workshop participants using financial literacy tools"
                        className="w-full h-auto"
                        data-testid="img-finance-simuladores"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Special content for World of Color Awards project */}
              {project.id === 'world-of-color-awards' && (
                <div className="mt-12">
                  <div 
                    className="p-6 rounded-lg mb-8"
                    style={{ backgroundColor: 'var(--bg-secondary)' }}
                  >
                    <h3 
                      className="text-2xl font-['Fraunces'] font-semibold mb-6"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Role & Approach
                    </h3>
                    
                    <ul 
                      className="space-y-4 font-['Roboto_Flex'] text-lg"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <li>• Designed the complete brand visual identity, with emphasis on a modular logomark that visually communicates Vanceva's technical innovation—layering colored interlayers to create transparent, customizable effects for architectural spaces.</li>
                      <li>• Selected and refined a typographic ligature that evokes both craftsmanship and precision, reflecting the product's unique ability to combine multiple hues and transparencies.</li>
                      <li>• Developed consistent color palettes and graphic standards for both print and digital applications, ensuring cohesive brand expression in product literature, digital catalogs, and architectural presentations.</li>
                      <li>• Created visual guidelines establishing proper use of the logomark and supporting graphic elements across collateral, sample kits, environmental graphics, and online tools.</li>
                    </ul>
                    
                    <p 
                      className="mt-6 text-lg leading-relaxed font-['Roboto_Flex']"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      The resulting identity defines Vanceva's brand in global architectural markets, leveraging visual cues of transparency, color layering, and architectural modularity.
                    </p>
                  </div>
                  
                  <h3 
                    className="text-2xl font-['Fraunces'] font-semibold mb-6"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Project Gallery
                  </h3>
                  
                  <div className="space-y-6 mb-8">
                    <div className="rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow)' }}>
                      <img
                        src={woca2}
                        alt="World of Color Awards branding on architectural glass installations"
                        className="w-full h-auto"
                        data-testid="img-woca-2"
                      />
                    </div>
                    
                    <div className="rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow)' }}>
                      <img
                        src={woca4}
                        alt="World of Color Awards catalog showcasing winning projects"
                        className="w-full h-auto"
                        data-testid="img-woca-4"
                      />
                    </div>
                    
                    <div className="rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow)' }}>
                      <img
                        src={woca7}
                        alt="World of Color Awards printed materials and award trophy"
                        className="w-full h-auto"
                        data-testid="img-woca-7"
                      />
                    </div>
                    
                    <div className="rounded-lg overflow-hidden aspect-video" style={{ boxShadow: 'var(--shadow)' }}>
                      <video
                        src={wocaVideo}
                        controls
                        className="w-full h-full object-cover"
                        data-testid="video-woca"
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              )}

              {/* Special content for TRJC Branding project */}
              {project.id === 'trjc-branding' && (
                <div className="mt-12">
                  <div 
                    className="p-6 rounded-lg mb-8"
                    style={{ backgroundColor: 'var(--bg-secondary)' }}
                  >
                    <h3 
                      className="text-2xl font-['Fraunces'] font-semibold mb-6"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Role & Approach
                    </h3>
                    
                    <ul 
                      className="space-y-4 font-['Roboto_Flex'] text-lg"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <li>• Conducted user experience research through semi-structured interviews with six key stakeholders specializing in AI, social justice, national security, and technology surveillance.</li>
                      <li>• Facilitated focus groups using digital design probes to understand visual preferences and community needs around racial justice branding.</li>
                      <li>• Designed a comprehensive brand identity system including logo, typography (using the Bayard typeface inspired by the 1963 March on Washington), color palettes, and graphic standards.</li>
                      <li>• Created visual guidelines for consistent brand expression across print materials, digital catalogs, newsletters, and community engagement platforms.</li>
                      <li>• Developed accessible, human-centered designs that avoid clichéd imagery and emphasize real people and protest movements over abstract technology symbols.</li>
                    </ul>
                  </div>
                  
                  <div 
                    className="p-6 rounded-lg mb-8"
                    style={{ backgroundColor: 'var(--bg-secondary)' }}
                  >
                    <h3 
                      className="text-2xl font-['Fraunces'] font-semibold mb-6"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Research Insights
                    </h3>
                    
                    <p 
                      className="text-lg leading-relaxed font-['Roboto_Flex'] mb-4"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      The research revealed critical user needs for personalized content delivery, community connection tools, and simplified visuals using infographics. Stakeholders emphasized the importance of vibrant, human-centered designs that foster collaboration while avoiding overwhelming information, clichéd imagery, and cold technical aesthetics. The brand needed to feel emotionally resonant and distinctly valuable for advancing racial justice in the AI era.
                    </p>
                  </div>
                  
                  <h3 
                    className="text-2xl font-['Fraunces'] font-semibold mb-6"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Project Gallery
                  </h3>
                  
                  <div className="space-y-6 mb-8">
                    <div className="rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow)' }}>
                      <img
                        src={trjcMockup1}
                        alt="TRJC logo guide cover on teal background"
                        className="w-full h-auto"
                        data-testid="img-trjc-mockup1"
                      />
                    </div>
                    
                    <div className="rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow)' }}>
                      <img
                        src={trjcMockup3}
                        alt="TRJC business cards for Director with brand identity"
                        className="w-full h-auto"
                        data-testid="img-trjc-mockup3"
                      />
                    </div>
                    
                    <div className="rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow)' }}>
                      <img
                        src={trjcPinup}
                        alt="TRJC branding collage with Bayard typeface and civil rights imagery"
                        className="w-full h-auto"
                        data-testid="img-trjc-pinup"
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow)' }}>
                        <img
                          src={trjcProbes}
                          alt="Digital design probes showing community preferences for visual identity"
                          className="w-full h-auto"
                          data-testid="img-trjc-probes"
                        />
                      </div>
                      
                      <div className="rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow)' }}>
                        <img
                          src={trjcInterviews}
                          alt="Stakeholder interviews with racial justice organizations"
                          className="w-full h-auto"
                          data-testid="img-trjc-interviews"
                        />
                      </div>
                    </div>
                    
                    <div className="rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow)' }}>
                      <img
                        src={trjcMoodboard}
                        alt="Visual research moodboard exploring themes of justice and community"
                        className="w-full h-auto"
                        data-testid="img-trjc-moodboard"
                      />
                    </div>
                  </div>
                  
                  <div 
                    className="p-6 rounded-lg mb-8"
                    style={{ backgroundColor: 'var(--bg-secondary)' }}
                  >
                    <h3 
                      className="text-2xl font-['Fraunces'] font-semibold mb-6"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Project Credits
                    </h3>
                    
                    <div 
                      className="font-['Roboto_Flex'] text-lg space-y-4"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <div>
                        <p><strong>Terrance Pitts</strong> - Director</p>
                        <p><strong>Laneen Wells</strong> - Brand Design Consultant</p>
                      </div>
                      
                      <div>
                        <p className="mb-2"><strong>Team:</strong></p>
                        <p>Edwin M. Olivera, Jiayao Li, Aishwarya Srivastava, Xinyu Chen, Yisi Shen</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Special content for Rate Race project */}
              {project.id === 'rate-race' && (
                <div className="mt-12">
                  <h3 
                    className="text-2xl font-['Fraunces'] font-semibold mb-6"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Project Video
                  </h3>
                  
                  <div className="aspect-video rounded-lg overflow-hidden mb-12">
                    <iframe
                      src="https://www.youtube.com/embed/mpkrlWBh03E"
                      title="3 Percent Rate Race Game"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  <h3 
                    className="text-2xl font-['Fraunces'] font-semibold mb-6"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Game Overview
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div 
                      className="p-6 rounded-lg"
                      style={{ backgroundColor: 'var(--bg-secondary)' }}
                    >
                      <h4 
                        className="text-xl font-['Fraunces'] font-semibold mb-4"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        Gameplay Overview
                      </h4>
                      <ul 
                        className="space-y-2 font-['Roboto_Flex']"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <li>• Players take on the roles of immigrants navigating the U.S. immigration system</li>
                        <li>• Encounter challenges such as paperwork delays, interviews, and legal fees</li>
                        <li>• Random setbacks mirror real-life bureaucracy and uncertainty</li>
                        <li>• Ultimate goal: collect your Green Card by overcoming obstacles</li>
                        <li>• Game design makes success nearly impossible, reflecting harsh reality</li>
                      </ul>
                    </div>
                    
                    <div 
                      className="p-6 rounded-lg"
                      style={{ backgroundColor: 'var(--bg-secondary)' }}
                    >
                      <h4 
                        className="text-xl font-['Fraunces'] font-semibold mb-4"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        Key Features
                      </h4>
                      <ul 
                        className="space-y-2 font-['Roboto_Flex']"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <li>• <strong>Bureaucratic Complexity:</strong> Simulates real-world paperwork and waiting periods</li>
                        <li>• <strong>Stress and Uncertainty:</strong> Random event cards introduce setbacks or opportunities</li>
                        <li>• <strong>Educational Impact:</strong> Sparks conversation about immigration policy</li>
                        <li>• <strong>Social Awareness:</strong> Highlights the human side of migration</li>
                      </ul>
                    </div>
                  </div>

                  <h3 
                    className="text-2xl font-['Fraunces'] font-semibold mb-6"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Game Components & Design
                  </h3>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow)' }}>
                      <img
                        src={rateRaceTitle}
                        alt="Game Title Design"
                        className="w-full h-auto"
                      />
                      <div className="p-4" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                        <h5 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Game Title</h5>
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>The main title design and branding</p>
                      </div>
                    </div>
                    
                    <div className="rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow)' }}>
                      <img
                        src={rateRaceTasks}
                        alt="Game Tasks"
                        className="w-full h-auto"
                      />
                      <div className="p-4" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                        <h5 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Task Cards</h5>
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Immigration tasks and challenges players face</p>
                      </div>
                    </div>
                    
                    <div className="rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow)' }}>
                      <img
                        src={rateRaceMotif}
                        alt="Game Motif"
                        className="w-full h-auto"
                      />
                      <div className="p-4" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                        <h5 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Visual Motif</h5>
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Design patterns and visual elements</p>
                      </div>
                    </div>
                    
                    <div className="rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow)' }}>
                      <img
                        src={rateRaceMarriage}
                        alt="Marriage Card Design"
                        className="w-full h-auto"
                      />
                      <div className="p-4" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                        <h5 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Marriage Cards</h5>
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Special event cards related to marriage immigration</p>
                      </div>
                    </div>
                    
                    <div className="rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow)' }}>
                      <img
                        src={rateRaceSideBySide}
                        alt="Game Overview"
                        className="w-full h-auto"
                      />
                      <div className="p-4" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                        <h5 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Game Layout</h5>
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Side-by-side comparison of game components</p>
                      </div>
                    </div>
                    
                    <div className="rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow)' }}>
                      <img
                        src={rateRacePictures}
                        alt="Game Pictures"
                        className="w-full h-auto"
                      />
                      <div className="p-4" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                        <h5 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Photo Documentation</h5>
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Documentation of game in play</p>
                      </div>
                    </div>
                  </div>
                  
                  <div 
                    className="p-6 rounded-lg border-l-4 mb-6"
                    style={{ 
                      backgroundColor: 'var(--bg-secondary)',
                      borderLeftColor: 'var(--accent-primary)'
                    }}
                  >
                    <h4 
                      className="text-lg font-['Fraunces'] font-semibold mb-3"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Educational & Social Impact
                    </h4>
                    <p 
                      className="text-lg leading-relaxed font-['Roboto_Flex']"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      By turning a stressful journey into an interactive experience, 3% Rat Race sparks conversation about policy, perseverance, and the human side of migration. The game serves as both entertainment and education, helping players understand the complexities and emotional toll of the immigration process.
                    </p>
                  </div>
                </div>
              )}

              {/* Special content for Future Analog Voices project */}
              {project.id === 'future-analog-voices' && (
                <div className="mt-12">
                  <h3 
                    className="text-2xl font-['Fraunces'] font-semibold mb-6"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Project Visuals
                  </h3>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow)' }}>
                      <img
                        src={templateCostas}
                        alt="Template Costas"
                        className="w-full h-auto"
                      />
                      <div className="p-4" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                        <h5 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Visual Notes & Sketches</h5>
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Hand-drawn design explorations and concepts</p>
                      </div>
                    </div>
                    
                    <div className="rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow)' }}>
                      <img
                        src={futureAnalogGreen}
                        alt="Future Analog Green"
                        className="w-full h-auto"
                      />
                      <div className="p-4" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                        <h5 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Green Collage</h5>
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Creative strategy and media exploration</p>
                      </div>
                    </div>
                    
                    <div className="rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow)' }}>
                      <img
                        src={futureAnalog}
                        alt="Future Analog Cassettes"
                        className="w-full h-auto"
                      />
                      <div className="p-4" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                        <h5 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Analog Artifacts</h5>
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Physical prototypes and cassette designs</p>
                      </div>
                    </div>
                    
                    <div className="rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow)' }}>
                      <img
                        src={futureRace}
                        alt="Diversity & Inclusion"
                        className="w-full h-auto"
                      />
                      <div className="p-4" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                        <h5 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Diversity & Inclusion</h5>
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Social themes and equity exploration</p>
                      </div>
                    </div>
                    
                    <div className="rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow)' }}>
                      <img
                        src={futuresFirsts}
                        alt="Futures Firsts"
                        className="w-full h-auto"
                      />
                      <div className="p-4" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                        <h5 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Collage Exploration</h5>
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Mixed media and cultural synthesis</p>
                      </div>
                    </div>
                  </div>
                  
                  <div 
                    className="p-6 rounded-lg border-l-4 mb-6"
                    style={{ 
                      backgroundColor: 'var(--bg-secondary)',
                      borderLeftColor: 'var(--accent-primary)'
                    }}
                  >
                    <h4 
                      className="text-lg font-['Fraunces'] font-semibold mb-3"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Exhibition Details
                    </h4>
                    <ul 
                      className="space-y-2 font-['Roboto_Flex']"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <li>• <strong>Design Week NYC 2025</strong></li>
                      <li>• <strong>SVA Graduate Center Gallery 2025</strong></li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div 
                className="p-6 rounded-lg sticky top-8"
                style={{ backgroundColor: 'var(--bg-secondary)' }}
              >
                <h3 
                  className="text-xl font-['Fraunces'] font-semibold mb-6"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Project Details
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 
                      className="font-medium mb-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Year
                    </h4>
                    <p style={{ color: 'var(--text-secondary)' }}>{project.year}</p>
                  </div>
                  
                  <div>
                    <h4 
                      className="font-medium mb-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Category
                    </h4>
                    <p style={{ color: 'var(--text-secondary)' }}>{project.category}</p>
                  </div>
                  
                  {project.client && (
                    <div>
                      <h4 
                        className="font-medium mb-2"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        Client
                      </h4>
                      <p style={{ color: 'var(--text-secondary)' }}>{project.client}</p>
                    </div>
                  )}
                  
                  {project.technologies && (
                    <div>
                      <h4 
                        className="font-medium mb-2"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        Technologies & Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs rounded-full"
                            style={{ 
                              backgroundColor: 'var(--accent-primary)',
                              color: 'white'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {project.externalLink && (
                    <div className="pt-4">
                      <a
                        href={project.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 w-full justify-center px-4 py-3 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1"
                        style={{ 
                          backgroundColor: 'var(--accent-primary)',
                          color: 'white'
                        }}
                      >
                        <span className="font-medium">View Case Study</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section 
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: 'var(--bg-secondary)' }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 
            className="text-3xl font-['Fraunces'] font-bold mb-8 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            Related Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData
              .filter(p => p.id !== project.id && (p.category === project.category || p.featured))
              .slice(0, 3)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  to={`/design/${relatedProject.id}`}
                  className="group block"
                >
                  <div 
                    className="rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2"
                    style={{ 
                      backgroundColor: 'var(--bg-primary)',
                      boxShadow: 'var(--shadow)'
                    }}
                  >
                    <img
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    <div className="p-4">
                      <h3 
                        className="text-lg font-['Fraunces'] font-semibold mb-2"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {relatedProject.title}
                      </h3>
                      
                      <p 
                        className="text-sm"
                        style={{ color: 'var(--accent-primary)' }}
                      >
                        {relatedProject.category}
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
