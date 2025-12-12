import React from 'react';
import HexagonBackground from '../components/HexagonBackground';
import { Mail, MapPin, Phone, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-24 pb-12 relative overflow-hidden">
      <HexagonBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           {/* Info Side */}
           <div>
              <h2 className="text-[#00AEEF] font-bold tracking-wide uppercase text-sm mb-4">Get In Touch</h2>
              <h1 className="text-5xl font-bold text-white mb-8">Let's build something <br/>extraordinary.</h1>
              <p className="text-xl text-gray-400 mb-12">
                 Whether you have a question about our services, pricing, or just want to discuss your next project, our team is ready to answer all your questions.
              </p>

              <div className="space-y-8">
                 <ContactItem 
                   icon={<MapPin />}
                   title="South Africa (Head Office)"
                   content={
                     <>
                       4 Greenwhich Grove, Station Rd<br/>
                       Rondebosch, Cape Town, 7701
                     </>
                   }
                 />
                 <ContactItem 
                   icon={<Phone />}
                   title="Call Us (SA)"
                   content="+27-21-658-4100"
                 />
                 <ContactItem 
                   icon={<Globe />}
                   title="United Kingdom"
                   content={
                     <>
                       40 Foregate Street<br/>
                       Worcester, WR1 1EE
                     </>
                   }
                 />
                 <ContactItem 
                   icon={<Mail />}
                   title="Email Us"
                   content="hello@saratogasoftware.com"
                 />
              </div>
           </div>

           {/* Form Side */}
           <div className="bg-gray-900/80 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-gray-800 shadow-2xl">
              <form className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                       <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                       <input type="text" className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00AEEF] transition-colors" />
                    </div>
                    <div>
                       <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                       <input type="text" className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00AEEF] transition-colors" />
                    </div>
                 </div>
                 
                 <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                    <input type="email" className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00AEEF] transition-colors" />
                 </div>

                 <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                    <select className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00AEEF] transition-colors">
                       <option>General Inquiry</option>
                       <option>Project Proposal</option>
                       <option>Careers</option>
                    </select>
                 </div>

                 <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                    <textarea rows={4} className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00AEEF] transition-colors"></textarea>
                 </div>

                 <button type="button" className="w-full bg-[#00AEEF] text-white font-bold py-4 rounded-xl hover:bg-[#008ec2] transition-colors shadow-lg">
                    Send Message
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
        <p className="text-gray-400">{content}</p>
     </div>
  </div>
);

export default Contact;