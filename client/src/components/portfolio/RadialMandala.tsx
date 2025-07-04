import React, { useEffect, useState } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  color: string;
  connections: number[];
}

interface Connection {
  from: number;
  to: number;
  strength: number;
  active: boolean;
}

const RadialMandala = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [time, setTime] = useState(0);
  
  const width = 600;
  const height = 600;
  const centerX = width / 2;
  const centerY = height / 2;
  const numNodes = 24;
  const maxConnections = 80;

  // Color palette for different node types
  const nodeColors = [
    'rgba(99, 102, 241, 0.8)',   // Indigo
    'rgba(236, 72, 153, 0.8)',   // Pink
    'rgba(34, 197, 94, 0.8)',    // Green
    'rgba(251, 146, 60, 0.8)',   // Orange
    'rgba(168, 85, 247, 0.8)',   // Purple
    'rgba(14, 165, 233, 0.8)',   // Sky blue
    'rgba(245, 101, 101, 0.8)',  // Red
    'rgba(250, 204, 21, 0.8)',   // Yellow
  ];

  // Initialize nodes and connections
  useEffect(() => {
    const newNodes: Node[] = [];
    
    // Create nodes in 3D space
    for (let i = 0; i < numNodes; i++) {
      const angle = (i * 2 * Math.PI) / numNodes;
      const radius = 100 + Math.random() * 120;
      const z = (Math.random() - 0.5) * 200;
      
      newNodes.push({
        id: i,
        x: centerX + Math.cos(angle) * radius + (Math.random() - 0.5) * 60,
        y: centerY + Math.sin(angle) * radius + (Math.random() - 0.5) * 60,
        z: z,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        vz: (Math.random() - 0.5) * 0.2,
        size: 3 + Math.random() * 4,
        color: nodeColors[Math.floor(Math.random() * nodeColors.length)],
        connections: []
      });
    }

    // Create connections between nodes
    const newConnections: Connection[] = [];
    for (let i = 0; i < maxConnections; i++) {
      const from = Math.floor(Math.random() * numNodes);
      let to = Math.floor(Math.random() * numNodes);
      
      // Ensure different nodes and avoid duplicates
      while (to === from || newConnections.some(c => 
        (c.from === from && c.to === to) || (c.from === to && c.to === from)
      )) {
        to = Math.floor(Math.random() * numNodes);
      }
      
      newConnections.push({
        from,
        to,
        strength: 0.2 + Math.random() * 0.8,
        active: Math.random() > 0.3
      });
      
      // Add bidirectional connection references
      newNodes[from].connections.push(to);
      newNodes[to].connections.push(from);
    }

    setNodes(newNodes);
    setConnections(newConnections);
  }, []);

  // Animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(t => t + 0.016);
      
      // Update nodes with subtle movement and bounds
      setNodes(prevNodes => 
        prevNodes.map(node => {
          let newX = node.x + node.vx;
          let newY = node.y + node.vy;
          let newZ = node.z + node.vz;
          let newVx = node.vx + (Math.random() - 0.5) * 0.02;
          let newVy = node.vy + (Math.random() - 0.5) * 0.02;
          let newVz = node.vz + (Math.random() - 0.5) * 0.02;

          // Constrain movement within bounds
          if (newX < 50 || newX > width - 50) newVx *= -0.5;
          if (newY < 50 || newY > height - 50) newVy *= -0.5;
          if (newZ < -100 || newZ > 100) newVz *= -0.5;

          // Clamp velocities
          newVx = Math.max(-1, Math.min(1, newVx));
          newVy = Math.max(-1, Math.min(1, newVy));
          newVz = Math.max(-1, Math.min(1, newVz));

          // Clamp positions
          newX = Math.max(50, Math.min(width - 50, newX));
          newY = Math.max(50, Math.min(height - 50, newY));
          newZ = Math.max(-100, Math.min(100, newZ));

          return {
            ...node,
            x: newX,
            y: newY,
            z: newZ,
            vx: newVx,
            vy: newVy,
            vz: newVz
          };
        })
      );
      
      // Randomly activate/deactivate connections
      setConnections(prevConnections => 
        prevConnections.map(conn => ({
          ...conn,
          active: Math.random() > 0.1 ? conn.active : !conn.active,
          strength: conn.strength + (Math.random() - 0.5) * 0.1
        }))
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  // Calculate 3D to 2D projection
  const project3D = (x: number, y: number, z: number) => {
    const perspective = 800;
    const scale = Math.max(0.1, perspective / (perspective + z));
    return {
      x: x * scale,
      y: y * scale,
      scale: scale
    };
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative">
        <svg width={width} height={height} className="overflow-visible">
          {/* Background grid */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
            </pattern>
            <filter id="glow">
              <feMorphology operator="dilate" radius="2"/>
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Render connections */}
          {connections.map((conn, index) => {
            if (!conn.active) return null;
            
            const fromNode = nodes[conn.from];
            const toNode = nodes[conn.to];
            
            if (!fromNode || !toNode) return null;
            
            const fromProj = project3D(fromNode.x, fromNode.y, fromNode.z);
            const toProj = project3D(toNode.x, toNode.y, toNode.z);
            
            const distance = Math.sqrt(
              Math.pow(fromNode.x - toNode.x, 2) + 
              Math.pow(fromNode.y - toNode.y, 2) + 
              Math.pow(fromNode.z - toNode.z, 2)
            );
            
            const opacity = Math.max(0.1, Math.min(0.8, conn.strength * (1 - distance / 400)));
            const strokeWidth = Math.max(0.2, conn.strength * 2);
            
            return (
              <g key={index}>
                <line
                  x1={fromProj.x}
                  y1={fromProj.y}
                  x2={toProj.x}
                  y2={toProj.y}
                  stroke={`rgba(99, 102, 241, ${opacity})`}
                  strokeWidth={strokeWidth}
                  className="animate-pulse"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationDuration: `${2 + Math.random() * 3}s`,
                    filter: 'url(#glow)'
                  }}
                />
                
                {/* Data packet animation */}
                {Math.random() > 0.85 && (
                  <circle
                    r="2"
                    fill="rgba(236, 72, 153, 0.9)"
                    className="animate-pulse"
                    style={{
                      animationDuration: '1s'
                    }}
                  >
                    <animateMotion
                      dur={`${1 + Math.random() * 2}s`}
                      repeatCount="indefinite"
                      path={`M ${fromProj.x} ${fromProj.y} L ${toProj.x} ${toProj.y}`}
                    />
                  </circle>
                )}
              </g>
            );
          })}
          
          {/* Render nodes */}
          {nodes.map((node, index) => {
            const proj = project3D(node.x, node.y, node.z);
            const scaledSize = node.size * proj.scale;
            
            return (
              <g key={node.id}>
                <circle
                  cx={proj.x}
                  cy={proj.y}
                  r={scaledSize}
                  fill={node.color}
                  className="animate-pulse"
                  style={{
                    animationDelay: `${index * 0.05}s`,
                    animationDuration: `${3 + Math.random() * 2}s`,
                    filter: 'url(#glow)'
                  }}
                />
                
                {/* Node rings */}
                <circle
                  cx={proj.x}
                  cy={proj.y}
                  r={scaledSize * 2}
                  fill="none"
                  stroke={node.color}
                  strokeWidth="0.5"
                  strokeDasharray="2,4"
                  className="animate-spin"
                  style={{
                    animationDuration: `${10 + Math.random() * 10}s`,
                    transformOrigin: `${proj.x}px ${proj.y}px`
                  }}
                />
                
                {/* Activity indicator */}
                {node.connections.length > 3 && (
                  <circle
                    cx={proj.x}
                    cy={proj.y}
                    r={scaledSize * 0.5}
                    fill="rgba(255, 255, 255, 0.9)"
                    className="animate-ping"
                    style={{
                      animationDuration: '2s'
                    }}
                  />
                )}
              </g>
            );
          })}
          
          {/* Central hub */}
          <circle
            cx={centerX}
            cy={centerY}
            r="8"
            fill="rgba(168, 85, 247, 0.9)"
            className="animate-pulse"
            style={{
              animationDuration: '4s',
              filter: 'url(#glow)'
            }}
          />
          
          {/* Outer orbital rings */}
          <circle
            cx={centerX}
            cy={centerY}
            r="150"
            fill="none"
            stroke="rgba(99, 102, 241, 0.3)"
            strokeWidth="1"
            strokeDasharray="5,15"
            className="animate-spin"
            style={{
              animationDuration: '30s',
              transformOrigin: `${centerX}px ${centerY}px`
            }}
          />
          
          <circle
            cx={centerX}
            cy={centerY}
            r="220"
            fill="none"
            stroke="rgba(168, 85, 247, 0.2)"
            strokeWidth="0.5"
            strokeDasharray="3,10"
            className="animate-spin"
            style={{
              animationDuration: '45s',
              transformOrigin: `${centerX}px ${centerY}px`,
              animationDirection: 'reverse'
            }}
          />
        </svg>
        
        {/* Central info display */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center text-white">
            <div className="text-xs font-mono opacity-60">
              {nodes.length} NODES
            </div>
            <div className="text-xs font-mono opacity-60">
              {connections.filter(c => c.active).length} ACTIVE
            </div>
          </div>
        </div>
        
        {/* Glow overlay */}
        <div 
          className="absolute inset-0 rounded-full animate-pulse pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
            animationDuration: '6s'
          }}
        />
      </div>
    </div>
  );
};

export default RadialMandala;
