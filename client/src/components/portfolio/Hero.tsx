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
  const mousePos = useRef({ x: 0, y: 0 });
  const scrollY = useRef(0);

  const backgroundImages = [home1, home2, home3];

  useEffect(() => {
    setIsVisible(true);

    let carouselInterval: NodeJS.Timeout;
    let animationId: number;
    let timeouts: NodeJS.Timeout[] = [];

    // Enhanced carousel with bezier transitions and 3D effects
    carouselInterval = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % backgroundImages.length;
      
      // Enhanced flickering sequence with elastic easing
      const flickerSequence = [
        { index: currentImageIndex, delay: 0, duration: 80 },
        { index: nextIndex, delay: 80, duration: 40 },
        { index: currentImageIndex, delay: 120, duration: 60 },
        { index: nextIndex, delay: 180, duration: 30 },
        { index: currentImageIndex, delay: 210, duration: 40 },
        { index: nextIndex, delay: 250, duration: 20 },
        { index: currentImageIndex, delay: 270, duration: 30 },
        { index: nextIndex, delay: 300, duration: 0 }
      ];
      
      flickerSequence.forEach(({ index, delay }) => {
        const timeout = setTimeout(() => {
          setCurrentImageIndex(index);
        }, delay);
        timeouts.push(timeout);
      });
    }, 5000);

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

    // Interactive 2D Connectivity Temporal Force Map
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

        // Mouse movement tracking
        const handleMouseMove = (e: MouseEvent) => {
          const rect = canvas.getBoundingClientRect();
          mousePos.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
          };
        };

        // Scroll tracking
        const handleScroll = () => {
          scrollY.current = window.scrollY;
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);

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

            // Mouse interaction force
            const mouseDistance = Math.sqrt(
              Math.pow(node.x - mousePos.current.x, 2) + 
              Math.pow(node.y - mousePos.current.y, 2)
            );
            const mouseInfluence = Math.max(0, 200 - mouseDistance) / 200;
            const mouseForceX = (mousePos.current.x - node.x) * mouseInfluence * 0.02;
            const mouseForceY = (mousePos.current.y - node.y) * mouseInfluence * 0.02;

            // Scroll-based displacement
            const scrollInfluence = scrollY.current * 0.1;
            const scrollWaveX = Math.sin(scrollInfluence + index * 0.3) * 8;
            const scrollWaveY = Math.cos(scrollInfluence + index * 0.4) * 6;

            // Spring force back to original position
            const springX = (node.originalX - node.x) * 0.02;
            const springY = (node.originalY - node.y) * 0.02;

            // Apply all forces
            node.vx += waveX * 0.01 + mouseForceX + scrollWaveX * 0.01 + springX;
            node.vy += waveY * 0.01 + mouseForceY + scrollWaveY * 0.01 + springY;

            // Damping
            node.vx *= 0.95;
            node.vy *= 0.95;

            // Update position
            node.x += node.vx;
            node.y += node.vy;

            // Draw node with interaction-based intensity
            const baseIntensity = Math.sin(time * 3 + index * 0.3) * 0.5 + 0.5;
            const mouseIntensity = mouseInfluence * 0.8;
            const scrollIntensity = Math.abs(Math.sin(scrollInfluence + index * 0.2)) * 0.4;
            const totalIntensity = Math.min(1, baseIntensity + mouseIntensity + scrollIntensity);
            
            const nodeSize = 3 + totalIntensity * 3;

            ctx.beginPath();
            ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(109, 89, 255, ${0.4 + totalIntensity * 0.6})`;
            ctx.fill();

            // Add glow effect for nodes near mouse
            if (mouseInfluence > 0.3) {
              ctx.beginPath();
              ctx.arc(node.x, node.y, nodeSize + 5, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(109, 89, 255, ${mouseInfluence * 0.2})`;
              ctx.fill();
            }
          });

          // Draw connections with enhanced interactivity
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
                  
                  // Check if connection is near mouse
                  const midX = (node.x + connectedNode.x) / 2;
                  const midY = (node.y + connectedNode.y) / 2;
                  const mouseDistToConnection = Math.sqrt(
                    Math.pow(midX - mousePos.current.x, 2) + 
                    Math.pow(midY - mousePos.current.y, 2)
                  );
                  const connectionMouseInfluence = Math.max(0, 100 - mouseDistToConnection) / 100;
                  
                  // Scroll influence on connections
                  const scrollConnectionInfluence = Math.abs(Math.sin(scrollY.current * 0.01 + index * 0.1)) * 0.3;

                  ctx.beginPath();
                  ctx.moveTo(node.x, node.y);
                  ctx.lineTo(connectedNode.x, connectedNode.y);
                  ctx.strokeStyle = `rgba(109, 89, 255, ${alpha * pulse + connectionMouseInfluence * 0.4 + scrollConnectionInfluence})`;
                  ctx.lineWidth = 1 + connectionMouseInfluence * 2;
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
          canvas.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('scroll', handleScroll);
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
          opacity: 0.2
        }}
      />

      {/* Background Carousel - Full Screen */}
      <div
        className="absolute inset-0 z-10 overflow-hidden"
        style={{ marginTop: "5%", marginLeft: "7%" , maxHeight: "90%" }}
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
              transition: 'opacity 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55), transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              transform: `perspective(1000px) rotateX(${index === currentImageIndex ? '1deg' : '0deg'}) rotateY(${index === currentImageIndex ? '-0.5deg' : '0deg'}) scale(${index === currentImageIndex ? 1.02 : 1}) translateZ(${index === currentImageIndex ? '5px' : '0px'})`,
              transformOrigin: 'center center',
            }}
          />
        ))}
        {/* Enhanced overlay with gradient and 3D effect */}
        <div
          className="absolute inset-0 z-20"
          style={{
            
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            transform: 'perspective(1000px) translateZ(1px)'
          }}
        />
      </div>
      {/* Enhanced Carousel Indicators with 3D Effects */}
      <div className="absolute bottom-8 right-8 z-40 flex gap-4">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`transition-all duration-500 ease-out rounded-full ${
              index === currentImageIndex
                ? "w-10 h-4 bg-gradient-to-r from-purple-500 to-blue-500 scale-110 shadow-lg"
                : "w-4 h-4 bg-white/30 hover:bg-white/50 hover:scale-105"
            }`}
            style={{
              transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
              boxShadow: index === currentImageIndex 
                ? '0 6px 20px rgba(147, 51, 234, 0.5), 0 2px 8px rgba(0, 0, 0, 0.1)' 
                : '0 2px 8px rgba(0, 0, 0, 0.1)',
              transform: `perspective(100px) rotateX(${index === currentImageIndex ? '5deg' : '0deg'}) translateZ(${index === currentImageIndex ? '2px' : '0px'})`
            }}
          />
        ))}
      </div>
      <div className="w-full relative z-30 px-4">
        <div
          className="hero-content max-w-4xl relative z-30 text-center mt-[0px] mb-[0px] pt-[0px] pb-[0px] ml-[9.3985px] mr-[9.3985px] pl-[20px] pr-[20px]"
          style={{ marginLeft: "26%", marginTop: "6%" }}
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
              className="btn-primary px-8 py-4 font-['Sono']"
              onClick={() =>
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Teaching Work
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