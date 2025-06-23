interface Course {
  id: number;
  title: string;
  category: string;
  description: string;
  duration: string;
  level: string;
  format: string;
  skills: string[];
}

const courses: Course[] = [
  {
    id: 1,
    title: "Digital Design 4",
    category: "Interactive Design",
    description: "Examine digital design through future-oriented perspectives, emphasizing transformative social and cultural relationships in designing with emerging technologies. A participatory design experience fostering critical thinking about post-humanist and transhumanist design practice.",
    duration: "1 Semester",
    level: "Advanced",
    format: "Online (Zoom)",
    skills: ["Speculative Design", "Systems Thinking", "Emerging Technologies", "UX/UI Design"]
  },
  {
    id: 2,
    title: "Sensory Design Workshop",
    category: "Multisensory Experience",
    description: "Focus on designing multisensory experiences involving sound, smell, and touch. Learn digital audio manipulation with Audacity, binaural sounds, and designing without visuals through natural plant exploration and creative sensory work.",
    duration: "4 weeks",
    level: "Intermediate",
    format: "Hybrid",
    skills: ["Audio Design", "Multisensory Input", "Prototyping", "Accessibility Design"]
  },
  {
    id: 3,
    title: "Digital Realities & AR/XR",
    category: "Extended Reality",
    description: "Explore AR, XR, and projection mapping using Studio Lens and TouchDesigner. Analyze reality persistence in emerging technologies from Plato's cave to modern projection mapping, including LLM prompt design and machine learning exercises.",
    duration: "6 weeks",
    level: "Advanced",
    format: "Online",
    skills: ["AR/XR Development", "Projection Mapping", "Machine Learning", "Prompt Design"]
  },
  {
    id: 4,
    title: "Systems in Digital Design",
    category: "Creative Coding",
    description: "Learn creative coding with p5.js and AI-assisted programming. Introduction to systems mapping, workflow optimization, and bridging visual identity with digital systems through brand standards.",
    duration: "8 weeks",
    level: "Intermediate",
    format: "Online",
    skills: ["Creative Coding", "p5.js", "Systems Mapping", "Brand Systems"]
  },
  {
    id: 5,
    title: "Futures-Thinking & Post-Digital",
    category: "Blockchain & Web3",
    description: "Explore smart contracts, NFT creation, and cryptocurrency wallets. Use Futures Cone methodology for blockchain implementation strategies during economic transitions, connecting ancestral barter values with decentralized digital systems.",
    duration: "10 weeks",
    level: "Advanced",
    format: "Online",
    skills: ["Blockchain", "Smart Contracts", "NFT Creation", "Speculative Design"]
  },
  {
    id: 6,
    title: "Cross-Disciplinary Digital Tools",
    category: "Collaborative Design",
    description: "Master professional collaboration using Discord, Miro, Figma, and FigJam. Learn UX testing with Quant-UX, HotJar, and Google Analytics. Emphasis on active experimentation with emerging technologies.",
    duration: "5 weeks",
    level: "Beginner",
    format: "Online",
    skills: ["Figma", "UX Testing", "Analytics", "Team Collaboration"]
  }
];

export function Courses() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-['Fraunces'] font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Courses & Workshops
          </h2>
          <p 
            className="text-lg max-w-4xl mx-auto font-['Atlassian Sans Ext']"
            style={{ color: 'var(--text-secondary)' }}
          >
            Future-oriented digital design education that examines transformative social and cultural relationships 
            in designing with emerging technologies. Participatory design experiences rooted in critical thinking 
            and real-world applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group overflow-hidden rounded-lg transition-all duration-300 hover:transform hover:-translate-y-2"
              style={{ 
                backgroundColor: 'var(--bg-primary)',
                boxShadow: 'var(--shadow)'
              }}
            >
              <div className="aspect-video overflow-hidden">
                <div 
                  className="w-full h-full flex items-center justify-center text-6xl transition-transform duration-300 group-hover:scale-110"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--accent-primary), hsl(279.19deg 62.09% 43.44%))',
                    color: 'white'
                  }}
                >
                  {course.category === 'Interactive Design' && '🎨'}
                  {course.category === 'Multisensory Experience' && '👂'}
                  {course.category === 'Extended Reality' && '🥽'}
                  {course.category === 'Creative Coding' && '💻'}
                  {course.category === 'Blockchain & Web3' && '⛓️'}
                  {course.category === 'Collaborative Design' && '🤝'}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span 
                    className="text-xs font-medium px-3 py-1 rounded-full font-['Atlassian Sans Ext']"
                    style={{ 
                      backgroundColor: 'var(--accent-primary)',
                      color: 'white'
                    }}
                  >
                    {course.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span 
                      className="text-xs font-medium px-2 py-1 rounded"
                      style={{ 
                        backgroundColor: 'var(--bg-secondary)',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {course.format}
                    </span>
                    <span 
                      className="text-sm font-medium"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {course.level}
                    </span>
                  </div>
                </div>
                
                <h3 
                  className="text-xl font-['Fraunces'] font-semibold mb-3 group-hover:text-accent-primary transition-colors"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {course.title}
                </h3>
                
                <p 
                  className="text-sm leading-relaxed mb-4 font-['Atlassian Sans Ext']"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {course.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {course.skills.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 rounded font-['Atlassian Sans Ext']"
                        style={{
                          backgroundColor: 'var(--bg-secondary)',
                          color: 'var(--text-secondary)'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                    {course.skills.length > 3 && (
                      <span
                        className="text-xs px-2 py-1 rounded font-['Atlassian Sans Ext']"
                        style={{
                          backgroundColor: 'var(--accent-primary)',
                          color: 'white'
                        }}
                      >
                        +{course.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span 
                    className="font-['Atlassian Sans Ext']"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    📅 {course.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Teaching Goals & Methodology */}
        <div className="mt-20">
          <h3 
            className="text-2xl font-['Fraunces'] font-semibold mb-8 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            Teaching Goals & Methodology
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovative Pedagogy",
                description: "Effectively integrate speculative design, systems thinking, and emerging technologies to prepare students for future challenges in digital design practice."
              },
              {
                title: "Real-World Applications",
                description: "Projects tied to local resources and global challenges provide cultural relevance with potential for international scalability and impact."
              },
              {
                title: "Holistic Development",
                description: "Students develop technical, creative, and socio-ethical skills through diverse assignments, interactive learning, and community of practice engagement."
              }
            ].map((goal, index) => (
              <div key={index} className="p-6 rounded-lg" style={{ backgroundColor: 'var(--bg-primary)' }}>
                <h4 
                  className="text-lg font-['Fraunces'] font-semibold mb-3"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {goal.title}
                </h4>
                <p 
                  className="font-['Atlassian Sans Ext']"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Course Schedule & Contact */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <h3 
              className="text-xl font-['Fraunces'] font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Course Information
            </h3>
            <div className="space-y-3 font-['Atlassian Sans Ext']">
              <div>
                <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Schedule:</span>
                <span style={{ color: 'var(--text-secondary)' }}> Saturdays, 1:15–3:45 PM</span>
              </div>
              <div>
                <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Format:</span>
                <span style={{ color: 'var(--text-secondary)' }}> Online (Zoom)</span>
              </div>
              <div>
                <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Office Hours:</span>
                <span style={{ color: 'var(--text-secondary)' }}> 8 hours during daytime</span>
              </div>
              <div>
                <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Email:</span>
                <span style={{ color: 'var(--text-secondary)' }}> eolivera.a@ucb.edu.bo</span>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <h3 
              className="text-xl font-['Fraunces'] font-semibold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Course Evaluation
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-['Atlassian Sans Ext']" style={{ color: 'var(--text-primary)' }}>
                  Attendance & Participation
                </span>
                <span 
                  className="font-['Fraunces'] font-bold"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--accent-primary), hsl(279.19deg 62.09% 43.44%))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  30%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-['Atlassian Sans Ext']" style={{ color: 'var(--text-primary)' }}>
                  Exercises & Synthesis
                </span>
                <span 
                  className="font-['Fraunces'] font-bold"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--accent-primary), hsl(279.19deg 62.09% 43.44%))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  45%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-['Atlassian Sans Ext']" style={{ color: 'var(--text-primary)' }}>
                  Reading & Reflections
                </span>
                <span 
                  className="font-['Fraunces'] font-bold"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--accent-primary), hsl(279.19deg 62.09% 43.44%))',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  25%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}