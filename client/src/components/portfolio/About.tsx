import { useEffect, useState, useRef } from "react";
import { Edit3, Save, X } from "lucide-react";
import profileImage from "@assets/profile-pic_1750628627934.png";
import { WysiwygEditor } from "../WysiwygEditor";

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

// Function to check if edit mode is enabled based on URL parameter
const isEditModeEnabled = () => {
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('editToken') === 'yourLongStringToken'; // Replace 'yourLongStringToken' with your actual token
  }
  return false;
};


export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [skillsAnimated, setSkillsAnimated] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const defaultContent = `
    <p>I am a designer, educator, and recent graduate of the MFA program in Design for Social Innovation at the School of Visual Arts in New York. My work explores how design can be leveraged as a tool for social transformation—particularly within education systems that serve marginalized and underrepresented communities.</p>

    <p>Drawing from over 15 years of creative experience across disciplines, I develop hands-on, innovative learning experiences that merge technology, culture, and community engagement. My practice emphasizes collaboration, peer mentorship, and the integration of analog and digital approaches to help learners build skills that are adaptable, resilient, and future-focused.</p>

    <p>Much of my recent work centers on making emerging technologies—including AI—accessible and meaningful for students and educators in Latin America. I believe in the power of co-creation and aim to design educational models that empower learners to shape their own futures, while staying grounded in cultural knowledge and social context.</p>

    <p>My approach is driven by curiosity, empathy, and a commitment to lifelong learning. I am always excited to collaborate with others who share a vision for inclusive, impactful design education.</p>
  `;

  const [aboutContent, setAboutContent] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('about-content');
      return saved || defaultContent;
    }
    return defaultContent;
  });

  const sectionRef = useRef<HTMLElement>(null);

  const handleSave = (newContent: string) => {
    setAboutContent(newContent);
    setIsEditing(false);

    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('about-content', newContent);
    }

    console.log('About content saved:', newContent);
  };

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
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Left Side: Profile Image */}
          <div 
            className={`w-full lg:w-auto flex justify-center lg:justify-start transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <div className="rounded-lg overflow-hidden shadow-lg w-64 lg:w-80">
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
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-['Fraunces'] text-center lg:text-left" style={{ color: 'var(--text-primary)' }}>
                About Me
              </h2>

              {!isEditing && isEditModeEnabled() && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1"
                  style={{ 
                    backgroundColor: 'var(--accent-primary)',
                    color: 'white'
                  }}
                >
                  <Edit3 className="w-4 h-4" />
                  Edit
                </button>
              )}

              {isEditing && (
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-gray-500"
                    style={{ 
                      backgroundColor: 'var(--text-tertiary)',
                      color: 'white'
                    }}
                  >
                    <X className="w-4 h-4" />
                    Cancel
                  </button>
                </div>
              )}
            </div>

            {isEditing ? (
              <div className="space-y-4">
                <WysiwygEditor 
                  initialContent={aboutContent}
                  onSave={handleSave}
                  onCancel={() => setIsEditing(false)}
                />
              </div>
            ) : (
              <div 
                className="prose-about font-['Roboto_Flex']"
                style={{ color: 'var(--text-secondary)' }}
                dangerouslySetInnerHTML={{ __html: aboutContent }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}