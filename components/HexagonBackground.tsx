import React from 'react';

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

const HexagonBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top Left - Moved up slightly to clear middle one */}
      <div className="absolute -top-10 -left-10 text-sky-500 animate-float delay-100">
        <Hexagon size={180} />
      </div>
      
      {/* Top Center-Right */}
      <div className="absolute top-20 left-1/2 text-sky-500 animate-float delay-300">
         <Hexagon size={120} />
      </div>

       {/* Top Right */}
       <div className="absolute top-32 right-20 text-sky-500 animate-float">
         <Hexagon size={250} />
      </div>

      {/* Middle Left - Pushed down to 45% and right slightly */}
      <div className="absolute top-[45%] left-10 text-sky-500 animate-float delay-200">
         <Hexagon size={80} />
      </div>

      {/* Center Big */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sky-600 animate-float delay-200 opacity-20">
         <Hexagon size={600} />
      </div>

      {/* Bottom Left - Pushed down to 85% */}
      <div className="absolute top-[85%] left-5 text-sky-500 animate-float delay-500">
         <Hexagon size={140} />
      </div>

      {/* Bottom Left-Center */}
      <div className="absolute bottom-32 left-40 text-sky-500 animate-float delay-500">
         <Hexagon size={150} />
      </div>

       {/* Bottom Right */}
       <div className="absolute bottom-20 right-40 text-sky-500 animate-float delay-100">
         <Hexagon size={200} />
      </div>
      
       {/* Bottom Center */}
       <div className="absolute bottom-10 left-2/3 text-sky-500 animate-float delay-300">
         <Hexagon size={100} />
      </div>
    </div>
  );
};

export default HexagonBackground;