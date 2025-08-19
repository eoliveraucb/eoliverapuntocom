import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface Module {
  title: string;
  week: string;
  opening_ritual: string;
  core_activity: string;
  reflection: string;
  visual_metaphor: string;
  detailed_ritual: string;
  detailed_activity: string;
  detailed_reflection: string;
  tools: Array<{
    name: string;
    description: string;
    logo: string;
    type: 'free' | 'open_source';
  }>;
}

interface CourseData {
  course_title: string;
  course_description: string;
  bolivian_context: string;
  teaching_principles: string[];
  modules: Module[];
}

const courseData: CourseData = {
  course_title: "Curso Avanzado: IA Generativa y Agentes Inteligentes – Experiencia Transformadora y Corporal",
  course_description: "Un viaje experiencial a través del mundo de la IA, donde cada concepto se vive, se siente y se construye colectivamente en un contexto bilingüe boliviano.",
  bolivian_context: "Diseñado específicamente para el contexto boliviano, integrando metáforas culturales como el río Amazonas, las montañas andinas, y la sabiduría ancestral de la construcción colectiva.",
  teaching_principles: [
    "Aprendizaje somático y corporal",
    "Metáforas visuales y tangibles",
    "Estructuras liberadoras",
    "Construcción colectiva del conocimiento",
    "Integración de movimiento y reflexión",
    "Contexto cultural boliviano"
  ],
  modules: [
    {
      title: "El Latido del Flujo – Orquestando la Vida Digital",
      week: "Semana 1",
      opening_ritual: "El Pulso del Río – Círculo con palmas y pisadas simulando el fluir de datos",
      core_activity: "Construcción del Flujo Vivo – Representación corporal de nodos ETL con n8n",
      reflection: "Círculo de cosecha reflexiva sobre automatización consciente",
      visual_metaphor: "El río que lleva datos desde Google Sheets hasta el mar digital",
      detailed_ritual: "Comenzamos formando un círculo donde cada participante representa un punto de datos. Con palmas rítmicas que simulan el latido del corazón digital, creamos ondas sonoras que viajan por el grupo. Cada persona debe sincronizar su ritmo con el anterior, creando una cadena de pulsos que representa el flujo de información. Esta ceremonia de apertura conecta el cuerpo con los conceptos de ETL (Extract, Transform, Load) de manera visceral.",
      detailed_activity: "Los participantes se dividen en grupos de 5-7 personas para construir físicamente un pipeline de datos usando n8n. Cada grupo recibe tarjetas con diferentes fuentes de datos (Google Sheets, APIs, bases de datos) y deben crear una coreografía donde cada persona representa un nodo. Mientras una persona 'extrae' datos (movimientos de recolección), otra los 'transforma' (gestos de moldeo) y finalmente los 'carga' (movimientos de siembra). Simultáneamente, configuran el flujo real en n8n, conectando la experiencia corporal con la implementación técnica.",
      detailed_reflection: "En círculo de cosecha, cada participante comparte una palabra que representa su relación con la automatización. Luego, en parejas, exploran: ¿Qué aspectos de nuestro trabajo diario podríamos automatizar conscientemente? ¿Cómo mantenemos la humanidad en procesos automatizados? Culminamos con un ritual de compromiso donde cada persona establece una intención para implementar automatización ética en su contexto.",
      tools: [
        {
          name: "n8n",
          description: "Plataforma de automatización workflow de código abierto",
          logo: "https://docs.n8n.io/favicon.ico",
          type: "open_source"
        },
        {
          name: "Zapier",
          description: "Herramienta de automatización sin código (versión gratuita)",
          logo: "https://cdn.zapier.com/storage/favicon.ico",
          type: "free"
        },
        {
          name: "Apache Airflow",
          description: "Plataforma open-source para desarrollar, programar y monitorear workflows",
          logo: "https://airflow.apache.org/favicon.ico",
          type: "open_source"
        }
      ]
    },
    {
      title: "El Jardín de las Conversaciones – Cultivando Diálogos Inteligentes",
      week: "Semana 2",
      opening_ritual: "Danza de las Neuronas – Movimientos que simulan redes neuronales",
      core_activity: "Laboratorio de Prompt Engineering – Estaciones rotativas de experimentación",
      reflection: "World Café sobre ética en IA conversacional",
      visual_metaphor: "Jardín donde cada prompt es una semilla que florece en respuestas",
      detailed_ritual: "Iniciamos con una danza colectiva donde cada participante representa una neurona. Con brazos extendidos, creamos conexiones físicas entre nosotros, formando una red humana. A medida que la música fluye, las 'conexiones neuronales' se activan con toques suaves y movimientos sincronizados. Esta danza ayuda a comprender visceralmente cómo funcionan las redes neuronales y cómo la información se propaga a través de las conexiones.",
      detailed_activity: "Creamos un laboratorio viviente con 6 estaciones rotativas: 1) Estación de Claridad (prompts precisos), 2) Estación de Creatividad (prompts imaginativos), 3) Estación de Contexto (prompts con antecedentes), 4) Estación de Restricciones (prompts con límites), 5) Estación de Roles (prompts con personalidades), 6) Estación de Iteración (refinamiento de prompts). Cada grupo rota cada 15 minutos, experimentando con diferentes herramientas como ChatGPT, Claude, y modelos open-source como Ollama. Documentan sus descubrimientos en un 'herbario digital' colectivo.",
      detailed_reflection: "Organizamos un World Café con 4 mesas temáticas: 'Sesgos en IA Conversacional', 'Privacidad y Datos Personales', 'Dependencia vs Autonomía', y 'IA como Herramienta de Inclusión'. Los participantes rotan entre mesas, construyendo ideas colectivamente. Cada mesa tiene un anfitrión que captura los insights principales. Finalizamos con una síntesis plenaria donde cada mesa presenta sus conclusiones más provocadoras.",
      tools: [
        {
          name: "Ollama",
          description: "Ejecuta modelos de lenguaje localmente de forma gratuita",
          logo: "https://ollama.ai/public/ollama.png",
          type: "open_source"
        },
        {
          name: "LM Studio",
          description: "Interfaz desktop para ejecutar LLMs localmente",
          logo: "https://lmstudio.ai/favicon.ico",
          type: "free"
        },
        {
          name: "ChatGPT",
          description: "Modelo de lenguaje conversacional (versión gratuita disponible)",
          logo: "https://chat.openai.com/favicon.ico",
          type: "free"
        },
        {
          name: "Hugging Face",
          description: "Plataforma con modelos open-source gratuitos",
          logo: "https://huggingface.co/favicon.ico",
          type: "open_source"
        }
      ]
    },
    {
      title: "La Telaraña de Conocimiento – Tejiendo RAG Consciente",
      week: "Semana 3-4",
      opening_ritual: "Tejer Juntos – Actividad física de construcción de red",
      core_activity: "Construcción de RAG Vivencial – Teatro de documentos y vectores",
      reflection: "Fishbowl sobre responsabilidad en sistemas de conocimiento",
      visual_metaphor: "Telaraña andina donde cada hilo conecta conocimientos",
      detailed_ritual: "Comenzamos con un gran ovillo de lana que se pasa entre participantes. Cada persona, antes de lanzarlo a alguien más, debe compartir un conocimiento o experiencia. Mientras tanto, mantiene un extremo del hilo, creando físicamente una telaraña de conocimiento interconectado. Esta actividad visceral demuestra cómo RAG (Retrieval-Augmented Generation) conecta información dispersa para crear nuevos conocimientos.",
      detailed_activity: "Dividimos el espacio en tres zonas: 'Biblioteca Viviente' (participantes actúan como documentos), 'Vector Store' (área donde se categorizan y almacenan), y 'Query Engine' (donde se procesan preguntas). Los participantes rotan entre roles: algunos son documentos que contienen información específica, otros son vectores que ayudan a encontrar similitudes, y algunos son el motor de consulta que debe recuperar y sintetizar información. Paralelamente, construyen un RAG real usando herramientas como LangChain, ChromaDB y embedding models open-source.",
      detailed_reflection: "Implementamos un Fishbowl con 5 sillas en el centro y el resto del grupo en círculo exterior. Los temas de discusión incluyen: ¿Cómo asegurar la calidad de las fuentes en RAG? ¿Qué responsabilidad tenemos sobre la información que nuestros sistemas reproducen? ¿Cómo evitar que RAG perpetúe sesgos históricos? Los participantes pueden entrar al centro para contribuir y deben salir cuando alguien más quiere participar. Esta dinámica asegura rotación de voces y profundidad en la reflexión.",
      tools: [
        {
          name: "LangChain",
          description: "Framework open-source para desarrollar aplicaciones con LLMs",
          logo: "https://python.langchain.com/favicon.ico",
          type: "open_source"
        },
        {
          name: "ChromaDB",
          description: "Base de datos vectorial open-source",
          logo: "https://www.trychroma.com/favicon.ico",
          type: "open_source"
        },
        {
          name: "Weaviate",
          description: "Base de datos vectorial open-source con GraphQL",
          logo: "https://weaviate.io/favicon.ico",
          type: "open_source"
        },
        {
          name: "Pinecone",
          description: "Base de datos vectorial (tier gratuito disponible)",
          logo: "https://www.pinecone.io/favicon.ico",
          type: "free"
        }
      ]
    },
    {
      title: "Los Guardianes del Saber – Agentes que Cuidan y Protegen",
      week: "Semana 5-6",
      opening_ritual: "Ceremonia de los Guardianes – Roles y compromisos éticos",
      core_activity: "Creación de Agentes Guardianes – Talleres colaborativos",
      reflection: "Open Space sobre el futuro de los agentes inteligentes",
      visual_metaphor: "Guardianes ancestrales que protegen el conocimiento sagrado",
      detailed_ritual: "Iniciamos con una ceremonia donde cada participante recibe un símbolo físico (piedra, semilla, o amuleto) que representa su compromiso como guardián digital. En círculo, cada persona declara qué aspecto del conocimiento se compromete a proteger: privacidad, veracidad, accesibilidad, o diversidad. Este ritual establece un marco ético personal antes de crear agentes autónomos.",
      detailed_activity: "Los participantes forman equipos de 4-5 personas para diseñar y construir un agente inteligente con propósito social. Cada equipo debe definir: la misión ética del agente, sus límites de acción, mecanismos de transparencia, y protocolos de responsabilidad. Usando frameworks como AutoGPT, CrewAI o LangGraph, construyen agentes que pueden ser: moderadores de contenido conscientes del sesgo, asistentes educativos culturalmente apropiados, o curadores de información con verificación de fuentes. Cada agente debe incluir un 'código ético' programado.",
      detailed_reflection: "Organizamos un Open Space Technology donde los participantes proponen y moderan sus propias sesiones sobre el futuro de los agentes inteligentes. Temas pueden incluir: 'Agentes como Ciudadanos Digitales', 'IA Emocional y Manipulación', 'Agentes Colaborativos vs Competitivos', 'Regulación de Agentes Autónomos'. No hay agenda fija - los participantes votan con sus pies, moviéndose libremente entre conversaciones que les interesan.",
      tools: [
        {
          name: "AutoGPT",
          description: "Framework open-source para agentes autónomos",
          logo: "https://news.agpt.co/content/images/size/w256h256/2023/04/Auto-GPT-Logo.png",
          type: "open_source"
        },
        {
          name: "CrewAI",
          description: "Framework para crear equipos de agentes colaborativos",
          logo: "https://crewai.com/favicon.ico",
          type: "open_source"
        },
        {
          name: "LangGraph",
          description: "Framework para construir agentes stateful y multi-actor",
          logo: "https://python.langchain.com/favicon.ico",
          type: "open_source"
        },
        {
          name: "Rasa",
          description: "Framework open-source para construir asistentes conversacionales",
          logo: "https://rasa.com/favicon.ico",
          type: "open_source"
        }
      ]
    }
  ]
};

export default function TallerIA() {
  const [openModules, setOpenModules] = useState<number[]>([]);
  const [activeModule, setActiveModule] = useState(0);

  const toggleModule = (index: number) => {
    setOpenModules(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const updateProgress = (index: number) => {
    setActiveModule(index);
  };

  useEffect(() => {
    // Auto-open first module
    setOpenModules([0]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-teal-600 to-green-700 text-white py-8 relative overflow-hidden rounded-b-3xl shadow-lg">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-y-6"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-lg">
            {courseData.course_title}
          </h1>
          <p className="text-xl max-w-4xl leading-relaxed opacity-95">
            {courseData.course_description}
          </p>
          
          {/* Progress Bar */}
          <div className="mt-8">
            <div className="h-2 bg-white/30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                style={{ width: `${((activeModule + 1) / courseData.modules.length) * 100}%` }}
              />
            </div>
            <div className="flex justify-between mt-3">
              {courseData.modules.map((module, index) => (
                <button
                  key={index}
                  onClick={() => updateProgress(index)}
                  className={`flex flex-col items-center cursor-pointer transition-all duration-300 hover:transform hover:scale-110 ${
                    index <= activeModule ? 'text-yellow-300' : 'text-white/60'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full mb-2 transition-all duration-300 ${
                    index <= activeModule ? 'bg-yellow-400 scale-125' : 'bg-white/40'
                  }`} />
                  <span className="text-sm font-medium">{module.week}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Bolivian Context */}
        <section className="bg-gradient-to-br from-orange-600 to-red-700 text-white p-8 rounded-3xl mb-8 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full transform translate-x-32 -translate-y-32"></div>
          <h2 className="text-2xl font-bold mb-4 relative z-10">Contexto Boliviano</h2>
          <p className="text-lg leading-relaxed relative z-10 max-w-4xl">
            {courseData.bolivian_context}
          </p>
        </section>

        {/* Teaching Principles */}
        <section className="bg-white rounded-3xl p-8 mb-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8 text-purple-800">
            Principios Pedagógicos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseData.teaching_principles.map((principle, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:scale-105 border-l-4 border-teal-500"
              >
                <p className="font-medium text-gray-800">{principle}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Modules */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8 text-purple-800">
            Módulos del Curso
          </h2>
          <div className="space-y-6">
            {courseData.modules.map((module, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                style={{
                  borderLeft: `6px solid ${
                    ['#5F9EA0', '#2E8B57', '#CD5C5C', '#483D8B'][index % 4]
                  }`
                }}
              >
                {/* Module Header */}
                <div
                  className="p-6 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleModule(index)}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="px-4 py-2 rounded-full text-white font-semibold text-sm"
                      style={{
                        backgroundColor: ['#5F9EA0', '#2E8B57', '#CD5C5C', '#483D8B'][index % 4]
                      }}
                    >
                      {module.week}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{module.title}</h3>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
                      openModules.includes(index) ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                {/* Module Content */}
                {openModules.includes(index) && (
                  <div className="px-6 pb-6">
                    {/* Ritual Section */}
                    <div className="mb-6 pl-4 border-l-3 border-teal-500">
                      <h4 className="font-bold text-lg mb-2 flex items-center gap-2 text-teal-700">
                        🔄 Ritual de Apertura
                      </h4>
                      <p className="text-gray-700 mb-2 font-medium">{module.opening_ritual}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{module.detailed_ritual}</p>
                    </div>

                    {/* Activity Section */}
                    <div className="mb-6 pl-4 border-l-3 border-green-500">
                      <h4 className="font-bold text-lg mb-2 flex items-center gap-2 text-green-700">
                        🛠️ Actividad Central
                      </h4>
                      <p className="text-gray-700 mb-2 font-medium">{module.core_activity}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{module.detailed_activity}</p>
                    </div>

                    {/* Tools Section */}
                    <div className="mb-6 pl-4 border-l-3 border-blue-500">
                      <h4 className="font-bold text-lg mb-3 flex items-center gap-2 text-blue-700">
                        🔧 Herramientas Recomendadas
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {module.tools.map((tool, toolIndex) => (
                          <div
                            key={toolIndex}
                            className="bg-gray-50 p-4 rounded-xl border hover:shadow-md transition-all duration-300"
                          >
                            <div className="flex items-center gap-3 mb-2">
                              <img
                                src={tool.logo}
                                alt={`${tool.name} logo`}
                                className="w-6 h-6"
                                onError={(e) => {
                                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjZjNmNGY2Ii8+CjxwYXRoIGQ9Ik0xMiA4VjE2TTggMTJIMTYiIHN0cm9rZT0iIzY5NzU4NSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHN2Zz4K';
                                }}
                              />
                              <h5 className="font-semibold text-gray-800">{tool.name}</h5>
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                tool.type === 'open_source' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-blue-100 text-blue-800'
                              }`}>
                                {tool.type === 'open_source' ? 'Open Source' : 'Gratuito'}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600">{tool.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Reflection Section */}
                    <div className="mb-6 pl-4 border-l-3 border-purple-500">
                      <h4 className="font-bold text-lg mb-2 flex items-center gap-2 text-purple-700">
                        💭 Reflexión
                      </h4>
                      <p className="text-gray-700 mb-2 font-medium">{module.reflection}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{module.detailed_reflection}</p>
                    </div>

                    {/* Visual Metaphor */}
                    <div
                      className="p-6 rounded-2xl relative overflow-hidden"
                      style={{
                        backgroundColor: ['rgba(95, 158, 160, 0.1)', 'rgba(46, 139, 87, 0.1)', 'rgba(205, 92, 92, 0.1)', 'rgba(72, 61, 139, 0.1)'][index % 4]
                      }}
                    >
                      <h4 className="font-bold text-lg mb-3 text-teal-700">
                        🎭 Metáfora Visual
                      </h4>
                      <p className="text-gray-700">{module.visual_metaphor}</p>
                      
                      {/* Animated Visual */}
                      <div className="mt-4 h-24 bg-gradient-to-r from-teal-100 to-blue-100 rounded-xl relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-full h-1 bg-gradient-to-r from-teal-400 to-blue-400 animate-pulse rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 bg-gray-100 mt-12 rounded-t-3xl">
        <p className="text-gray-600">
          © 2024 Curso Avanzado: IA Generativa y Agentes Inteligentes
        </p>
      </footer>
    </div>
  );
}