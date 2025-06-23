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

        // Create grid-based rectangles and lines
        const gridSize = 80;
        const rows = Math.ceil(canvas.height / gridSize);
        const cols = Math.ceil(canvas.width / gridSize);
        
        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            // Only create nodes at grid intersections
            if (Math.random() < 0.4) {
              const x = col * gridSize + (Math.random() - 0.5) * 20;
              const y = row * gridSize + (Math.random() - 0.5) * 20;

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
          }
        }

        // Create only horizontal and vertical connections
        nodes.forEach((node, index) => {
          nodes.forEach((otherNode, otherIndex) => {
            if (index !== otherIndex) {
              const dx = Math.abs(node.x - otherNode.x);
              const dy = Math.abs(node.y - otherNode.y);
              
              // Only connect if nodes are aligned horizontally or vertically
              const isHorizontal = dy < 20 && dx < 150;
              const isVertical = dx < 20 && dy < 150;
              
              if ((isHorizontal || isVertical) && Math.random() < 0.6) {
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

          // Update nodes with grid-aligned movement
          nodes.forEach((node, index) => {
            // Grid-aligned movement - only horizontal or vertical
            const timeOffset = index * 0.3;
            const moveX = Math.sin(time + timeOffset) > 0 ? 1 : -1;
            const moveY = Math.cos(time * 0.8 + timeOffset) > 0 ? 1 : -1;
            
            // Constrain movement to small grid steps
            const stepSize = 0.5;
            node.vx += moveX * stepSize * 0.01;
            node.vy += moveY * stepSize * 0.01;

            // Spring force back to grid position
            const springX = (node.originalX - node.x) * 0.03;
            const springY = (node.originalY - node.y) * 0.03;
            
            node.vx += springX;
            node.vy += springY;

            // Strong damping for grid-like movement
            node.vx *= 0.9;
            node.vy *= 0.9;

            // Update position
            node.x += node.vx;
            node.y += node.vy;

            // Draw rectangular nodes
            const intensity = Math.sin(time * 2 + index * 0.4) * 0.3 + 0.3;
            const nodeOpacity = 0.3 + intensity * 0.4;
            
            ctx.fillStyle = `rgba(147, 51, 234, ${nodeOpacity})`;
            
            // Draw small squares instead of circles
            const size = 3 + intensity * 2;
            ctx.fillRect(node.x - size/2, node.y - size/2, size, size);
            
            // Occasionally add larger rectangles
            if (Math.sin(time * 0.5 + index) > 0.7) {
              ctx.fillStyle = `rgba(147, 51, 234, ${nodeOpacity * 0.5})`;
              ctx.fillRect(node.x - 8, node.y - 8, 16, 16);
            }
          });

          // Draw straight line connections only
          nodes.forEach((node, index) => {
            node.connections.forEach((connectionIndex) => {
              const connectedNode = nodes[connectionIndex];
              if (connectedNode) {
                const dx = Math.abs(connectedNode.x - node.x);
                const dy = Math.abs(connectedNode.y - node.y);
                
                // Only draw if connection is horizontal or vertical
                const isHorizontal = dy < 30;
                const isVertical = dx < 30;
                
                if (isHorizontal || isVertical) {
                  const distance = Math.max(dx, dy);
                  const opacity = Math.max(0, 0.4 - distance / 300) * 
                                 (0.3 + 0.3 * Math.sin(time * 0.5 + index * 0.2));

                  ctx.strokeStyle = `rgba(147, 51, 234, ${opacity})`;
                  ctx.lineWidth = isHorizontal ? 2 : 1;
                  ctx.beginPath();
                  
                  // Draw straight lines with 90-degree angles
                  if (isHorizontal) {
                    ctx.moveTo(Math.min(node.x, connectedNode.x), node.y);
                    ctx.lineTo(Math.max(node.x, connectedNode.x), node.y);
                  } else {
                    ctx.moveTo(node.x, Math.min(node.y, connectedNode.y));
                    ctx.lineTo(node.x, Math.max(node.y, connectedNode.y));
                  }
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
          background: 'transparent',
          opacity: 0.8
        }}
      />

      {/* Background Carousel - Full Screen */}
      <div
        className="absolute inset-0 z-10 overflow-hidden"
        style={{ marginTop: "5%", marginLeft: "10%" , maxHeight: "90%" }}
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
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Design Practice
            </button>
            <button
              className="btn-primary px-8 py-4 font-['Sono']"
              onClick={() =>
                document
                  .getElementById("projects-and-exercises")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Education Experience
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