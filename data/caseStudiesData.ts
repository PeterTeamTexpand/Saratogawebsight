/**
 * LOCAL CASE STUDIES REPOSITORY
 * 
 * HOW TO ADD A NEW CASE STUDY:
 * 1. Place your PDF in: /assets/pdfs/your-file.pdf
 * 2. Place your cover image in: /assets/case-studies/your-image.jpg
 * 3. Add a new entry to the array below.
 */

export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  image_url: string;
  stat: string;
  stat_label: string;
  description: string;
  pdf_url: string; // Path to your local PDF
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    category: 'FINTECH',
    title: 'Modernizing Legacy Banking Systems with Microservices',
    image_url: 'https://images.unsplash.com/photo-1551288049-bbda48658a7d?auto=format&fit=crop&q=80&w=1200',
    stat: '99.99%',
    stat_label: 'UPTIME ACHIEVED',
    description: 'A deep dive into how we transitioned a Tier-1 financial institution from a 20-year-old monolith to a high-scale, secure cloud architecture.',
    pdf_url: '/assets/pdfs/saratoga-fintech-case-study.pdf'
  },
  {
    id: '2',
    category: 'HEALTHCARE',
    title: 'AI-Driven Patient Outcome Predictions',
    image_url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200',
    stat: '45%',
    stat_label: 'FASTER DIAGNOSIS',
    description: 'Implementation of a secure data lake and machine learning models to help healthcare providers identify at-risk patients months in advance.',
    pdf_url: '/assets/pdfs/healthcare-ai-success.pdf'
  },
  {
    id: '3',
    category: 'RETAIL',
    title: 'Global Supply Chain Optimization',
    image_url: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200',
    stat: '2.4M',
    stat_label: 'REVENUE SAVED',
    description: 'Leveraging real-time analytics to optimize logistics for a multi-national retailer across four continents.',
    pdf_url: '/assets/pdfs/retail-logistics-optimization.pdf'
  },
  {
    id: '4',
    category: 'ENERGY',
    title: 'Sustainable Infrastructure Management',
    image_url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200',
    stat: '30%',
    stat_label: 'ENERGY EFFICIENCY',
    description: 'Custom IoT and dashboarding solution for monitoring carbon footprint and energy distribution in smart cities.',
    pdf_url: '/assets/pdfs/energy-sustainability-project.pdf'
  }
];
