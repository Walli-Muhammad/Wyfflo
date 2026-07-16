export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Placeholder for icon identifier
  contactType: string; // Maps to the contact form's projectType select value
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  tags: string[];
  imageUrl: string;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
}

export const SERVICES: Service[] = [
  {
    id: "software-development",
    title: "Software Development",
    description: "We architect scalable, high-performance web and mobile applications engineered to handle complex business logic and robust user traffic without breaking a sweat.",
    icon: "code",
    contactType: "software",
  },
  {
    id: "ai-ml-services",
    title: "AI/ML Services",
    description: "Harness the power of predictive models and intelligent automation. We integrate custom machine learning solutions that turn your raw data into actionable foresight.",
    icon: "cpu",
    contactType: "ai_ml",
  },
  {
    id: "app-design",
    title: "App Design",
    description: "Fusing monumental aesthetics with fluid user experiences. Our design language speaks in modern geometry, glassmorphism, and intuitive interactions.",
    icon: "pen-tool",
    contactType: "design",
  },
  {
    id: "erp-solutions",
    title: "ERP Solutions",
    description: "Streamline your enterprise operations with custom-built ERP systems. We consolidate your workflows into centralized, secure, and lightning-fast hubs.",
    icon: "database",
    contactType: "erp",
  },
];

export const PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Blueprinting",
    description: "We dive deep into your business ecosystem. Through rigorous analysis, we extract core objectives and draft a robust technical blueprint."
  },
  {
    step: "02",
    title: "Prototyping",
    description: "Visualizing the architecture. We create high-fidelity, interactive prototypes to validate user flows and aesthetic direction before a single line of code is written."
  },
  {
    step: "03",
    title: "Agile Development",
    description: "Our engineers build the core systems in iterative sprints, ensuring transparency, adaptability, and continuous integration of your feedback."
  },
  {
    step: "04",
    title: "Quality Assurance",
    description: "Rigorous automated and manual testing phases guarantee that the final product is secure, responsive, and virtually bulletproof."
  },
  {
    step: "05",
    title: "Deployment",
    description: "Seamless orchestration of the launch. We handle server configuration, CI/CD pipelines, and zero-downtime deployment to production environments."
  },
  {
    step: "06",
    title: "Evolution",
    description: "Launch is just the beginning. We provide ongoing monitoring, performance optimization, and feature scaling to keep you ahead of the curve."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "nexus-fintech",
    title: "Nexus FinTech Platform",
    client: "Nexus Capital",
    description: "A decentralized exchange interface featuring real-time biometric authentication and sub-millisecond transaction rendering.",
    tags: ["Next.js", "Web3", "Tailwind", "GSAP"],
    imageUrl: "/images/projects/nexus.png",
    color: "from-cyan-500/80 to-blue-600/80",
  },
  {
    id: "aurora-ai",
    title: "Aurora Analytics",
    client: "Aurora Health",
    description: "A predictive healthcare dashboard utilizing machine learning to forecast patient influx and optimize resource allocation.",
    tags: ["React", "Python", "TensorFlow", "AWS"],
    imageUrl: "/images/projects/aurora.png",
    color: "from-emerald-500/80 to-teal-600/80",
  },
  {
    id: "strata-erp",
    title: "Strata Global ERP",
    client: "Strata Manufacturing",
    description: "An enterprise resource planning suite that modernized legacy supply chain tracking with a sleek, dark-mode native interface.",
    tags: ["TypeScript", "Node.js", "PostgreSQL", "Framer Motion"],
    imageUrl: "/images/projects/strata.png",
    color: "from-purple-500/80 to-violet-600/80",
  },
  {
    id: "luna-commerce",
    title: "Luna Headless Commerce",
    client: "Luna Wearables",
    description: "A high-conversion headless storefront built for ultra-fast global delivery, featuring 3D product configurators.",
    tags: ["Next.js", "Shopify", "Three.js", "Vercel"],
    imageUrl: "/images/projects/luna.png",
    color: "from-orange-500/80 to-amber-600/80",
  },
  {
    id: "quantum-core",
    title: "Quantum Engine",
    client: "Quantum Logic",
    description: "A high-performance algorithmic trading core built with low-level languages for zero-latency execution.",
    tags: ["Rust", "WebAssembly", "Go", "Redis"],
    imageUrl: "/images/projects/quantum.png",
    color: "from-pink-500/80 to-rose-600/80",
  },
  {
    id: "horizon-vr",
    title: "Horizon VR Space",
    client: "Horizon Meta",
    description: "A virtual reality networking environment built entirely in the browser using advanced WebGL physics engines.",
    tags: ["Three.js", "WebGL", "Socket.io", "React"],
    imageUrl: "/images/projects/horizon.png",
    color: "from-teal-500/80 to-cyan-600/80",
  },
  {
    id: "aegis-cyber",
    title: "Aegis Shield",
    client: "Aegis Security",
    description: "A real-time threat detection matrix providing visual insights into enterprise network traffic anomalies.",
    tags: ["Vue", "Python", "Elasticsearch", "D3.js"],
    imageUrl: "/images/projects/aegis.png",
    color: "from-red-500/80 to-rose-600/80",
  },
  {
    id: "synthesis-ai",
    title: "Synthesis Models",
    client: "Synthesis Research",
    description: "An interactive model-training interface that allows data scientists to orchestrate billion-parameter LLMs visually.",
    tags: ["Next.js", "PyTorch", "Tailwind", "Framer"],
    imageUrl: "/images/projects/synthesis.png",
    color: "from-yellow-500/80 to-amber-600/80",
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Elena Rostova",
    role: "CTO",
    company: "Nexus Capital",
    quote: "Wyfflo didn't just build our platform; they redefined our entire digital presence. The architecture is flawless, and the dark-mode aesthetic is exactly what our institutional investors needed to see."
  },
  {
    id: "t2",
    name: "Marcus Thorne",
    role: "VP of Operations",
    company: "Strata Manufacturing",
    quote: "The ERP solution Wyfflo engineered cut our processing latency by 60%. Their ability to turn complex logistical data into a beautiful, intuitive interface is unmatched."
  }
];
