import React from 'react';
import HexagonBackground from '../components/HexagonBackground';
import { ASSETS } from '../data/assets';

const People: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#00AEEF] selection:text-white pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
       
       {/* 1. Standardized Hero Section */}
       <section className="relative pt-12 pb-20 px-4 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00AEEF]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 opacity-30 pointer-events-none">
           <HexagonBackground />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
           <h4 className="text-[#00AEEF] font-bold tracking-[0.3em] uppercase text-xs mb-6">
              LEADERSHIP
           </h4>
           <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
             Meet the <br />
             <span className="text-[#00AEEF]">Team.</span>
           </h1>
           <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light mb-10">
             Our team consists of industry veterans, research scientists, and creative thinkers dedicated to solving the impossible for our global partners.
           </p>
        </div>
      </section>

       {/* Blue Separator */}
       <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00AEEF]/50 to-transparent mb-12"></div>

       <div className="max-w-7xl mx-auto animate-fade-in relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
           {ASSETS.team.map((person, idx) => (
             <PersonCard 
                key={idx}
                name={person.name}
                role={person.role}
                image={person.img}
             />
           ))}
        </div>
       </div>
    </div>
  );
};

const PersonCard = ({ name, role, image }: { name: string, role: string, image: string }) => (
  <div className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-[#00AEEF]/50 hover:bg-white/10 transition-all duration-300 shadow-2xl hover:shadow-[#00AEEF]/10 hover:-translate-y-2">
    <div className="aspect-[3/4] overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10" />
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
        onError={(e) => { 
          e.currentTarget.src = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600"; 
        }}
      />
    </div>
    
    <div className="absolute bottom-0 left-0 w-full p-6 z-20 text-center">
      <div className="w-8 h-0.5 bg-[#00AEEF] mx-auto mb-4 group-hover:w-16 transition-all duration-300"></div>
      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00AEEF] transition-colors leading-tight">{name}</h3>
      <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">{role}</p>
    </div>
  </div>
);

export default People;
