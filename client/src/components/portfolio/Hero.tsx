import { useEffect, useState } from "react";
import home1 from "@assets/home1_1750633823946.png";
import home2 from "@assets/home2_1750633823946.png";
import home3 from "@assets/home3_1750633823946.png";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [headlineFontWeight, setHeadlineFontWeight] = useState(200);

  const backgroundImages = [home1, home2, home3];

  useEffect(() => {
    setIsVisible(true);

    // Background carousel with flickering effect
    const carouselInterval = setInterval(() => {
      // Create flickering effect before transition
      const flicker = () => {
        setCurrentImageIndex((prev) => {
          const next = (prev + 1) % backgroundImages.length;
          // Rapid flicker between current and next
          setTimeout(() => setCurrentImageIndex(prev), 50);
          setTimeout(() => setCurrentImageIndex(next), 100);
          setTimeout(() => setCurrentImageIndex(prev), 150);
          setTimeout(() => setCurrentImageIndex(next), 200);
          return next;
        });
      };
      flicker();
    }, 4000); // Change image every 4 seconds with flicker

    // Animate entire headline font weight
    const animateHeadline = () => {
      setTimeout(() => {
        let weight = 200;
        const interval = setInterval(() => {
          weight += 50;
          setHeadlineFontWeight(weight);
          if (weight >= 800) {
            clearInterval(interval);
            // Settle to medium weight
            setTimeout(() => {
              setHeadlineFontWeight(500);
            }, 300);
          }
        }, 120);
      }, 0);
    };

    setTimeout(animateHeadline, 800);

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
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background Carousel - Full Screen */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-100 ${
              index === currentImageIndex ? "opacity-80" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundColor: "var(--bg-primary)",
            opacity: 0.6,
          }}
        />
      </div>
      {/* Carousel Indicators */}
      <div className="absolute bottom-8 right-8 z-30 flex gap-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "w-4 h-4"
                : "opacity-50 hover:opacity-75"
            }`}
            style={{
              backgroundColor:
                index === currentImageIndex
                  ? "var(--accent-primary)"
                  : "var(--text-secondary)",
            }}
          />
        ))}
      </div>
      <div className="container relative z-20">
        <div className="hero-content max-w-4xl mx-auto relative z-10 text-center">
          <div
            className="relative p-6 rounded-lg mb-6 text-left pl-[0px] pr-[0px] pt-[0px] pb-[0px]"
            style={{
              backgroundColor: "var(--bg-primary)",
              opacity: 0.95,
              backdropFilter: "blur(10px)",
            }}
          >
            <h1
              className="text-3xl md:text-[44px] font-['Sono'] transition-all duration-300 opacity-100 translate-y-0"
              style={{
                color: "var(--text-primary)",
                lineHeight: "1.2",
                marginBottom: 0,
                fontWeight: headlineFontWeight,
              }}
            >
              Design education & professional<br />
              experience design practice of<br />
              <span className="gradient-text">Edwin Mauricio Olivera</span>
            </h1>
          </div>

          <p
            className="text-lg md:text-xl max-w-3xl transition-all duration-800 delay-400 font-['Sono'] opacity-100 translate-y-0 text-left font-medium mt-[28px] mb-[28px]"
            style={{ color: "var(--text-secondary)" }}
          >
            Hello! My name is Edwin Mauricio Olivera seeking opportunities in
            design faculty, curriculum design, emerging tech and interactive
            media.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-800 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            <button
              className="btn-primary btn-ripple px-8 py-4 font-['Sono']"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get in touch
            </button>
            <button
              className="btn-secondary px-8 py-4 font-['Sono']"
              onClick={() =>
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
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
        <i
          className="fas fa-chevron-down text-2xl"
          style={{ color: "var(--text-secondary)" }}
        ></i>
      </div>
    </section>
  );
}
