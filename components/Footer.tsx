import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Twitter, Linkedin, Mail, Phone } from 'lucide-react';
import { Logo } from './Logo';

const Footer: React.FC = () => {
  const location = useLocation();

  const footerLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'People', path: '/people' },
    { label: 'Insights', path: '/insights' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-neutral-950 border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Footer Hexagons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <FooterHexagon size={300} className="-top-20 -left-20 text-[#00AEEF] opacity-[0.03] animate-float delay-100" />
         <FooterHexagon size={200} className="top-40 right-10 text-gray-700 opacity-[0.05] animate-float delay-300" />
         <FooterHexagon size={150} className="bottom-0 left-1/3 text-[#00AEEF] opacity-[0.02] animate-float delay-500" />
         <FooterHexagon size={400} className="-bottom-32 -right-32 text-[#00AEEF] opacity-[0.04] animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <Logo className="h-7 w-auto" />
            </div>
             <p className="text-gray-500 text-sm leading-relaxed">
              Global software solutions architecting the future of digital enterprise.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
            </div>
             <div className="flex items-center gap-2 text-gray-400 text-sm mt-4 hover:text-[#00AEEF] transition-colors">
                <Mail size={16} />
                <a href="mailto:hello@saratogasoftware.com">hello@saratogasoftware.com</a>
             </div>
          </div>

          {/* South Africa Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <span className="w-1 h-4 bg-[#00AEEF] rounded-full"></span>
                South Africa (Head Office)
            </h3>
            <div className="space-y-4 text-sm text-gray-400">
                <p className="leading-relaxed">
                    4 Greenwhich Grove<br/>
                    Station Rd, Rondebosch<br/>
                    Cape Town, 7701
                </p>
                <div className="flex items-center gap-2">
                    <Phone size={14} className="text-[#00AEEF]" />
                    <span>+27-21-658-4100</span>
                </div>
            </div>
          </div>

          {/* UK Contact */}
           <div>
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <span className="w-1 h-4 bg-[#00AEEF] rounded-full"></span>
                United Kingdom
            </h3>
            <div className="space-y-4 text-sm text-gray-400">
                <p className="leading-relaxed">
                    40 Foregate Street<br/>
                    Worcester<br/>
                    WR1 1EE
                </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Explore</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              {footerLinks.map((link) => (
                // Only render the link if it is NOT the current page
                location.pathname !== link.path && (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-[#00AEEF] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                )
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            SARATOGA SOFTWARE © 2025. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            <span className="cursor-pointer hover:text-gray-400">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#00AEEF] hover:text-white transition-all duration-300">
    {icon}
  </a>
);

const FooterHexagon = ({ className, size }: { className: string, size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="0.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`absolute ${className}`}
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  </svg>
);

export default Footer;