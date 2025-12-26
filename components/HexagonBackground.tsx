
import React, { useState, useRef, useEffect, useCallback } from 'react';

const Hexagon = ({ className, size = 100 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="0.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ opacity: 0.3 }}
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  </svg>
);

interface DraggableProps {
  children: React.ReactNode;
  initialClassName: string;
}

const DraggableWrapper: React.FC<DraggableProps> = ({ children, initialClassName }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const elementStartPos = useRef({ x: 0, y: 0 });

  const onMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    dragStartPos.current = { x: clientX, y: clientY };
    elementStartPos.current = { x: position.x, y: position.y };
  };

  const onMouseMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    
    const deltaX = clientX - dragStartPos.current.x;
    const deltaY = clientY - dragStartPos.current.y;
    
    setPosition({
      x: elementStartPos.current.x + deltaX,
      y: elementStartPos.current.y + deltaY
    });
  }, [isDragging]);

  const onMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchmove', onMouseMove, { passive: false });
      window.addEventListener('touchend', onMouseUp);
    } else {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onMouseMove);
      window.removeEventListener('touchend', onMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onMouseMove);
      window.removeEventListener('touchend', onMouseUp);
    };
  }, [isDragging, onMouseMove, onMouseUp]);

  return (
    <div 
      className={`${initialClassName} cursor-grab active:cursor-grabbing pointer-events-auto`}
      style={{ 
        transform: `translate(${position.x}px, ${position.y}px)`,
        zIndex: isDragging ? 50 : 'auto',
        transition: isDragging ? 'none' : 'transform 0.1s ease-out'
      }}
      onMouseDown={onMouseDown}
      onTouchStart={onMouseDown}
    >
      {children}
    </div>
  );
};

const HexagonBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      
      {/* MOBILE (Essentials Only) */}
      <DraggableWrapper initialClassName="absolute top-20 left-10 text-sky-500">
        <div className="animate-float" style={{ animationDuration: '7s' }}>
          <Hexagon size={150} />
        </div>
      </DraggableWrapper>
      
      <DraggableWrapper initialClassName="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sky-600 opacity-20">
        <div className="animate-float" style={{ animationDuration: '10s' }}>
          <Hexagon size={400} />
        </div>
      </DraggableWrapper>

      {/* TABLET + DESKTOP */}
      <DraggableWrapper initialClassName="absolute hidden sm:block top-32 right-10 text-sky-500">
        <div className="animate-float" style={{ animationDuration: '8s' }}>
          <Hexagon size={200} />
        </div>
      </DraggableWrapper>

      <DraggableWrapper initialClassName="absolute hidden md:block bottom-20 left-40 text-sky-500">
        <div className="animate-float" style={{ animationDuration: '6s' }}>
          <Hexagon size={180} />
        </div>
      </DraggableWrapper>

      {/* DESKTOP ONLY */}
      <DraggableWrapper initialClassName="absolute hidden lg:block top-40 left-1/2 text-sky-500">
        <div className="animate-float" style={{ animationDuration: '5.5s' }}>
          <Hexagon size={100} />
        </div>
      </DraggableWrapper>

      <DraggableWrapper initialClassName="absolute hidden lg:block bottom-10 right-40 text-sky-500">
        <div className="animate-float" style={{ animationDuration: '9s' }}>
          <Hexagon size={140} />
        </div>
      </DraggableWrapper>
      
      <DraggableWrapper initialClassName="absolute hidden lg:block top-[60%] left-10 text-sky-500">
        <div className="animate-float" style={{ animationDuration: '7.5s' }}>
          <Hexagon size={80} />
        </div>
      </DraggableWrapper>

      {/* Top Gradient Mask */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black to-transparent z-20 pointer-events-none" />
    </div>
  );
};

export default HexagonBackground;
