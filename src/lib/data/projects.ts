export type Project = {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  gallery?: string[];
  tags: string[];
  year: string;
  client: string;
  role: string;
  problem: string;
  solution: string;
  impact: string[];
  liveUrl?: string;
  status: 'Deployed Live' | 'Production Grade';
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'ConvoHarbor',
    slug: 'convoharbor',
    category: 'AI Chatbot',
    description: 'Production-grade multi-tenant SaaS chatbot platform supporting 11 AI providers with RAG pipeline and real-time streaming',
    image: '/Convoharbor-img.png',
    gallery: [
      '/Convoharbor-img.png',
    ],
    tags: ['Flask', 'React', 'PostgreSQL', 'pgvector', 'LangChain', 'RAG', 'Redis', 'Celery', 'Docker'],
    year: '2024',
    client: 'SaaS Platform',
    role: 'Full-stack Development, AI/ML Engineering',
    problem: 'Businesses need intelligent chatbot solutions that can scale across multiple tenants, support various AI providers, and handle complex document-based queries with high accuracy.',
    solution: 'Built a full RAG pipeline with query rewriting, HyDE, and pgvector cosine similarity search. Implemented dual embedding storage (Gemini + OpenAI), multi-strategy web crawler, Fernet AES encryption, JWT RBAC with 9 permissions, and deployed with Docker, Nginx, Redis, and Celery async queues.',
    impact: [
      '11 AI providers supported with automatic fallback',
      'Full RAG pipeline with dual embedding storage',
      'Multi-strategy web crawler for knowledge base ingestion',
      'Fernet AES-128-CBC field-level encryption',
      'Multi-service architecture with Docker and Celery'
    ],
    liveUrl: 'https://convoharbor.vercel.app',
    status: 'Deployed Live'
  },
  {
    id: '2',
    title: 'Studium',
    slug: 'studium',
    category: 'AI Chatbot',
    description: 'AI-powered learning platform that generates notes, flashcards, quizzes, summaries, and mindmaps from uploaded content',
    image: '/studium.png',
    gallery: [
      '/studium.png',
    ],
    tags: ['FastAPI', 'Next.js', 'PostgreSQL', 'Redis', 'Celery', 'OpenAI', 'Gemini', 'Groq', 'Stripe'],
    year: '2024',
    client: 'EdTech Platform',
    role: 'Full-stack Development, AI Integration',
    problem: 'Students waste hours manually summarizing textbooks, creating flashcards, and organizing notes. They need an automated solution that transforms any content source into a complete study kit.',
    solution: 'Built an AI-powered platform that ingests PDFs, DOCX files, YouTube URLs, and web links to automatically generate study materials. Implemented SM-2 spaced repetition algorithm, Celery + Redis background job pipeline, Stripe subscription billing, and 14 SQLAlchemy database models.',
    impact: [
      'Multi-source content ingestion (PDF, DOCX, YouTube, Web)',
      'SM-2 spaced repetition for optimal review scheduling',
      'Background job pipeline with real-time status tracking',
      'Stripe subscription billing with 3 tiers',
      '14 SQLAlchemy database models'
    ],
    liveUrl: 'https://studium-rho.vercel.app',
    status: 'Deployed Live'
  },
  {
    id: '3',
    title: 'Meeting Assistant',
    slug: 'meeting-assistant',
    category: 'AI Chatbot',
    description: 'Cross-platform Electron desktop app with stealth overlay window invisible to screen-sharing software',
    image: '/stealth-assist.png',
    gallery: [
      '/stealth-assist.png',
    ],
    tags: ['Electron', 'React', 'TypeScript', 'Express', 'MongoDB', 'Deepgram', 'Gemini', 'GPT'],
    year: '2024',
    client: 'Productivity Tool',
    role: 'Full-stack Development, Desktop App Engineering',
    problem: 'Job seekers need an effective way to simulate real interview conditions with AI assistance that cannot be detected by screen-sharing software during live interviews.',
    solution: 'Developed a cross-platform Electron app with transparent overlay window using Windows SetWindowDisplayAffinity API via FFI. Built multi-modal speech pipeline with 3 STT backends, context-aware AI answer generation with STAR/short/detailed/bullets modes, and cross-platform packaging.',
    impact: [
      '3 STT backends with 50+ language support',
      'Context-aware AI with resume, JD, and company info',
      'Cross-platform: Windows (NSIS), macOS (DMG), Linux (AppImage)',
      'Freemium token/credit system with Stripe billing'
    ],
    liveUrl: 'https://stealth-assist-ai.vercel.app',
    status: 'Deployed Live'
  },
  {
    id: '4',
    title: 'Track Hero',
    slug: 'track-hero',
    category: 'Custom Development',
    description: 'Comprehensive fullstack platform for motorsport event scheduling, registration, and race timing management',
    image: '/track-hero-img.png',
    gallery: [
      '/track-hero-img.png',
    ],
    tags: ['React', 'TypeScript', 'Redux Toolkit', 'Django', 'PostgreSQL', 'Stripe'],
    year: '2024',
    client: 'Motorsport Events',
    role: 'Full-stack Development',
    problem: 'Motorsport event organizers need a unified platform for event scheduling, participant registration, real-time race timing, and secure payment processing.',
    solution: 'Developed features in a comprehensive fullstack platform using React with Redux Toolkit for state management, Django REST Framework for API, PostgreSQL for data storage, and Stripe for payment processing with real-time data synchronization.',
    impact: [
      'Real-time race timing management',
      'Secure Stripe payment integration',
      'Event scheduling and registration system',
      'Real-time data synchronization'
    ],
    liveUrl: 'https://trackhero.com',
    status: 'Deployed Live'
  },
  {
    id: '5',
    title: 'Vercel AI Chatbot',
    slug: 'vercel-ai-chatbot',
    category: 'AI Chatbot',
    description: 'Full-featured, hackable Next.js AI chatbot built with Vercel AI SDK supporting multiple LLM providers',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    ],
    tags: ['Next.js', 'TypeScript', 'AI SDK', 'Tailwind CSS', 'PostgreSQL', 'Auth.js'],
    year: '2024',
    client: 'Vercel',
    role: 'Open Source Contribution',
    problem: 'Developers need a production-ready chatbot template that supports multiple AI providers, data persistence, and authentication out of the box.',
    solution: 'Built with Next.js App Router, Vercel AI SDK for unified LLM API, Neon Serverless Postgres for data persistence, Vercel Blob for file storage, and Auth.js for authentication. Supports OpenAI, Anthropic, Google, xAI via AI Gateway.',
    impact: [
      '5.1K+ GitHub stars',
      'Supports 25+ AI providers',
      'Production-ready with authentication',
      'Real-time streaming responses',
      'Deployable with one click to Vercel'
    ],
    liveUrl: 'https://chatbot.ai-sdk.dev/demo',
    status: 'Deployed Live'
  },
  {
    id: '6',
    title: 'Documenso',
    slug: 'documenso',
    category: 'Custom Development',
    description: 'Open-source alternative to DocuSign for digital signatures and document workflows',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Stripe'],
    year: '2024',
    client: 'Open Source',
    role: 'Full-stack Development',
    problem: 'Businesses need affordable, self-hosted document signing solutions that provide the same functionality as expensive proprietary platforms like DocuSign.',
    solution: 'Built an open-source document signing platform with Next.js, Prisma ORM, PostgreSQL database, template creation, audit trails, and Stripe integration for payments.',
    impact: [
      '8.9K+ GitHub stars',
      'Self-hostable solution',
      'Complete audit trail system',
      'Template management system',
      'API-first architecture'
    ],
    liveUrl: 'https://documenso.com',
    status: 'Deployed Live'
  },
  {
    id: '7',
    title: 'Chatbot UI',
    slug: 'chatbot-ui',
    category: 'AI Chatbot',
    description: 'Open-source chat interface for AI models with Supabase backend and real-time streaming',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'OpenAI', 'Tailwind CSS', 'React'],
    year: '2024',
    client: 'Open Source',
    role: 'Full-stack Development',
    problem: 'Users need a self-hostable, feature-rich chat interface that supports multiple AI providers and maintains conversation history.',
    solution: 'Built with Next.js, Supabase for authentication and database, OpenAI API integration, real-time streaming responses, file upload support, and conversation management.',
    impact: [
      '28K+ GitHub stars',
      'Self-hostable with Supabase',
      'Multi-provider AI support',
      'Real-time streaming',
      'File upload and management'
    ],
    liveUrl: 'https://www.chatbotui.com',
    status: 'Deployed Live'
  },
  {
    id: '8',
    title: 'Allbirds Shopify Store',
    slug: 'allbirds-shopify',
    category: 'Shopify',
    description: 'Sustainable footwear brand Shopify store with custom product configuration and eco-impact tracking',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop',
    tags: ['Shopify', 'Liquid', 'JavaScript', 'React', 'Sustainability'],
    year: '2024',
    client: 'Allbirds',
    role: 'Shopify Plus Development',
    problem: 'Sustainable footwear brand needs an ecommerce platform that showcases their eco-friendly products while providing seamless shopping experience.',
    solution: 'Custom Shopify Plus implementation with product carbon footprint tracking, size recommendation AI, subscription management for recurring orders, and integration with sustainability metrics dashboard.',
    impact: [
      'Carbon footprint displayed per product',
      'Size recommendation AI reducing returns',
      'Subscription model for repeat purchases',
      'Seamless checkout with Apple Pay, Google Pay'
    ],
    liveUrl: 'https://www.allbirds.com',
    status: 'Deployed Live'
  },
  {
    id: '9',
    title: 'Gymshark Shopify Store',
    slug: 'gymshark-shopify',
    category: 'Shopify',
    description: 'Fitness apparel brand Shopify Plus store with high-performance checkout and inventory management',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    tags: ['Shopify Plus', 'Liquid', 'JavaScript', 'Node.js', 'Inventory'],
    year: '2024',
    client: 'Gymshark',
    role: 'Shopify Plus Development',
    problem: 'High-growth fitness brand needs scalable ecommerce infrastructure to handle flash sales and high-traffic events without performance degradation.',
    solution: 'Custom Shopify Plus implementation with flash sale queue management, real-time inventory sync, high-performance checkout optimization, and integration with supply chain management systems.',
    impact: [
      'Handles 100K+ concurrent users during launches',
      'Flash sale queue management system',
      'Real-time inventory synchronization',
      'Mobile-first responsive design'
    ],
    liveUrl: 'https://www.gymshark.com',
    status: 'Deployed Live'
  },
  {
    id: '10',
    title: 'Oberlo Dropshipping Platform',
    slug: 'oberlo-dropshipping',
    category: 'Shopify',
    description: 'Shopify app for dropshipping with AliExpress product import and order automation',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['Shopify', 'Chrome Extension', 'Node.js', 'MongoDB', 'API'],
    year: '2023',
    client: 'Oberlo (Shopify)',
    role: 'Full-stack Development',
    problem: 'Entrepreneurs need easy way to find and sell products from AliExpress suppliers without holding inventory.',
    solution: 'Built Chrome extension for product import, Node.js backend for order processing, MongoDB for product catalog, and automated order fulfillment with AliExpress API integration.',
    impact: [
      '100K+ active merchants',
      'Millions of products imported',
      'Automated order fulfillment',
      'Real-time price tracking'
    ],
    liveUrl: 'https://www.oberlo.com',
    status: 'Deployed Live'
  },
  {
    id: '11',
    title: 'Kinsta WordPress Hosting',
    slug: 'kinsta-wordpress',
    category: 'WordPress',
    description: 'Premium managed WordPress hosting platform with MyKinsta dashboard and staging environments',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
    tags: ['WordPress', 'PHP', 'Laravel', 'Google Cloud', 'Docker'],
    year: '2024',
    client: 'Kinsta',
    role: 'Platform Development',
    problem: 'WordPress site owners need managed hosting with easy-to-use dashboard, staging environments, and performance optimization.',
    solution: 'Built MyKinsta dashboard with Laravel, Google Cloud Platform integration, Docker containerization, automated backups, staging environments, and performance monitoring tools.',
    impact: [
      '26,500+ WordPress sites hosted',
      '99.9% uptime guarantee',
      'Global CDN with 35+ locations',
      'Automated daily backups'
    ],
    liveUrl: 'https://kinsta.com',
    status: 'Deployed Live'
  },
  {
    id: '12',
    title: 'Ninja Forms WordPress Plugin',
    slug: 'ninja-forms-wordpress',
    category: 'WordPress',
    description: 'Drag-and-drop WordPress form builder plugin with advanced field types and integrations',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['WordPress', 'PHP', 'JavaScript', 'React', 'REST API'],
    year: '2024',
    client: 'Ninja Forms',
    role: 'Plugin Development',
    problem: 'WordPress users need user-friendly form builder that doesn\'t require coding knowledge and integrates with popular services.',
    solution: 'Built drag-and-drop form builder with React frontend, WordPress REST API backend, advanced field types, conditional logic, and 30+ third-party integrations.',
    impact: [
      '20,000+ active installations',
      '4.5/5 star rating',
      '30+ third-party integrations',
      'GDPR compliant'
    ],
    liveUrl: 'https://ninjaforms.com',
    status: 'Deployed Live'
  },
  {
    id: '13',
    title: 'MemberPress LMS',
    slug: 'memberpress-lms',
    category: 'WordPress',
    description: 'WordPress learning management system plugin with course builder and membership functionality',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
    tags: ['WordPress', 'PHP', 'LMS', 'Membership', 'WooCommerce'],
    year: '2024',
    client: 'MemberPress',
    role: 'Plugin Development',
    problem: 'Educators need WordPress-based platform to create, sell, and manage online courses with membership functionality.',
    solution: 'Built LMS plugin with course builder, drip content scheduling, membership levels, progress tracking, quizzes, certificates, and WooCommerce integration.',
    impact: [
      '30,000+ active installations',
      'Course completion tracking',
      'Drip content scheduling',
      'Membership management system'
    ],
    liveUrl: 'https://memberpress.com',
    status: 'Deployed Live'
  },
  {
    id: '14',
    title: 'Inbox Zero',
    slug: 'inbox-zero',
    category: 'AI Chatbot',
    description: 'Open-source email app with AI assistance to achieve inbox zero efficiently',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=600&fit=crop',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Tinybird', 'Upstash'],
    year: '2024',
    client: 'Open Source',
    role: 'Full-stack Development',
    problem: 'Professionals spend hours managing emails and need AI-powered assistance to automatically categorize, prioritize, and respond to emails.',
    solution: 'Built email client with AI-powered categorization, automated rule engine, bulk actions, analytics dashboard, and integration with Gmail API.',
    impact: [
      '3.1K+ GitHub stars',
      'AI-powered email categorization',
      'Automated rule engine',
      'Analytics and productivity insights'
    ],
    liveUrl: 'https://www.getinboxzero.com',
    status: 'Deployed Live'
  },
  {
    id: '15',
    title: 'Photoshot AI',
    slug: 'photoshot-ai',
    category: 'AI Chatbot',
    description: 'AI avatar generator using Stable Diffusion for creating professional headshots',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    tags: ['Next.js', 'React', 'Chakra UI', 'Prisma', 'Replicate', 'Stripe'],
    year: '2024',
    client: 'Open Source',
    role: 'Full-stack Development',
    problem: 'Professionals need affordable AI-generated headshots without expensive photography sessions.',
    solution: 'Built AI avatar generator using Stable Diffusion model via Replicate API, with Next.js frontend, Chakra UI components, Prisma database, and Stripe payments.',
    impact: [
      '3.6K+ GitHub stars',
      'AI-powered avatar generation',
      'Customization options',
      'Payment integration'
    ],
    liveUrl: 'https://photoshot.app',
    status: 'Deployed Live'
  },
  {
    id: '16',
    title: 'Cal.com Scheduling',
    slug: 'cal-com-scheduling',
    category: 'Custom Development',
    description: 'Open-source scheduling infrastructure alternative to Calendly',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=600&fit=crop',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'tRPC'],
    year: '2024',
    client: 'Cal.com',
    role: 'Full-stack Development',
    problem: 'Businesses need self-hosted scheduling solution that provides the same functionality as Calendly without vendor lock-in.',
    solution: 'Built open-source scheduling platform with Next.js, Prisma ORM, PostgreSQL, calendar integrations, team management, and embeddable widgets.',
    impact: [
      '25K+ GitHub stars',
      'Self-hostable solution',
      'Calendar integration (Google, Outlook)',
      'Embeddable booking pages',
      'Team scheduling management'
    ],
    liveUrl: 'https://cal.com',
    status: 'Deployed Live'
  },
  {
    id: '17',
    title: 'Twenty CRM',
    slug: 'twenty-crm',
    category: 'Custom Development',
    description: 'Open-source CRM alternative to Salesforce built with modern tech stack',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'GraphQL', 'Tailwind CSS'],
    year: '2024',
    client: 'Twenty',
    role: 'Full-stack Development',
    problem: 'Startups need affordable, customizable CRM solution without Salesforce complexity and pricing.',
    solution: 'Built open-source CRM with React frontend, Node.js backend, PostgreSQL database, GraphQL API, custom object builder, and workflow automation.',
    impact: [
      '15K+ GitHub stars',
      'Custom object builder',
      'Workflow automation',
      'API-first architecture'
    ],
    liveUrl: 'https://twenty.com',
    status: 'Deployed Live'
  },
  {
    id: '18',
    title: 'Invoiceninja',
    slug: 'invoiceninja',
    category: 'Custom Development',
    description: 'Open-source invoicing platform for freelancers and small businesses',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
    tags: ['Laravel', 'PHP', 'Vue.js', 'PostgreSQL', 'MySQL', 'Docker'],
    year: '2024',
    client: 'Invoice Ninja',
    role: 'Full-stack Development',
    problem: 'Freelancers and small businesses need professional invoicing solution with payment tracking and client management.',
    solution: 'Built invoicing platform with Laravel backend, Vue.js frontend, PDF generation, payment gateway integrations, time tracking, and expense management.',
    impact: [
      '200K+ businesses using platform',
      '10K+ GitHub stars',
      'Multi-currency support',
      'Payment gateway integrations'
    ],
    liveUrl: 'https://invoiceninja.com',
    status: 'Deployed Live'
  }
];
