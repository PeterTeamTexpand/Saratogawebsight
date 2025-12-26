import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, User, Share2, Loader2, ChevronLeft, Search, FileText, Play, Hexagon, ArrowRight } from 'lucide-react';
import { getInsightById, getInsights } from '../services/supabase';
import { ASSETS } from '../data/assets';

interface Insight {
  id: string;
  date: string;
  category: string;
  title: string;
  description: string;
  image_url: string;
  author: string;
  full_content: string;
}

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Insight | null>(null);
  const [loading, setLoading] = useState(true);
  const [allCategories, setAllCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchData = async () => {
      if (!id) return;
      try {
        const [pData, allInsightsData] = await Promise.all([
          getInsightById(id),
          getInsights()
        ]);
        
        const allInsights = (allInsightsData || []) as Insight[];
        setPost(pData);
        
        const categories = Array.from(new Set(allInsights.flatMap(i => i.category.split(',').map(c => c.trim()))));
        setAllCategories(categories);
      } catch (err) {
        console.error("Fetch failed", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/insights?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  /**
   * Saratoga Minimalist Formatter
   */
  const formatContent = (content: string) => {
    if (!content) return '';
    const lines = content.split('\n');
    let result = '';
    let inList = false;

    lines.forEach(line => {
      const trimmed = line.trim();
      if (!trimmed) {
        if (inList) { result += '</ul>'; inList = false; }
        return;
      }

      if (trimmed.startsWith('** ')) {
        if (inList) { result += '</ul>'; inList = false; }
        const text = trimmed.substring(3).trim();
        result += `<h2 class="text-xl md:text-2xl font-black text-white mb-6 mt-12 border-l-4 border-[#00AEEF] pl-6 tracking-tight">${text}</h2>`;
      }
      else if (trimmed.startsWith('* ') && !trimmed.startsWith('** ')) {
        if (inList) { result += '</ul>'; inList = false; }
        const text = trimmed.substring(2).trim();
        result += `<h3 class="text-xs font-bold text-[#00AEEF] mb-4 mt-8 uppercase tracking-[0.2em]">${text}</h3>`;
      }
      else if (trimmed.startsWith('•') || trimmed.startsWith('- ')) {
        if (!inList) {
          result += '<ul class="mb-8 space-y-5 pl-12 list-none">'; // Deeply indented list
          inList = true;
        }
        const text = trimmed.replace(/^[•\-]\s*/, '').trim();
        // Smaller text and absolute bullet for precision
        result += `
          <li class="relative text-gray-400 text-[15px] font-light leading-relaxed group">
            <span class="absolute -left-6 top-1.5 text-[#00AEEF] text-[10px]">•</span>
            ${text}
          </li>`;
      }
      else {
        if (inList) { result += '</ul>'; inList = false; }
        const formattedPara = trimmed.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#00AEEF] font-bold">$1</strong>');
        result += `<p class="mb-6 text-gray-400 leading-relaxed text-base md:text-lg font-light">${formattedPara}</p>`;
      }
    });

    if (inList) result += '</ul>';
    return result;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center">
        <Loader2 className="animate-spin text-[#00AEEF] mb-4" size={48} />
        <p className="text-gray-600 font-bold tracking-widest uppercase text-[10px]">Accessing Database...</p>
      </div>
    );
  }

  if (!post) return null;

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden flex flex-col pt-32">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] right-[-5%] w-[800px] h-[800px] bg-[#00AEEF]/1 blur-[200px] rounded-full" />
        <Hexagon className="absolute top-[15%] right-[10%] text-[#00AEEF] opacity-[0.01]" size={450} strokeWidth={0.1} />
        <Hexagon className="absolute top-[80%] left-[5%] text-blue-500 opacity-[0.01]" size={350} strokeWidth={0.1} />
      </div>

      {/* Hero Header Section */}
      <div className="relative min-h-[50vh] w-full flex flex-col justify-end">
         <div className="absolute inset-0 overflow-hidden">
            <img 
              src={post.image_url || ASSETS.backgrounds.insightDefault} 
              alt={post.title} 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-15 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
         </div>

         <div className="max-w-7xl mx-auto w-full px-6 pb-16 relative z-20 animate-fade-in">
            {/* BACK BUTTON - Sync size with other buttons */}
            <div className="mb-12">
              <Link 
                to="/insights"
                className="inline-flex items-center gap-3 text-gray-500 hover:text-white transition-all text-[9px] font-black uppercase tracking-[0.4em] bg-white/5 backdrop-blur-md px-8 py-3 rounded-xl border border-white/10 group shadow-lg"
              >
                 <ChevronLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> BACK TO DIRECTORY
              </Link>
            </div>
            
            <div className="mb-6">
               <span className="bg-[#00AEEF] text-white px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-[0.2em] shadow-xl">
                  {post.category.split(',')[0]}
               </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-10 leading-[1.1] max-w-4xl tracking-tight">
               {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-10 pt-8 border-t border-white/10">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#00AEEF] border border-white/5 backdrop-blur-md">
                     <User size={18} />
                  </div>
                  <div>
                     <p className="text-[8px] text-gray-500 uppercase font-black tracking-widest">Author</p>
                     <p className="font-bold text-white text-sm">{post.author}</p>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#00AEEF] border border-white/5 backdrop-blur-md">
                     <Calendar size={18} />
                  </div>
                  <div>
                     <p className="text-[8px] text-gray-500 uppercase font-black tracking-widest">Date</p>
                     <p className="font-bold text-white text-sm">{post.date}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Balanced Content Layout (9:3 Grid) - Sidebar fixed as you scroll */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-40 w-full flex-grow">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* MAIN ARTICLE BODY */}
            <div className="lg:col-span-9 order-2 lg:order-1">
               <article className="prose prose-invert max-w-none">
                  <div 
                    className="article-body-custom font-light"
                    dangerouslySetInnerHTML={{ __html: formatContent(post.full_content || post.description) }} 
                  />
               </article>

               <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
                  <div className="flex items-center gap-4 px-6 py-3 bg-[#0a0a0a] rounded-xl border border-white/5">
                     <div className="w-2 h-2 bg-[#00AEEF] rounded-full animate-pulse shadow-[0_0_8px_#00AEEF]" />
                     <span className="text-[9px] text-gray-500 font-black uppercase tracking-[0.3em]">FILED UNDER:</span>
                     <span className="text-xs text-[#00AEEF] font-bold">{post.category}</span>
                  </div>
                  <button className="flex items-center gap-4 text-white hover:text-[#00AEEF] transition-all font-black text-[9px] uppercase tracking-[0.4em] group">
                     <Share2 size={16} /> SHARE INSIGHT
                  </button>
               </div>
            </div>

            {/* STICKY SIDEBAR (Sync with parent height) */}
            <aside className="lg:col-span-3 order-1 lg:order-2 h-full">
               <div className="sticky top-28 space-y-8 pb-20">
                  
                  {/* Slim Mode Toggles */}
                  <div className="flex bg-[#050505] p-1 rounded-xl border border-white/5 shadow-2xl">
                     <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-[9px] font-black bg-[#00AEEF] text-white shadow-xl shadow-[#00AEEF]/20">
                        <FileText size={14} /> ARTICLES
                     </button>
                     <Link to="/insights" className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-[9px] font-black text-gray-600 hover:text-white transition-all">
                        <Play size={14} /> VIDEOS
                     </Link>
                  </div>

                  {/* Slim Search */}
                  <form onSubmit={handleSearch} className="relative group">
                     <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <Search size={18} className="text-gray-700 group-focus-within:text-[#00AEEF] transition-colors" />
                     </div>
                     <input 
                        type="text" 
                        placeholder="Search archives..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-[#0a0a0a] border border-white/5 text-white placeholder-gray-800 py-3.5 pl-12 pr-6 rounded-xl focus:outline-none focus:border-[#00AEEF] transition-all shadow-xl text-xs font-light"
                     />
                  </form>

                  {/* Directory Widget */}
                  <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
                     <h3 className="text-white font-black uppercase tracking-[0.4em] mb-6 text-[8px] flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-[#00AEEF] rounded-full shadow-[0_0_8px_#00AEEF]"></span>
                        TOPICS
                     </h3>
                     <ul className="space-y-2">
                        <li>
                           <Link to="/insights" className="block w-full text-left px-3 py-2 rounded-lg text-xs text-gray-600 hover:text-white hover:bg-white/5 font-bold tracking-wider transition-all uppercase">
                             All Insights
                           </Link>
                        </li>
                        {allCategories.map((cat, idx) => (
                           <li key={idx}>
                              <button 
                                onClick={() => navigate(`/insights?category=${encodeURIComponent(cat)}`)}
                                className={`w-full text-left px-4 py-2.5 rounded-lg text-xs border transition-all uppercase tracking-wider ${post.category.includes(cat) ? 'bg-[#00AEEF]/10 text-[#00AEEF] border-[#00AEEF]/10 font-black' : 'text-gray-500 hover:text-white border-transparent hover:bg-white/5 font-bold'}`}
                              >
                                 {cat}
                              </button>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Compact CTA - Updated wording exactly from user request */}
                  <div 
                     className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#00AEEF]/10 to-black p-8 border border-[#00AEEF]/10 shadow-3xl group cursor-pointer transition-all hover:border-[#00AEEF]/30" 
                     onClick={() => navigate('/contact')}
                  >
                     <h4 className="text-lg font-black text-white mb-3 tracking-tight">Request Advisory</h4>
                     <p className="text-gray-500 text-[11px] leading-relaxed mb-8 font-light italic">
                        Architecting digital roadmaps for global enterprise software operations.
                     </p>
                     <div className="text-[#00AEEF] text-[9px] font-black uppercase tracking-[0.5em] flex items-center gap-2 group-hover:gap-4 transition-all">
                        CONNECT <ArrowRight size={14} className="mt-0.5" />
                     </div>
                  </div>
               </div>
            </aside>

         </div>
      </div>
    </div>
  );
};

export default BlogPost;