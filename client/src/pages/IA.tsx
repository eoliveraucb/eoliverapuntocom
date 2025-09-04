import { Header } from "@/components/portfolio/Header";
import { Contact } from "@/components/portfolio/Contact";
import qrCode1 from "@assets/image_1756988974425.png";
import qrCode2 from "@assets/image_1756988994735.png";

export default function IA() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 
              className="text-4xl md:text-5xl font-['Fraunces'] font-bold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Recursos de IA
            </h1>
            <p 
              className="text-xl max-w-3xl mx-auto font-['Roboto_Flex']"
              style={{ color: 'var(--text-secondary)' }}
            >
              Herramientas y recursos de inteligencia artificial para explorar y experimentar
            </p>
          </div>

          {/* QR Codes Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* First QR Code - Cats and Dogs */}
            <div 
              className="text-center p-8 rounded-xl"
              style={{ 
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow)'
              }}
            >
              <div className="mb-6">
                <img 
                  src={qrCode1}
                  alt="QR Code para herramienta de IA - Cats and Dogs"
                  className="w-64 h-64 mx-auto rounded-lg"
                  style={{ backgroundColor: 'white', padding: '16px' }}
                />
              </div>
              <h3 
                className="text-2xl font-['Fraunces'] font-semibold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                IA Vision: Cats & Dogs
              </h3>
              <p 
                className="text-base"
                style={{ color: 'var(--text-secondary)' }}
              >
                Herramienta de clasificación de imágenes usando IA para distinguir entre gatos y perros
              </p>
            </div>

            {/* Second QR Code */}
            <div 
              className="text-center p-8 rounded-xl"
              style={{ 
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow)'
              }}
            >
              <div className="mb-6">
                <img 
                  src={qrCode2}
                  alt="QR Code para recurso de IA"
                  className="w-64 h-64 mx-auto rounded-lg"
                  style={{ backgroundColor: 'white', padding: '16px' }}
                />
              </div>
              <h3 
                className="text-2xl font-['Fraunces'] font-semibold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                Recurso de IA
              </h3>
              <p 
                className="text-base"
                style={{ color: 'var(--text-secondary)' }}
              >
                Herramienta adicional de inteligencia artificial para experimentación
              </p>
            </div>
          </div>

          {/* Instructions Section */}
          <div 
            className="p-8 rounded-xl mb-16"
            style={{ 
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow)'
            }}
          >
            <h3 
              className="text-2xl font-['Fraunces'] font-semibold mb-6 text-center"
              style={{ color: 'var(--text-primary)' }}
            >
              Cómo Usar
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: 'var(--accent-primary)' }}
                >
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    Escanea el Código QR
                  </h4>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Usa la cámara de tu dispositivo móvil para escanear el código QR de la herramienta que deseas usar
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: 'var(--accent-primary)' }}
                >
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    Accede a la Herramienta
                  </h4>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    El código QR te llevará directamente a la aplicación de IA correspondiente
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: 'var(--accent-primary)' }}
                >
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    Experimenta y Aprende
                  </h4>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Prueba las funcionalidades de IA y explora las capacidades de cada herramienta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Contact id="contact" />
    </div>
  );
}