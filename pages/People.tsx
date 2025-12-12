import React from 'react';

const People: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-4 sm:px-6 lg:px-8">
       <div className="max-w-7xl mx-auto animate-fade-in">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Meet the <span className="text-[#00AEEF]">Architects</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our team consists of industry veterans, research scientists, and creative thinkers dedicated to solving the impossible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           <PersonCard 
             name="Sarah Jenkins"
             role="Chief Executive Officer"
             image="/person-sarah.jpg"
           />
           <PersonCard 
             name="David Chen"
             role="CTO & AI Research"
             image="/person-david.jpg"
           />
           <PersonCard 
             name="Elena Rodriguez"
             role="Head of Product"
             image="/person-elena.jpg"
           />
           <PersonCard 
             name="Michael Ross"
             role="Director of Engineering"
             image="/person-michael.jpg"
           />
           {/* Row 2 */}
           <PersonCard 
             name="Anita Patel"
             role="Lead Data Scientist"
             image="/person-anita.jpg"
           />
            <PersonCard 
             name="James Wilson"
             role="VP of Sales"
             image="/person-james-sales.jpg"
           />
            <PersonCard 
             name="Olivia Thomspon"
             role="Creative Director"
             image="/person-olivia.jpg"
           />
            <PersonCard 
             name="Robert Fox"
             role="Security Architect"
             image="/person-robert.jpg"
           />
        </div>
       </div>
    </div>
  );
};

const PersonCard = ({ name, role, image }: { name: string, role: string, image: string }) => (
  <div className="group relative overflow-hidden rounded-xl bg-gray-900">
    <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
      <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
    <div className="absolute bottom-0 left-0 w-full p-6">
      <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
      <p className="text-[#00AEEF] text-sm font-medium uppercase tracking-wider">{role}</p>
    </div>
  </div>
);

export default People;