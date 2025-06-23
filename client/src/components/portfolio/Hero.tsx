import { useEffect, useState } from "react";
import home1 from "@assets/home1_1750633823946.png";
import home2 from "@assets/home2_1750633823946.png";
import home3 from "@assets/home3_1750633823946.png";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lineWeights, setLineWeights] = useState({
    line1: 200,
    line2: 200,
    line3: 200,
  });

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

    // Sequential font-weight animations for each line
    const animateLines = () => {
      // Line 1 animation
      setTimeout(() => {
        setLineWeights(prev => ({ ...prev, line1: 500 }));
      }, 300);

      // Line 2 animation
      setTimeout(() => {
        setLineWeights(prev => ({ ...prev, line2: 500 }));
      }, 800);

      // Line 3 animation
      setTimeout(() => {
        setLineWeights(prev => ({ ...prev, line3: 500 }));
      }, 1300);
    };

    animateLines();

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
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ marginLeft: "-150px" }}
      >
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-100 ${
              index === currentImageIndex ? "opacity-80" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "contain",
              backgroundPosition: "left center",
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0 z-10 bg-[transparent]"
          style={{
            backgroundColor: "var(--bg-primary)",
            opacity: 0.1,
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
      <div className="w-full relative z-20 px-4">
        <div className="hero-content max-w-4xl relative z-10 text-center pl-[98px] pr-[98px] ml-[20.3985px] mr-[20.3985px]" style={{ marginLeft: '40%', marginRight: '2rem' }}>
          <div
            className="relative p-6 rounded-lg mb-6 text-left pl-[0px] pr-[0px] pt-[0px] pb-[0px]"
            style={{
              backgroundColor: "var(--bg-primary)",
              opacity: 0.85,
              backdropFilter: "blur(4px)",
            }}
          >
            <h1
              className="text-3xl md:text-[44px] font-['Fraunces']"
              style={{
                color: "var(--text-primary)",
                lineHeight: "1.2",
                marginBottom: 0,
              }}
            >
              <div
                style={{
                  fontWeight: lineWeights.line1,
                  transition: "font-weight 0.3s ease-out"
                }}
              >
                Design education & professional
              </div>
              <div
                style={{
                  fontWeight: lineWeights.line2,
                  transition: "font-weight 0.3s ease-out"
                }}
              >
                experience design practice of
              </div>
              <div
                style={{
                  fontWeight: lineWeights.line3,
                  transition: "font-weight 0.3s ease-out"
                }}
              >
                <span className="gradient-text">Edwin Mauricio Olivera</span>
              </div>
            </h1>
          </div>

          <div
            className="relative p-6 rounded-lg mb-6 text-left pl-[0px] pr-[0px] pt-[0px] pb-[0px]"
            style={{
              backgroundColor: "var(--bg-primary)",
              opacity: 0.95,
              backdropFilter: "blur(4px)",
            }}
          >
            <p
              className="text-lg md:text-xl max-w-3xl transition-all duration-800 delay-400 font-['Roboto_Flex'] opacity-100 translate-y-0 text-left font-medium mt-[28px] mb-[28px]"
              style={{ color: "var(--text-secondary)" }}
            >
              Hello! My name is Edwin Mauricio Olivera seeking opportunities in
              design faculty, curriculum design, emerging tech and interactive
              media.
            </p>
          </div>

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
