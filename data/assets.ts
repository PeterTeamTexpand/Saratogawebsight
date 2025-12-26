/**
 * CENTRAL ASSET REPOSITORY
 * 
 * LOCAL FOLDERS:
 * - Images: /assets/team/, /assets/logos/, /assets/clients/
 * - PDFs:   /assets/pdfs/ (For Case Studies)
 * 
 * DYNAMIC IMAGES:
 * For Insights (Blog), upload images to Supabase Storage 
 * and paste the Public URL into your database table.
 */

export const ASSETS = {
  // Logo Configuration
  logo: {
    text: "SARATOGA",
    useImage: false, 
    src: "/assets/logos/saratoga-logo.png",
  },

  // Hero & Background Images
  backgrounds: {
    jargonEfficiency: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    jargonExpertise: "https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&q=80&w=1200",
    jargonPartnership: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    jargonTalent: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
    careerTeam1: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    careerTeam2: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    insightDefault: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2670",
  },

  // Team Member Data
  team: [
    { name: "Anthony", role: "Executive Chairman", img: "/assets/team/anthony.png" },
    { name: "Mark", role: "Chief Executive Officer", img: "/assets/team/mark.jpg" },
    { name: "Julian", role: "Finance Director", img: "/assets/team/julian.jpg" },
    { name: "Bharn", role: "General Manager", img: "/assets/team/bharn.jpg" },
    { name: "Karen", role: "Business Development Manager", img: "/assets/team/karen.jpg" },
    { name: "James", role: "Business Competency Lead", img: "/assets/team/james.jpg" },
    { name: "Willo", role: "Technical Competency Lead", img: "/assets/team/willo.jpg" },
    { name: "Cathy", role: "Human Resources Manager", img: "/assets/team/cathy.jpg" },
    { name: "Sheetal", role: "Finance Manager", img: "/assets/team/sheetal.jpg" },
    { name: "Charlene", role: "Principle Business Consultant", img: "https://saratogasoftware.com/storage/2024/01/Saratoga-Software-Staff-Charlene-Seini-150x150.png" },
    { name: "Vanessa Addison", role: "LeadMe Programme Coach", img: "https://saratogasoftware.com/storage/2025/05/Saratoga-Software-Vanessa-Addison.png" },
  ],

  // Client Logos
  clients: [
    { name: "OLD MUTUAL", src: "/assets/clients/old-mutual.png" },
    { name: "TFG", src: "/assets/clients/tfg.png" },
    { name: "WOOLWORTHS", src: "/assets/clients/woolworths.png" },
    { name: "INVESTEC", src: "/assets/clients/investec.png" },
    { name: "STANDARD BANK", src: "/assets/clients/standard-bank.png" },
    { name: "CAPITEC", src: "/assets/clients/capitec.png" },
    { name: "DISCOVERY", src: "/assets/clients/discovery.png" },
    { name: "VODACOM", src: "/assets/clients/vodacom.png" },
    { name: "SANLAM", src: "/assets/clients/sanlam.png" },
    { name: "NEDBANK", src: "/assets/clients/nedbank.png" }
  ]
};
