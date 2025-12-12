import React from 'react';

const CaseStudies: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto animate-fade-in">
        <h1 className="text-5xl font-bold text-white mb-12 border-l-4 border-[#00AEEF] pl-6">
          Case Studies
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <StudyCard 
             category="FinTech"
             title="Modernizing High-Frequency Trading with Gemini"
             image="/case-fintech.jpg"
             stat="300%"
             statLabel="Faster Execution"
             desc="We rebuilt a legacy trading platform using Rust and Gemini 1.5 Pro to analyze market sentiment in real-time."
          />
          <StudyCard 
             category="Healthcare"
             title="AI-Driven Diagnostics Pipeline"
             image="/case-healthcare.jpg"
             stat="99.9%"
             statLabel="Accuracy Rate"
             desc="Utilizing computer vision models to assist radiologists in detecting anomalies in X-Ray scans automatically."
          />
          <StudyCard 
             category="Retail"
             title="Autonomous Supply Chain Management"
             image="/case-retail.jpg"
             stat="$2M"
             statLabel="Annual Savings"
             desc="Predictive analytics suite that optimizes inventory levels across 500+ global warehouse locations."
          />
          <StudyCard 
             category="Energy"
             title="Smart Grid Load Balancing"
             image="/case-energy.jpg"
             stat="40%"
             statLabel="Energy Reduction"
             desc="IoT integration with central AI command to distribute power loads efficiently during peak hours."
          />
        </div>
      </div>
    </div>
  );
};

const StudyCard = ({ category, title, image, stat, statLabel, desc }: any) => (
  <div className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 transition-transform hover:-translate-y-1">
    <div className="h-64 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
        <div className="absolute top-4 left-4 z-20">
            <span className="bg-[#00AEEF] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {category}
            </span>
        </div>
    </div>
    <div className="p-8">
        <div className="flex justify-between items-start mb-4">
            <div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00AEEF] transition-colors">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
        </div>
        <div className="border-t border-gray-800 pt-4 mt-4 flex items-center justify-between">
            <div>
                <p className="text-3xl font-bold text-white">{stat}</p>
                <p className="text-xs text-gray-500 uppercase">{statLabel}</p>
            </div>
            <button className="text-sm font-bold text-white group-hover:text-[#00AEEF] transition-colors">
                Read Story &rarr;
            </button>
        </div>
    </div>
  </div>
);

export default CaseStudies;