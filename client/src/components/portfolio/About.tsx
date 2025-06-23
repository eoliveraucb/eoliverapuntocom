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
        <div className="flex items-start gap-12">
          {/* Left Side: Profile Image */}
          <div 
            className={`transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <div className="rounded-lg overflow-hidden shadow-lg" style={{ width: '300px' }}>
              <img 
                src={profileImage} 
                alt="Edwin Olivera - Digital Design Professor"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Side: About Content */}
          <div 
            className={`flex-1 transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <h2 className="mb-6 font-['Fraunces']" style={{ color: 'var(--text-primary)' }}>
              About Me
            </h2>
            
            <div className="space-y-4">
              <p className="font-['Roboto_Flex']" style={{ color: 'var(--text-secondary)' }}>
                I am a designer, educator, and recent graduate of the MFA program in Design for Social Innovation at the School of Visual Arts in New York. My work explores how design can be leveraged as a tool for social transformation—particularly within education systems that serve marginalized and underrepresented communities.
              </p>
              
              <p className="font-['Roboto_Flex']" style={{ color: 'var(--text-secondary)' }}>
                Drawing from over 15 years of creative experience across disciplines, I develop hands-on, innovative learning experiences that merge technology, culture, and community engagement. My practice emphasizes collaboration, peer mentorship, and the integration of analog and digital approaches to help learners build skills that are adaptable, resilient, and future-focused.
              </p>
              
              <p className="font-['Roboto_Flex']" style={{ color: 'var(--text-secondary)' }}>
                Much of my recent work centers on making emerging technologies—including AI—accessible and meaningful for students and educators in Latin America. I believe in the power of co-creation and aim to design educational models that empower learners to shape their own futures, while staying grounded in cultural knowledge and social context.
              </p>

              <p className="font-['Roboto_Flex']" style={{ color: 'var(--text-secondary)' }}>
                My approach is driven by curiosity, empathy, and a commitment to lifelong learning. I am always excited to collaborate with others who share a vision for inclusive, impactful design education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}