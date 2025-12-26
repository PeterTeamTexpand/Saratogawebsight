import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cpu, LineChart, Quote, Terminal, ChevronLeft, ChevronRight, Circle, CircleDot } from 'lucide-react';
import HexagonBackground from '../components/HexagonBackground';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#00AEEF] selection:text-white pb-12 pt-20">
      
      {/* 1. Standardized Hero Section */}
      <section className="relative pt-12 pb-20 px-4 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00AEEF]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 opacity-30 pointer-events-none">
           <HexagonBackground />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
           <h4 className="text-[#00AEEF] font-bold tracking-[0.3em] uppercase text-xs mb-6">
              OUR SERVICES
           </h4>
           <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
             Custom Solutions. <br/>
             <span className="text-[#00AEEF]">Uniquely Crafted.</span>
           </h1>
           <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light mb-10">
             Tailored custom solutions designed to address your specific needs and drive success.
           </p>
        </div>
      </section>

      {/* Blue Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00AEEF]/50 to-transparent"></div>

      {/* 2. Introduction */}
      <section className="py-24 px-4 bg-black relative z-20">
         <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-12 animate-fade-in delay-100">
            
            <div className="flex-shrink-0 lg:w-auto">
               <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                  Looking for a <br/>
                  digital partner?
               </h2>
               <span className="text-[#00AEEF] text-sm font-bold tracking-[0.25em] uppercase block">
                  EST. 1998
               </span>
            </div>
            
            <div className="hidden lg:block w-px h-24 bg-white/10 self-center"></div>

            <div className="lg:flex-1">
               <p className="text-gray-300 text-lg leading-relaxed font-light">
                  For over 25 years, we have designed, built, and ran innovative technology solutions. We reduce risk, accelerate growth, and drive competitive advantage through sustainable strategies.
               </p>
            </div>
         </div>
      </section>

      {/* Blue Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00AEEF]/50 to-transparent"></div>

      {/* 3. Service Offerings Grid */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-20">
         <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Service Offerings</h2>
            <div className="w-24 h-1 bg-[#00AEEF] mx-auto rounded-full"></div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Software Delivery */}
            <ServiceCard 
               icon={<Terminal size={32} />}
               title="Software Delivery"
               desc="Removing risks to deliver quality outcomes, on time."
               items={[
                 "Custom Software Development", 
                 "Product Development",
                 "Agile Staff Augmentation",
                 "Cloud Migration",
                 "Data & Business Intelligence"
               ]}
               delay="delay-100"
            />
             
             {/* AI & ML */}
             <ServiceCard 
               icon={<Cpu size={32} />}
               title="AI & Machine Learning"
               desc="Leverage data to automate tasks and gain real-time insights."
               items={[
                 "AI Agents & Chatbots",
                 "Generative AI Integration",
                 "Predictive Analytics",
                 "Process Automation",
                 "Knowledge Bases"
               ]}
               delay="delay-200"
               highlight
            />
             
             {/* Tech Advisory */}
             <ServiceCard 
               icon={<LineChart size={32} />}
               title="Technology Advisory"
               desc="Aligning technology to business strategy for maximum value."
               items={[
                 "Architecture Review",
                 "Technology Strategy",
                 "Digital Transformation",
                 "IT Due Diligence",
                 "Project Recovery"
               ]}
               delay="delay-300"
            />
         </div>
      </section>

      {/* Blue Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00AEEF]/50 to-transparent"></div>

      {/* 4. Testimonials Deck */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-20">
         <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Client Testimonials</h2>
            <p className="text-gray-400 text-lg">Trusted by industry leaders.</p>
         </div>
         
         <TestimonialDeck />
      </section>

      {/* Call to Action */}
      <section className="pb-24 px-4 text-center">
         <div className="max-w-3xl mx-auto bg-black border border-white/10 rounded-3xl p-12 hover:border-[#00AEEF]/50 transition-colors duration-500 group">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to transform?</h2>
            <p className="text-gray-400 mb-8">
               Custom software, AI strategy, or technical advisory—we are ready to help.
            </p>
            <Link 
               to="/contact" 
               className="inline-block bg-[#00AEEF] text-white font-bold py-4 px-10 rounded-full hover:bg-[#008ec2] transition-all shadow-lg hover:shadow-[#00AEEF]/30 transform group-hover:-translate-y-1"
            >
               Contact Us Today
            </Link>
         </div>
      </section>

    </div>
  );
};

/* --- Testimonial Deck Component --- */

const TestimonialDeck: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
      setIsAnimating(false);
    }, 300);
  };

  const first = TESTIMONIALS[currentIndex];
  const second = TESTIMONIALS[(currentIndex + 1) % TESTIMONIALS.length];

  return (
    <div className="relative">
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 z-20 p-2 bg-black/50 border border-gray-700 rounded-full text-white hover:border-[#00AEEF] hover:text-[#00AEEF] transition-all"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 z-20 p-2 bg-black/50 border border-gray-700 rounded-full text-white hover:border-[#00AEEF] hover:text-[#00AEEF] transition-all"
      >
        <ChevronRight size={20} />
      </button>

      <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
         <SmallTestimonialCard data={first} />
         <div className="hidden md:block">
            <SmallTestimonialCard data={second} />
         </div>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {TESTIMONIALS.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-colors duration-300 ${idx === currentIndex ? 'text-[#00AEEF]' : 'text-gray-700 hover:text-gray-500'}`}
          >
            {idx === currentIndex ? <CircleDot size={10} /> : <Circle size={10} />}
          </button>
        ))}
      </div>
    </div>
  );
};

const SmallTestimonialCard = ({ data }: { data: any }) => (
  <div className="bg-black border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col h-full hover:border-[#00AEEF]/30 transition-colors shadow-lg relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#00AEEF]/5 blur-[40px] rounded-full pointer-events-none group-hover:bg-[#00AEEF]/10 transition-colors" />
      
      <div className="mb-6 h-12 flex items-center">
          <CompanyLogo company={data.company} />
      </div>

      <div className="flex-1 relative mb-6">
          <Quote className="text-[#00AEEF] w-8 h-8 mb-4 opacity-50" />
          <p className="text-gray-300 leading-relaxed font-light italic text-sm md:text-base relative z-10">
            "{data.quote}"
          </p>
      </div>

      <div className="border-t border-gray-800 pt-4">
          <h4 className="text-white font-bold text-sm">{data.author}</h4>
          <p className="text-[#00AEEF] text-xs">
            {data.role}
          </p>
      </div>
  </div>
);

const CompanyLogo = ({ company }: { company: string }) => {
  if (company.includes("Stewardship")) return <div className="text-2xl font-bold text-[#e11d48]">stewardship</div>;
  if (company.includes("WCS")) return <div className="text-3xl font-black text-[#1e3a8a]">WCS</div>;
  if (company.includes("IOL")) return <span className="text-2xl font-bold text-white">IOL</span>;
  if (company.includes("Cedar Springs")) return <div className="text-[#1e40af] text-xs font-serif uppercase border border-gray-700 px-2 py-1">Cedar Springs</div>;
  if (company.includes("Momentum")) return <div className="text-xl font-bold italic text-white">Momentum</div>;
  return <div className="px-3 py-1 border border-white/20 rounded text-sm font-bold text-gray-300 uppercase">{company}</div>;
};

const ServiceCard = ({ icon, title, desc, items, delay, highlight }: any) => (
  <div className={`h-full bg-black border ${highlight ? 'border-[#00AEEF] shadow-[0_0_30px_rgba(0,174,239,0.15)]' : 'border-white/10'} rounded-3xl p-8 hover:border-[#00AEEF]/50 transition-all duration-300 animate-fade-in ${delay} group flex flex-col`}>
     <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${highlight ? 'bg-[#00AEEF] text-white' : 'bg-gray-900 text-[#00AEEF]'}`}>
        {icon}
     </div>
     <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
     <p className="text-gray-400 mb-8 leading-relaxed h-16">{desc}</p>
     
     <div className="mt-auto">
       <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Key Capabilities</h4>
       <ul className="space-y-3">
          {items.map((item: string, idx: number) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
               <span className="w-1.5 h-1.5 bg-[#00AEEF] rounded-full mt-1.5 flex-shrink-0" />
               <span className="group-hover:text-white transition-colors">{item}</span>
            </li>
          ))}
       </ul>
     </div>
  </div>
);

// Shorter Testimonials
const TESTIMONIALS = [
  {
    quote: "Selecting a development partner meant ensuring a robust methodology. Saratoga excelled in keeping us on track across a worldwide footprint.",
    author: "Project Lead",
    role: "Global Program Manager",
    company: "WCS"
  },
  {
    quote: "Saratoga delivered a world-class solution that modernized our entire claims pipeline. Their attention to detail was impressive.",
    author: "Michelle Vance",
    role: "Head of IT",
    company: "Momentum"
  },
  {
    quote: "We required a partner who understood our unique community needs while delivering enterprise-grade software. Saratoga exceeded expectations.",
    author: "David Graham",
    role: "Director of Operations",
    company: "Cedar Springs"
  },
  {
    quote: "Technical expertise in building secure, high-availability platforms was crucial. A fantastic partnership.",
    author: "James Peterson",
    role: "CTO",
    company: "Stewardship"
  },
  {
    quote: "Agile approach allowed us to pivot quickly, delivering a superior product ahead of schedule.",
    author: "Sarah Jenkins",
    role: "Product Owner",
    company: "IOL"
  }
];

export default Services;