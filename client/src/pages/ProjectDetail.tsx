
import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/portfolio/Header';
import { ArrowLeft, ExternalLink, Calendar, User, Wrench } from 'lucide-react';
import { projectsData } from './Projects';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 
              className="text-4xl font-['Fraunces'] font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Project Not Found
            </h1>
            <p 
              className="text-lg mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              The project you're looking for doesn't exist.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1"
              style={{ 
                backgroundColor: 'var(--accent-primary)',
                color: 'white'
              }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 mb-8 text-sm font-medium transition-all duration-300 hover:transform hover:-translate-x-1"
            style={{ color: 'var(--accent-primary)' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          
          {/* Project Header */}
          <div className="mb-12">
            {project.featured && (
              <div className="mb-4">
                <span 
                  className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                  style={{ 
                    backgroundColor: 'var(--accent-primary)',
                    color: 'white'
                  }}
                >
                  Featured Project
                </span>
              </div>
            )}
            
            <h1 
              className="text-4xl md:text-5xl font-['Fraunces'] font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {project.title}
            </h1>
            
            <p 
              className="text-xl leading-relaxed mb-6 font-['Roboto_Flex']"
              style={{ color: 'var(--text-secondary)' }}
            >
              {project.description}
            </p>
            
            {/* Project Meta */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                <span style={{ color: 'var(--text-secondary)' }}>{project.year}</span>
              </div>
              
              {project.client && (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{project.client}</span>
                </div>
              )}
              
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                <span style={{ color: 'var(--text-secondary)' }}>{project.category}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-5xl mx-auto">
          <div 
            className="rounded-lg overflow-hidden"
            style={{ boxShadow: 'var(--shadow)' }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 
                className="text-3xl font-['Fraunces'] font-bold mb-6"
                style={{ color: 'var(--text-primary)' }}
              >
                Project Overview
              </h2>
              
              <div 
                className="prose prose-lg max-w-none"
                style={{ color: 'var(--text-secondary)' }}
              >
                <p className="text-lg leading-relaxed font-['Roboto_Flex']">
                  {project.fullDescription}
                </p>
              </div>
              
              {/* Special content for crypto project */}
              {project.id === 'crypto-design' && (
                <div className="mt-12">
                  <h3 
                    className="text-2xl font-['Fraunces'] font-semibold mb-6"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Project Video
                  </h3>
                  
                  <div className="aspect-video rounded-lg overflow-hidden mb-6">
                    <iframe
                      src="https://www.youtube.com/embed/WD1bq2K42W0"
                      title="Crypto Design Student Project"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  
                  <div 
                    className="p-6 rounded-lg border-l-4"
                    style={{ 
                      backgroundColor: 'var(--bg-secondary)',
                      borderLeftColor: 'var(--accent-primary)'
                    }}
                  >
                    <p 
                      className="text-lg italic leading-relaxed font-['Roboto_Flex']"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      "In a fictional future scenario, local currencies begin a devaluation process not unlike what Bolivia experienced in the 1980s. A digital consortium of citizens, investors, and hacktivists creates a Bolivian Stablecoin to protect common citizens from negative effects of devaluation."
                    </p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div 
                className="p-6 rounded-lg sticky top-8"
                style={{ backgroundColor: 'var(--bg-secondary)' }}
              >
                <h3 
                  className="text-xl font-['Fraunces'] font-semibold mb-6"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Project Details
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 
                      className="font-medium mb-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Year
                    </h4>
                    <p style={{ color: 'var(--text-secondary)' }}>{project.year}</p>
                  </div>
                  
                  <div>
                    <h4 
                      className="font-medium mb-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Category
                    </h4>
                    <p style={{ color: 'var(--text-secondary)' }}>{project.category}</p>
                  </div>
                  
                  {project.client && (
                    <div>
                      <h4 
                        className="font-medium mb-2"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        Client
                      </h4>
                      <p style={{ color: 'var(--text-secondary)' }}>{project.client}</p>
                    </div>
                  )}
                  
                  {project.technologies && (
                    <div>
                      <h4 
                        className="font-medium mb-2"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        Technologies & Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs rounded-full"
                            style={{ 
                              backgroundColor: 'var(--accent-primary)',
                              color: 'white'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {project.externalLink && (
                    <div className="pt-4">
                      <a
                        href={project.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 w-full justify-center px-4 py-3 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1"
                        style={{ 
                          backgroundColor: 'var(--accent-primary)',
                          color: 'white'
                        }}
                      >
                        <span className="font-medium">View Case Study</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section 
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: 'var(--bg-secondary)' }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 
            className="text-3xl font-['Fraunces'] font-bold mb-8 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            Related Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData
              .filter(p => p.id !== project.id && (p.category === project.category || p.featured))
              .slice(0, 3)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  to={`/projects/${relatedProject.id}`}
                  className="group block"
                >
                  <div 
                    className="rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2"
                    style={{ 
                      backgroundColor: 'var(--bg-primary)',
                      boxShadow: 'var(--shadow)'
                    }}
                  >
                    <img
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    <div className="p-4">
                      <h3 
                        className="text-lg font-['Fraunces'] font-semibold mb-2"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {relatedProject.title}
                      </h3>
                      
                      <p 
                        className="text-sm"
                        style={{ color: 'var(--accent-primary)' }}
                      >
                        {relatedProject.category}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
