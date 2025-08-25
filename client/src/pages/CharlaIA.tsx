import { useState, useEffect } from "react";
import { 
  Clock, Menu, X, Play, Presentation, Lightbulb, Heart, 
  RefreshCw, Palette, ArrowUp, ArrowDown, ChevronDown, Users,
  Brain, Cpu, Cog, Zap
} from "lucide-react";

export default function CharlaIA() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [timerRunning, setTimerRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [timerDisplay, setTimerDisplay] = useState('15:00');

  // Timer functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (timerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          const newTime = prev - 1;
          const minutes = Math.floor(newTime / 60);
          const seconds = newTime % 60;
          setTimerDisplay(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
          
          if (newTime <= 0) {
            setTimerRunning(false);
            alert('¡Tiempo terminado! Prepárense para las presentaciones.');
            setTimeLeft(15 * 60);
            setTimerDisplay('15:00');
            return 15 * 60;
          }
          
          return newTime;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerRunning, timeLeft]);

  // Navigation functionality
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const startTimer = () => {
    if (!timerRunning) {
      setTimerRunning(true);
    }
  };

  const navLinks = [
    { href: 'inicio', label: 'Inicio' },
    { href: 'introduccion', label: 'Introducción' },
    { href: 'ingenieria', label: 'Ingeniería' },
    { href: 'generativa', label: 'IA Generativa' },
    { href: 'agentes', label: 'Agentes' },
    { href: 'revolucion', label: 'Revolución' },
    { href: 'ejercicio', label: 'Ejercicio' }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50"
        style={{ 
          backgroundColor: 'rgba(17, 24, 39, 0.9)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border)'
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center px-6 py-4">
            <div className="flex items-center gap-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                NUR
              </div>
              <h1 
                className="text-xl font-['Fraunces'] font-semibold"
                style={{ color: 'var(--text-primary)' }}
              >
                Universidad NUR
              </h1>
            </div>
            
            <div className="hidden md:flex gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm font-['Sono'] font-medium transition-colors cursor-pointer ${
                    activeSection === link.href ? 'text-accent' : 'text-secondary hover:text-accent'
                  }`}
                  style={{ 
                    color: activeSection === link.href ? 'var(--accent)' : 'var(--text-secondary)'
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
            
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ color: 'var(--text-secondary)' }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {mobileMenuOpen && (
            <div 
              className="md:hidden border-t"
              style={{ 
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--border)'
              }}
            >
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-6 py-3 text-sm font-['Sono'] font-medium transition-all"
                  style={{ 
                    color: activeSection === link.href ? 'var(--accent)' : 'var(--text-secondary)',
                    backgroundColor: activeSection === link.href ? 'rgba(59, 130, 246, 0.05)' : 'transparent'
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-16 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div 
              className="inline-block px-4 py-2 rounded-full text-sm font-['Sono'] font-medium mb-4"
              style={{ 
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                color: 'var(--accent)'
              }}
            >
              Postgrado Ingeniería Comercial • 80 estudiantes • 80 minutos
            </div>
            
            <h1 
              className="text-4xl md:text-6xl font-['Fraunces'] font-bold mb-6 leading-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              Making Sense of AI<br />
              <span style={{ color: 'var(--accent)' }}>in a Degenerative World</span>
            </h1>
            
            <p 
              className="text-xl max-w-4xl mx-auto mb-8 font-['Roboto_Flex']"
              style={{ color: 'var(--text-secondary)' }}
            >
              Una sesión intensiva de 80 minutos diseñada para estudiantes de postgrado en Ingeniería Comercial:
              desde los fundamentos de IA hasta estrategias empresariales innovadoras y oportunidades de liderazgo.
            </p>
            
            {/* Agenda Box */}
            <div 
              className="max-w-5xl mx-auto p-6 rounded-xl mb-8"
              style={{ 
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow)'
              }}
            >
              <h3 
                className="text-lg font-['Fraunces'] font-semibold mb-4 flex items-center justify-center gap-2"
                style={{ color: 'var(--text-primary)' }}
              >
                <Clock size={20} style={{ color: 'var(--accent)' }} />
                Agenda de la Sesión (80 minutos)
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                <div className="text-center p-3 rounded-lg bg-blue-900">
                  <div className="font-semibold text-white mb-1">Introducción</div>
                  <div className="text-blue-300">10 min</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-green-900">
                  <div className="font-semibold text-white mb-1">Ingeniería</div>
                  <div className="text-green-300">15 min</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-purple-900">
                  <div className="font-semibold text-white mb-1">IA Generativa</div>
                  <div className="text-purple-300">15 min</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-teal-100">
                  <div className="font-semibold text-teal-800 mb-1">Agentes</div>
                  <div className="text-teal-600">10 min</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-red-100">
                  <div className="font-semibold text-red-800 mb-1">Revolución</div>
                  <div className="text-red-600">10 min</div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <div className="inline-block p-3 rounded-lg bg-orange-100">
                  <div className="font-semibold text-orange-800 mb-1">Ejercicio Grupal + Presentaciones</div>
                  <div className="text-orange-600">20 minutos (15 min trabajo + 5 min presentaciones)</div>
                </div>
              </div>
            </div>
            
            {/* Presenter Info */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div 
                  className="w-12 h-12 rounded-full overflow-hidden"
                  style={{ backgroundColor: 'var(--bg-secondary)' }}
                >
                  {/* Profile photo placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                    EO
                  </div>
                </div>
                <div>
                  <a 
                    href="https://www.linkedin.com/in/emolivera/?locale=es_ES" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-['Fraunces'] font-semibold no-underline"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Edwin Mauricio Olivera
                  </a>
                  <p className="text-sm font-['Sono']" style={{ color: 'var(--text-secondary)' }}>
                    Profesor de Diseño Digital
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-px h-8" style={{ backgroundColor: 'var(--border)' }}></div>
              <p className="text-sm font-['Sono']" style={{ color: 'var(--text-secondary)' }}>
                Sesión presencial • Universidad NUR
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduccion" className="py-16" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-['Sono'] font-medium mb-4"
              style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent)' }}
            >
              Parte 1
            </span>
            <h2 className="text-3xl md:text-4xl font-['Fraunces'] font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Introducción: El Contexto Degenerativo
            </h2>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              Entendiendo el momento histórico en el que vivimos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Earth from space showing climate change effects"
                className="w-full rounded-xl"
                style={{ boxShadow: 'var(--shadow)' }}
              />
            </div>
            <div>
              <h3 className="text-2xl font-['Fraunces'] font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
                Un Mundo en Transformación
              </h3>
              <div className="space-y-4">
                <div 
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border)' }}
                >
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    Crisis Sistémicas Interconectadas
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Cambio climático, desigualdad social, polarización política y crisis de confianza institucional
                  </p>
                </div>
                <div 
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border)' }}
                >
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    Aceleración Tecnológica
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    IA, automatización y transformación digital redefiniendo sectores completos
                  </p>
                </div>
                <div 
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border)' }}
                >
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    Nuevas Oportunidades
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Liderazgo consciente, innovación regenerativa y empresas con propósito
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Section */}
      <section id="ingenieria" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-['Sono'] font-medium mb-4"
              style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', color: 'rgb(34, 197, 94)' }}
            >
              Parte 2
            </span>
            <h2 className="text-3xl md:text-4xl font-['Fraunces'] font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              La Nueva Ingeniería de Sistemas
            </h2>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              Desde procesos lineales hacia ecosistemas adaptativos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="p-6 rounded-xl"
              style={{ backgroundColor: 'var(--bg-secondary)', boxShadow: 'var(--shadow)' }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: 'var(--bg-primary)' }}
              >
                <Cog size={24} style={{ color: 'rgb(34, 197, 94)' }} />
              </div>
              <h3 className="text-xl font-['Fraunces'] font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                Ingeniería Tradicional
              </h3>
              <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                Procesos lineales, optimización local, eficiencia como meta principal
              </p>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <li>• Análisis causa-efecto simple</li>
                <li>• Optimización de procesos aislados</li>
                <li>• Métricas de productividad</li>
              </ul>
            </div>

            <div 
              className="p-6 rounded-xl"
              style={{ backgroundColor: 'var(--bg-secondary)', boxShadow: 'var(--shadow)' }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: 'var(--bg-primary)' }}
              >
                <Brain size={24} style={{ color: 'var(--accent)' }} />
              </div>
              <h3 className="text-xl font-['Fraunces'] font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                Ingeniería de IA
              </h3>
              <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                Sistemas adaptativos, aprendizaje continuo, emergencia como característica
              </p>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <li>• Patrones complejos emergentes</li>
                <li>• Sistemas auto-organizados</li>
                <li>• Métricas de adaptabilidad</li>
              </ul>
            </div>

            <div 
              className="p-6 rounded-xl"
              style={{ backgroundColor: 'var(--bg-secondary)', boxShadow: 'var(--shadow)' }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: 'var(--bg-primary)' }}
              >
                <Zap size={24} style={{ color: 'rgb(147, 51, 234)' }} />
              </div>
              <h3 className="text-xl font-['Fraunces'] font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                Ingeniería Regenerativa
              </h3>
              <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                Sistemas que mejoran el entorno, impacto positivo neto, sostenibilidad integral
              </p>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <li>• Ciclos regenerativos</li>
                <li>• Valor stakeholder integral</li>
                <li>• Métricas de impacto sistémico</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Generative AI Section */}
      <section id="generativa" className="py-16" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-['Sono'] font-medium mb-4"
              style={{ backgroundColor: 'rgba(147, 51, 234, 0.1)', color: 'rgb(147, 51, 234)' }}
            >
              Parte 3
            </span>
            <h2 className="text-3xl md:text-4xl font-['Fraunces'] font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              IA Generativa: El Nuevo Lenguaje de Negocios
            </h2>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              Transformando la creatividad y la producción de contenido
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="AI generating creative content"
                className="w-full rounded-xl"
                style={{ boxShadow: 'var(--shadow)' }}
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-['Fraunces'] font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Capacidades Emergentes
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgb(147, 51, 234)' }}
                    >
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                        Generación de Texto y Código
                      </h4>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        Desde estrategias de marketing hasta prototipos funcionales
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgb(147, 51, 234)' }}
                    >
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                        Análisis y Síntesis de Datos
                      </h4>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        Transformar información compleja en insights accionables
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgb(147, 51, 234)' }}
                    >
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                        Personalización a Escala
                      </h4>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        Experiencias únicas para cada cliente y contexto
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section id="agentes" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-['Sono'] font-medium mb-4"
              style={{ backgroundColor: 'rgba(20, 184, 166, 0.1)', color: 'rgb(20, 184, 166)' }}
            >
              Parte 4
            </span>
            <h2 className="text-3xl md:text-4xl font-['Fraunces'] font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Agentes Inteligentes: Tu Nuevo Equipo
            </h2>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              Delegación inteligente y colaboración humano-máquina
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="p-6 rounded-xl"
              style={{ backgroundColor: 'var(--bg-secondary)', boxShadow: 'var(--shadow)' }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: 'rgba(20, 184, 166, 0.1)' }}
              >
                <Cpu size={24} style={{ color: 'rgb(20, 184, 166)' }} />
              </div>
              <h3 className="text-xl font-['Fraunces'] font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                Agentes Reactivos
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Responden a estímulos específicos. Ideales para tareas rutinarias y procesos bien definidos.
              </p>
            </div>

            <div 
              className="p-6 rounded-xl"
              style={{ backgroundColor: 'var(--bg-secondary)', boxShadow: 'var(--shadow)' }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: 'rgba(20, 184, 166, 0.1)' }}
              >
                <Brain size={24} style={{ color: 'rgb(20, 184, 166)' }} />
              </div>
              <h3 className="text-xl font-['Fraunces'] font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                Agentes con Memoria
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Aprenden de experiencias pasadas. Perfectos para personalización y mejora continua.
              </p>
            </div>

            <div 
              className="p-6 rounded-xl"
              style={{ backgroundColor: 'var(--bg-secondary)', boxShadow: 'var(--shadow)' }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: 'rgba(20, 184, 166, 0.1)' }}
              >
                <Users size={24} style={{ color: 'rgb(20, 184, 166)' }} />
              </div>
              <h3 className="text-xl font-['Fraunces'] font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                Agentes Colaborativos
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Trabajan en equipo con otros agentes y humanos. El futuro del trabajo distribuido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Revolution Section */}
      <section id="revolucion" className="py-16" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-['Sono'] font-medium mb-4"
              style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: 'rgb(239, 68, 68)' }}
            >
              Parte 5
            </span>
            <h2 className="text-3xl md:text-4xl font-['Fraunces'] font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Tu Rol en la Revolución o el Anomie
            </h2>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              Decidiendo nuestro futuro colectivo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Group of diverse people looking towards a bright future horizon"
                className="w-full rounded-xl"
                style={{ boxShadow: 'var(--shadow)' }}
              />
            </div>
            <div>
              <h3 className="text-2xl font-['Fraunces'] font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
                Dos Caminos Divergentes
              </h3>
              <div className="space-y-6">
                <div className="p-6 rounded-lg bg-green-50">
                  <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                    <ArrowUp size={20} className="mr-2" />
                    Revolución: Adaptación y Crecimiento
                  </h4>
                  <p className="text-green-700 text-sm">
                    Abrazar el cambio, desarrollar nuevas habilidades, liderar la transformación
                    digital y crear oportunidades para otros.
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-red-50">
                  <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                    <ArrowDown size={20} className="mr-2" />
                    Anomie: Resistencia y Estancamiento
                  </h4>
                  <p className="text-red-700 text-sm">
                    Resistir el cambio, mantener el status quo, quedarse atrás
                    y eventualmente ser reemplazado por la tecnología.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div 
            className="p-8 rounded-xl"
            style={{ background: 'linear-gradient(to right, rgb(239 246 255), rgb(250 245 255))' }}
          >
            <h3 className="text-2xl font-['Fraunces'] font-semibold text-center mb-6" style={{ color: 'var(--text-primary)' }}>
              Habilidades para el Futuro
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb size={24} className="text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Pensamiento Crítico</h4>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Analizar, evaluar y sintetizar información compleja</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Palette size={24} className="text-green-600" />
                </div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Creatividad</h4>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Generar ideas innovadoras y soluciones únicas</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <Heart size={24} className="text-purple-600" />
                </div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Inteligencia Emocional</h4>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Entender y gestionar emociones propias y ajenas</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                  <RefreshCw size={24} className="text-orange-600" />
                </div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Adaptabilidad</h4>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Flexibilidad ante cambios constantes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Group Exercise Section */}
      <section id="ejercicio" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-['Sono'] font-medium mb-4"
              style={{ backgroundColor: 'rgba(249, 115, 22, 0.1)', color: 'rgb(249, 115, 22)' }}
            >
              Parte 6
            </span>
            <h2 className="text-3xl md:text-4xl font-['Fraunces'] font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Ejercicio Grupal
            </h2>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              Aplicando los conceptos aprendidos
            </p>
          </div>

          {/* Interactive Group Exercise */}
          <div 
            className="p-8 rounded-xl mb-12"
            style={{ 
              backgroundColor: 'var(--bg-secondary)', 
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow)'
            }}
          >
            <h3 className="text-2xl font-['Fraunces'] font-semibold text-center mb-6" style={{ color: 'var(--text-primary)' }}>
              Diseña tu Agente de IA Personal
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-['Fraunces'] font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Instrucciones del Ejercicio
                </h4>
                <div className="space-y-4">
                  {[
                    { number: '1', title: 'Forma grupos de 4-5 personas', desc: '16 grupos de futuros líderes empresariales' },
                    { number: '2', title: 'Identifica un problema empresarial', desc: 'En el contexto boliviano o latinoamericano' },
                    { number: '3', title: 'Diseña un agente de IA', desc: 'Que resuelva ese problema específico' },
                    { number: '4', title: 'Presenta tu propuesta', desc: '3 minutos por grupo (presentaciones seleccionadas)' }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span 
                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                        style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent)' }}
                      >
                        {step.number}
                      </span>
                      <div>
                        <h5 className="font-medium" style={{ color: 'var(--text-primary)' }}>{step.title}</h5>
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-['Fraunces'] font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Plantilla de Trabajo
                </h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                      Problema Identificado:
                    </label>
                    <textarea 
                      className="w-full p-3 rounded-lg text-sm resize-none"
                      style={{ 
                        backgroundColor: 'var(--bg-primary)', 
                        border: '1px solid var(--border)',
                        color: 'var(--text-primary)'
                      }}
                      placeholder="Describe un problema empresarial específico en Bolivia o Latinoamérica..."
                      rows={3}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                      Tipo de Agente:
                    </label>
                    <select 
                      className="w-full p-3 rounded-lg text-sm"
                      style={{ 
                        backgroundColor: 'var(--bg-primary)', 
                        border: '1px solid var(--border)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      <option value="">Selecciona un tipo...</option>
                      <option value="reactive">Agente Reactivo</option>
                      <option value="memory">Agente con Memoria</option>
                      <option value="collaborative">Agente Colaborativo</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                      Funcionalidades Principales:
                    </label>
                    <textarea 
                      className="w-full p-3 rounded-lg text-sm resize-none"
                      style={{ 
                        backgroundColor: 'var(--bg-primary)', 
                        border: '1px solid var(--border)',
                        color: 'var(--text-primary)'
                      }}
                      placeholder="¿Qué puede hacer tu agente?"
                      rows={3}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                      Impacto Esperado:
                    </label>
                    <textarea 
                      className="w-full p-3 rounded-lg text-sm resize-none"
                      style={{ 
                        backgroundColor: 'var(--bg-primary)', 
                        border: '1px solid var(--border)',
                        color: 'var(--text-primary)'
                      }}
                      placeholder="¿Cómo transformará el negocio o la industria?"
                      rows={2}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 rounded-lg bg-yellow-50">
              <h4 className="font-semibold text-yellow-800 mb-3 flex items-center">
                <Clock size={20} className="mr-2" />
                Tiempo de Trabajo: 15 minutos
              </h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-medium text-yellow-800">Brainstorming:</span>
                  <span className="text-yellow-700 ml-2">4 minutos</span>
                </div>
                <div>
                  <span className="font-medium text-yellow-800">Desarrollo:</span>
                  <span className="text-yellow-700 ml-2">8 minutos</span>
                </div>
                <div>
                  <span className="font-medium text-yellow-800">Preparación:</span>
                  <span className="text-yellow-700 ml-2">3 minutos</span>
                </div>
              </div>
            </div>

            {/* Timer Component */}
            <div className="mt-6 text-center">
              <button 
                onClick={startTimer}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-['Sono'] font-medium transition-all"
                style={{ 
                  backgroundColor: timerRunning ? 'rgb(75, 85, 99)' : 'var(--accent)',
                  color: 'white',
                  opacity: timerRunning ? 0.5 : 1,
                  cursor: timerRunning ? 'not-allowed' : 'pointer',
                  boxShadow: 'var(--shadow)'
                }}
                disabled={timerRunning}
              >
                {timerRunning ? (
                  <>
                    <Clock size={20} />
                    Ejercicio en Curso...
                  </>
                ) : (
                  <>
                    <Play size={20} />
                    Comenzar Ejercicio
                  </>
                )}
              </button>
              {timerRunning && (
                <div 
                  className="text-2xl font-bold mt-4"
                  style={{ color: 'var(--accent)' }}
                >
                  {timerDisplay}
                </div>
              )}
            </div>
          </div>

          {/* Presentation Guidelines */}
          <div 
            className="p-8 rounded-xl"
            style={{ backgroundColor: 'var(--bg-secondary)' }}
          >
            <h3 className="text-2xl font-['Fraunces'] font-semibold text-center mb-6" style={{ color: 'var(--text-primary)' }}>
              Guía para Presentaciones
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 flex items-center" style={{ color: 'var(--text-primary)' }}>
                  <Presentation size={20} className="mr-2 text-green-600" />
                  Estructura Sugerida
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Presentación del equipo (30 seg)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Problema identificado (1.5 min)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Solución propuesta (2 min)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Impacto esperado (1 min)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 flex items-center" style={{ color: 'var(--text-primary)' }}>
                  <Lightbulb size={20} className="mr-2" style={{ color: 'var(--accent)' }} />
                  Consejos Útiles
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <li className="flex items-start gap-2">
                    <span style={{ color: 'var(--accent)' }}>•</span>
                    <span>Sé específico y concreto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: 'var(--accent)' }}>•</span>
                    <span>Usa ejemplos reales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: 'var(--accent)' }}>•</span>
                    <span>Explica el 'por qué' del problema</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: 'var(--accent)' }}>•</span>
                    <span>Sé creativo pero realista</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: 'var(--text-primary)', color: 'white' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-content-center text-white font-bold"
                  style={{ backgroundColor: 'var(--accent)' }}
                >
                  NUR
                </div>
                <span className="font-['Fraunces'] font-semibold">Universidad NUR</span>
              </div>
              <p className="text-gray-300 text-sm">
                Formando líderes empresariales preparados para la era de la IA.
              </p>
            </div>
            <div>
              <h4 className="font-['Fraunces'] font-semibold mb-4">Contacto</h4>
              <div className="text-gray-300 text-sm space-y-1">
                <p>Edwin Mauricio Olivera</p>
                <p>eolivera@sva.edu</p>
                <p>Profesor de Diseño Digital</p>
              </div>
            </div>
            <div>
              <h4 className="font-['Fraunces'] font-semibold mb-4">Recursos</h4>
              <div className="space-y-2 text-sm">
                <a href="https://eolivera.com" className="block text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  Portfolio Personal
                </a>
                <a href="https://medium.com/@emauric.io" className="block text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  Artículos en Medium
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Materiales de Clase
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-8 text-center text-gray-300 text-sm">
            <p>&copy; 2024 Universidad NUR. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}