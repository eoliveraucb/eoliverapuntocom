import { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface PhoneCarouselProps {
  images: string[];
  autoPlaySpeed?: number;
}

export function PhoneCarousel({ images, autoPlaySpeed = 3000 }: PhoneCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlaySpeed);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length, autoPlaySpeed]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Phone Frame Container */}
      <div 
        className="relative overflow-hidden rounded-3xl shadow-2xl"
        style={{
          width: 'min(90vw, 360px)',
          aspectRatio: '9/19.5',
          backgroundColor: '#000',
          border: '8px solid #1a1a1a',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3), inset 0 0 0 2px rgba(255,255,255,0.1)'
        }}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Sliding Images Container */}
        <div 
          className="absolute inset-0 flex flex-col transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateY(-${currentIndex * 100}%)`
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="min-h-full w-full flex-shrink-0"
              data-testid={`carousel-slide-${index}`}
            >
              <img
                src={image}
                alt={`App screen ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute top-4 left-1/2 -translate-x-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"
          style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
          aria-label="Previous screen"
          data-testid="carousel-button-prev"
        >
          <ChevronUp className="w-5 h-5" />
        </button>

        <button
          onClick={goToNext}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"
          style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
          aria-label="Next screen"
          data-testid="carousel-button-next"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex gap-2" data-testid="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlaying(false);
            }}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              backgroundColor: index === currentIndex ? 'var(--accent-primary)' : 'var(--border)',
              transform: index === currentIndex ? 'scale(1.5)' : 'scale(1)'
            }}
            aria-label={`Go to screen ${index + 1}`}
            data-testid={`carousel-indicator-${index}`}
          />
        ))}
      </div>

      {/* Screen Counter */}
      <p 
        className="text-sm font-medium"
        style={{ color: 'var(--text-secondary)' }}
        data-testid="carousel-counter"
      >
        {currentIndex + 1} / {images.length}
      </p>
    </div>
  );
}
