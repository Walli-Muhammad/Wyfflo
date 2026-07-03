export type WebsiteCategory = 'realestate' | 'sports' | 'saas' | 'fintech';

export type Website = {
  id: string;
  name: string;
  tagline: string;
  category: WebsiteCategory;
  categoryLabel: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  techStack: string[];
};

export const websiteCategories = [
  { id: 'all', label: 'All Websites' },
  { id: 'realestate', label: 'Real Estate & Booking' },
  { id: 'sports', label: 'Sports & Entertainment' },
  { id: 'saas', label: 'SaaS & Enterprise' },
  { id: 'fintech', label: 'FinTech & Infrastructure' },
] as const;

export const websites: Website[] = [
  {
    id: 'houwzer',
    name: 'Houwzer',
    tagline: 'Reimagining how Americans buy and sell homes.',
    category: 'realestate',
    categoryLabel: 'Real Estate & Booking',
    description:
      'A full-service real estate platform that reimagines how Americans buy and sell homes. We helped power a transparent, low-commission model — pairing top-tier agents with proprietary software that tracks every listing from photos to closing. Sellers save an average of $12,000 without sacrificing white-glove service, all managed through a single, clear dashboard.',
    image: '/websites/Houwzer/WhatsApp Image 2026-06-30 at 4.57.53 AM.jpeg',
    link: 'https://houwzer.com/',
    tags: ['Real Estate', 'Listing Platform', 'Dashboard', 'Marketplace'],
    techStack: ['Next.js', 'React', 'Ruby on Rails', 'PostgreSQL', 'Mapbox', 'Tailwind CSS'],
  },
  {
    id: 'knock',
    name: 'Knock',
    tagline: 'Buy your next home before selling your current one.',
    category: 'realestate',
    categoryLabel: 'Real Estate & Booking',
    description:
      'A modern home-buying platform built to solve the hardest problem in real estate: buying your next home before selling your current one. We engineered seamless flows around Knock\'s "Home Swap" model, letting homeowners make stronger, non-contingent offers and move on their own timeline — turning a stressful, contingent process into a confident, coordinated one.',
    image: '/websites/Knock/WhatsApp Image 2026-06-30 at 4.57.54 AM.jpeg',
    link: 'https://www.knock.com/',
    tags: ['Real Estate', 'Home Swap', 'Financing', 'User Experience'],
    techStack: ['React', 'Next.js', 'Node.js', 'GraphQL', 'AWS', 'PostgreSQL'],
  },
  {
    id: 'convene',
    name: 'Convene',
    tagline: 'Premium meetings, events, and flexible workspace.',
    category: 'realestate',
    categoryLabel: 'Real Estate & Booking',
    description:
      'A premium platform for meetings, events, and flexible workspace across the world\'s leading business districts. We crafted a polished digital experience that lets enterprises book, manage, and host hospitality-grade conferences and workspaces with ease — matching the sophistication of Convene\'s physical venues with an equally refined product.',
    image: '/websites/Convene/WhatsApp Image 2026-06-30 at 4.57.54 AM (1).jpeg',
    link: 'https://convene.com/',
    tags: ['Workspace Booking', 'Enterprise SaaS', 'Events', 'Hospitality'],
    techStack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
  },
  {
    id: 'homejab',
    name: 'HomeJab',
    tagline: 'On-demand real estate media marketplace.',
    category: 'realestate',
    categoryLabel: 'Real Estate & Booking',
    description:
      'The on-demand real estate media marketplace connecting agents with professional photographers, videographers, and 3D specialists. We built fast, frictionless ordering and delivery — book a shoot, get listing-ready photos, video, floor plans, and virtual tours back in 24 hours. A logistics engine disguised as a beautifully simple product.',
    image: '/websites/HomeJab/WhatsApp Image 2026-06-30 at 4.57.54 AM (2).jpeg',
    link: 'https://homejab.com/',
    tags: ['Media Marketplace', 'On-Demand', 'Scheduling', 'Logistics'],
    techStack: ['React', 'Node.js', 'Ruby on Rails', 'AWS', 'MySQL', 'Stripe'],
  },
  {
    id: 'fanatiz',
    name: 'Fanatiz',
    tagline: 'Live sports streaming for global football fans.',
    category: 'sports',
    categoryLabel: 'Sports & Entertainment',
    description:
      'A global streaming platform for football fans, delivering live matches, leagues, and exclusive sports content to audiences anywhere in the world. We engineered a smooth, high-performance streaming experience across web and mobile — built to handle live traffic spikes, multi-region delivery, and the demands of fans who won\'t tolerate buffering.',
    image: '/websites/Fanatiz/WhatsApp Image 2026-06-30 at 4.57.55 AM.jpeg',
    link: 'https://www.fanatiz.com/',
    tags: ['Live Streaming', 'Subscription Video', 'CDN', 'Multi-Region'],
    techStack: ['Next.js', 'React', 'HLS Player', 'AWS MediaServices', 'Node.js', 'Stripe'],
  },
  {
    id: 'teamsnap',
    name: 'TeamSnap',
    tagline: 'All-in-one team management and coordination.',
    category: 'sports',
    categoryLabel: 'Sports & Entertainment',
    description:
      'The all-in-one app trusted by millions to run youth and recreational sports. From scheduling and roster management to payments, messaging, and live game updates, we helped shape tools that take the chaos out of team coordination — giving coaches, parents, and players one organized home for everything.',
    image: '/websites/TeamSnap/WhatsApp Image 2026-06-30 at 4.57.55 AM (1).jpeg',
    link: 'https://www.teamsnap.com/',
    tags: ['Team Coordination', 'Scheduling', 'Member Management', 'Messaging'],
    techStack: ['React', 'Next.js', 'Ruby on Rails', 'PostgreSQL', 'Redis', 'Pusher'],
  },
  {
    id: 'shottracker',
    name: 'ShotTracker',
    tagline: 'Real-time basketball court sensor analytics.',
    category: 'sports',
    categoryLabel: 'Sports & Entertainment',
    description:
      'A real-time sports analytics platform that uses sensor technology to capture every shot, pass, and movement on the basketball court. We worked on the systems that turn raw on-court data into instant, actionable stats for players, coaches, and broadcasters — bringing pro-grade performance tracking to teams at every level.',
    image: '/websites/ShotTracker/WhatsApp Image 2026-06-30 at 4.57.55 AM (2).jpeg',
    link: 'https://shottracker.com/',
    tags: ['IoT Sensor Data', 'Sports Analytics', 'Real-Time Data', 'Visualization'],
    techStack: ['React', 'Next.js', 'AWS IoT', 'Python', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'peoplebox',
    name: 'Peoplebox.ai',
    tagline: 'GenAI-powered talent, OKRs, and performance platform.',
    category: 'saas',
    categoryLabel: 'SaaS & Enterprise',
    description:
      'A GenAI-powered talent platform that helps organizations hire, develop, and retain top talent from a single intelligent hub. We helped build AI-driven workflows for candidate screening, OKRs, performance reviews, and engagement — deeply integrated with the HR stack and designed so employees genuinely want to use it. Trusted by 600+ organizations worldwide.',
    image: '/websites/Peoplebox.ai/WhatsApp Image 2026-06-30 at 4.57.56 AM.jpeg',
    link: 'https://www.peoplebox.ai/',
    tags: ['GenAI Talent Hub', 'OKRs & Goals', 'HR Integration', 'Performance Reviews'],
    techStack: ['Next.js', 'React', 'OpenAI API', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    id: 'disclo',
    name: 'Disclo',
    tagline: 'Leading workplace accommodations and certification platform.',
    category: 'saas',
    categoryLabel: 'SaaS & Enterprise',
    description:
      'The leading workplace accommodations and medical certification platform. We engineered end-to-end, HIPAA- and SOC2-compliant workflows that automate the ADA, FMLA, and leave process — cutting administrative burden, reducing legal risk, and letting employees self-guide through requests with dignity. Compliance turned into a seamless part of operations.',
    image: '/websites/Disclo/WhatsApp Image 2026-06-30 at 4.57.56 AM (1).jpeg',
    link: 'https://www.disclo.com/',
    tags: ['HIPAA Compliance', 'ADA Accommodations', 'Enterprise Workflow', 'Security'],
    techStack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS Security Hub', 'TypeScript'],
  },
  {
    id: 'aven',
    name: 'Aven',
    tagline: 'Consumer credit card backed by home equity.',
    category: 'fintech',
    categoryLabel: 'FinTech & Infrastructure',
    description:
      'A fintech platform reimagining consumer credit by combining the convenience of a credit card with the low rates of a home equity line. We helped deliver a fast, secure, and refreshingly simple application experience — bringing institutional-grade lending infrastructure to a product that feels effortless to the everyday user.',
    image: '/websites/Aven/WhatsApp Image 2026-06-30 at 4.57.56 AM (2).jpeg',
    link: 'https://www.aven.com/',
    tags: ['Consumer Credit', 'Home Equity Line', 'Secure Application', 'Institutional Infrastructure'],
    techStack: ['Next.js', 'React', 'Plaid API', 'Python', 'PostgreSQL', 'Stripe'],
  },
  {
    id: 'method',
    name: 'Method',
    tagline: 'Developer-first embedded lending and debt management API.',
    category: 'fintech',
    categoryLabel: 'FinTech & Infrastructure',
    description:
      'A developer-first fintech infrastructure platform that powers embedded lending and debt management through a single API. We worked on robust, scalable systems that let companies connect to a user\'s liabilities, automate payments, and build credit-aware products — the kind of invisible, high-reliability engineering that financial products are built on top of.',
    image: '/websites/Method/WhatsApp Image 2026-06-30 at 4.57.56 AM (3).jpeg',
    link: 'https://methodfi.com/',
    tags: ['FinTech API', 'Embedded Lending', 'Liability Connect', 'Payment Automation'],
    techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Plaid API', 'PostgreSQL'],
  },
];
