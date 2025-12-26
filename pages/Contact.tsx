import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HexagonBackground from '../components/HexagonBackground';
import { Mail, MapPin, Phone, Globe, CheckCircle, AlertCircle, Loader2, Send } from 'lucide-react';
import { sendMessage } from '../services/supabase';

const Contact: React.FC = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const subjectParam = params.get('subject');
    if (subjectParam) {
      setFormData(prev => ({ ...prev, subject: subjectParam }));
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      await sendMessage(formData);
      setStatus('success');
      // Reset form after 3 seconds or keep it shown as success
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
      });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

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
              GET IN TOUCH
           </h4>
           <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
             Let's build something <br />
             <span className="text-[#00AEEF]">extraordinary.</span>
           </h1>
           <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light mb-10">
             Whether you have a question about our services, pricing, or just want to discuss your next project, our team is ready to answer all your questions.
           </p>
        </div>
      </section>

      {/* Blue Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00AEEF]/50 to-transparent"></div>

      {/* 2. Contact Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           {/* Info Side */}
           <div>
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              <p className="text-gray-400 mb-12">
                 We operate globally with offices in South Africa and the United Kingdom. Reach out to us via the form or using the details below.
              </p>

              <div className="space-y-8">
                 <ContactItem 
                   icon={<MapPin />}
                   title="South Africa (Head Office)"
                   content={
                     <a href="https://maps.app.goo.gl/AcQxGbZ4oB7w5KXG6" target="_blank" rel="noopener noreferrer" className="hover:text-[#00AEEF] transition-colors">
                       4 Greenwhich Grove, Station Rd<br/>
                       Rondebosch, Cape Town, 7701
                     </a>
                   }
                 />
                 <ContactItem 
                   icon={<Phone />}
                   title="Call Us (SA)"
                   content={<a href="tel:+27216584100" className="hover:text-[#00AEEF] transition-colors">+27-21-658-4100</a>}
                 />
                 <ContactItem 
                   icon={<Globe />}
                   title="United Kingdom"
                   content={
                     <a href="https://maps.app.goo.gl/AcQxGbZ4oB7w5KXG6" target="_blank" rel="noopener noreferrer" className="hover:text-[#00AEEF] transition-colors">
                       40 Foregate Street<br/>
                       Worcester, WR1 1EE
                     </a>
                   }
                 />
                 <ContactItem 
                   icon={<Mail />}
                   title="Email Us"
                   content={<a href="mailto:hello@saratogasoftware.com" className="hover:text-[#00AEEF] transition-colors">hello@saratogasoftware.com</a>}
                 />
              </div>
           </div>

           {/* Form Side */}
           <div className="bg-gray-900/80 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-gray-800 shadow-2xl relative overflow-hidden">
              {status === 'success' ? (
                <div className="absolute inset-0 z-20 bg-gray-900 flex flex-col items-center justify-center text-center p-8 animate-fade-in">
                   <div className="w-20 h-20 bg-[#00AEEF]/20 rounded-full flex items-center justify-center text-[#00AEEF] mb-6">
                      <CheckCircle size={40} />
                   </div>
                   <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
                   <p className="text-gray-400 mb-8">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                   <button 
                     onClick={() => setStatus('idle')}
                     className="px-8 py-3 border border-[#00AEEF] text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white rounded-xl font-bold transition-all"
                   >
                     Send Another Message
                   </button>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className={`space-y-6 ${status === 'success' ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                       <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                       <input 
                         required
                         type="text" 
                         name="firstName"
                         value={formData.firstName}
                         onChange={handleChange}
                         className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00AEEF] transition-colors" 
                       />
                    </div>
                    <div>
                       <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                       <input 
                         required
                         type="text" 
                         name="lastName"
                         value={formData.lastName}
                         onChange={handleChange}
                         className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00AEEF] transition-colors" 
                       />
                    </div>
                 </div>
                 
                 <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00AEEF] transition-colors" 
                    />
                 </div>

                 <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00AEEF] transition-colors"
                    >
                       <option>General Inquiry</option>
                       <option>Project Proposal</option>
                       <option>Careers</option>
                       <option>Partnership</option>
                    </select>
                 </div>

                 <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                    <textarea 
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4} 
                      className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00AEEF] transition-colors"
                    ></textarea>
                 </div>

                 {status === 'error' && (
                   <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-4 rounded-xl">
                      <AlertCircle size={20} />
                      <span className="text-sm font-medium">Something went wrong. Please try again later.</span>
                   </div>
                 )}

                 <button 
                   type="submit" 
                   disabled={status === 'submitting'}
                   className="w-full bg-[#00AEEF] text-white font-bold py-4 rounded-xl hover:bg-[#008ec2] transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                 >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={20} className="animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={20} />
                      </>
                    )}
                 </button>
              </form>
           </div>
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, title, content }: any) => (
  <div className="flex items-start gap-4">
     <div className="p-3 bg-gray-800 rounded-lg text-[#00AEEF]">
        {icon}
     </div>
     <div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <div className="text-gray-400">{content}</div>
     </div>
  </div>
);

export default Contact;