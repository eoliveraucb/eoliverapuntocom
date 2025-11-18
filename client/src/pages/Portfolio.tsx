import { Header } from "../components/portfolio/Header";
import { Hero } from "../components/portfolio/Hero";
import { About } from "../components/portfolio/About";
import { Portfolio as PortfolioGallery } from "../components/portfolio/Portfolio";
import { ProjectHighlight } from "../components/portfolio/ProjectHighlight";
import { Courses } from "../components/portfolio/Courses";
import { Contact } from "../components/portfolio/Contact";


function AreasOfFocus() {
  const focusAreas = [
    {
      title: "Hands-on Learning",
      description: "Creating hands-on, cross-disciplinary learning experiences that engage multiple senses and encourage active participation across diverse fields of study.",
      keywords: ["hands-on", "cross-disciplinary"]
    },
    {
      title: "Analog & Digital Integration", 
      description: "Integrating analog and digital approaches for skill-building, combining traditional methods with modern technology to create comprehensive learning pathways.",
      keywords: ["analog", "digital"]
    },
    {
      title: "Peer Mentorship",
      description: "Supporting peer mentorship and community-led education initiatives that foster collaborative learning and knowledge sharing among participants.",
      keywords: ["peer mentorship", "community-led"]
    },
    {
      title: "Cultural Knowledge Bridge",
      description: "Bridging cultural knowledge with new technology, including AI, to preserve traditional wisdom while embracing innovative solutions for modern challenges.",
      keywords: ["cultural knowledge", "AI"]
    }
  ];

  return (
    <section 
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-['Fraunces'] font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Areas of Focus
          </h2>
          
          <p 
            className="text-lg max-w-3xl mx-auto font-['Roboto_Flex']"
            style={{ color: 'var(--text-secondary)' }}
          >
            Key areas where design education intersects with social innovation, technology, and community building.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {focusAreas.map((area, index) => (
            <div 
              key={index}
              className="rounded-2xl p-8 transition-all duration-300 hover:transform hover:-translate-y-1"
              style={{ 
                backgroundColor: 'var(--bg-secondary)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
              }}
            >
              <h3 
                className="text-2xl font-['Fraunces'] font-bold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                {area.title}
              </h3>
              <p 
                className="text-base leading-relaxed font-['Roboto_Flex']"
                style={{ color: 'var(--text-secondary)' }}
              >
                {area.description.split(/\b(hands-on|cross-disciplinary|analog|digital|peer mentorship|community-led|cultural knowledge|AI)\b/gi).map((part, i) => 
                  area.keywords.some(keyword => keyword.toLowerCase() === part.toLowerCase()) ? (
                    <span 
                      key={i}
                      className="font-semibold"
                      style={{ 
                        color: 'var(--accent-primary)'
                      }}
                    >
                      {part}
                    </span>
                  ) : part
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <AreasOfFocus />
        <Courses id="projects" />
        <ProjectHighlight />
        <Contact id="contact" />
      </main>
    </div>
  );
}
