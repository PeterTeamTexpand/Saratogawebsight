
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, User, Share2, Loader2, ChevronLeft, Search, FileText, Play, MoveRight } from 'lucide-react';
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
   * Saratoga Advanced Content Formatter
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

      // 1. Main Headings (**)
      if (trimmed.startsWith('**')) {
        if (inList) { result += '</ul>'; inList = false; }
        const text = trimmed.replace(/^\*\*+\s*/, '').trim();
        result += `<h2 class="text-2xl md:text-3xl font-black text-white mb-8 mt-16 border-l-4 border-[#00AEEF] pl-6 tracking-tight">${text}</h2>`;
      }
      // 2. Sub Headings (*) - LARGER than normal text
      else if (trimmed.startsWith('*')) {
        if (inList) { result += '</ul>'; inList = false; }
        const text = trimmed.replace(/^\*+\s*/, '').trim();
        result += `<h3 class="text-xl md:text-2xl font-bold text-[#00AEEF] mb-6 mt-12 tracking-tight">${text}</h3>`;
      }
      // 3. Bullet Points - Tightened space-y and adjusted marker alignment
      else if (/^[•\-*]/.test(trimmed)) {
        if (!inList) {
          result += '<ul class="mb-12 space-y-1.5 pl-16 md:pl-28 list-none">'; 
          inList = true;
        }
        const text = trimmed.replace(/^[•\-*]\s*/, '').trim();
        result += `
          <li class="relative text-gray-500 text-base md:text-lg font-light leading-relaxed group">
            <span class="absolute -left-8 top-2 text-gray-600 text-[12px]">•</span>
            ${text}
          </li>`;
      }
      // 4. Default Paragraph
      else {
        if (inList) { result += '</ul>'; inList = false; }
        const formattedPara = trimmed.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#00AEEF] font-bold">$1</strong>');
        result += `<p class="mb-8 text-gray-400 leading-relaxed text-base md:text-lg font-light">${formattedPara}</p>`;
      }
    });

    if (inList) result += '</ul>';
    return result;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center">
        <Loader2 className="animate-spin text-[#00AEEF] mb-4" size={48} />
        <p className="text-gray-600 font-bold tracking-widest uppercase text-[10px]">Accessing Record...</p>
      </div>
    );
  }

  if (!post) return null;

  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col pt-20">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] right-[-5%] w-[800px] h-[800px] bg-[#00AEEF]/5 blur-[250px] rounded-full" />
      </div>

      {/* HERO SECTION */}
      <div className="relative min-h-[80vh] w-full flex flex-col justify-end pt-12 pb-16">
         <div className="absolute inset-0 overflow-hidden">
            <img 
              src={post.image_url || ASSETS.backgrounds.insightDefault} 
              alt={post.title} 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 z-10" />
         </div>

         <div className="max-w-7xl mx-auto w-full px-6 relative z-20 animate-fade-in">
            {/* Insights Back Link - Lowered and high-contrast */}
            <div className="mb-12">
              <Link 
                to="/insights"
                className="inline-flex items-center gap-3 text-white hover:text-[#00AEEF] transition-all text-[11px] font-black uppercase tracking-[0.4em] bg-white/5 backdrop-blur-xl px-7 py-3 rounded-2xl border border-white/10 group shadow-2xl hover:bg-white/10 hover:border-[#00AEEF]/30"
              >
                 <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> INSIGHTS
              </Link>
            </div>
            
            {/* Category Pill - High Vis Blue */}
            <div className="mb-6">
               <span className="bg-[#00AEEF] text-white px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-[0.15em] shadow-[0_0_30px_rgba(0,174,239,0.3)]">
                  {post.category.split(',')[0]}
               </span>
            </div>

            {/* Title - Stretched & refined size */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-16 leading-[1.1] tracking-tight max-w-none">
               {post.title}
            </h1>

            {/* Metadata Section with Rounded Rect Cards */}
            <div className="flex flex-wrap items-center gap-8 pt-12 border-t border-white/10">
               <div className="flex items-center gap-5 bg-white/5 border border-white/10 p-4 pr-12 rounded-[2.2rem] backdrop-blur-md">
                  <div className="w-12 h-12 rounded-2xl bg-black/80 flex items-center justify-center text-[#00AEEF] border border-white/10 shadow-lg">
                     <User size={20} />
                  </div>
                  <div>
                     <p className="text-[9px] text-gray-500 uppercase font-black tracking-widest mb-0.5">AUTHOR</p>
                     <p className="font-bold text-white text-sm tracking-tight">{post.author}</p>
                  </div>
               </div>
               
               <div className="flex items-center gap-5 bg-white/5 border border-white/10 p-4 pr-12 rounded-[2.2rem] backdrop-blur-md">
                  <div className="w-12 h-12 rounded-2xl bg-black/80 flex items-center justify-center text-[#00AEEF] border border-white/10 shadow-lg">
                     <Calendar size={20} />
                  </div>
                  <div>
                     <p className="text-[9px] text-gray-500 uppercase font-black tracking-widest mb-0.5">PUBLISHED</p>
                     <p className="font-bold text-white text-sm tracking-tight">{post.date}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-40 w-full flex-grow">
         {/* Layout with sticky sidebar and article track */}
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 min-h-full">
            
            {/* ARTICLE COLUMN */}
            <div className="lg:col-span-8 order-2 lg:order-1">
               <article className="prose prose-invert max-w-none">
                  <div 
                    className="article-body-custom font-light"
                    dangerouslySetInnerHTML={{ __html: formatContent(post.full_content || post.description) }} 
                  />
               </article>

               <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                  <div className="flex items-center gap-4 px-6 py-3 bg-[#050505] rounded-xl border border-white/5">
                     <div className="w-2 h-2 bg-[#00AEEF] rounded-full shadow-[0_0_8px_#00AEEF]" />
                     <span className="text-[9px] text-gray-600 font-black uppercase tracking-[0.3em]">FILED UNDER:</span>
                     <span className="text-xs text-[#00AEEF] font-bold">{post.category}</span>
                  </div>
                  <button className="flex items-center gap-4 text-gray-400 hover:text-white transition-all font-black text-[9px] uppercase tracking-[0.4em] group">
                     <Share2 size={16} /> SHARE INSIGHT
                  </button>
               </div>
            </div>

            {/* STICKY SIDEBAR COLUMN */}
            <aside className="lg:col-span-4 order-1 lg:order-2 h-full relative">
               <div className="sticky top-32 space-y-12 pb-24">
                  
                  {/* Category Filter Widget */}
                  <div className="bg-[#050505] border border-white/5 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                     <h3 className="text-white font-black uppercase tracking-[0.4em] mb-10 text-[10px] flex items-center gap-4">
                        <span className="w-2 h-2 bg-[#00AEEF] rounded-full shadow-[0_0_10px_#00AEEF]"></span>
                        TOPICS
                     </h3>
                     
                     <div className="space-y-6">
                        <Link 
                          to="/insights" 
                          className="block w-full text-center px-6 py-5 rounded-2xl text-sm font-black tracking-[0.2em] uppercase transition-all bg-[#0a161a] text-[#00AEEF] border border-[#00AEEF]/20 shadow-[0_0_20px_rgba(0,174,239,0.1)] hover:bg-[#00AEEF]/10 hover:border-[#00AEEF]/40"
                        >
                           ALL INSIGHTS
                        </Link>
                        
                        <div className="flex flex-col gap-3">
                           {allCategories.map((cat, idx) => (
                              <Link 
                                key={idx}
                                to={`/insights?category=${encodeURIComponent(cat)}`}
                                className={`w-full text-left px-5 py-4 rounded-xl text-xs transition-all uppercase tracking-wider font-black border ${post.category.includes(cat) ? 'bg-[#0a161a] text-[#00AEEF] border-[#00AEEF]/30 shadow-[0_0_15px_rgba(0,174,239,0.05)]' : 'text-gray-500 hover:text-white hover:bg-white/5 border-transparent'}`}
                              >
                                 {cat}
                              </Link>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* Enquiry CTA */}
                  <div 
                     className="bg-[#050505] border border-white/5 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group cursor-pointer transition-all hover:border-[#00AEEF]/40" 
                     onClick={() => navigate('/contact')}
                  >
                     <h3 className="text-white font-black uppercase tracking-[0.4em] mb-8 text-[10px] flex items-center gap-4">
                        <span className="w-2 h-2 bg-[#00AEEF] rounded-full shadow-[0_0_10px_#00AEEF]"></span>
                        ENQUIRY
                     </h3>
                     
                     <div className="space-y-6">
                        <p className="text-gray-400 text-sm font-light leading-relaxed">
                          Enquire with Saratoga to explore how our business analysis services can support your next initiative.
                        </p>
                        
                        <div className="pt-6 border-t border-white/5">
                           <div className="flex items-center gap-3 text-gray-500 hover:text-white text-[9px] font-black uppercase tracking-[0.4em] transition-all group-hover:gap-5">
                              <span>CONNECT</span>
                              <MoveRight size={14} strokeWidth={3} className="transition-transform" />
                           </div>
                        </div>
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
