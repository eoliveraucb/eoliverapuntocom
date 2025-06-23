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
                As a Digital Design Professor with over 15 years of experience, I specialize in 
                bridging the gap between traditional typography principles and modern digital design practices.
              </p>
              
              <p className="font-['Atlassian_Sans_Ext']" style={{ color: 'var(--text-secondary)' }}>
                My work focuses on developing innovative educational methodologies that empower the next 
                generation of designers to create meaningful, accessible, and visually compelling digital experiences.
              </p>
              
              <p className="font-['Atlassian_Sans_Ext']" style={{ color: 'var(--text-secondary)' }}>
                I've published extensively on variable font technologies, responsive typography, 
                and the intersection of design education with emerging digital platforms.
              </p>
            </div>

            {/* Skills */}
            <div className="skills-container">
              <h3 className="mb-6 font-['Fraunces']" style={{ color: 'var(--text-primary)' }}>
                Expertise
              </h3>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="skill-item">
                    <div className="flex justify-between mb-2">
                      <span 
                        className="font-medium"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {skill.name}
                      </span>
                      <span 
                        className="text-sm"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {skill.percentage}%
                      </span>
                    </div>
                    
                    <div 
                      className="h-2 rounded-full overflow-hidden"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    >
                      <div 
                        className="skill-progress h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: skillsAnimated ? `${skill.percentage}%` : "0%",
                          transitionDelay: `${index * 100}ms`
                        }}
                      />
                    </div>
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
