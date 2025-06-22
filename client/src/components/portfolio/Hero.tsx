import { useEffect, useState } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
            className={`text-6xl md:text-8xl font-bold mb-6 transition-all duration-800 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ color: 'var(--text-primary)' }}
          >
            Digital Design
            <span className="gradient-text block">Professor</span>
          </h1>
          
          <p 
            className={`text-xl md:text-2xl font-light mb-8 max-w-2xl transition-all duration-800 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ color: 'var(--text-secondary)' }}
          >
            Crafting beautiful digital experiences through innovative design education and cutting-edge typography research.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-800 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <button 
              className="btn-primary btn-ripple px-8 py-4"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </button>
            <button className="btn-secondary px-8 py-4">
              Download CV
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
