import React, { useState, useEffect } from 'react';
import { Search, Calendar, User, Folder, ArrowRight, Play, FileText, Loader2, Hexagon, ChevronLeft } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import HexagonBackground from '../components/HexagonBackground';
import { getInsights } from '../services/supabase';
import { ASSETS } from '../data/assets';

interface Insight {
  id: string;
  date: string;
  category: string;
  title: string;
  description: string;
  image_url: string;
  author: string;
}

const Insights: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<'articles' | 'videos'>('articles');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(searchParams.get('category'));
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getInsights();
      setInsights(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const allCategories = Array.from(new Set(insights.flatMap(i => i.category.split(',').map(c => c.trim()))));
  
  const filteredInsights = insights.filter(insight => {
    const matchesSearch = insight.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          insight.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? insight.category.includes(selectedCategory) : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Accents */}
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-[#00AEEF]/5 blur-[150px] rounded-full pointer-events-none" />
      
      <section className="relative pt-12 pb-20 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00AEEF]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 opacity-30 pointer-events-none">
           <HexagonBackground />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
           <h4 className="text-[#00AEEF] font-bold tracking-[0.3em] uppercase text-[10px] mb-6">
              INSIGHTS DIRECTORY
           </h4>
           <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
             Thoughts & <br />
             <span className="text-[#00AEEF]">Strategies.</span>
           </h1>
           <p className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed font-light mb-10">
             Deep dives into technology, management, and the future of digital enterprise architecture.
           </p>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00AEEF]/30 to-transparent mb-16"></div>

      <div className="max-w-7xl mx-auto animate-fade-in relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <h2 className="text-white text-[10px] font-black uppercase tracking-[0.5em] flex items-center gap-4">
               <span className="w-2 h-2 bg-[#00AEEF] rounded-full shadow-[0_0_8px_#00AEEF]"></span>
               ARCHIVE ACCESS
            </h2>
            
            <div className="flex bg-[#050505] p-1 rounded-xl border border-white/5">
               <button 
                 onClick={() => setActiveTab('articles')}
                 className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-[9px] font-black transition-all duration-300 ${activeTab === 'articles' ? 'bg-[#00AEEF] text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
               >
                 <FileText size={14} /> ARTICLES
               </button>
               <button 
                 onClick={() => setActiveTab('videos')}
                 className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-[9px] font-black transition-all duration-300 ${activeTab === 'videos' ? 'bg-[#00AEEF] text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
               >
                 <Play size={14} /> VIDEOS
               </button>
            </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32">
            <Loader2 className="animate-spin text-[#00AEEF] mb-6" size={40} />
            <p className="text-gray-600 font-black tracking-widest uppercase text-[9px]">Decrypting Archives...</p>
          </div>
        ) : activeTab === 'articles' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
             {/* CONTENT TRACK */}
             <div className="lg:col-span-9 space-y-16">
                {filteredInsights.length === 0 ? (
                  <div className="text-gray-600 text-center py-32 border border-dashed border-white/5 rounded-3xl bg-white/5">
                    No matching records found.
                  </div>
                ) : (
                  filteredInsights.map(insight => (
                    <InsightCard key={insight.id} data={insight} />
                  ))
                )}
             </div>

             {/* SIDEBAR TRACK */}
             <aside className="lg:col-span-3 space-y-10">
                <div className="relative group">
                   <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                      <Search size={18} className="text-gray-700 group-focus-within:text-[#00AEEF] transition-colors" />
                   </div>
                   <input 
                      type="text" 
                      placeholder="Search archives..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-[#0a0a0a] border border-white/5 text-white placeholder-gray-800 py-3.5 pl-12 pr-4 rounded-xl focus:outline-none focus:border-[#00AEEF] transition-all shadow-xl text-xs font-light"
                   />
                </div>

                <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl">
                   <h3 className="text-white font-black uppercase tracking-[0.4em] mb-8 text-[9px] flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-[#00AEEF] rounded-full"></span>
                      TOPICS
                   </h3>
                   <ul className="space-y-2">
                      <li 
                        className={`cursor-pointer transition-all px-4 py-2.5 rounded-lg text-xs ${selectedCategory === null ? 'bg-[#00AEEF]/10 text-[#00AEEF] font-black' : 'text-gray-500 hover:text-white hover:bg-white/5 font-bold'}`}
                        onClick={() => setSelectedCategory(null)}
                      >
                        All Insights
                      </li>
                      {allCategories.map((cat, idx) => (
                        <li 
                          key={idx}
                          className={`cursor-pointer transition-all px-4 py-2.5 rounded-lg text-xs ${selectedCategory === cat ? 'bg-[#00AEEF]/10 text-[#00AEEF] font-black' : 'text-gray-500 hover:text-white hover:bg-white/5 font-bold'}`}
                          onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
                        >
                           {cat}
                        </li>
                      ))}
                   </ul>
                </div>
             </aside>
          </div>
        ) : (
          <div className="text-center py-40 border border-dashed border-white/5 rounded-3xl text-gray-700 bg-white/5 text-[10px] font-black uppercase tracking-widest">
            Visual intelligence stream pending...
          </div>
        )}
      </div>
    </div>
  );
};

const InsightCard: React.FC<{ data: Insight }> = ({ data }) => (
  <div className="group flex flex-col md:flex-row gap-8 pb-16 border-b border-white/5 last:border-0">
     <div className="w-full md:w-[30%] flex-shrink-0">
        <Link to={`/insights/${data.id}`} className="block aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900 border border-white/5 group-hover:border-[#00AEEF]/30 transition-all shadow-2xl">
           <img 
             src={data.image_url || ASSETS.backgrounds.insightDefault} 
             alt={data.title} 
             className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
             onError={(e) => { e.currentTarget.src = ASSETS.backgrounds.insightDefault; }}
           />
        </Link>
     </div>

     <div className="flex-1 flex flex-col justify-between py-1">
        <div>
           <Link to={`/insights/${data.id}`}>
             <h2 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight group-hover:text-[#00AEEF] transition-colors cursor-pointer tracking-tight">
                {data.title}
             </h2>
           </Link>
           <p className="text-gray-500 leading-relaxed mb-8 line-clamp-2 text-base font-light">
              {data.description}
           </p>
        </div>

        <div className="flex flex-col gap-6">
           <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[9px] text-gray-600 font-black uppercase tracking-[0.2em]">
              <div className="flex items-center gap-2">
                 <Calendar size={14} className="text-[#00AEEF]" />
                 <span>{data.date}</span>
              </div>
              <div className="flex items-center gap-2">
                 <User size={14} className="text-[#00AEEF]" />
                 <span>By {data.author}</span>
              </div>
           </div>
           
           <div>
              <Link 
                to={`/insights/${data.id}`}
                className="px-8 py-3 bg-[#0a0a0a] border border-white/10 hover:border-[#00AEEF] text-[9px] font-black uppercase tracking-[0.4em] text-gray-400 hover:text-white transition-all rounded-xl inline-flex items-center gap-3 hover:bg-[#00AEEF]/10"
              >
                READ ARTICLE <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
           </div>
        </div>
     </div>
  </div>
);

export default Insights;