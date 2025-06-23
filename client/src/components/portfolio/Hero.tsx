import { useEffect, useState, useRef } from "react";
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
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const backgroundImages = [home1, home2, home3];

  useEffect(() => {
    setIsVisible(true);

    let carouselInterval: NodeJS.Timeout;
    let animationId: number;
    let timeouts: NodeJS.Timeout[] = [];

    // Background carousel with flickering effect
    carouselInterval = setInterval(() => {
      // Create flickering effect before transition
      const flicker = () => {
        setCurrentImageIndex((prev) => {
          const next = (prev + 1) % backgroundImages.length;
          // Rapid flicker between current and next
          const t1 = setTimeout(() => setCurrentImageIndex(prev), 50);
          const t2 = setTimeout(() => setCurrentImageIndex(next), 100);
          const t3 = setTimeout(() => setCurrentImageIndex(prev), 150);
          const t4 = setTimeout(() => setCurrentImageIndex(next), 200);
          timeouts.push(t1, t2, t3, t4);
          return next;
        });
      };
      flicker();
    }, 4000);

    // Sequential font-weight animations for each line
    const animateLines = () => {
      const t1 = setTimeout(() => {
        setLineWeights((prev) => ({ ...prev, line1: 500 }));
      }, 300);

      const t2 = setTimeout(() => {
        setLineWeights((prev) => ({ ...prev, line2: 500 }));
      }, 800);

      const t3 = setTimeout(() => {
        setLineWeights((prev) => ({ ...prev, line3: 500 }));
      }, 1300);

      timeouts.push(t1, t2, t3);
    };

    animateLines();

    // 3D Force Map Animation
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const resizeCanvas = () => {
          if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
          }
        };
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Force map nodes
        const nodes: Array<{
          x: number;
          y: number;
          z: number;
          vx: number;
          vy: number;
          vz: number;
          connections: number[];
          age: number;
          maxAge: number;
        }> = [];

        // Create initial nodes
        for (let i = 0; i < 50; i++) {
          nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * 200 - 100,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            vz: (Math.random() - 0.5) * 1,
            connections: [],
            age: 0,
            maxAge: Math.random() * 300 + 200,
          });
        }

        let time = 0;
        let isAnimating = true;

        const animate = () => {
          if (!isAnimating || !canvas || !ctx) return;

          ctx.fillStyle = 'rgba(16, 16, 19, 0.1)';
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          time += 0.02;

          // Update nodes
          nodes.forEach((node, index) => {
            // Temporal force - nodes move in response to time
            const temporalForce = Math.sin(time + index * 0.1) * 0.5;
            node.vx += temporalForce * 0.1;
            node.vy += Math.cos(time + index * 0.15) * 0.1;
            node.vz += temporalForce * 0.05;

            // Apply forces and movement
            node.x += node.vx;
            node.y += node.vy;
            node.z += node.vz;

            // Boundary conditions with wrapping
            if (node.x < 0) node.x = canvas.width;
            if (node.x > canvas.width) node.x = 0;
            if (node.y < 0) node.y = canvas.height;
            if (node.y > canvas.height) node.y = 0;

            // Damping
            node.vx *= 0.99;
            node.vy *= 0.99;
            node.vz *= 0.99;

            // Age the node
            node.age++;
            if (node.age > node.maxAge) {
              node.age = 0;
              node.x = Math.random() * canvas.width;
              node.y = Math.random() * canvas.height;
              node.z = Math.random() * 200 - 100;
            }

            // 3D projection
            const scale = 200 / (200 + node.z);
            const projectedX = node.x * scale;
            const projectedY = node.y * scale;

            // Draw node
            const alpha = Math.max(0, 1 - node.age / node.maxAge);
            const size = Math.max(0.5, Math.abs(scale * 2));
            
            ctx.beginPath();
            ctx.arc(projectedX, projectedY, size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(109, 89, 255, ${alpha * 0.6})`;
            ctx.fill();

            // Draw connections to nearby nodes
            nodes.forEach((otherNode, otherIndex) => {
              if (index !== otherIndex) {
                const dx = node.x - otherNode.x;
                const dy = node.y - otherNode.y;
                const dz = node.z - otherNode.z;
                const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

                if (distance < 150) {
                  const otherScale = 200 / (200 + otherNode.z);
                  const otherProjectedX = otherNode.x * otherScale;
                  const otherProjectedY = otherNode.y * otherScale;

                  const connectionAlpha = Math.max(0, (150 - distance) / 150) * alpha * 0.3;
                  
                  ctx.beginPath();
                  ctx.moveTo(projectedX, projectedY);
                  ctx.lineTo(otherProjectedX, otherProjectedY);
                  ctx.strokeStyle = `rgba(109, 89, 255, ${connectionAlpha})`;
                  ctx.lineWidth = 0.5;
                  ctx.stroke();
                }
              }
            });
          });

          if (isAnimating) {
            animationId = requestAnimationFrame(animate);
          }
        };

        animate();

        return () => {
          isAnimating = false;
          window.removeEventListener('resize', resizeCanvas);
          if (animationId) {
            cancelAnimationFrame(animationId);
          }
          clearInterval(carouselInterval);
          timeouts.forEach(timeout => clearTimeout(timeout));
        };
      }
    }

    return () => {
      clearInterval(carouselInterval);
      timeouts.forEach(timeout => clearTimeout(timeout));
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
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
      {/* 3D Force Map Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ 
          background: 'linear-gradient(135deg, #101013 0%, #1a1a2e 50%, #16213e 100%)',
          opacity: 0.8
        }}
      />
      
      {/* Background Carousel - Full Screen */}
      <div
        className="absolute inset-0 z-10 overflow-hidden"
        style={{ marginTop: "5%", marginLeft: "12%" , maxHeight: "90%" }}
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
          className="absolute inset-0 z-20 bg-[transparent]"
          style={{
            backgroundColor: "var(--bg-primary)",
            opacity: 0.1,
          }}
        />
      </div>
      {/* Carousel Indicators */}
      <div className="absolute bottom-8 right-8 z-40 flex gap-3">
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
      <div className="w-full relative z-30 px-4">
        <div
          className="hero-content max-w-4xl relative z-30 text-center mt-[0px] mb-[0px] pt-[0px] pb-[0px] ml-[9.3985px] mr-[9.3985px] pl-[20px] pr-[20px]"
          style={{ marginLeft: "20%", marginTop: "7%" }}
        >
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
                  transition: "font-weight 0.3s ease-out",
                }}
              >
                Design education & professional
              </div>
              <div
                style={{
                  fontWeight: lineWeights.line2,
                  transition: "font-weight 0.3s ease-out",
                }}
              >
                experience design practice of
              </div>
              <div
                style={{
                  fontWeight: lineWeights.line3,
                  transition: "font-weight 0.3s ease-out",
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bounce-slow cursor-pointer z-40"
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
