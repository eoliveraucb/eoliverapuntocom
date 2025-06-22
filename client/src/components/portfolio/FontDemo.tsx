import { useState } from "react";

export function FontDemo() {
  const [fontWeight, setFontWeight] = useState(400);
  const [selectedVariation, setSelectedVariation] = useState("regular");

  const fontVariations = [
    { 
      name: "Light", 
      key: "light", 
      weight: 300, 
      text: "Typography is the craft of endowing human language with a durable visual form." 
    },
    { 
      name: "Regular", 
      key: "regular", 
      weight: 400, 
      text: "Good typography is invisible, but great typography is unforgettable." 
    },
    { 
      name: "Medium", 
      key: "medium", 
      weight: 500, 
      text: "The details are not the details. They make the design." 
    },
    { 
      name: "Bold", 
      key: "bold", 
      weight: 700, 
      text: "Simplicity is the ultimate sophistication in design." 
    },
  ];

  return (
    <section 
      id="font-demo" 
      className="section text-center theme-transition"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="container">
        <h2 className="mb-8" style={{ color: 'var(--text-primary)' }}>
          Typography Exploration
        </h2>
        
        <p className="text-xl mb-12 max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          Discover the power of variable fonts and responsive typography. 
          Interactive demonstrations of font weight, spacing, and hierarchy.
        </p>

        {/* Font Weight Slider */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="mb-6">
            <h3 className="mb-4" style={{ color: 'var(--text-primary)' }}>
              Interactive Font Weight
            </h3>
            
            <div 
              className="text-4xl md:text-6xl font-['Fraunces'] leading-tight mb-6 transition-all duration-300"
              style={{ 
                fontWeight: fontWeight,
                color: 'var(--text-primary)'
              }}
            >
              Beautiful Typography
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>100</span>
              <input
                type="range"
                min="100"
                max="900"
                step="100"
                value={fontWeight}
                onChange={(e) => setFontWeight(Number(e.target.value))}
                className="flex-1 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                style={{ 
                  background: `linear-gradient(to right, var(--accent-primary), var(--accent-secondary))` 
                }}
              />
              <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>900</span>
            </div>
            
            <div 
              className="mt-2 text-sm font-medium"
              style={{ color: 'var(--accent-primary)' }}
            >
              Weight: {fontWeight}
            </div>
          </div>
        </div>

        {/* Font Variations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fontVariations.map((variation) => (
            <div
              key={variation.key}
              className={`variation-item p-6 rounded-lg cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 ${
                selectedVariation === variation.key ? "ring-2" : ""
              }`}
              style={{ 
                backgroundColor: 'var(--bg-secondary)',
                boxShadow: 'var(--shadow)',
                ringColor: selectedVariation === variation.key ? 'var(--accent-primary)' : 'transparent',
              }}
              onClick={() => setSelectedVariation(variation.key)}
            >
              <div className="mb-4">
                <h4 
                  className="text-lg font-semibold mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {variation.name}
                </h4>
                
                <div 
                  className="text-sm mb-3"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Weight: {variation.weight}
                </div>
              </div>
              
              <div 
                className="text-sm leading-relaxed font-['Fraunces']"
                style={{ 
                  fontWeight: variation.weight,
                  color: 'var(--text-primary)'
                }}
              >
                {variation.text}
              </div>
            </div>
          ))}
        </div>

        {/* Typography Principles */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "fa-eye",
              title: "Readability",
              description: "Ensuring text is easily readable across all devices and screen sizes through careful attention to contrast, spacing, and font selection."
            },
            {
              icon: "fa-mobile-alt",
              title: "Responsive Design",
              description: "Typography that adapts fluidly to different screen sizes while maintaining hierarchy and visual harmony."
            },
            {
              icon: "fa-universal-access",
              title: "Accessibility",
              description: "Inclusive design practices that ensure typography is accessible to users with diverse abilities and needs."
            }
          ].map((principle, index) => (
            <div 
              key={index}
              className="text-center p-6"
            >
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--accent-primary)' }}
              >
                <i className={`fas ${principle.icon} text-2xl text-white`}></i>
              </div>
              
              <h4 
                className="text-xl font-semibold mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
                {principle.title}
              </h4>
              
              <p style={{ color: 'var(--text-secondary)' }}>
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
