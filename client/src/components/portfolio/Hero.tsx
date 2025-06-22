import { useEffect, useState } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordWeights, setWordWeights] = useState({
    design: 200,
    education: 200,
    ampersand: 200,
    professional: 200,
    practice: 200
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Sequential font weight animation for each word
    const animateWords = () => {
      const animateWord = (wordKey: keyof typeof wordWeights, delay: number) => {
        setTimeout(() => {
          let weight = 200;
          const interval = setInterval(() => {
            weight += 50;
            setWordWeights(prev => ({ ...prev, [wordKey]: weight }));
            if (weight >= 800) {
              clearInterval(interval);
              // Settle to medium weight
              setTimeout(() => {
                setWordWeights(prev => ({ ...prev, [wordKey]: 500 }));
              }, 200);
            }
          }, 80);
        }, delay);
      };

      // Design .... Education ..........&....Professional.....Practice
      animateWord('design', 0);        // Start immediately
      animateWord('education', 800);    // After "Design" with pause
      animateWord('ampersand', 2000);   // Longer pause before "&"
      animateWord('professional', 2400); // Short pause after "&"
      animateWord('practice', 3200);    // Pause before "Practice"
    };
    
    setTimeout(animateWords, 800);
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
            className={`text-5xl md:text-7xl lg:text-8xl mb-6 delay-200 font-['Sono'] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ 
              color: 'var(--text-primary)',
              lineHeight: '1.1'
            }}
          >
            <span 
              className="transition-all duration-300"
              style={{ fontWeight: wordWeights.design }}
            >
              Design
            </span>{' '}
            <span 
              className="transition-all duration-300"
              style={{ fontWeight: wordWeights.education }}
            >
              Education
            </span>{' '}
            <span 
              className="transition-all duration-300"
              style={{ fontWeight: wordWeights.ampersand }}
            >
              &
            </span>
            <span className="gradient-text block">
              <span 
                className="transition-all duration-300"
                style={{ fontWeight: wordWeights.professional }}
              >
                Professional
              </span>{' '}
              <span 
                className="transition-all duration-300"
                style={{ fontWeight: wordWeights.practice }}
              >
                Practice
              </span>
            </span>
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
