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
            <span className="text-sm font-medium font-['Atlassian Sans Ext']">Featured Project</span>
          </div>
          <h2 
            className="text-3xl md:text-5xl font-['Fraunces'] font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            Crypto Design Student Project
          </h2>
          <p 
            className="text-xl max-w-4xl mx-auto font-['Atlassian Sans Ext']"
            style={{ color: 'var(--text-secondary)' }}
          >
            A speculative design project where students created Bolivian cryptocurrency brands 
            during economic uncertainty, bridging traditional culture with blockchain technology.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
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
                className="font-['Atlassian Sans Ext'] italic text-lg leading-relaxed"
                style={{ color: 'var(--text-primary)' }}
              >
                "In a fictional future scenario, local currencies begin a devaluation process not unlike what Bolivia experienced in the 1980s. A digital consortium of citizens, investors, and hacktivists creates a Bolivian Stablecoin to protect common citizens from negative effects of devaluation."
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 mt-1" style={{ color: 'var(--accent-primary)' }} />
                <div>
                  <h4 
                    className="font-['Fraunces'] font-medium mb-1"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Student Challenge
                  </h4>
                  <p 
                    className="text-sm font-['Atlassian Sans Ext']"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Ten emerging digital designers created visual identity proposals for the Bolivian cryptocurrency, addressing national identity amid regional diversity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Code className="w-5 h-5 mt-1" style={{ color: 'var(--accent-primary)' }} />
                <div>
                  <h4 
                    className="font-['Fraunces'] font-medium mb-1"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Technical Innovation
                  </h4>
                  <p 
                    className="text-sm font-['Atlassian Sans Ext']"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Students learned "code-economy aware digital design" - optimizing SVG graphics to reduce blockchain deployment costs and gas fees.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 mt-1" style={{ color: 'var(--accent-primary)' }} />
                <div>
                  <h4 
                    className="font-['Fraunces'] font-medium mb-1"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Real-World Context
                  </h4>
                  <p 
                    className="text-sm font-['Atlassian Sans Ext']"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Taught during actual economic fluctuations in Bolivia, students witnessed cryptocurrency transition from perceived scam to viable financial solution.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div 
              className="aspect-square rounded-lg p-8 flex items-center justify-center"
              style={{ 
                background: 'linear-gradient(135deg, var(--accent-primary), hsl(279.19deg 62.09% 43.44%))',
                color: 'white'
              }}
            >
              <div className="text-center">
                <div className="text-6xl mb-4">₿</div>
                <h4 className="text-2xl font-['Fraunces'] font-bold mb-2">KUSILLX</h4>
                <p className="font-['Atlassian Sans Ext'] opacity-90">Bolivian Cryptocurrency Consortium</p>
              </div>
            </div>
          </div>
        </div>

        {/* Student Work Highlights */}
        <div className="mb-16">
          <h3 
            className="text-2xl font-['Fraunces'] font-semibold mb-8 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            Notable Student Solutions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div 
              className="p-6 rounded-lg"
              style={{ 
                backgroundColor: 'var(--bg-secondary)',
                boxShadow: 'var(--shadow)'
              }}
            >
              <h4 
                className="text-xl font-['Fraunces'] font-semibold mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
                UYUNI Token
              </h4>
              <p 
                className="text-sm font-['Atlassian Sans Ext'] mb-4"
                style={{ color: 'var(--text-secondary)' }}
              >
                By Laura Pamela Torrico Morón. Captured the mirror-like effect of Bolivian Salt Plains as a metaphor for transitioning to a digital blockchain economy.
              </p>
              <div 
                className="text-xs px-3 py-1 rounded-full inline-block"
                style={{ 
                  backgroundColor: 'var(--accent-primary)',
                  color: 'white'
                }}
              >
                Cultural Symbolism
              </div>
            </div>

            <div 
              className="p-6 rounded-lg"
              style={{ 
                backgroundColor: 'var(--bg-secondary)',
                boxShadow: 'var(--shadow)'
              }}
            >
              <h4 
                className="text-xl font-['Fraunces'] font-semibold mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
                WallakeCoin
              </h4>
              <p 
                className="text-sm font-['Atlassian Sans Ext'] mb-4"
                style={{ color: 'var(--text-secondary)' }}
              >
                By Sharim Eivian Correa Cordova. Inspired by traditional fish stew, symbolizing resilience and resourcefulness—making the best out of challenging circumstances.
              </p>
              <div 
                className="text-xs px-3 py-1 rounded-full inline-block"
                style={{ 
                  backgroundColor: 'var(--accent-primary)',
                  color: 'white'
                }}
              >
                Adaptive Design
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
                className="text-sm font-['Atlassian Sans Ext']"
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
                className="text-sm font-['Atlassian Sans Ext']"
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
                className="text-sm font-['Atlassian Sans Ext']"
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
            <span className="font-['Atlassian Sans Ext'] font-medium">Read Full Case Study</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}