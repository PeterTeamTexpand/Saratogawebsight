import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HexagonBackground from '../components/HexagonBackground';
import { 
  Briefcase, 
  Heart, 
  Zap, 
  Award, 
  Globe, 
  ArrowRight,
  Sparkles,
  Coffee,
  X,
  MapPin,
  Clock,
  CheckCircle2,
  ChevronRight,
  Code2,
  ListChecks,
  Gift,
  ArrowRightFromLine
} from 'lucide-react';
import { ASSETS } from '../data/assets';

interface Job {
  id: string;
  title: string;
  type: string;
  location: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  techStack: string[];
  benefits: string[];
}

const JOBS: Job[] = [
  { 
    id: '1',
    title: "Senior Project Manager", 
    type: "Full-Time", 
    location: "South Africa (Hybrid) / UK",
    experience: "8+ Years",
    description: "Alacrity, a division of Saratoga, is seeking a skilled Senior Project Manager to join the international team at our client, Worldwide Chain Stores. This role involves leading and delivering high-impact projects in the IT and supply chain sectors.",
    responsibilities: [
      "Develop project plans, goals, and budgets and identify resources required.",
      "Assemble, coordinate and schedule project teams, assigning individual responsibilities and ensuring effective performance.",
      "Develop project schedules and methods for measuring results.",
      "Plan, organise and manage all phases of the project to ensure on-time and on-budget completion.",
      "Resourcing and scheduling of projects to align with organizational priorities.",
      "Conduct project planning and evaluation to ensure alignment with business objectives.",
      "Manage and deliver customer communications throughout the project lifecycle.",
      "Obtain project signoffs and ensure customer satisfaction across all stages of the project.",
      "Demonstrated driving revenue growth through effective project delivery.",
      "Proactively resolve project challenges, escalating issues when needed to the Program/Operations Manager.",
      "Manage risks and impacts on project timelines and budgets.",
      "Ensure all billable work is accurately accounted for during project execution.",
      "Communicate clearly and professionally to build customer trust and satisfaction.",
      "Measure and ensure customer satisfaction in project delivery and consultancy services."
    ],
    requirements: [
      "Degree in Computer Science, Business, or related field.",
      "PMP or Prince2 Certification.",
      "Proven track record of managing global, distributed teams.",
      "Strong understanding of supply chain logistics and IT infrastructure.",
      "Exceptional stakeholder management and communication skills.",
      "Ability to handle multiple high-pressure projects simultaneously."
    ],
    techStack: ["Jira", "Confluence", "Microsoft Project", "MS Teams", "Power BI"],
    benefits: [
      "Competitive Salary & Performance Bonuses",
      "Flexible/Remote Work Options",
      "Comprehensive Health & Wellness Programs",
      "Annual Professional Development Budget",
      "International Exposure & Travel Opportunities"
    ]
  },
  { 
    id: '2',
    title: "Intermediate .NET Full-Stack Developer", 
    type: "Full-Time", 
    location: "Cape Town, South Africa (Hybrid)",
    experience: "3-5 Years",
    description: "We are looking for a skilled .NET Full-Stack Developer to join our dynamic team. You will be responsible for developing high-quality software solutions using C# .NET and React, working closely with international clients.",
    responsibilities: [
      "Design and implement scalable web applications from scratch.",
      "Collaborate with UX/UI designers to translate wireframes into code.",
      "Write clean, testable, and efficient code following SOLID principles.",
      "Participate in code reviews and mentor junior developers.",
      "Debug and resolve complex technical issues in production environments."
    ],
    requirements: [
      "Solid experience with C# and .NET Core/6+.",
      "Proficiency in React.js and modern frontend state management (Redux/Zustand).",
      "Strong SQL Server skills and experience with Entity Framework.",
      "Experience with Azure cloud services and DevOps pipelines.",
      "Excellent problem-solving and communication skills."
    ],
    techStack: [".NET 8", "React", "TypeScript", "SQL Server", "Azure", "Docker"],
    benefits: [
      "High-spec development hardware",
      "Flexible working hours",
      "Internal 'Spark' innovation days",
      "Paid certifications (Microsoft/AWS)",
      "Vibrant team culture and social events"
    ]
  },
  { 
    id: '3',
    title: "Java Developer – Talent Pool", 
    type: "Talent Pool", 
    location: "South Africa / Remote",
    experience: "Mid to Senior",
    description: "Join our talent pool for future Java opportunities. We work with major financial institutions across Africa and Europe on mission-critical systems.",
    responsibilities: [
      "Develop robust backend services using Spring Boot.",
      "Maintain and optimize legacy Java enterprise applications.",
      "Implement microservices architectures and RESTful APIs.",
      "Ensure high performance and responsiveness of applications."
    ],
    requirements: [
      "Deep understanding of Java 11/17+ and Spring Framework.",
      "Experience with relational and non-relational databases.",
      "Familiarity with containerization (Docker, Kubernetes).",
      "Knowledge of messaging systems like Kafka or RabbitMQ."
    ],
    techStack: ["Java 17", "Spring Boot", "PostgreSQL", "Kafka", "Kubernetes"],
    benefits: [
      "Growth into Lead/Architect roles",
      "Remote-first culture",
      "Performance-based increases",
      "Access to global project opportunities"
    ]
  }
];

const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const scrollToVacancies = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('vacancies');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              CAREERS
           </h4>
           <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
             Create the future <br />
             <span className="text-[#00AEEF]">with us.</span>
           </h1>
           <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light mb-10">
             Join a team where people matter most, where exceptional talent meets hard problems, and where we work together to make a difference.
           </p>
           
           <button 
             onClick={scrollToVacancies}
             className="bg-[#00AEEF] text-white px-8 py-3 rounded-full font-bold hover:bg-[#008ec2] transition-all shadow-[0_0_20px_rgba(0,174,239,0.3)] hover:shadow-[0_0_30px_rgba(0,174,239,0.5)] transform hover:-translate-y-1 flex items-center gap-2 mx-auto"
           >
              View Available Vacancies <ArrowRight size={18} />
           </button>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00AEEF]/50 to-transparent"></div>

      {/* Intro Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900/50 relative">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="grid grid-cols-2 gap-4 relative">
                 <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
                 <img src={ASSETS.backgrounds.careerTeam1} alt="Team" className="rounded-2xl w-full h-64 object-cover transform translate-y-8 shadow-2xl border border-white/10 relative z-10" />
                 <img src={ASSETS.backgrounds.careerTeam2} alt="Office" className="rounded-2xl w-full h-64 object-cover shadow-2xl border border-white/10 relative z-10" />
             </div>
             <div>
                 <h4 className="text-[#00AEEF] font-bold tracking-widest uppercase text-xs mb-4">Life as a Saratogan</h4>
                 <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">We want innovators like you!</h2>
                 <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                    Your autonomous problem-solving curiosity is absolutely what we’re looking for. At Saratoga, you work with leaders, not just managers.
                    We believe in a flat leadership structure and provide the environment for true excellence.
                 </p>
                 <div className="flex items-center gap-6">
                    <div className="bg-gray-900 p-5 rounded-2xl border border-gray-800">
                        <span className="block text-3xl font-bold text-white mb-1">4.8</span>
                        <span className="text-[10px] text-[#00AEEF] font-bold uppercase tracking-wider">Glassdoor Rating</span>
                    </div>
                     <div className="bg-gray-900 p-5 rounded-2xl border border-gray-800">
                        <span className="block text-3xl font-bold text-white mb-1">98%</span>
                        <span className="text-[10px] text-[#00AEEF] font-bold uppercase tracking-wider">CEO Approval</span>
                    </div>
                 </div>
             </div>
         </div>
      </section>

      {/* Vacancies Section */}
      <section id="vacancies" className="py-32 px-4 relative overflow-hidden bg-black">
         <div className="absolute inset-0 opacity-20 pointer-events-none">
            <HexagonBackground />
         </div>
         
         <div className="max-w-5xl mx-auto relative z-10">
             <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#00AEEF]/10 rounded-xl mb-6 border border-[#00AEEF]/20">
                    <Briefcase className="text-[#00AEEF]" size={24} />
                </div>
                <h2 className="text-4xl font-bold mb-4 text-white">Current Opportunities</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Join a team that thrives on complexity and values human connection.
                </p>
             </div>
             
             <div className="space-y-4">
                {JOBS.map((job) => (
                  <JobRow 
                    key={job.id} 
                    job={job} 
                    onClick={() => setSelectedJob(job)} 
                  />
                ))}
             </div>
         </div>
      </section>

      {/* Job Details Modal - Centered */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
           {/* Backdrop */}
           <div className="absolute inset-0 bg-black/90 backdrop-blur-md animate-fade-in" onClick={() => setSelectedJob(null)} />
           
           {/* Modal Container */}
           <div className="relative w-full max-w-4xl bg-[#0a0a0a] max-h-[90vh] shadow-2xl border border-white/10 rounded-3xl overflow-hidden flex flex-col animate-scale-in">
              {/* Header */}
              <div className="sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-20 px-8 py-6 border-b border-gray-800 flex justify-between items-start">
                 <div>
                    <div className="flex gap-3 mb-3">
                       <span className="px-3 py-1 bg-[#00AEEF]/20 text-[#00AEEF] text-[10px] font-bold uppercase tracking-wider rounded border border-[#00AEEF]/30">
                          {selectedJob.type}
                       </span>
                       <span className="px-3 py-1 bg-white/5 text-gray-400 text-[10px] font-bold uppercase tracking-wider rounded border border-white/10">
                          Exp: {selectedJob.experience}
                       </span>
                    </div>
                    <h2 className="text-3xl font-bold text-white leading-tight">{selectedJob.title}</h2>
                    <div className="flex items-center gap-4 mt-2 text-gray-400 text-sm">
                       <div className="flex items-center gap-1.5">
                          <MapPin size={16} className="text-[#00AEEF]" />
                          {selectedJob.location}
                       </div>
                    </div>
                 </div>
                 <button onClick={() => setSelectedJob(null)} className="p-2 text-gray-500 hover:text-white hover:bg-white/10 rounded-full transition-all">
                    <X size={24} />
                 </button>
              </div>

              {/* Content Scroll Area */}
              <div className="flex-1 overflow-y-auto p-8 space-y-12">
                 {/* Overview */}
                 <section>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                       <Sparkles size={20} className="text-[#00AEEF]" /> About the Role
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg font-light">
                       {selectedJob.description}
                    </p>
                 </section>

                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Responsibilities */}
                    <section>
                       <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                          <ArrowRightFromLine size={20} className="text-[#00AEEF]" /> Key Responsibilities
                       </h3>
                       <ul className="space-y-4">
                          {selectedJob.responsibilities.map((item, i) => (
                             <li key={i} className="flex items-start gap-3 text-gray-400">
                                <span className="w-1.5 h-1.5 bg-[#00AEEF] rounded-full mt-2.5 flex-shrink-0" />
                                <span className="text-sm leading-relaxed">{item}</span>
                             </li>
                          ))}
                       </ul>
                    </section>

                    {/* Requirements */}
                    <section>
                       <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                          <ListChecks size={20} className="text-[#00AEEF]" /> Requirements
                       </h3>
                       <ul className="space-y-4">
                          {selectedJob.requirements.map((req, i) => (
                             <li key={i} className="flex items-start gap-3 text-gray-400">
                                <CheckCircle2 size={18} className="text-[#00AEEF] flex-shrink-0 mt-0.5" />
                                <span className="text-sm leading-relaxed">{req}</span>
                             </li>
                          ))}
                       </ul>
                    </section>
                 </div>

                 {/* Tech Stack & Benefits */}
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8 border-t border-gray-800">
                    <section>
                       <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                          <Code2 size={20} className="text-[#00AEEF]" /> Tech Stack
                       </h3>
                       <div className="flex flex-wrap gap-2">
                          {selectedJob.techStack.map((tech, i) => (
                             <span key={i} className="px-4 py-2 bg-gray-900 border border-gray-800 text-gray-300 rounded-xl text-xs font-medium">
                                {tech}
                             </span>
                          ))}
                       </div>
                    </section>

                    <section>
                       <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                          <Gift size={20} className="text-[#00AEEF]" /> Why Saratoga?
                       </h3>
                       <ul className="space-y-3">
                          {selectedJob.benefits.map((benefit, i) => (
                             <li key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                                <Heart size={14} className="text-[#ef4444]" />
                                {benefit}
                             </li>
                          ))}
                       </ul>
                    </section>
                 </div>
              </div>

              {/* Footer CTA */}
              <div className="p-8 bg-gray-900/50 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-6">
                 <div className="text-center sm:text-left">
                    <p className="text-white font-bold">Ready to apply?</p>
                    <p className="text-gray-400 text-sm">Our recruitment team is waiting for you.</p>
                 </div>
                 <button className="w-full sm:w-auto bg-[#00AEEF] text-white font-bold px-10 py-4 rounded-2xl hover:bg-[#008ec2] transition-all shadow-lg flex items-center justify-center gap-2 group">
                    Apply for this Position <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
           </div>
        </div>
      )}

      {/* Footer Final CTA */}
      <section className="py-24 px-4 bg-black border-t border-white/5">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Next Step in Your Career?</h2>
            <p className="text-lg text-gray-400 mb-10">Apply today and build something extraordinary.</p>
            <a href="#vacancies" className="text-white border border-[#00AEEF] px-10 py-4 rounded-full hover:bg-[#00AEEF] transition-all font-bold">
               Browse Vacancies
            </a>
         </div>
      </section>

    </div>
  );
};

const JobRow: React.FC<{ job: Job; onClick: () => void }> = ({ job, onClick }) => (
  <div 
    onClick={onClick}
    className="bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#00AEEF] p-6 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between cursor-pointer shadow-lg hover:shadow-[#00AEEF]/20 transition-all duration-300 transform hover:-translate-y-1 group"
  >
      <div className="relative z-10">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00AEEF] transition-colors">
            {job.title}
          </h3>
          <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
             <div className="flex items-center gap-1">
                <MapPin size={14} className="text-[#00AEEF]" /> {job.location}
             </div>
             <div className="flex items-center gap-1">
                <Clock size={14} className="text-[#00AEEF]" /> {job.experience}
             </div>
          </div>
      </div>
      
      <div className="mt-4 md:mt-0">
         <div className="px-6 py-2 rounded-full border border-white/10 group-hover:bg-[#00AEEF] group-hover:text-white group-hover:border-[#00AEEF] transition-all text-xs font-bold uppercase tracking-widest text-gray-400">
             Details
         </div>
      </div>
  </div>
);

export default Careers;
