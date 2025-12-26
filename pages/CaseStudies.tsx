import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import HexagonBackground from '../components/HexagonBackground';
import { ASSETS } from '../data/assets';
import { CASE_STUDIES, CaseStudy } from '../data/caseStudiesData';

const CaseStudies: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#00AEEF] selection:text-white pt-20">

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00AEEF]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 opacity-30 pointer-events-none">
           <HexagonBackground />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
           <h4 className="text-[#00AEEF] font-bold tracking-[0.3em] uppercase text-xs mb-6">
              CASE STUDIES
           </h4>
           <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
             Innovation <br />
             <span className="text-[#00AEEF]">in Action.</span>
           </h1>
           <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light mb-10">
             Explore our technical documentation and success stories. Each case study represents a unique challenge solved through precision engineering.
           </p>
        </div>
      </section>

      {/* Blue Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00AEEF]/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto animate-fade-in py-24 px-4 sm:px-6 lg:px-8">
        {CASE_STUDIES.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-3xl">
            <p className="text-gray-500 italic">No case studies found. Please check your local data file.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {CASE_STUDIES.map((study) => (
              <StudyCard 
                 key={study.id}
                 data={study}
              />
            ))}
          </div>
        )}
      </div>

      {/* Footer Support Section */}
      <section className="py-24 px-4 bg-gray-900/20">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Need more specific technical details?</h2>
            <p className="text-gray-400 mb-8 font-light">Contact our engineering team directly to discuss how our methodologies can apply to your specific infrastructure.</p>
            <a 
              href="mailto:hello@saratogasoftware.com?subject=Technical Case Study Inquiry"
              className="inline-flex items-center gap-2 text-[#00AEEF] font-bold hover:text-white transition-colors"
            >
               Request Technical Briefing <ArrowRight size={18} />
            </a>
         </div>
      </section>
    </div>
  );
};

const StudyCard: React.FC<{ data: CaseStudy }> = ({ data }) => (
  <div className="group relative overflow-hidden rounded-3xl bg-neutral-900/40 border border-white/5 transition-all duration-500 hover:border-[#00AEEF]/50 min-h-[450px] flex flex-col shadow-2xl">
    
    {/* Image Container */}
    <div className="h-64 overflow-hidden relative flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
        
        <img 
          src={data.image_url || ASSETS.backgrounds.insightDefault} 
          alt={data.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0" 
          onError={(e) => {
            e.currentTarget.src = ASSETS.backgrounds.insightDefault;
          }}
        />
        
        <div className="absolute top-4 left-4 z-20 flex gap-2">
            <span className="bg-[#00AEEF] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                {data.category}
            </span>
            <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest border border-white/10 flex items-center gap-1.5">
                <FileText size={10} /> PDF
            </span>
        </div>
    </div>

    {/* Content */}
    <div className="p-8 flex flex-col flex-1 relative z-20">
        <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-[#00AEEF] transition-colors">
              {data.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {data.description}
            </p>
        </div>
        
        {/* Footer Stats */}
        <div className="border-t border-white/10 pt-6 flex items-end justify-between">
            <div>
                <p className="text-4xl font-bold text-white tracking-tight mb-1">{data.stat}</p>
                <p className="text-[10px] text-[#00AEEF] uppercase tracking-widest font-bold">{data.stat_label}</p>
            </div>
            
            <a 
              href={data.pdf_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-white/5 hover:bg-[#00AEEF] border border-white/10 hover:border-[#00AEEF] rounded-xl text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2 group/btn transition-all duration-300"
            >
                Read PDF <ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
            </a>
        </div>
    </div>
  </div>
);

export default CaseStudies;