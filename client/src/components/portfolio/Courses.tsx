import { useState } from "react";

interface Course {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  duration: string;
  level: string;
  students: number;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Advanced Typography in Digital Design",
    category: "typography",
    description: "Master the principles of typography for digital platforms, including variable fonts, responsive text, and accessibility considerations.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    duration: "12 weeks",
    level: "Advanced",
    students: 245
  },
  {
    id: 2,
    title: "User Experience Fundamentals",
    category: "ux",
    description: "Comprehensive introduction to UX design principles, user research methodologies, and design thinking processes.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
    duration: "10 weeks",
    level: "Beginner",
    students: 892
  },
  {
    id: 3,
    title: "Brand Identity Systems",
    category: "branding",
    description: "Create cohesive brand identities from concept to implementation, including logo design, color systems, and brand guidelines.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=250&fit=crop",
    duration: "8 weeks",
    level: "Intermediate",
    students: 567
  },
  {
    id: 4,
    title: "Motion Graphics for Digital Media",
    category: "motion",
    description: "Learn animation principles, kinetic typography, and motion design for web, mobile, and social media platforms.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=250&fit=crop",
    duration: "14 weeks",
    level: "Intermediate",
    students: 334
  },
  {
    id: 5,
    title: "Accessible Design Practices",
    category: "accessibility",
    description: "Design inclusive digital experiences that work for everyone, covering WCAG guidelines, color accessibility, and assistive technologies.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=250&fit=crop",
    duration: "6 weeks",
    level: "Intermediate",
    students: 421
  },
  {
    id: 6,
    title: "Design Research Methods",
    category: "research",
    description: "Comprehensive guide to design research, including user interviews, usability testing, and data analysis techniques.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    duration: "9 weeks",
    level: "Advanced",
    students: 198
  }
];

const categories = [
  { key: "all", label: "All Courses" },
  { key: "typography", label: "Typography" },
  { key: "ux", label: "User Experience" },
  { key: "branding", label: "Branding" },
  { key: "motion", label: "Motion Graphics" },
  { key: "accessibility", label: "Accessibility" },
  { key: "research", label: "Research" }
];

export function Courses() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filteredCourses = activeFilter === "all" 
    ? courses 
    : courses.filter(course => course.category === activeFilter);

  return (
    <section 
      id="portfolio" 
      className="section theme-transition"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="mb-4 font-['Fraunces']" style={{ color: 'var(--text-primary)' }}>
              Courses & Workshops
            </h2>
            <p 
              className="text-xl max-w-2xl font-['Atlassian_Sans_Ext']"
              style={{ color: 'var(--text-secondary)' }}
            >
              Comprehensive design education programs covering typography, UX design, 
              branding, and digital accessibility.
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveFilter(category.key)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === category.key
                  ? "text-white"
                  : ""
              }`}
              style={{
                backgroundColor: activeFilter === category.key 
                  ? 'var(--accent-primary)' 
                  : 'var(--bg-primary)',
                color: activeFilter === category.key 
                  ? 'white' 
                  : 'var(--text-secondary)'
              }}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <div
              key={course.id}
              className="course-card rounded-lg overflow-hidden transition-all duration-500 hover:transform hover:-translate-y-2"
              style={{ 
                backgroundColor: 'var(--bg-primary)',
                boxShadow: 'var(--shadow)',
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Course Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div 
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium text-white"
                  style={{ backgroundColor: 'var(--accent-primary)' }}
                >
                  {course.level}
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span 
                    className="text-sm font-medium"
                    style={{ color: 'var(--accent-primary)' }}
                  >
                    {course.duration}
                  </span>
                  <span 
                    className="text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {course.students} students
                  </span>
                </div>

                <h3 
                  className="text-xl font-semibold mb-3 leading-tight"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {course.title}
                </h3>

                <p 
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {course.description}
                </p>

                <div className="flex justify-between items-center">
                  <button 
                    className="text-sm font-medium hover:opacity-80 transition-opacity"
                    style={{ color: 'var(--accent-primary)' }}
                  >
                    Learn More
                  </button>
                  
                  <div className="flex items-center gap-2">
                    <i className="fas fa-users text-sm" style={{ color: 'var(--text-secondary)' }}></i>
                    <span 
                      className="text-sm"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {course.students}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          {[
            { number: "2,500+", label: "Students Taught" },
            { number: "15+", label: "Years Experience" },
            { number: "50+", label: "Courses Created" },
            { number: "25+", label: "Research Publications" }
          ].map((stat, index) => (
            <div key={index} className="stat-item">
              <div 
                className="text-3xl md:text-4xl font-bold mb-2 gradient-text"
              >
                {stat.number}
              </div>
              <div 
                className="text-sm font-medium"
                style={{ color: 'var(--text-secondary)' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
