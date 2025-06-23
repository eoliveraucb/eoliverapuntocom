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

function FocusCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % focusAreas.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % focusAreas.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + focusAreas.length) % focusAreas.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <div 
      className="relative w-full h-96 rounded-xl overflow-hidden"
      style={{ 
        backgroundColor: 'var(--bg-primary)',
        boxShadow: 'var(--shadow)'
      }}
    >
      {/* Indicators */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {focusAreas.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'scale-150' 
                : 'scale-100 opacity-50'
            }`}
            style={{ 
              backgroundColor: index === currentSlide 
                ? 'var(--accent-primary)' 
                : 'var(--text-secondary)'
            }}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div 
        className="absolute top-12 left-1/2 transform -translate-x-1/2 text-xs font-medium px-3 py-1 rounded-full"
        style={{ 
          backgroundColor: 'var(--accent-primary)',
          color: 'white'
        }}
      >
        {String(currentSlide + 1).padStart(2, '0')} / {String(focusAreas.length).padStart(2, '0')}
      </div>

      {/* Slides */}
      <div className="relative w-full h-full">
        {focusAreas.map((area, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentSlide 
                ? 'opacity-100 transform translate-x-0' 
                : index < currentSlide
                ? 'opacity-0 transform -translate-x-full'
                : 'opacity-0 transform translate-x-full'
            }`}
          >
            <div className="flex flex-col justify-center items-center h-full p-8 text-center">
              <h4 
                className="text-2xl font-['Fraunces'] font-semibold mb-6"
                style={{ color: 'var(--text-primary)' }}
              >
                {area.title}
              </h4>
              
              <p 
                className="text-base leading-relaxed max-w-md font-['Atlassian_Sans_Ext']"
                style={{ color: 'var(--text-secondary)' }}
              >
                Integrating{" "}
                <span 
                  className="px-2 py-1 rounded-md mx-1 font-medium"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--accent-primary), hsl(279.19deg 62.09% 43.44%))',
                    color: 'white'
                  }}
                >
                  {area.keywords[0]}
                </span>
                {" "}and{" "}
                <span 
                  className="px-2 py-1 rounded-md mx-1 font-medium"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--accent-primary), hsl(279.19deg 62.09% 43.44%))',
                    color: 'white'
                  }}
                >
                  {area.keywords[1] || area.keywords[0]}
                </span>
                {" "}approaches for skill-building, combining traditional methods with modern technology to create comprehensive learning pathways.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full border transition-all duration-300 hover:scale-105 flex items-center justify-center"
          style={{ 
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--text-secondary)',
            color: 'var(--text-primary)'
          }}
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full border transition-all duration-300 hover:scale-105 flex items-center justify-center"
          style={{ 
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--text-secondary)',
            color: 'var(--text-primary)'
          }}
        >
          →
        </button>
      </div>
    </div>
  );
}

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
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side: About Me */}
          <div 
            className={`transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <h2 className="mb-6 font-['Fraunces']" style={{ color: 'var(--text-primary)' }}>
              About Me
            </h2>
            
            <div className="rounded-lg overflow-hidden shadow-lg mb-6">
              <img 
                src={profileImage} 
                alt="Edwin Olivera - Digital Design Professor"
                className="w-full h-auto"
              />
            </div>
            
            <div className="space-y-4">
              <p className="font-['Atlassian_Sans_Ext']" style={{ color: 'var(--text-secondary)' }}>
                I am a graduate of the MFA program in Design for Social Innovation at the School of Visual Arts in New York. My work explores how design can be leveraged as a tool for social transformation—particularly within education systems that serve marginalized and underrepresented communities.
              </p>
              
              <p className="font-['Atlassian_Sans_Ext']" style={{ color: 'var(--text-secondary)' }}>
                Drawing from over 15 years of creative experience across disciplines, I develop hands-on, innovative learning experiences that merge technology, culture, and community engagement. My practice emphasizes collaboration, peer mentorship, and the integration of analog and digital approaches to help learners build skills that are adaptable, resilient, and future-focused.
              </p>
              
              <p className="font-['Atlassian_Sans_Ext']" style={{ color: 'var(--text-secondary)' }}>
                Much of my recent work centers on making emerging technologies—including AI—accessible and meaningful for students and educators in Latin America. I believe in the power of co-creation and aim to design educational models that empower learners to shape their own futures, while staying grounded in cultural knowledge and social context.
              </p>

              <p className="font-['Atlassian_Sans_Ext']" style={{ color: 'var(--text-secondary)' }}>
                My approach is driven by curiosity, empathy, and a commitment to lifelong learning. I am always excited to collaborate with others who share a vision for inclusive, impactful design education.
              </p>
            </div>
          </div>

          {/* Right Side: Areas of Focus */}
          <div 
            className={`transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <h2 className="mb-6 font-['Fraunces']" style={{ color: 'var(--text-primary)' }}>
              Areas of Focus
            </h2>
            <FocusCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}