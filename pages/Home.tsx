import React from 'react';
import { Link } from 'react-router-dom';
import HexagonBackground from '../components/HexagonBackground';
import { CheckCircle2, ShieldCheck, MessageSquareText, TrendingUp, ArrowRightFromLine, ArrowRight, Layers, Puzzle } from 'lucide-react';

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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#0072bc] pb-2">Simplified.</span>
          </h1>
          
          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in delay-100 leading-relaxed">
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
      <div className="bg-neutral-900/50 py-12 border-y border-white/5 overflow-hidden backdrop-blur-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4">
           {/* Simple CSS Marquee implementation */}
           <div className="relative flex overflow-x-hidden group">
             <div className="animate-marquee whitespace-nowrap flex gap-20 items-center">
                {/* Duplicate set for seamless loop */}
                {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, i) => (
                   <div key={i} className="h-12 w-auto flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-300">
                      <img 
                        src={client.src} 
                        alt={client.name} 
                        className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        onError={(e) => {
                          // Fallback if image missing: show text
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

      {/* 3. Awards Section */}
      <section className="bg-black py-16 relative z-20">
          <div className="max-w-7xl mx-auto px-4 flex flex-col items-center animate-fade-in">
             <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-10">
                {AWARDS.map((award, i) => (
                  <AwardBadge key={i} category={award} />
                ))}
             </div>
          </div>
      </section>

      {/* 4. Innovation / Solutions Section */}
      <section className="py-24 px-4 bg-black relative">
         {/* Background Grid */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
         
         <div className="max-w-7xl mx-auto relative z-10">
            {/* Header Text */}
            <div className="text-center mb-16 max-w-5xl mx-auto animate-fade-in">
                <h2 className="text-[#00AEEF] font-bold tracking-widest uppercase text-sm mb-6">
                  Software Solutions That Make Sense. For You. And Your Business.
                </h2>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                  At Saratoga we understand <span className="text-[#00AEEF]">software development.</span>
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed max-w-4xl mx-auto">
                  It is what we have done, every working day, for over 20 years. We know how to recruit the best talent, how to ensure that their skills stay current, how to run the software delivery process to remove risks and unknowns so that we deliver a quality outcome, on-time.
                </p>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
               {/* Card 1: Software Delivery */}
               <div className="bg-gray-900/50 border border-gray-800 p-10 rounded-3xl hover:border-[#00AEEF] transition-all duration-300 group flex flex-col items-center text-center backdrop-blur-sm">
                   <div className="w-20 h-20 bg-[#00AEEF]/10 rounded-2xl flex items-center justify-center text-[#00AEEF] mb-8 group-hover:scale-110 transition-transform duration-300">
                      <Layers size={40} />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-4">Software Delivery</h3>
                   <p className="text-gray-400 leading-relaxed">
                      Experience seamless software delivery, from concept to reality, with our expert team at your side.
                   </p>
               </div>

               {/* Center: 20+ Years Visual */}
               <div className="relative bg-gradient-to-b from-[#00AEEF]/10 to-transparent border border-white/5 p-10 rounded-3xl flex flex-col items-center justify-center text-center overflow-hidden">
                   {/* Background Hexagon hint */}
                   <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                      <svg width="300" height="300" viewBox="0 0 24 24" fill="currentColor" className="text-[#00AEEF]"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                   </div>
                   
                   <div className="relative z-10">
                      <div className="text-7xl font-black text-white mb-2">20+</div>
                      <div className="h-1 w-20 bg-[#00AEEF] mx-auto mb-4"></div>
                      <div className="text-xl text-gray-300 font-bold uppercase tracking-widest">Years of<br/>Excellence</div>
                   </div>
               </div>

               {/* Card 2: Specialist Solutions */}
               <div className="bg-gray-900/50 border border-gray-800 p-10 rounded-3xl hover:border-[#00AEEF] transition-all duration-300 group flex flex-col items-center text-center backdrop-blur-sm">
                   <div className="w-20 h-20 bg-[#00AEEF]/10 rounded-2xl flex items-center justify-center text-[#00AEEF] mb-8 group-hover:scale-110 transition-transform duration-300">
                      <Puzzle size={40} />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-4">Specialist Solutions</h3>
                   <p className="text-gray-400 leading-relaxed">
                      Unlock tailored solutions designed to address your unique challenges and propel your success forward.
                   </p>
               </div>
            </div>

            {/* CTA Button */}
            <div className="mt-16 text-center">
               <Link 
                 to="/case-studies" 
                 className="inline-flex items-center gap-2 bg-[#00AEEF] text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-[#008ec2] transition-all shadow-[0_0_20px_rgba(0,174,239,0.3)] hover:shadow-[0_0_40px_rgba(0,174,239,0.5)] transform hover:-translate-y-1"
               >
                  VIEW CASE STUDIES <ArrowRight size={20} />
               </Link>
            </div>
         </div>
      </section>

      {/* 5. Partnerships / Client Highlights */}
      <section className="py-24 px-4 bg-neutral-950 border-t border-white/5 relative">
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
              {/* Card 1 */}
              <PartnershipCard 
                icon={<ShieldCheck size={32} />}
                title="Africa’s largest insurance providers"
                tenure="22 Years"
                description="Africa’s largest and second largest insurance groups who we have worked with for 22 and 15 years respectively."
              />
              {/* Card 2 */}
              <PartnershipCard 
                icon={<ArrowRightFromLine size={32} />}
                title="Multinational WMS Provider"
                tenure="10 Years"
                description="UK-based Warehouse Management Systems provider with clients on four continents: 10 years and counting."
              />
              {/* Card 3 */}
              <PartnershipCard 
                icon={<MessageSquareText size={32} />}
                title="UK NPO Consumer Platform"
                tenure="8 Years"
                description="London-based NPO with consumer-facing digital platform: 8 years and counting."
              />
              {/* Card 4 */}
              <PartnershipCard 
                icon={<TrendingUp size={32} />}
                title="SA’s 4th Largest Asset Manager"
                tenure="8 Years"
                description="South Africa’s 4th largest asset manager: 8 years and counting."
              />
           </div>
        </div>
      </section>

      {/* 6. No Tech Jargon Section */}
      <section className="py-24 px-4 bg-black relative overflow-hidden">
        {/* Slanted Top Border effect */}
        <div className="absolute top-0 left-0 w-full h-16 bg-neutral-950" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
        
        {/* Subtle Background Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#00AEEF]/5 blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
             <div className="flex items-center gap-3 mb-4">
               <div className="w-12 h-1 bg-[#00AEEF]"></div>
               <h3 className="text-[#00AEEF] font-bold tracking-wide uppercase text-sm">No Tech Jargon Here.</h3>
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
               Just straightforward solutions, and exceptional results.
             </h2>
             <p className="text-xl text-gray-400 max-w-3xl">
               We get tech. We get you. So you get software solutions that make sense for your business, plain and simple.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <JargonCard 
               title="Efficiency | Transparency | Creativity"
               desc="You get a strategic partner committed to your success."
               img="/jargon-efficiency.jpg"
             />
             <JargonCard 
               title="Industry Expertise | Experience | Excellence"
               desc="Harness the skills of seasoned developers, analysts, and project managers."
               img="/jargon-expertise.jpg"
             />
             <JargonCard 
               title="Partnership | Customer-Driven | Innovation"
               desc="Our solutions are crafted with you and your goals in mind."
               img="/jargon-partnership.jpg"
             />
             <JargonCard 
               title="Talent | Technology | Trust"
               desc="We place people with exceptional skills to solve problems in business."
               img="/jargon-talent.jpg"
             />
          </div>
        </div>
      </section>

      {/* 7. Management Team */}
      <section className="py-24 px-4 bg-neutral-900 relative overflow-hidden">
         {/* Background Hexagons for this section */}
         <div className="absolute inset-0 opacity-10 pointer-events-none">
            <HexagonBackground />
         </div>

         <div className="max-w-7xl mx-auto relative z-10">
            {/* Centered Title */}
            <div className="text-center mb-16">
                <h2 className="text-[#00AEEF] font-bold tracking-wide uppercase text-sm mb-3">Leadership</h2>
                <h2 className="text-4xl md:text-5xl font-bold text-white">Meet the Team</h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
               {MANAGEMENT_TEAM.map((person, idx) => (
                 <div key={idx} className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] xl:w-[calc(20%-1.5rem)] bg-white rounded-[2.5rem] p-6 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 shadow-xl min-w-[200px]">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-gray-100 group-hover:border-[#00AEEF] transition-colors">
                       <img src={person.img} alt={person.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <h3 className="text-black font-extrabold text-xl mb-2">{person.name}</h3>
                    <div className="h-px w-8 bg-[#00AEEF] mb-3"></div>
                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                        {person.role}
                    </p>
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
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
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

// Award Badge Component
const AwardBadge = ({ category }: { category: string }) => (
  <div className="relative w-36 h-40 md:w-44 md:h-48 group hover:-translate-y-2 transition-transform duration-500 select-none cursor-default">
     {/* SVG Hexagon Background */}
     <svg viewBox="0 0 178 200" className="w-full h-full drop-shadow-[0_10px_20px_rgba(255,255,255,0.05)]">
        {/* Outer White Shape */}
        <path d="M89 0L177.5 50V150L89 200L0.5 150V50L89 0Z" fill="white" stroke="#4b5563" strokeWidth="3" />
        {/* Inner Gray Line */}
        <path d="M89 12L167 56V144L89 188L11 144V56L89 12Z" fill="none" stroke="#9CA3AF" strokeWidth="1.5" />
     </svg>
     
     {/* Content Overlay */}
     <div className="absolute inset-0 flex flex-col items-center text-center pt-6 pb-6 md:pt-8 md:pb-8">
        
        {/* Top Text Area */}
        <div className="flex-1 flex flex-col justify-end items-center px-4 pb-1.5 w-full">
            <span className="text-[7px] md:text-[8px] text-gray-500 font-bold tracking-widest leading-none mb-1">TOP</span>
            <span className="text-[8px] md:text-[9px] text-gray-800 font-bold uppercase leading-tight w-full px-2">{category}</span>
            <span className="text-[7px] md:text-[8px] text-gray-500 font-bold tracking-widest leading-none mt-1">COMPANY</span>
        </div>

        {/* Clutch Banner */}
        <div className="w-[88%] bg-[#2e3e46] py-1.5 md:py-2 flex items-center justify-center relative z-10 shadow-sm">
            <span className="text-white font-bold text-lg md:text-xl tracking-tighter leading-none">Clutch</span>
            <span className="w-1.5 h-1.5 bg-[#ef4444] rounded-full ml-0.5 mb-1"></span>
        </div>

        {/* Bottom Text Area */}
        <div className="flex-1 flex flex-col justify-start items-center pt-2">
             <span className="text-[7px] md:text-[8px] text-gray-500 font-bold tracking-widest uppercase leading-tight">SOUTH AFRICA</span>
             <span className="text-[9px] md:text-[10px] text-gray-700 font-bold mt-0.5">2025</span>
             {/* Stars simulation */}
             <div className="flex gap-0.5 mt-1">
                {[1,2,3,4,5].map(s => <div key={s} className="w-0.5 h-0.5 bg-red-500 rounded-full"></div>)}
             </div>
        </div>
     </div>
  </div>
);

// Component for the partnership cards
const PartnershipCard = ({ icon, title, tenure, description }: any) => (
  <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center hover:border-[#00AEEF] transition-colors duration-300 group flex flex-col items-center shadow-lg hover:shadow-[#00AEEF]/10">
      {/* Icon with line */}
      <div className="relative w-full flex items-center justify-center mb-8">
          <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#00AEEF]/30 group-hover:border-[#00AEEF] transition-colors"></div>
          </div>
          <div className="relative z-10 w-20 h-20 bg-gray-900 border-2 border-[#00AEEF] rounded-full flex items-center justify-center text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-white transition-all duration-300">
             {icon}
          </div>
      </div>
      
      {/* Title with fixed height to force 2-line appearance and alignment */}
      <div className="h-14 w-full flex items-center justify-center mb-4 px-2">
         <h3 className="text-[#00AEEF] font-medium text-lg leading-tight line-clamp-2">
            {title}
         </h3>
      </div>
      
      <p className="text-white font-bold text-2xl mb-4">{tenure}</p>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

// Component for Jargon Section Cards
const JargonCard = ({ title, desc, img }: any) => (
  <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 h-[300px] shadow-2xl">
    <div className="absolute inset-0">
      <img src={img} alt="" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 scale-100 group-hover:scale-105" />
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

// Data Constants
const AWARDS = [
  "SOFTWARE TESTING",
  "ARTIFICIAL INTELLIGENCE",
  "COMPUTER VISION",
  "CLOUD CONSULTING",
  "BI & BIG DATA"
];

const CLIENT_LOGOS = [
  { name: "OLD MUTUAL", src: "/logos/old-mutual.png" },
  { name: "TFG", src: "/logos/tfg.png" },
  { name: "WOOLWORTHS", src: "/logos/woolworths.png" },
  { name: "INVESTEC", src: "/logos/investec.png" },
  { name: "STANDARD BANK", src: "/logos/standard-bank.png" },
  { name: "CAPITEC", src: "/logos/capitec.png" },
  { name: "DISCOVERY", src: "/logos/discovery.png" },
  { name: "VODACOM", src: "/logos/vodacom.png" },
  { name: "SANLAM", src: "/logos/sanlam.png" },
  { name: "NEDBANK", src: "/logos/nedbank.png" }
];

const MANAGEMENT_TEAM = [
  { name: "Anthony", role: "Executive Chairman", img: "/team-anthony.png" },
  { name: "Mark", role: "Chief Executive Officer", img: "/team-mark.jpg" },
  { name: "Julian", role: "Finance Director", img: "/team-julian.jpg" },
  { name: "Bharn", role: "General Manager", img: "/team-bharn.jpg" },
  { name: "Karen", role: "Business Development Manager", img: "/team-karen.jpg" },
  { name: "James", role: "Business Competency Lead", img: "/team-james.jpg" },
  { name: "Willo", role: "Technical Competency Lead", img: "/team-willo.jpg" },
  { name: "Cathy", role: "Human Resources Manager", img: "/team-cathy.jpg" },
  { name: "Sheetal", role: "Finance Manager", img: "/team-sheetal.jpg" },
];

export default Home;