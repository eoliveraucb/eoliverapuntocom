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

    // 2D Connectivity Temporal Force Map
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

        // 2D Force map nodes
        const nodes: Array<{
          x: number;
          y: number;
          vx: number;
          vy: number;
          originalX: number;
          originalY: number;
          connections: number[];
        }> = [];

        // Create initial nodes in a loose grid pattern
        const nodeCount = 40;
        for (let i = 0; i < nodeCount; i++) {
          const x = (Math.random() * 0.8 + 0.1) * canvas.width;
          const y = (Math.random() * 0.8 + 0.1) * canvas.height;

          nodes.push({
            x: x,
            y: y,
            vx: 0,
            vy: 0,
            originalX: x,
            originalY: y,
            connections: [],
          });
        }

        // Create connections between nearby nodes
        nodes.forEach((node, index) => {
          nodes.forEach((otherNode, otherIndex) => {
            if (index !== otherIndex) {
              const dx = node.x - otherNode.x;
              const dy = node.y - otherNode.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 120 && Math.random() < 0.3) {
                node.connections.push(otherIndex);
              }
            }
          });
        });

        let time = 0;
        let isAnimating = true;

        const animate = () => {
          if (!isAnimating || !canvas || !ctx) return;

          // Clear with slight trail effect
          ctx.fillStyle = 'rgba(16, 16, 19, 0.05)';
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          time += 0.01;

          // Update nodes with temporal forces
          nodes.forEach((node, index) => {
            // Temporal wave forces
            const timeOffset = index * 0.5;
            const waveX = Math.sin(time * 2 + timeOffset) * 15;
            const waveY = Math.cos(time * 1.5 + timeOffset) * 12;

            // Spring force back to original position
            const springX = (node.originalX - node.x) * 0.02;
            const springY = (node.originalY - node.y) * 0.02;

            // Apply forces
            node.vx += waveX * 0.01 + springX;
            node.vy += waveY * 0.01 + springY;

            // Damping
            node.vx *= 0.95;
            node.vy *= 0.95;

            // Update position
            node.x += node.vx;
            node.y += node.vy;

            // Draw node
            const intensity = Math.sin(time * 3 + index * 0.3) * 0.5 + 0.5;
            const nodeSize = 3 + intensity * 2;

            ctx.beginPath();
            ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(109, 89, 255, ${0.6 + intensity * 0.4})`;
            ctx.fill();
          });

          // Draw connections
          nodes.forEach((node, index) => {
            node.connections.forEach((connectionIndex) => {
              const connectedNode = nodes[connectionIndex];
              if (connectedNode) {
                const distance = Math.sqrt(
                  Math.pow(node.x - connectedNode.x, 2) + 
                  Math.pow(node.y - connectedNode.y, 2)
                );

                if (distance < 150) {
                  const alpha = Math.max(0, (150 - distance) / 150) * 0.4;
                  const pulse = Math.sin(time * 4 + index * 0.2) * 0.3 + 0.7;

                  ctx.beginPath();
                  ctx.moveTo(node.x, node.y);
                  ctx.lineTo(connectedNode.x, connectedNode.y);
                  ctx.strokeStyle = `rgba(109, 89, 255, ${alpha * pulse})`;
                  ctx.lineWidth = 1;
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