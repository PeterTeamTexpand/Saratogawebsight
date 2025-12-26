import React from 'react';
import { Link } from 'react-router-dom';
import HexagonBackground from '../components/HexagonBackground';
import { Users, Globe, Zap, Lightbulb, Monitor, ShieldCheck, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#00AEEF] selection:text-white pt-20">
      
      {/* 1. Standardized Hero Section */}
      <section className="relative pt-12 pb-20 px-4 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00AEEF]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 opacity-30 pointer-events-none">
           <HexagonBackground />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
           <h4 className="text-[#00AEEF] font-bold tracking-[0.3em] uppercase text-xs mb-6">
              ABOUT SARATOGA
           </h4>
           <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
             We Create. We Build. <br />
             <span className="text-[#00AEEF]">We Develop.</span>
           </h1>
           <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light mb-10">
             We aren't just developers—we are your partners in growth, delivering decades of expertise with a people-first approach.
           </p>
        </div>
      </section>

      {/* Blue Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00AEEF]/50 to-transparent"></div>

      {/* 2. Expert Partner Grid */}
      <section className="py-24 px-4 bg-black relative z-20">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Your Expert Partner</h2>
               <div className="w-20 h-1 bg-[#00AEEF] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <FeatureCard 
                  icon={<Users size={32} />}
                  title="People First"
                  desc="We prioritize enduring partnerships by consistently delivering innovative solutions that address your evolving needs."
               />
               <FeatureCard 
                  icon={<Globe size={32} />}
                  title="Global Reach"
                  desc="With offices in the UK and South Africa, we provide world-class expertise at the level of excellence you expect."
               />
               <FeatureCard 
                  icon={<Zap size={32} />}
                  title="More, Better, Faster"
                  desc="Award-winning digital transformation. We bring you more value, better quality, and faster delivery."
               />
            </div>
         </div>
      </section>

      {/* Blue Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00AEEF]/50 to-transparent"></div>

      {/* 3. Value Proposition */}
      <section className="py-24 px-4 bg-black relative">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
               <div className="md:w-1/2 text-center md:text-left">
                  <span className="text-[#00AEEF] font-bold tracking-widest uppercase text-sm mb-2 block">Value Proposition</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                     Practical Innovation.<br/> <span className="text-[#00AEEF]">Complex Problems Solved.</span>
                  </h2>
               </div>
               <div className="md:w-1/2">
                  <p className="text-xl text-gray-300 leading-relaxed border-l-4 border-[#00AEEF] pl-6">
                     We recruit the best to deliver the best. Vigilant skills, efficient processes, and dependable delivery are why customers trust us with their hardest challenges.
                  </p>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               <InfoBlock 
                  icon={<Lightbulb size={28} />}
                  title="WHY SARATOGA"
                  desc="We build partnerships, not just software. We strive to be easy to work with and foster healthy, long-term business relationships."
                  link="/contact"
                  linkText="Contact Us"
               />
               <InfoBlock 
                  icon={<Monitor size={28} />}
                  title="WHAT WE DO"
                  desc="Converting business imperatives into elegant technology. We value clear communication and courageous honesty."
                  link="/services"
                  linkText="Explore Services"
               />
               <InfoBlock 
                  icon={<ShieldCheck size={28} />}
                  title="OUR LEADERSHIP"
                  desc="Our teams combine broadly skilled subject-matter experts with deep technology knowledge, driven by passion and creativity."
                  link="/people"
                  linkText="Discover Leaders"
               />
            </div>
         </div>
      </section>

      {/* Blue Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00AEEF]/50 to-transparent"></div>

      {/* 4. Corporate Timeline Banner */}
      <section className="py-24 px-4 bg-black relative overflow-hidden">
         {/* Subtle background glow */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-[#00AEEF]/5 blur-[120px] pointer-events-none" />
         
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="text-center md:text-left">
               <h2 className="text-3xl font-bold text-white mb-2">Journey Through Innovation</h2>
               <p className="text-gray-400">Embark on a captivating journey through Saratoga's evolution.</p>
            </div>
            <Link 
               to="/case-studies" 
               className="bg-[#00AEEF] text-white font-bold py-4 px-8 rounded-full hover:bg-[#008ec2] transition-all shadow-lg shadow-[#00AEEF]/20 flex items-center gap-2 whitespace-nowrap"
            >
               <Clock size={20} /> View Case Studies
            </Link>
         </div>
      </section>

    </div>
  );
};

const FeatureCard = ({ icon, title, desc }: any) => (
   <div className="bg-black border border-white/10 p-8 rounded-2xl hover:border-[#00AEEF] transition-all duration-300 group hover:-translate-y-1">
      <div className="w-16 h-16 bg-[#00AEEF]/10 rounded-xl flex items-center justify-center text-[#00AEEF] mb-6 group-hover:bg-[#00AEEF] group-hover:text-white transition-all">
         {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">
         {desc}
      </p>
   </div>
);

const InfoBlock = ({ icon, title, desc, link, linkText }: any) => (
   <div className="flex flex-col h-full p-8 rounded-2xl bg-black border border-white/10 hover:border-[#00AEEF]/50 transition-colors">
      <div className="flex items-center gap-3 mb-6">
         <div className="text-[#00AEEF]">{icon}</div>
         <h3 className="text-lg font-bold text-white tracking-wide">{title}</h3>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
         {desc}
      </p>
      <Link 
         to={link} 
         className="inline-flex items-center justify-center w-full py-3 border border-gray-600 rounded-lg text-sm font-bold text-white hover:bg-[#00AEEF] hover:border-[#00AEEF] transition-all"
      >
         {linkText}
      </Link>
   </div>
);

export default About;