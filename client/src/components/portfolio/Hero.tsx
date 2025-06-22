import { useEffect, useState } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [fontWeight, setFontWeight] = useState(200);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate font weight on load
    const animateWeight = () => {
      let weight = 200;
      const interval = setInterval(() => {
        weight += 25;
        setFontWeight(weight);
        if (weight >= 800) {
          clearInterval(interval);
          // Animate back down for a subtle effect
          setTimeout(() => {
            const reverseInterval = setInterval(() => {
              weight -= 50;
              setFontWeight(weight);
              if (weight <= 400) {
                clearInterval(reverseInterval);
              }
            }, 100);
          }, 500);
        }
      }, 150);
    };
    
    setTimeout(animateWeight, 800);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="home" className="hero-bg min-h-screen flex items-center relative overflow-hidden">
      <div className="container">
        <div className="hero-content max-w-4xl relative z-10">
          <h1 
            className={`text-5xl md:text-7xl lg:text-8xl mb-6 transition-all duration-300 delay-200 font-['Sono'] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ 
              color: 'var(--text-primary)',
              fontWeight: fontWeight,
              lineHeight: '1.1'
            }}
          >
            Design Education &
            <span className="gradient-text block">Professional Practice</span>
          </h1>
          
          <p 
            className={`text-lg md:text-xl font-light mb-8 max-w-3xl transition-all duration-800 delay-400 font-['Sono'] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ color: 'var(--text-secondary)' }}
          >
            Hello! My name is Edwin Mauricio Olivera seeking opportunities in design faculty, curriculum design, emerging tech and interactive media.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-800 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <button 
              className="btn-primary btn-ripple px-8 py-4 font-['Sono']"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in touch
            </button>
            <button 
              className="btn-secondary px-8 py-4 font-['Sono']"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bounce-slow cursor-pointer"
        onClick={scrollToNext}
      >
        <i className="fas fa-chevron-down text-2xl" style={{ color: 'var(--text-secondary)' }}></i>
      </div>
    </section>
  );
}
