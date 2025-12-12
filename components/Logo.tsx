import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 165 34" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    aria-label="Saratoga Logo"
  >
    <defs>
      <style>
        {`
          .logo-text {
            font-family: 'Inter', sans-serif;
            font-weight: 900;
            font-size: 24px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
        `}
      </style>
    </defs>
    {/* Shadow Layer (Blue) - Bottom Left */}
    <text x="0" y="26" className="logo-text" fill="#00AEEF">SARATOGA</text>
    
    {/* Main Layer (White) - Slightly Top Right to reveal shadow */}
    <text x="3" y="23" className="logo-text" fill="white">SARATOGA</text>
  </svg>
);

export default Logo;