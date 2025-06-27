import React from 'react';

const RadialMandala = () => {
  const numLines = 72; // Number of lines for the mandala
  const centerX = 200;
  const centerY = 200;
  const radius = 150;

  // Generate lines at different angles
  const lines = Array.from({ length: numLines }, (_, i) => {
    const angle = (i * 360) / numLines;
    const radians = (angle * Math.PI) / 180;
    
    const x1 = centerX + Math.cos(radians) * 20; // Inner radius
    const y1 = centerY + Math.sin(radians) * 20;
    const x2 = centerX + Math.cos(radians) * radius; // Outer radius
    const y2 = centerY + Math.sin(radians) * radius;
    
    return {
      x1,
      y1,
      x2,
      y2,
      delay: i * 0.02 // Staggered animation delay
    };
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative">
        <svg width="400" height="400" className="overflow-visible">
          {lines.map((line, index) => (
            <line
              key={index}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="rgba(255, 255, 255, 0.7)"
              strokeWidth="0.5"
              className="animate-pulse"
              style={{
                animationDelay: `${line.delay}s`,
                animationDuration: '3s',
                transformOrigin: `${line.x1}px ${line.y1}px`
              }}
            />
          ))}
          
          {/* Center dot */}
          <circle
            cx={centerX}
            cy={centerY}
            r="3"
            fill="white"
            className="animate-ping"
            style={{ animationDuration: '2s' }}
          />
          
          {/* Rotating outer ring */}
          <circle
            cx={centerX}
            cy={centerY}
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="1"
            strokeDasharray="5,10"
            className="animate-spin"
            style={{ 
              animationDuration: '20s',
              transformOrigin: `${centerX}px ${centerY}px`
            }}
          />
        </svg>
        
        {/* Overlay glow effect */}
        <div 
          className="absolute inset-0 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            animationDuration: '4s'
          }}
        />
      </div>
    </div>
  );
};

export default RadialMandala;