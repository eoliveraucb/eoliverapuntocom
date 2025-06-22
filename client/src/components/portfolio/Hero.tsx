import { useEffect, useState } from "react";
import home1 from "@assets/home1_1750633823946.png";
import home2 from "@assets/home2_1750633823946.png";
import home3 from "@assets/home3_1750633823946.png";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [wordWeights, setWordWeights] = useState({
    design: 200,
    education: 200,
    ampersand: 200,
    professional: 200,
    practice: 200
  });

  const backgroundImages = [home1, home2, home3];

  useEffect(() => {
    setIsVisible(true);
    
    // Background carousel - start after font animation completes
    const carouselInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 8000); // Change image every 8 seconds
    
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
    
    return () => {
      clearInterval(carouselInterval);
    };
  }, [backgroundImages.length]);

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
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-3000 ease-in-out ${
              index === currentImageIndex ? 'opacity-25 scale-105' : 'opacity-0 scale-100'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
        {/* Dark overlay for better text readability */}
        <div 
          className="absolute inset-0 z-10"
          style={{ 
            backgroundColor: 'var(--bg-primary)',
            opacity: 0.85
          }}
        />
      </div>
      {/* Carousel Indicators */}
      <div className="absolute bottom-20 right-8 z-30 flex flex-col gap-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'w-4 h-4' 
                : 'opacity-50 hover:opacity-75'
            }`}
            style={{ 
              backgroundColor: index === currentImageIndex 
                ? 'var(--accent-primary)' 
                : 'var(--text-secondary)' 
            }}
          />
        ))}
      </div>
      <div className="container relative z-20">
        <div className="hero-content max-w-4xl relative z-10">
          <h1 
            className="md:text-7xl lg:text-8xl mb-6 delay-200 font-['Sono'] opacity-100 translate-y-0 text-[66px]"
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
