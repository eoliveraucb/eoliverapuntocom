import { useState } from "react";
import { ChevronDown, Brain, Lightbulb, Users, Sparkles } from "lucide-react";
import picsImage from "@assets/pics_1756130258319.png";
import artImage from "@assets/art_1756130258319.png";
import dogImage from "@assets/dog_1756130258320.png";
import genericImage from "@assets/generic_1756130258320.png";

interface TalkSection {
  id: string;
  title: string;
  description: string;
  content: string;
  image?: string;
  icon: any;
}

const talkSections: TalkSection[] = [
  {
    id: "creative-ai",
    title: "IA Creativa: Nuevas Formas de Expresión",
    description: "Explorando cómo la inteligencia artificial está transformando el panorama creativo y artístico",
    content: "La intersección entre inteligencia artificial y creatividad ha abierto nuevos horizontes para la expresión artística. Desde la generación de imágenes hasta la composición musical algorítmica, estamos presenciando una revolución en cómo entendemos y creamos arte. Esta charla explora las herramientas emergentes, los casos de uso innovadores, y las implicaciones filosóficas de la creatividad aumentada por IA.",
    image: artImage,
    icon: Sparkles
  },
  {
    id: "memory-ai",
    title: "Memoria Digital: Preservando Historias con IA",
    description: "Cómo la IA puede ayudarnos a documentar, preservar y compartir nuestras memorias más preciadas",
    content: "Nuestras memorias definen quiénes somos. En la era digital, la IA se convierte en una herramienta poderosa para preservar, organizar y dar sentido a nuestras experiencias. Esta sección explora cómo podemos usar tecnologías inteligentes para crear archivos personales más ricos, encontrar patrones en nuestras historias, y mantener vivos los recuerdos que más valoramos.",
    image: dogImage,
    icon: Brain
  },
  {
    id: "future-aesthetics",
    title: "Estéticas del Futuro: IA y Diseño Visual",
    description: "Analizando cómo la IA está redefiniendo los paradigmas estéticos y visuales contemporáneos",
    content: "La estética no es solo belleza; es un lenguaje que comunica valores, ideas y visiones de futuro. La IA generativa está creando nuevos vocabularios visuales que desafían nuestras concepciones tradicionales del arte y el diseño. Exploraremos cómo estas herramientas están influenciando todo, desde el diseño gráfico hasta la arquitectura, y qué significa esto para el futuro de la expresión visual.",
    image: genericImage,
    icon: Lightbulb
  },
  {
    id: "community-perspectives",
    title: "Perspectivas Colectivas: IA en Comunidad",
    description: "Construyendo una comprensión compartida de la IA a través del diálogo y la experiencia colectiva",
    content: "La IA no es solo una tecnología individual; es un fenómeno social que requiere comprensión colectiva. Esta sección se centra en cómo las comunidades pueden abordar juntas los desafíos y oportunidades de la IA, creando espacios de diálogo, experimentación colaborativa, y construcción de conocimiento compartido sobre estas tecnologías emergentes.",
    image: picsImage,
    icon: Users
  }
];

export default function CharlaIA() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${genericImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className="text-4xl md:text-6xl font-['Fraunces'] font-bold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              CharlaIA
            </h1>
            <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: 'var(--accent)' }} />
            <p 
              className="text-xl md:text-2xl font-['Roboto_Flex'] leading-relaxed max-w-3xl mx-auto mb-8"
              style={{ color: 'var(--text-secondary)' }}
            >
              Conversaciones profundas sobre el futuro de la inteligencia artificial, 
              la creatividad humana, y la construcción colectiva de conocimiento.
            </p>
            <div 
              className="inline-block px-6 py-3 rounded-full text-sm font-['Sono'] font-medium"
              style={{ 
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border)'
              }}
            >
              Una serie de reflexiones sobre IA y sociedad
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div 
            className="p-8 rounded-2xl mb-12"
            style={{ 
              backgroundColor: 'var(--bg-secondary)',
              boxShadow: 'var(--shadow)'
            }}
          >
            <h2 
              className="text-2xl md:text-3xl font-['Fraunces'] font-bold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Sobre CharlaIA
            </h2>
            <p 
              className="text-lg font-['Roboto_Flex'] leading-relaxed mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              CharlaIA es un espacio de reflexión y diálogo sobre el impacto de la inteligencia artificial 
              en nuestras vidas, nuestras comunidades, y nuestras formas de crear y compartir conocimiento. 
              A través de conversaciones profundas y experiencias compartidas, exploramos tanto las 
              posibilidades como los desafíos de estas tecnologías emergentes.
            </p>
            <p 
              className="text-lg font-['Roboto_Flex'] leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Cada sesión combina reflexión teórica con experimentación práctica, siempre desde una 
              perspectiva humanística que pone a las personas y las comunidades en el centro del 
              diálogo tecnológico.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-['Fraunces'] font-bold text-center mb-12"
            style={{ color: 'var(--text-primary)' }}
          >
            Temas de Conversación
          </h2>
          
          <div className="space-y-6">
            {talkSections.map((section) => {
              const IconComponent = section.icon;
              const isExpanded = expandedSection === section.id;
              
              return (
                <div 
                  key={section.id}
                  className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{ 
                    backgroundColor: 'var(--bg-secondary)',
                    boxShadow: 'var(--shadow)'
                  }}
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:opacity-80 transition-opacity"
                  >
                    <div className="flex items-center space-x-4">
                      <div 
                        className="p-3 rounded-lg"
                        style={{ backgroundColor: 'var(--bg-primary)' }}
                      >
                        <IconComponent 
                          size={24} 
                          style={{ color: 'var(--accent)' }}
                        />
                      </div>
                      <div>
                        <h3 
                          className="text-xl font-['Fraunces'] font-semibold mb-2"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {section.title}
                        </h3>
                        <p 
                          className="text-sm font-['Roboto_Flex']"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {section.description}
                        </p>
                      </div>
                    </div>
                    <ChevronDown 
                      className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                      size={24}
                      style={{ color: 'var(--text-secondary)' }}
                    />
                  </button>
                  
                  {isExpanded && (
                    <div className="px-6 pb-6">
                      <div className="flex flex-col lg:flex-row gap-8">
                        <div className="lg:w-2/3">
                          <p 
                            className="text-base font-['Roboto_Flex'] leading-relaxed"
                            style={{ color: 'var(--text-secondary)' }}
                          >
                            {section.content}
                          </p>
                        </div>
                        {section.image && (
                          <div className="lg:w-1/3">
                            <img 
                              src={section.image} 
                              alt={section.title}
                              className="w-full h-64 object-cover rounded-lg"
                              style={{ 
                                boxShadow: 'var(--shadow)',
                                border: '1px solid var(--border)'
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className="p-8 rounded-2xl"
            style={{ 
              backgroundColor: 'var(--bg-secondary)',
              boxShadow: 'var(--shadow)'
            }}
          >
            <h2 
              className="text-2xl md:text-3xl font-['Fraunces'] font-bold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Únete a la Conversación
            </h2>
            <p 
              className="text-lg font-['Roboto_Flex'] leading-relaxed mb-8"
              style={{ color: 'var(--text-secondary)' }}
            >
              CharlaIA es un espacio abierto para explorar juntos el futuro de la inteligencia artificial. 
              Cada conversación nos ayuda a construir una comprensión más profunda y humanística de estas 
              tecnologías emergentes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-3 rounded-lg font-['Sono'] font-medium transition-all duration-300 hover:transform hover:-translate-y-1"
                style={{ 
                  backgroundColor: 'var(--accent)',
                  color: 'var(--bg-primary)',
                  boxShadow: 'var(--shadow)'
                }}
              >
                Próximas Sesiones
              </button>
              <button 
                className="px-8 py-3 rounded-lg font-['Sono'] font-medium transition-all duration-300 hover:opacity-80"
                style={{ 
                  backgroundColor: 'transparent',
                  color: 'var(--text-primary)',
                  border: '2px solid var(--border)'
                }}
              >
                Recursos y Material
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}