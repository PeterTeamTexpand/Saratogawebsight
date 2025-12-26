
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HexagonBackground from '../components/HexagonBackground';
import { ShieldCheck, MessageSquareText, TrendingUp, ArrowRightFromLine, ArrowRight, Layers, Puzzle, ChevronLeft, ChevronRight } from 'lucide-react';
import { ASSETS } from '../data/assets';

const Home: React.FC = () => {
  return (
    <div className="bg-black text-white selection:bg-[#00AEEF] selection:text-white overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <HexagonBackground />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight animate-fade-in">
            Software and Data solutions
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#0072bc] pb-2">Amplified.</span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in delay-100 leading-relaxed font-light">
            Saratoga will elevate your business with custom solutions tailored to your needs. 
            Explore our innovative services for comprehensive solution development.
          </p>

          <div className="mt-10 flex justify-center gap-6 animate-fade-in delay-200">
            <Link 
              to="/services" 
              className="px-10 py-3 border-2 border-[#00AEEF] text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white font-semibold rounded-full transition-all duration-300"
            >
              Explore Solutions
            </Link>
            <Link 
              to="/contact" 
              className="px-10 py-3 border-2 border-gray-600 hover:border-white text-white font-semibold rounded-full transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
        
        {/* Decorative gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
      </section>

      {/* 2. Client Logo Carousel */}
      <div className="bg-black py-12 border-y border-white/5 overflow-hidden backdrop-blur-md relative z-20">
        <div className="max-w-7xl mx-auto px-4">
           <div className="relative flex overflow-x-hidden group">
             <div className="animate-marquee whitespace-nowrap flex gap-20 items-center">
                {[...ASSETS.clients, ...ASSETS.clients].map((client, i) => (
                   <div key={i} className="h-12 w-auto flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-300">
                      <img 
                        src={client.src} 
                        alt={client.name} 
                        className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <span className="hidden text-xl font-bold text-gray-600 uppercase font-mono tracking-widest">{client.name}</span>
                   </div>
                ))}
             </div>
           </div>
        </div>
      </div>

      {/* 3. Combined Trust & Expertise Section */}
      <section className="bg-black relative z-20 pt-20 pb-24 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[600px] bg-[#00AEEF]/5 blur-[150px] rounded-full pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 relative">
             <div className="max-w-5xl mx-auto text-center mb-20 relative">
                <div className="flex justify-center mb-8">
                   <div className="w-1 h-12 bg-gradient-to-b from-transparent via-[#00AEEF] to-transparent opacity-50"></div>
                </div>

                <h3 className="text-[#00AEEF] font-black tracking-[0.3em] uppercase text-[11px] mb-6 animate-fade-in delay-100">
                  Software Solutions That Make Sense. For You. And Your Business.
                </h3>
                
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in delay-200 drop-shadow-lg">
                  At Saratoga we understand <br/>
                  <span className="text-[#00AEEF]">software development.</span>
                </h2>
                
                <div className="w-24 h-1 bg-[#00AEEF] mx-auto mb-8 rounded-full"></div>

                <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto animate-fade-in delay-300 font-light">
                  For over two decades, we have mastered the art of recruiting top talent and refining delivery processes to eliminate risk and guarantee quality outcomes.
                </p>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
                <div className="lg:col-span-4 bg-black border border-white/10 hover:border-[#00AEEF] p-8 md:p-10 rounded-3xl group transition-all duration-500 hover:bg-white/5 flex flex-col items-center text-center shadow-xl hover:shadow-[#00AEEF]/20">
                    <div className="w-16 h-16 bg-[#00AEEF]/10 rounded-2xl flex items-center justify-center text-[#00AEEF] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(0,174,239,0.1)]">
                        <Layers size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Software Delivery</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                       Experience seamless software delivery, from concept to reality, with our expert team at your side.
                    </p>
                </div>

                <div className="lg:col-span-4 flex flex-col items-center justify-center py-12 lg:py-0 relative group select-none">
                    <div className="absolute inset-0 bg-[#00AEEF]/10 blur-[60px] rounded-full pointer-events-none" />
                    <div className="relative w-64 h-64 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border border-dashed border-[#00AEEF]/20 animate-[spin_20s_linear_infinite]" />
                        <div className="absolute inset-4 rounded-full border border-[#00AEEF]/10 border-t-[#00AEEF]/40 animate-[spin_15s_linear_infinite_reverse]" />
                        <div className="absolute inset-8 rounded-full bg-gradient-to-br from-neutral-900 to-black border border-white/5 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center justify-center backdrop-blur-sm group-hover:scale-105 transition-transform duration-500">
                            <div className="text-center z-10 p-6 flex flex-col items-center">
                                <div className="text-6xl md:text-7xl font-black text-white tracking-tighter mb-2 leading-none drop-shadow-md">
                                  20<span className="text-[#00AEEF]">+</span>
                                </div>
                                <div className="h-0.5 w-10 bg-[#00AEEF]/50 mb-3" />
                                <div className="text-[10px] md:text-xs text-[#00AEEF] font-bold uppercase tracking-[0.3em] leading-relaxed">
                                  Years of<br/>Excellence
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-4 bg-black border border-white/10 hover:border-[#00AEEF] p-8 md:p-10 rounded-3xl group transition-all duration-500 hover:bg-white/5 flex flex-col items-center text-center shadow-xl hover:shadow-[#00AEEF]/20">
                    <div className="w-16 h-16 bg-[#00AEEF]/10 rounded-2xl flex items-center justify-center text-[#00AEEF] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(0,174,239,0.1)]">
                        <Puzzle size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Specialist Solutions</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                       Unlock tailored solutions designed to address your unique challenges and propel your success forward.
                    </p>
                </div>
             </div>

             <div className="mt-20 text-center">
                <Link 
                  to="/case-studies"
                  className="group inline-flex items-center gap-2 text-sm font-bold tracking-widest text-white hover:text-[#00AEEF] transition-colors"
                >
                  <span className="border-b border-transparent group-hover:border-[#00AEEF] pb-0.5 transition-all">VIEW CASE STUDIES</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
             </div>
          </div>
      </section>

      {/* 4. Partnerships */}
      <section className="py-24 px-4 bg-black border-t border-white/5 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00AEEF]/50 to-transparent" />
        <div className="max-w-7xl mx-auto relative">
           <div className="mb-20 text-center">
              <h3 className="text-sm font-bold tracking-[0.2em] text-white/70 uppercase mb-6">
                 We don't just build software, we build partnerships.
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-white max-w-5xl mx-auto leading-tight">
                 Our customers keep coming to us to solve some of their <span className="text-[#00AEEF]">hardest problems.</span>
              </h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              <PartnershipCard 
                icon={<ShieldCheck size={32} />}
                title="Africa’s largest insurance providers"
                tenure="22 Years"
                description="Africa’s largest and second largest insurance groups who we have worked with for 22 and 15 years respectively."
              />
              <PartnershipCard 
                icon={<ArrowRightFromLine size={32} />}
                title="Multinational WMS Provider"
                tenure="10 Years"
                description="UK-based Warehouse Management Systems provider with clients on four continents: 10 years and counting."
              />
              <PartnershipCard 
                icon={<MessageSquareText size={32} />}
                title="UK NPO Consumer Platform"
                tenure="8 Years"
                description="London-based NPO with consumer-facing digital platform: 8 years and counting."
              />
              <PartnershipCard 
                icon={<TrendingUp size={32} />}
                title="SA’s 4th Largest Asset Manager"
                tenure="8 Years"
                description="South Africa’s 4th largest asset manager: 8 years and counting."
              />
           </div>
        </div>
      </section>

      {/* 5. No Tech Jargon Section */}
      <section className="py-24 px-4 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
             <div className="flex items-center gap-3 mb-4">
               <div className="w-12 h-1 bg-[#00AEEF]"></div>
               <h3 className="text-[#00AEEF] font-bold tracking-wide uppercase text-sm">No Tech Jargon Here.</h3>
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
               Just straightforward solutions, and exceptional results.
             </h2>
             <p className="text-lg md:text-xl text-gray-400 max-w-3xl font-light">
               We get tech. We get you. So you get software solutions that make sense for your business, plain and simple.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <JargonCard 
               title="Efficiency | Transparency | Creativity"
               desc="You get a strategic partner committed to your success."
               img={ASSETS.backgrounds.jargonEfficiency}
             />
             <JargonCard 
               title="Industry Expertise | Experience | Excellence"
               desc="Harness the skills of seasoned developers, analysts, and project managers."
               img={ASSETS.backgrounds.jargonExpertise}
             />
             <JargonCard 
               title="Partnership | Customer-Driven | Innovation"
               desc="Our solutions are crafted with you and your goals in mind."
               img={ASSETS.backgrounds.jargonPartnership}
             />
             <JargonCard 
               title="Talent | Technology | Trust"
               desc="We place people with exceptional skills to solve problems in business."
               img={ASSETS.backgrounds.jargonTalent}
             />
          </div>
        </div>
      </section>

      {/* 6. Management Team - Sliding Carousel */}
      <section className="py-24 px-4 bg-black relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 pointer-events-none">
            <HexagonBackground />
         </div>
         <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-[#00AEEF] font-bold tracking-wide uppercase text-sm mb-3">Leadership</h2>
                <h2 className="text-4xl md:text-5xl font-bold text-white">Meet the Team</h2>
            </div>
            <TeamCarousel />
         </div>
      </section>

      {/* 7. Awards Section */}
      <section className="py-24 px-4 bg-black relative border-t border-white/5">
           <div className="max-w-7xl mx-auto text-center">
              <h4 className="text-[#00AEEF] font-bold tracking-[0.2em] uppercase text-2xl mb-12">
                  AWARD WINNING EXCELLENCE
              </h4>
               <div className="flex flex-wrap justify-center gap-6 md:gap-8 relative z-10">
                  <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent -z-10 hidden md:block" />
                  {AWARDS.map((award, i) => (
                    <div key={i} className="bg-black transform hover:-translate-y-2 transition-transform duration-300">
                       <AwardBadge category={award} />
                    </div>
                  ))}
               </div>
           </div>
      </section>

      {/* 8. Contact CTA */}
      <section className="py-24 px-4 bg-black border-t border-white/5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,174,239,0.05),transparent_50%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">Ready to start your journey?</h2>
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
              Whether you need strategic consulting or a custom software solution, we're here to help you succeed.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-3 bg-[#00AEEF] text-white font-bold text-lg px-10 py-5 rounded-full hover:bg-[#008ec2] transition-all shadow-[0_0_20px_rgba(0,174,239,0.3)] hover:shadow-[0_0_40px_rgba(0,174,239,0.5)] transform hover:-translate-y-1"
            >
              Contact Us Today <ArrowRight size={24} />
            </Link>
        </div>
      </section>
    </div>
  );
};

const TeamCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isResizing, setIsResizing] = useState(false);

  const originalItems = ASSETS.team;
  const extendedTeam = [...originalItems, ...originalItems, ...originalItems];
  const totalItems = extendedTeam.length;

  useEffect(() => {
    setCurrentIndex(originalItems.length);
  }, [originalItems.length]);

  useEffect(() => {
    const handleResize = () => {
      setIsResizing(true);
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(4);
      const timer = setTimeout(() => setIsResizing(false), 300);
      return () => clearTimeout(timer);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  };

  const prev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    const singleLength = originalItems.length;
    if (currentIndex >= 2 * singleLength) {
       setCurrentIndex(currentIndex - singleLength);
    } else if (currentIndex < singleLength) {
       setCurrentIndex(currentIndex + singleLength);
    }
  };

  const trackWidth = (totalItems / itemsPerPage) * 100;
  const itemWidth = 100 / totalItems;
  const translateX = currentIndex * itemWidth;

  return (
    <div className="relative group">
       <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:-ml-12 z-20">
          <button onClick={prev} className="p-3 rounded-full border border-gray-700 bg-black/80 text-white hover:border-[#00AEEF] hover:text-[#00AEEF] transition-all shadow-lg backdrop-blur-sm hover:scale-110">
             <ChevronLeft size={24} />
          </button>
       </div>
       <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 md:-mr-12 z-20">
          <button onClick={next} className="p-3 rounded-full border border-gray-700 bg-black/80 text-white hover:border-[#00AEEF] hover:text-[#00AEEF] transition-all shadow-lg backdrop-blur-sm hover:scale-110">
             <ChevronRight size={24} />
          </button>
       </div>
       <div className="overflow-hidden w-full px-2 py-4">
          <div 
             className="flex"
             style={{ 
                width: `${trackWidth}%`,
                transform: `translateX(-${translateX}%)`,
                transition: isTransitioning && !isResizing ? 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
             }}
             onTransitionEnd={handleTransitionEnd}
          >
             {extendedTeam.map((person, idx) => (
                <div key={`${person.name}-${idx}`} className="px-3" style={{ width: `${itemWidth}%` }}>
                   <div className="w-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 flex flex-col items-center text-center group/card hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-[#00AEEF]/20 hover:bg-white/10 hover:border-[#00AEEF]/30 relative overflow-hidden h-full min-h-[340px] justify-center">
                      <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white/5 group-hover/card:border-[#00AEEF] transition-colors duration-300 shadow-2xl">
                         <img src={person.img} alt={person.name} className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-500 scale-100 group-hover/card:scale-110" />
                      </div>
                      <h3 className="relative z-10 text-white font-extrabold text-xl mb-2 tracking-wide group-hover/card:text-[#00AEEF] transition-colors leading-tight">{person.name}</h3>
                      <div className="relative z-10 h-0.5 w-8 bg-[#00AEEF] mb-3 group-hover/card:w-16 transition-all duration-300"></div>
                      <p className="relative z-10 text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed group-hover/card:text-white transition-colors">
                          {person.role}
                      </p>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </div>
  );
};

const AwardBadge = ({ category }: { category: string }) => (
  <div className="relative w-32 h-36 md:w-36 md:h-40 group hover:-translate-y-2 transition-transform duration-500 select-none cursor-default">
     <svg viewBox="0 0 178 200" className="w-full h-full drop-shadow-[0_10px_20px_rgba(255,255,255,0.05)]">
        <path d="M89 0L177.5 50V150L89 200L0.5 150V50L89 0Z" fill="white" stroke="#374151" strokeWidth="2" />
        <path d="M89 12L167 56V144L89 188L11 144V56L89 12Z" fill="none" stroke="#9CA3AF" strokeWidth="1" />
     </svg>
     <div className="absolute inset-0 flex flex-col items-center text-center pt-5 pb-5 md:pt-6 md:pb-6">
        <div className="flex-1 flex flex-col justify-end items-center px-4 pb-1 w-full">
            <span className="text-[6px] md:text-[7px] text-gray-500 font-bold tracking-widest leading-none mb-0.5">TOP</span>
            <span className="text-[7px] md:text-[8px] text-gray-800 font-bold uppercase leading-tight w-full px-1">{category}</span>
            <span className="text-[6px] md:text-[7px] text-gray-500 font-bold tracking-widest leading-none mt-0.5">COMPANY</span>
        </div>
        <div className="w-[88%] bg-[#2e3e46] py-1 flex items-center justify-center relative z-10 shadow-sm my-0.5">
            <span className="text-white font-bold text-base md:text-lg tracking-tighter leading-none">Clutch</span>
            <span className="w-1 h-1 bg-[#ef4444] rounded-full ml-0.5 mb-1"></span>
        </div>
        <div className="flex-1 flex flex-col justify-start items-center pt-1">
             <span className="text-[6px] md:text-[7px] text-gray-500 font-bold tracking-widest uppercase leading-tight">SOUTH AFRICA</span>
             <span className="text-[8px] md:text-[9px] text-gray-700 font-bold mt-0.5">2025</span>
             <div className="flex gap-0.5 mt-0.5">
                {[1,2,3,4,5].map(s => <div key={s} className="w-0.5 h-0.5 bg-red-500 rounded-full"></div>)}
             </div>
        </div>
     </div>
  </div>
);

const PartnershipCard = ({ icon, title, tenure, description }: any) => (
  <div className="bg-black backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center hover:border-[#00AEEF] transition-all duration-300 group flex flex-col items-center shadow-lg hover:shadow-[#00AEEF]/10 hover:-translate-y-1">
      <div className="relative w-full flex items-center justify-center mb-8">
          <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#00AEEF]/30 group-hover:border-[#00AEEF] transition-colors"></div>
          </div>
          <div className="relative z-10 w-20 h-20 bg-gray-900 border-2 border-[#00AEEF] rounded-full flex items-center justify-center text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-white transition-all duration-300">
             {icon}
          </div>
      </div>
      <div className="h-14 w-full flex items-center justify-center mb-4 px-2">
         <h3 className="text-[#00AEEF] font-medium text-lg leading-tight line-clamp-2">
            {title}
         </h3>
      </div>
      <p className="text-white font-bold text-2xl mb-4">{tenure}</p>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

const JargonCard = ({ title, desc, img }: any) => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black backdrop-blur-sm h-[300px] shadow-2xl transition-transform duration-300 hover:-translate-y-1 hover:border-[#00AEEF]/50">
    <div className="absolute inset-0">
      <img src={img} alt="" className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500 scale-100 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
    </div>
    <div className="absolute bottom-0 left-0 p-8 w-full z-10">
       <div className="text-[#00AEEF] text-sm font-bold uppercase tracking-wider mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
         {title.split('|').join(' • ')}
       </div>
       <p className="text-xl font-medium text-white leading-relaxed">
         {desc}
       </p>
    </div>
  </div>
);

const AWARDS = [
  "SOFTWARE TESTING",
  "ARTIFICIAL INTELLIGENCE",
  "COMPUTER VISION",
  "CLOUD CONSULTING",
  "BI & BIG DATA"
];

export default Home;