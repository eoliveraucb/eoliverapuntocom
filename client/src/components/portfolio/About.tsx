import { useEffect, useState, useRef } from "react";
import profileImage from "@assets/profile-pic_1750628627934.png";

interface Skill {
  name: string;
  percentage: number;
}

const skills: Skill[] = [
  { name: "Typography Design", percentage: 95 },
  { name: "Digital Education", percentage: 90 },
  { name: "User Experience", percentage: 85 },
  { name: "Brand Identity", percentage: 88 },
  { name: "Motion Graphics", percentage: 80 },
  { name: "Research & Analysis", percentage: 92 },
];

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [skillsAnimated, setSkillsAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setTimeout(() => setSkillsAnimated(true), 500);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section theme-transition"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div 
            className={`about-image order-2 md:order-1 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={profileImage} 
                alt="Edwin Olivera - Digital Design Professor"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* About Content */}
          <div 
            className={`about-content order-1 md:order-2 transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <h2 className="mb-6 font-['Fraunces']" style={{ color: 'var(--text-primary)' }}>
              About Me
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="font-['Atlassian_Sans_Ext']" style={{ color: 'var(--text-secondary)' }}>
                I am a designer, educator, and recent graduate of the MFA program in Design for Social Innovation 
                at the School of Visual Arts in New York. My work explores how design can be leveraged as a tool 
                for social transformation—particularly within education systems that serve marginalized and 
                underrepresented communities.
              </p>
              
              <p className="font-['Atlassian_Sans_Ext']" style={{ color: 'var(--text-secondary)' }}>
                Drawing from over 15 years of creative experience across disciplines, I develop hands-on, 
                innovative learning experiences that merge technology, culture, and community engagement. 
                My practice emphasizes collaboration, peer mentorship, and the integration of analog and 
                digital approaches to help learners build skills that are adaptable, resilient, and future-focused.
              </p>
              
              <p className="font-['Atlassian_Sans_Ext']" style={{ color: 'var(--text-secondary)' }}>
                Much of my recent work centers on making emerging technologies—including AI—accessible and 
                meaningful for students and educators in Latin America. I believe in the power of co-creation 
                and aim to design educational models that empower learners to shape their own futures, while 
                staying grounded in cultural knowledge and social context.
              </p>
            </div>

            {/* Areas of Focus */}
            <div className="mt-8">
              <h3 
                className="text-xl font-['Fraunces'] font-semibold mb-6"
                style={{ color: 'var(--text-primary)' }}
              >
                Areas of Focus
              </h3>
              <div className="space-y-3">
                {[
                  "Creating hands-on, cross-disciplinary learning experiences",
                  "Integrating analog and digital approaches for skill-building", 
                  "Supporting peer mentorship and community-led education",
                  "Bridging cultural knowledge with new technology (including AI)"
                ].map((focus, index) => (
                  <div 
                    key={index} 
                    className="group relative overflow-hidden rounded-lg p-4 cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1"
                    style={{ 
                      backgroundColor: 'var(--bg-primary)',
                      boxShadow: 'var(--shadow)'
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-150"
                        style={{ 
                          background: 'linear-gradient(135deg, var(--accent-primary), hsl(279.19deg 62.09% 43.44%))'
                        }}
                      />
                      <span 
                        className="font-medium font-['Atlassian_Sans_Ext'] transition-colors duration-300"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {focus}
                      </span>
                    </div>
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                      style={{ 
                        background: 'linear-gradient(135deg, var(--accent-primary), hsl(279.19deg 62.09% 43.44%))'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
