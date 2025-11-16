
import { Link } from 'wouter';
import { useEffect } from 'react';
import { Header } from '../components/portfolio/Header';
import { Breadcrumb } from '../components/Breadcrumb';
import { ExternalLink, ArrowRight, Calendar, Tag, Settings } from 'lucide-react';
import { projectsData, getProjectLogo } from './Projects';

export default function SelectedWorks() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter for featured projects and sort by year (newest first)
  const selectedWorks = projectsData
    .filter(project => project.featured)
    .sort((a, b) => parseInt(b.year) - parseInt(a.year));

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Header />
      
      {/* Breadcrumb Navigation */}
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumb className="mb-4" />
        </div>
      </div>
      
      {/* Hero Section with Mobile Scroll Optimization */}
      <section className="pb-12 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 
              id="page-title"
              className="text-3xl md:text-6xl font-['Fraunces'] font-bold mb-4 md:mb-6 scroll-mt-20"
              style={{ color: 'var(--text-primary)' }}
              data-testid="text-selected-works-title"
            >
              Selected Works
            </h1>
            <p 
              className="text-xl max-w-4xl mx-auto leading-relaxed font-['Roboto_Flex']"
              style={{ color: 'var(--text-secondary)' }}
              data-testid="text-selected-works-description"
            >
              A curated collection of my most impactful design projects, 
              spanning digital interfaces, educational initiatives, and social impact campaigns. 
              Each project represents a unique challenge and creative solution.
            </p>
          </div>
        </div>
      </section>

      {/* Selected Works Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-24">
            {selectedWorks.map((project, index) => (
              <div key={project.id} className="group">
                {/* Project Layout - Alternating */}
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}>
                  
                  {/* Project Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <Link 
                      to={`/design/${project.id}`}
                      data-testid={`link-selected-project-${project.id}`}
                    >
                      <div 
                        className="relative overflow-hidden rounded-lg cursor-pointer transition-all duration-500 hover:transform hover:-translate-y-2"
                        style={{ boxShadow: 'var(--shadow)' }}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                          data-testid={`img-selected-project-${project.id}`}
                        />
                        
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-6 right-6">
                            <div 
                              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                              style={{ 
                                backgroundColor: 'var(--accent-primary)',
                                color: 'white'
                              }}
                            >
                              View Project
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Project Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    
                    {/* Project Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                        <span 
                          style={{ color: 'var(--text-secondary)' }}
                          data-testid={`text-selected-year-${project.id}`}
                        >
                          {project.year}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Tag className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                        <span 
                          className="font-medium"
                          style={{ color: 'var(--accent-primary)' }}
                          data-testid={`text-selected-category-${project.id}`}
                        >
                          {project.category}
                        </span>
                      </div>
                      
                      {project.technologies && project.technologies[0] && (
                        <div className="flex items-center gap-2">
                          <Settings className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
                          <span 
                            className="font-medium"
                            style={{ color: 'var(--text-secondary)' }}
                            data-testid={`text-selected-tech-${project.id}`}
                          >
                            {project.technologies[0]}
                          </span>
                        </div>
                      )}
                      
                      <span 
                        className="px-2 py-1 text-xs font-medium rounded-full"
                        style={{ 
                          backgroundColor: 'var(--accent-primary)',
                          color: 'white'
                        }}
                        data-testid={`badge-selected-featured-${project.id}`}
                      >
                        Featured
                      </span>
                    </div>

                    {/* Project Title */}
                    <h2 
                      className="text-3xl md:text-4xl font-['Fraunces'] font-bold leading-tight"
                      style={{ color: 'var(--text-primary)' }}
                      data-testid={`text-selected-title-${project.id}`}
                    >
                      {project.title}
                    </h2>

                    {/* Project Description */}
                    <p 
                      className="text-lg leading-relaxed font-['Roboto_Flex']"
                      style={{ color: 'var(--text-secondary)' }}
                      data-testid={`text-selected-description-${project.id}`}
                    >
                      {project.fullDescription}
                    </p>

                    {/* Technologies */}
                    {project.technologies && (
                      <div className="space-y-3">
                        <h4 
                          className="text-sm font-medium"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          Key Skills & Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 4).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 text-sm rounded-full"
                              style={{ 
                                backgroundColor: 'var(--bg-secondary)',
                                color: 'var(--text-secondary)'
                              }}
                              data-testid={`text-selected-tech-${project.id}-${techIndex}`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Logo */}
                    <div className="pt-6 pb-2">
                      <div 
                        className="inline-block px-4 py-2.5 rounded-lg"
                        style={{ 
                          boxShadow: 'inset 2px 2px 4px rgba(0, 0, 0, 0.08), inset -2px -2px 4px rgba(255, 255, 255, 0.05)'
                        }}
                      >
                        <img 
                          src={getProjectLogo(project.id)} 
                          alt="Organization Logo" 
                          className="h-6 md:h-12 lg:h-16 w-auto opacity-60"
                          data-testid={`img-selected-logo-${project.id}`}
                        />
                      </div>
                    </div>

                    {/* Project Actions */}
                    <div className="flex flex-wrap gap-4 pt-2">
                      <Link
                        to={`/design/${project.id}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1"
                        style={{ 
                          backgroundColor: 'var(--accent-primary)',
                          color: 'white'
                        }}
                        data-testid={`button-selected-view-details-${project.id}`}
                      >
                        <span className="font-medium">View Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      
                      {project.externalLink && (
                        <a
                          href={project.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1"
                          style={{ 
                            backgroundColor: 'var(--bg-secondary)',
                            color: 'var(--text-primary)'
                          }}
                          data-testid={`link-selected-case-study-${project.id}`}
                        >
                          <span className="font-medium">Case Study</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: 'var(--bg-secondary)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl font-['Fraunces'] font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
            data-testid="text-cta-title"
          >
            Explore All Projects
          </h2>
          <p 
            className="text-lg mb-8 font-['Roboto_Flex']"
            style={{ color: 'var(--text-secondary)' }}
            data-testid="text-cta-description"
          >
            Interested in seeing more work? Browse the complete collection of projects 
            across various categories and time periods.
          </p>
          <Link
            to="/design"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:transform hover:-translate-y-1"
            style={{ 
              backgroundColor: 'var(--accent-primary)',
              color: 'white'
            }}
            data-testid="link-view-all-projects"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
