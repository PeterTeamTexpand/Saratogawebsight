import React from 'react';
import { Briefcase, Code, Database, Globe } from 'lucide-react';

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto animate-fade-in">
        <div className="text-center mb-16">
          <h2 className="text-[#00AEEF] font-bold tracking-wide uppercase text-sm mb-4">Join Our Team</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Build Things That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-blue-600">Matter</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We are looking for visionaries, hackers, and problem solvers. If you're ready to define the future of software, you belong here.
          </p>
        </div>

        <div className="grid gap-6">
          <JobCard 
            title="Senior AI Engineer"
            department="Engineering"
            location="San Francisco / Remote"
            type="Full-time"
            icon={<Code size={24} />}
          />
          <JobCard 
            title="Lead Data Scientist"
            department="Data Analytics"
            location="New York / Remote"
            type="Full-time"
            icon={<Database size={24} />}
          />
          <JobCard 
            title="Full Stack Developer"
            department="Product"
            location="Remote"
            type="Contract"
            icon={<Globe size={24} />}
          />
          <JobCard 
            title="Product Manager"
            department="Strategy"
            location="London"
            type="Full-time"
            icon={<Briefcase size={24} />}
          />
        </div>

        <div className="mt-20 bg-gray-900/30 rounded-3xl p-10 border border-gray-800 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Don't see your role?</h3>
            <p className="text-gray-400 mb-8">
                We are always interested in meeting exceptional talent. Send us your portfolio.
            </p>
            <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
                Email Recruiting
            </button>
        </div>
      </div>
    </div>
  );
};

const JobCard = ({ title, department, location, type, icon }: any) => (
  <div className="group bg-gray-900/40 border border-gray-800 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between hover:bg-gray-800/60 transition-all cursor-pointer hover:border-[#00AEEF]/50">
    <div className="flex items-center gap-6 mb-4 md:mb-0 w-full md:w-auto">
      <div className="w-12 h-12 bg-[#00AEEF]/10 rounded-full flex items-center justify-center text-[#00AEEF]">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-white group-hover:text-[#00AEEF] transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm mt-1">{department} · {location}</p>
      </div>
    </div>
    <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
        <span className="px-4 py-1 rounded-full bg-gray-800 text-gray-300 text-xs font-medium border border-gray-700">
            {type}
        </span>
        <span className="text-[#00AEEF] opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
            Apply Now →
        </span>
    </div>
  </div>
);

export default Careers;