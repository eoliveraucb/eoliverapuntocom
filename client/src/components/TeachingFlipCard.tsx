import React, { useState } from 'react';

interface TeachingFlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

export function TeachingFlipCard({ frontContent, backContent }: TeachingFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="flip-card-container"
      onClick={handleFlip}
      style={{
        width: '250px', /* Adjust size as needed */
        height: '250px', /* Adjust size as needed */
        perspective: '1000px',
        position: 'relative',
        borderRadius: '50%',
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
        transition: 'box-shadow 0.3s ease-in-out',
      }}
    >
      <div 
        className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}
        style={{
          width: '100%',
          height: '100%',
          textAlign: 'center',
          transition: 'transform 0.8s',
          transformStyle: 'preserve-3d',
          borderRadius: '50%',
        }}
      >
        <div 
          className="flip-card-front"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #8A2BE2 0%, #4B0082 100%)', /* Purple gradient */
            color: 'white',
            padding: '20px',
            boxSizing: 'border-box',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
          }}
        >
          {frontContent}
        </div>
        <div 
          className="flip-card-back"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #4B0082 0%, #8A2BE2 100%)', /* Reversed purple gradient */
            color: 'white',
            padding: '20px',
            boxSizing: 'border-box',
            transform: 'rotateY(180deg)',
            fontSize: '1rem',
            lineHeight: '1.4',
          }}
        >
          {backContent}
        </div>
      </div>
    </div>
  );
}
