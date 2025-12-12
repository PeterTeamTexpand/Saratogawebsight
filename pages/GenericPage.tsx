import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
}

const GenericPage: React.FC<Props> = ({ title }) => {
  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-4 flex flex-col items-center">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl font-bold text-white mb-8 border-b border-[#00AEEF] pb-4 inline-block">
          {title}
        </h1>
        <div className="bg-gray-900/50 p-10 rounded-2xl border border-gray-800">
          <p className="text-xl text-gray-400">
            This section is currently under development. 
            <br/><br/>
            At Saratoga, we are constantly innovating. Please visit our <Link to="/services" className="text-[#00AEEF] underline hover:text-white transition-colors">Services</Link> page to try our live AI demonstrations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GenericPage;