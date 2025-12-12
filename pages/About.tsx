import React from 'react';
import HexagonBackground from '../components/HexagonBackground';
import { Target, Shield, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-24 pb-12 relative overflow-hidden">
      <HexagonBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h2 className="text-[#00AEEF] font-bold tracking-wide uppercase text-sm mb-4">Who We Are</h2>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Architecting the Future of <br/><span className="text-gray-500">Digital Enterprise.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Saratoga Software was founded on a simple premise: complex problems require elegant solutions. 
            We bridge the gap between legacy infrastructure and the AI-driven future, helping organizations 
            unlock the true potential of their data.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <ValueCard 
            icon={<Target className="text-[#00AEEF]" size={40} />}
            title="Precision"
            description="We build software that works exactly as intended. No bloat, no technical debt, just pure functional excellence."
          />
          <ValueCard 
            icon={<Shield className="text-[#00AEEF]" size={40} />}
            title="Integrity"
            description="Your data is your most valuable asset. We employ military-grade security standards in every solution we architect."
          />
          <ValueCard 
            icon={<Zap className="text-[#00AEEF]" size={40} />}
            title="Innovation"
            description="We don't just follow trends; we set them. Leveraging Gemini and Veo, we bring bleeding-edge AI to the enterprise."
          />
        </div>

        {/* Stats Section */}
        <div className="border-t border-gray-800 pt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Stat number="15+" label="Years Experience" />
            <Stat number="200+" label="Projects Delivered" />
            <Stat number="50M+" label="Users Impacted" />
            <Stat number="24/7" label="Global Support" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ValueCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm hover:border-[#00AEEF] transition-colors duration-300">
    <div className="bg-black/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed">
      {description}
    </p>
  </div>
);

const Stat = ({ number, label }: { number: string, label: string }) => (
  <div>
    <div className="text-4xl md:text-5xl font-bold text-white mb-2">{number}</div>
    <div className="text-[#00AEEF] font-medium tracking-wide uppercase text-sm">{label}</div>
  </div>
);

export default About;