import React from 'react';
import { ArrowRight } from 'lucide-react';

const Insights: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-800 pb-8">
            <div>
                <h1 className="text-5xl font-bold text-white mb-4">Insights</h1>
                <p className="text-gray-400 max-w-xl">
                    Thoughts, strategies, and technical deep-dives from the Saratoga team.
                </p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-[#00AEEF] font-bold hover:text-white transition-colors">
                View All Articles <ArrowRight size={20} />
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Featured Article - Spans 2 cols */}
           <div className="md:col-span-2 relative group rounded-2xl overflow-hidden min-h-[400px] border border-gray-800">
              <img 
                src="/insight-featured.jpg" 
                alt="AI" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                 <span className="bg-[#00AEEF] text-black px-3 py-1 rounded-full text-xs font-bold uppercase mb-4 inline-block">Featured</span>
                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    The Enterprise Guide to Generative AI Implementation
                 </h2>
                 <p className="text-gray-300 mb-6 max-w-2xl line-clamp-2">
                    How large organizations can safely integrate tools like Gemini and Veo into their workflows without compromising data security.
                 </p>
                 <span className="text-white font-bold underline decoration-[#00AEEF] underline-offset-4">Read Article</span>
              </div>
           </div>

           {/* Sidebar Articles */}
           <div className="space-y-8 flex flex-col h-full">
              <InsightMini 
                date="Oct 12, 2023"
                category="Engineering"
                title="Migrating Legacy SQL to Vector Databases"
              />
              <InsightMini 
                date="Sep 28, 2023"
                category="Strategy"
                title="The Cost of Technical Debt in 2024"
              />
              <InsightMini 
                date="Sep 15, 2023"
                category="Design"
                title="Designing Interfaces for AI Agents"
              />
               <div className="flex-1 bg-gray-900/30 rounded-2xl border border-gray-800 p-8 flex flex-col justify-center items-center text-center">
                  <h3 className="text-xl font-bold text-white mb-2">Subscribe to our Newsletter</h3>
                  <p className="text-sm text-gray-500 mb-4">Get the latest insights delivered to your inbox.</p>
                  <input type="email" placeholder="Email address" className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 mb-2 text-white text-sm" />
                  <button className="w-full bg-[#00AEEF] text-white font-bold py-2 rounded-lg text-sm hover:bg-[#008ec2] transition">Subscribe</button>
               </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const InsightMini = ({ date, category, title }: { date: string, category: string, title: string }) => (
  <div className="group cursor-pointer border-b border-gray-800 pb-6 last:border-0 last:pb-0">
    <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
       <span>{date}</span>
       <span className="w-1 h-1 bg-gray-600 rounded-full" />
       <span className="text-[#00AEEF] uppercase tracking-wide">{category}</span>
    </div>
    <h3 className="text-xl font-bold text-white group-hover:text-[#00AEEF] transition-colors leading-snug">
        {title}
    </h3>
  </div>
);

export default Insights;