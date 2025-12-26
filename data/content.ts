export interface Insight {
  id: string;
  date: string;
  category: string;
  title: string;
  desc: string;
  image: string;
  author: string;
  fullContent?: string;
}

export interface Video {
  id: string;
  title: string;
  desc: string;
  thumbnail: string;
  duration: string;
  views: string;
  date: string;
  url: string;
}

export const INSIGHTS_DATA: Insight[] = [
  {
    id: '1',
    date: "December 5, 2025",
    category: "Data Analysis, Insights, Project Management",
    title: "The 6 Principles of Business Consulting That Actually Move the Needle",
    desc: "If you've worked in technology or operations for any length of time, you've probably seen this play out more than once: a new system launches, the project technically 'succeeds', and yet the business doesn't really change...",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2670",
    author: "SaratogaSoftware",
    fullContent: `
      <p class="mb-6 text-xl leading-relaxed text-gray-300">If you've worked in technology or operations for any length of time, you've probably seen this play out more than once: a new system launches, the project technically "succeeds", and yet the business doesn't really change.</p>
      <p class="mb-8 text-lg leading-relaxed text-gray-400">The gap between technical implementation and genuine business transformation is often where projects fail to deliver ROI. At Saratoga, we've identified six core principles that bridge this gap.</p>
      
      <h3 class="text-2xl font-bold text-white mb-4 mt-10">1. Start with the Problem, Not the Solution</h3>
      <p class="mb-6 text-gray-400 leading-relaxed">Too often, consultants arrive with a solution in search of a problem. Real value comes from deeply understanding the friction points in the current workflow before proposing a tech stack. We spend the first two weeks of any engagement simply listening.</p>
      
      <h3 class="text-2xl font-bold text-white mb-4 mt-10">2. Stakeholder Alignment is a Continuous Process</h3>
      <p class="mb-6 text-gray-400 leading-relaxed">Alignment isn't a meeting you have at the kickoff. It's a continuous negotiation of priorities and expectations throughout the project lifecycle. We use weekly syncs not just for status updates, but for alignment checks.</p>
      
      <h3 class="text-2xl font-bold text-white mb-4 mt-10">3. Data is the Truth</h3>
      <p class="mb-6 text-gray-400 leading-relaxed">Opinions vary, but data usually points to the reality of the situation. We ground our consulting in rigorous data analysis to cut through political noise. If the data contradicts the roadmap, we change the roadmap.</p>
      
      <div class="my-10 p-8 border-l-4 border-[#00AEEF] bg-white/5 rounded-r-xl">
        <p class="text-xl italic text-gray-200">"By adhering to these principles, we ensure that our engagements don't just produce reports, but produce results."</p>
      </div>
      
      <p class="mb-6 text-gray-400 leading-relaxed">Successful consulting is less about the advice given and more about the capacity built within the client's organization. Our goal is to leave your team stronger than we found it.</p>
    `
  },
  {
    id: '2',
    date: "November 21, 2025",
    category: "Artificial Intelligence (AI)",
    title: "AI Adoption: Myths, Realities, and What It Really Takes to Get It Right",
    desc: "Artificial intelligence (AI) has become the loudest conversation in boardrooms, tech teams, and strategy sessions across the world. Every business feels the pressure to 'do something with AI'. Whether it's generative tools...",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2670",
    author: "SaratogaSoftware",
    fullContent: `
      <p class="mb-6 text-xl leading-relaxed text-gray-300">Artificial intelligence (AI) has become the loudest conversation in boardrooms, tech teams, and strategy sessions across the world. Every business feels the pressure to "do something with AI".</p>
      <p class="mb-8 text-lg leading-relaxed text-gray-400">However, the path to successful adoption is littered with failed pilots and expensive experiments. Here is what it really takes to get it right.</p>
      
      <h3 class="text-2xl font-bold text-white mb-4 mt-10">The Data Infrastructure Myth</h3>
      <p class="mb-6 text-gray-400 leading-relaxed">Many believe you need perfect data to start with AI. While data quality matters, waiting for perfection is a trap. Start with what you have, and let the AI use case drive your data cleaning efforts. Often, the act of training a model reveals the most critical data gaps.</p>
      
      <h3 class="text-2xl font-bold text-white mb-4 mt-10">Human-in-the-Loop</h3>
      <p class="mb-6 text-gray-400 leading-relaxed">AI isn't about replacing humans; it's about augmentation. The most successful implementations we've seen are those that empower employees to do their jobs faster and with fewer errors. Design your systems to assist, not replace.</p>
      
      <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600" alt="AI Visualization" class="w-full h-64 object-cover rounded-xl my-8 border border-white/10" />
      
      <h3 class="text-2xl font-bold text-white mb-4 mt-10">Governance and Security</h3>
      <p class="mb-6 text-gray-400 leading-relaxed">With great power comes great responsibility. Establishing clear governance frameworks early prevents compliance nightmares down the road. This is especially true when dealing with PII or financial data.</p>
    `
  },
  {
    id: '3',
    date: "October 15, 2025",
    category: "Cloud",
    title: "Migrating Legacy SQL to Vector Databases",
    desc: "A technical deep dive into modernizing data architecture for AI applications. We explore the challenges of data migration and how to ensure data integrity during the process.",
    image: "https://images.unsplash.com/photo-1558494949-ef2bb6db879c?auto=format&fit=crop&q=80&w=2670",
    author: "James Peterson",
    fullContent: `
      <p class="mb-6 text-xl leading-relaxed text-gray-300">Legacy SQL databases are the backbone of the enterprise, but they struggle with the high-dimensional vector data required for modern AI applications. In this article, we explore strategies for hybrid architectures.</p>
      <p class="mb-6 text-gray-400 leading-relaxed">Vector databases are optimized for storing and querying vector embeddings, which are numerical representations of data (like text, images, or audio) that capture semantic meaning. Traditional SQL databases are great for structured transactions, but poor at similarity search.</p>
      <h3 class="text-2xl font-bold text-white mb-4 mt-10">The Hybrid Approach</h3>
      <p class="mb-6 text-gray-400 leading-relaxed">You don't have to throw away your SQL server. We recommend a hybrid approach where transactional data lives in SQL and embeddings live in a vector store like Pinecone or Weaviate, linked by a common ID.</p>
    `
  },
  {
    id: '4',
    date: "September 28, 2025",
    category: "Strategy",
    title: "The Cost of Technical Debt in 2024",
    desc: "Why delaying upgrades is costing enterprises more than just money. We analyze real-world examples of technical debt accumulating interest and impacting agility.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2670",
    author: "Michelle Vance",
    fullContent: `
      <p class="mb-6 text-xl leading-relaxed text-gray-300">Technical debt is like financial debt: it compounds. In 2024, the speed of market change means that debt prevents you from pivoting when you need to most.</p>
      <p class="mb-6 text-gray-400 leading-relaxed">It's not just about code quality. It's about agility. A system riddled with debt is rigid. When a new competitor enters the market or a new regulation is passed, the debt-heavy company takes months to respond, while the clean-code company takes weeks.</p>
      <h3 class="text-2xl font-bold text-white mb-4 mt-10">Paying Down the Principal</h3>
      <p class="mb-6 text-gray-400 leading-relaxed">We advocate for the 'Boy Scout Rule': leave the code cleaner than you found it. Dedicate 20% of every sprint to refactoring. It's an investment that pays dividends in velocity.</p>
    `
  }
];

export const VIDEOS_DATA: Video[] = [
  {
    id: '1',
    title: 'Saratoga Tech Talk: The Future of AI in Insurance',
    desc: 'Our CTO discusses how large language models are transforming risk assessment and claims processing in the insurance sector. Learn about our latest case studies.',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600',
    duration: '45:20',
    views: '1.2K views',
    date: '2 weeks ago',
    url: '#'
  },
  {
    id: '2',
    title: 'Life at Saratoga: Culture & Innovation',
    desc: 'A behind-the-scenes look at our Cape Town office and the people who make our solutions possible. See what makes our team tick.',
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600',
    duration: '03:45',
    views: '3.5K views',
    date: '1 month ago',
    url: '#'
  },
  {
    id: '3',
    title: 'Webinar: Cloud Migration Strategies for 2025',
    desc: 'Expert panel discussion on moving legacy monoliths to microservices architecture without downtime. Featuring guest speakers from AWS and Azure.',
    thumbnail: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&q=80&w=1600',
    duration: '1:12:30',
    views: '850 views',
    date: '2 months ago',
    url: '#'
  },
  {
    id: '4',
    title: 'Client Success: Transforming Retail Logistics',
    desc: 'How we helped a major retailer optimize their supply chain using predictive analytics and custom software solutions.',
    thumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600',
    duration: '08:15',
    views: '2.1K views',
    date: '3 months ago',
    url: '#'
  },
  {
    id: '5',
    title: 'Deep Dive: Rust for High Performance Trading',
    desc: 'Technical breakdown of why we chose Rust for our latest fintech project and the performance gains we achieved.',
    thumbnail: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=1600',
    duration: '28:40',
    views: '5.6K views',
    date: '4 months ago',
    url: '#'
  },
  {
    id: '6',
    title: 'Saratoga Annual Hackathon Highlights',
    desc: '48 hours of coding, pizza, and innovation. Check out the winning projects from our internal innovation challenge.',
    thumbnail: 'https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&q=80&w=1600',
    duration: '05:20',
    views: '1.5K views',
    date: '6 months ago',
    url: '#'
  }
];