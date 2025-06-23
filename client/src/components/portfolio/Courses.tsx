interface Course {
  id: number;
  title: string;
  category: string;
  description: string;
  duration: string;
  level: string;
  format: string;
  skills: string[];
  image: string;
}

// Import course images and videos
import courseImage1 from '@assets/Digital Design 4 _ Digital Workshop 1_1750640874283.jpeg';
import courseImage2 from '@assets/Digital Design 4 _ Digital Workshop 2_1750640874282.jpeg';
import courseImage3 from '@assets/Digital Design 4 _ Digital Workshop 3_1750640874282.jpeg';
import courseImage4 from '@assets/Digital Design 4 _ Digital Workshop 4_1750640874282.jpeg';
import courseImage6 from '@assets/Digital Design 4 _ Digital Workshop 6_1750640874282.jpeg';
import courseImage8 from '@assets/Digital Design 4 _ Digital Workshop 8_1750640874282.jpeg';
import courseImage9 from '@assets/Digital Design 4 _ Digital Workshop 9_1750640874282.jpeg';
import courseImage10 from '@assets/Digital Design 4 _ Digital Workshop 10_1750640874282.jpeg';
import courseImage11 from '@assets/Digital Design 4 _ Digital Workshop 11_1750640874283.jpeg';
import courseImage12 from '@assets/Digital Design 4 _ Digital Workshop 12_1750640874282.jpeg';
import memoryBoxVideo from '@assets/ExperienciaMemoryBox_1750642203857.mp4';

const courses: Course[] = [
  {
    id: 1,
    title: "Digital Design 4",
    category: "Interactive Design",
    description: "Examine digital design through future-oriented perspectives, emphasizing transformative social and cultural relationships in designing with emerging technologies. A participatory design experience fostering critical thinking about post-humanist and transhumanist design practice.",
    duration: "1 Semester",
    level: "Advanced",
    format: "Online (Zoom)",
    skills: ["Speculative Design", "Systems Thinking", "Emerging Technologies", "UX/UI Design"],
    image: courseImage1
  },
  {
    id: 2,
    title: "Sensory Design Workshop",
    category: "Speculative Design",
    description: "Students collaborate in groups using futures thinking and speculative design concepts to create presentation web prototypes with native HTML, CSS, and JavaScript. This example showcases a futuristic service using neuralink-type devices to create 3D printed textures of specific memories.",
    duration: "4 weeks",
    level: "Intermediate",
    format: "Hybrid",
    skills: ["Futures Thinking", "Speculative Design", "Web Prototyping", "Neural Interface Design"],
    image: courseImage2
  },
  {
    id: 3,
    title: "Digital Realities & AR/XR",
    category: "Extended Reality",
    description: "Explore AR, XR, and projection mapping using Studio Lens and TouchDesigner. Analyze reality persistence in emerging technologies from Plato's cave to modern projection mapping, including LLM prompt design and machine learning exercises.",
    duration: "6 weeks",
    level: "Advanced",
    format: "Online",
    skills: ["AR/XR Development", "Projection Mapping", "Machine Learning", "Prompt Design"],
    image: courseImage3
  },
  {
    id: 4,
    title: "Systems in Digital Design",
    category: "Creative Coding",
    description: "Learn creative coding with p5.js and AI-assisted programming. Introduction to systems mapping, workflow optimization, and bridging visual identity with digital systems through brand standards.",
    duration: "8 weeks",
    level: "Intermediate",
    format: "Online",
    skills: ["Creative Coding", "p5.js", "Systems Mapping", "Brand Systems"],
    image: courseImage4
  },
  {
    id: 5,
    title: "Memory Box Sensorial Memory",
    category: "Sensory Design",
    description: "Design a box containing a sensorial memory using binaural sound reproduction and scent composition. Students create low-fidelity prototypes that limit visual stimuli while opening experiences through binaural audio combined with olfactory elements, accompanied by explanatory haiku poetry.",
    duration: "3 weeks",
    level: "Intermediate",
    format: "Hybrid",
    skills: ["Binaural Audio", "Scent Design", "Haiku Poetry", "Sensory Prototyping"],
    image: courseImage6
  },
  {
    id: 6,
    title: "Double-Diamond Exercise",
    category: "Design Process",
    description: "Students collectively use a Miro board to apply the double-diamond methodology for understanding divergent and convergent creative ideation in product design process. This collaborative exercise deepens comprehension of design thinking frameworks through hands-on practice.",
    duration: "2 weeks",
    level: "Intermediate",
    format: "Online",
    skills: ["Design Thinking", "Miro Collaboration", "Divergent Thinking", "Convergent Thinking"],
    image: courseImage8
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
            Projects and Exercises
          </h2>
          <p 
            className="text-lg max-w-4xl mx-auto font-['Roboto_Flex']"
            style={{ color: 'var(--text-secondary)' }}
          >
            A comprehensive overview of workshops and projects from my BFA and MFA level Digital Design 4 course. 
            These case studies demonstrate advanced pedagogical approaches combining speculative design, 
            emerging technologies, and cultural context in university-level design education.
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
                {course.id === 1 ? (
                  <iframe
                    src="https://www.youtube.com/embed/PuGE5PVlhic?autoplay=1&mute=1&controls=0&loop=1&playlist=PuGE5PVlhic"
                    title={course.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : course.id === 2 ? (
                  <iframe
                    src="https://www.youtube.com/embed/w3ZcEwXYIt0?autoplay=1&mute=1&controls=0&loop=1&playlist=w3ZcEwXYIt0"
                    title={course.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : course.id === 3 ? (
                  <iframe
                    src="https://www.youtube.com/embed/-Nwveq3EAZo"
                    title={course.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : course.id === 5 ? (
                  <video
                    src={memoryBoxVideo}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : course.id === 6 ? (
                  <iframe
                    src="https://www.youtube.com/embed/xYo3_4T4owY?autoplay=1&mute=1&controls=0&loop=1&playlist=xYo3_4T4owY"
                    title={course.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span 
                    className="text-xs font-medium px-3 py-1 rounded-full font-['Roboto_Flex']"
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
                  className="text-sm leading-relaxed mb-4 font-['Roboto_Flex']"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {course.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {course.skills.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 rounded font-['Roboto_Flex']"
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
                        className="text-xs px-2 py-1 rounded font-['Roboto_Flex']"
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
                    className="font-['Roboto_Flex']"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    📅 {course.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Course Framework & Academic Context */}
        <div className="mt-20">
          <h3 
            className="text-2xl font-['Fraunces'] font-semibold mb-8 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            Academic Framework & Outcomes
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "BFA/MFA Integration",
                description: "Course curriculum designed for both undergraduate and graduate students, adapting complexity and theoretical depth based on academic level while maintaining rigorous design standards."
              },
              {
                title: "Cultural Contextualization",
                description: "Projects consistently integrate Bolivian cultural elements with global design challenges, creating locally relevant solutions with international applicability and academic rigor."
              },
              {
                title: "Cross-Modal Learning",
                description: "Students engage through multiple sensory modalities—visual, auditory, tactile, and olfactory—developing comprehensive design thinking beyond traditional screen-based interfaces."
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
                  className="font-['Roboto_Flex']"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Course Impact & Academic Results */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <h3 
              className="text-xl font-['Fraunces'] font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Academic Implementation
            </h3>
            <div className="space-y-3 font-['Roboto_Flex']">
              <div>
                <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Institution:</span>
                <span style={{ color: 'var(--text-secondary)' }}> Universidad Católica Boliviana</span>
              </div>
              <div>
                <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Program Level:</span>
                <span style={{ color: 'var(--text-secondary)' }}> BFA & MFA Digital Design</span>
              </div>
              <div>
                <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Course Format:</span>
                <span style={{ color: 'var(--text-secondary)' }}> Hybrid (Online/In-Person)</span>
              </div>
              <div>
                <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Duration:</span>
                <span style={{ color: 'var(--text-secondary)' }}> 16-week semester</span>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <h3 
              className="text-xl font-['Fraunces'] font-semibold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Student Learning Outcomes
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-['Roboto_Flex']" style={{ color: 'var(--text-primary)' }}>
                  Conceptual Development
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
                  40%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-['Roboto_Flex']" style={{ color: 'var(--text-primary)' }}>
                  Technical Execution
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
                  35%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-['Roboto_Flex']" style={{ color: 'var(--text-primary)' }}>
                  Critical Analysis
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

        {/* Documentation & Student Work */}
        <div className="mt-20">
          <h3 
            className="text-2xl font-['Fraunces'] font-semibold mb-8 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            Workshop Documentation & Student Outcomes
          </h3>
          <div className="masonry-grid columns-2 md:columns-3 lg:columns-4 gap-4">
            {[
              { image: courseImage9, title: "Interactive Design Boards", category: "Design Process" },
              { image: courseImage10, title: "Digital Reality Exercises", category: "AR/XR Projects" },
              { image: courseImage11, title: "Student Collaboration", category: "Team Work" },
              { image: courseImage12, title: "Creative Coding Examples", category: "p5.js Projects" }
            ].map((material, index) => (
              <div
                key={index}
                className="masonry-item group relative overflow-hidden rounded-lg mb-4 cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1"
                style={{ 
                  backgroundColor: 'var(--bg-primary)',
                  boxShadow: 'var(--shadow)'
                }}
              >
                <img
                  src={material.image}
                  alt={material.title}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div 
                      className="text-xs font-medium mb-1 font-['Roboto_Flex']"
                      style={{ color: 'var(--accent-primary)' }}
                    >
                      {material.category}
                    </div>
                    <h4 className="text-white font-['Fraunces'] font-medium text-sm leading-tight">
                      {material.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}