import { ExternalLink, Code, Users, Zap } from 'lucide-react';

export function ProjectHighlight() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div 
            className="inline-block px-4 py-2 rounded-full mb-4"
            style={{ 
              backgroundColor: 'var(--accent-primary)',
              color: 'white'
            }}
          >
            <span className="text-sm font-medium font-['Roboto_Flex']">Featured Project</span>
          </div>
          <h2 
            className="text-3xl md:text-5xl font-['Fraunces'] font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            Crypto Design Student Project
          </h2>
          <p 
            className="text-xl max-w-4xl mx-auto font-['Roboto_Flex']"
            style={{ color: 'var(--text-secondary)' }}
          >
            A speculative design project where students created Bolivian cryptocurrency brands 
            during economic uncertainty, bridging traditional culture with blockchain technology.
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <div className="aspect-video rounded-lg overflow-hidden max-w-4xl mx-auto">
            <iframe
              src="https://www.youtube.com/embed/WD1bq2K42W0"
              title="Crypto Design Student Project"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-1 gap-12 mb-16">
          {/* Project Details */}
          <div>
            <h3 
              className="text-2xl font-['Fraunces'] font-semibold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              The Kusillx Consortium Challenge
            </h3>
            
            <div 
              className="p-6 rounded-lg mb-6"
              style={{ 
                backgroundColor: 'var(--bg-secondary)',
                borderLeft: '4px solid var(--accent-primary)'
              }}
            >
              <p 
                className="font-['Roboto_Flex'] italic text-lg leading-relaxed"
                style={{ color: 'var(--text-primary)' }}
              >
                "In a fictional future scenario, local currencies begin a devaluation process not unlike what Bolivia experienced in the 1980s. A digital consortium of citizens, investors, and hacktivists creates a Bolivian Stablecoin to protect common citizens from negative effects of devaluation."
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <Users className="w-8 h-8 mb-3" style={{ color: 'var(--accent-primary)' }} />
                <div>
                  <h4 
                    className="font-['Fraunces'] font-medium mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Student Challenge
                  </h4>
                  <p 
                    className="text-sm font-['Roboto_Flex']"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Ten emerging digital designers created visual identity proposals for the Bolivian cryptocurrency, addressing national identity amid regional diversity.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <Code className="w-8 h-8 mb-3" style={{ color: 'var(--accent-primary)' }} />
                <div>
                  <h4 
                    className="font-['Fraunces'] font-medium mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Technical Innovation
                  </h4>
                  <p 
                    className="text-sm font-['Roboto_Flex']"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Students learned "code-economy aware digital design" - optimizing SVG graphics to reduce blockchain deployment costs and gas fees.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <Zap className="w-8 h-8 mb-3" style={{ color: 'var(--accent-primary)' }} />
                <div>
                  <h4 
                    className="font-['Fraunces'] font-medium mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Real-World Context
                  </h4>
                  <p 
                    className="text-sm font-['Roboto_Flex']"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Taught during actual economic fluctuations in Bolivia, students witnessed cryptocurrency transition from perceived scam to viable financial solution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        {/* Learning Outcomes */}
        <div 
          className="p-8 rounded-lg"
          style={{ backgroundColor: 'var(--bg-secondary)' }}
        >
          <h3 
            className="text-2xl font-['Fraunces'] font-semibold mb-6 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            Key Learning Outcomes
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 
                className="font-['Fraunces'] font-medium mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
                Digital Branding
              </h4>
              <p 
                className="text-sm font-['Roboto_Flex']"
                style={{ color: 'var(--text-secondary)' }}
              >
                Students learned to create cohesive visual identities that represent national culture while addressing modern technological needs.
              </p>
            </div>

            <div className="text-center">
              <h4 
                className="font-['Fraunces'] font-medium mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
                Code-Economy Design
              </h4>
              <p 
                className="text-sm font-['Roboto_Flex']"
                style={{ color: 'var(--text-secondary)' }}
              >
                Understanding how design decisions impact technical implementation costs and blockchain deployment efficiency.
              </p>
            </div>

            <div className="text-center">
              <h4 
                className="font-['Fraunces'] font-medium mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
                Social Responsibility
              </h4>
              <p 
                className="text-sm font-['Roboto_Flex']"
                style={{ color: 'var(--text-secondary)' }}
              >
                Exploring the role of designers in addressing economic inequality and social challenges through technology.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="https://medium.com/@emauric.io/e7eac4d10a5b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1"
            style={{ 
              backgroundColor: 'var(--accent-primary)',
              color: 'white'
            }}
          >
            <span className="font-['Roboto_Flex'] font-medium">Read Full Case Study</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}