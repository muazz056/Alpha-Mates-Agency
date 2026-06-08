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
    description:'Developed a cross-platform Electron desktop and website app that provides real-time transcription, note-taking, and action item generation for meetings',
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
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop',
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
    status: 'Production Grade'
  },
  {
    id: '5',
    title: 'AI-Powered E-Commerce Platform',
    slug: 'ai-ecommerce-platform',
    category: 'Custom Development',
    description: 'Next.js e-commerce with AI product recommendations and real-time inventory',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    gallery: [
      'https://raw.githubusercontent.com/angular/angular/main/aio/src/assets/images/devtools/angular-devtools.png',
      'https://raw.githubusercontent.com/nuxt/nuxt/main/.github/assets/design-kit.png',
      'https://raw.githubusercontent.com/laravel/jetstream/3.x/.github/screenshot.png',
    ],
    tags: ['Next.js', 'Python', 'AI/ML', 'PostgreSQL'],
    year: '2024',
    client: 'RetailCo',
    role: 'Full-stack development, AI integration',
    problem: 'Client needed a modern e-commerce platform with personalized shopping experiences and real-time inventory management across 50+ locations.',
    solution: 'Built a headless Next.js storefront with Python FastAPI backend, integrated OpenAI for product recommendations, and implemented Redis caching for sub-100ms response times.',
    impact: [
      '43% increase in conversion rate',
      '2.3x improvement in average order value',
      '89% reduction in cart abandonment',
      '< 50ms page load times'
    ],
    status: 'Production Grade',
    testimonial: {
      quote: 'The platform exceeded expectations. Our sales increased 40% in the first quarter alone.',
      author: 'Sarah Chen',
      role: 'CTO, RetailCo'
    }
  },
  {
    id: '6',
    title: 'Healthcare RAG Chatbot',
    slug: 'healthcare-rag-chatbot',
    category: 'AI Chatbot',
    description: 'HIPAA-compliant RAG chatbot for patient support with 10k+ medical documents',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    gallery: [
      'https://raw.githubusercontent.com/mckaywrigley/chatbot-ui/main/public/screenshots/screenshot-1.png',
      'https://raw.githubusercontent.com/lobehub/lobe-chat/main/docs/images/lobechat-screenshot.png',
    ],
    tags: ['Python', 'LangChain', 'RAG', 'HIPAA'],
    year: '2024',
    client: 'MedHealth',
    role: 'AI/ML Engineer, Backend Development',
    problem: 'Hospital needed 24/7 patient support that could answer medical questions accurately while maintaining HIPAA compliance.',
    solution: 'Developed a RAG chatbot using LangChain and Pinecone, trained on 10,000+ medical documents. Implemented end-to-end encryption and audit logging.',
    impact: [
      '78% reduction in support tickets',
      '24/7 instant patient responses',
      '94% answer accuracy rate',
      'Full HIPAA compliance maintained'
    ],
    status: 'Production Grade'
  },
  {
    id: '7',
    title: 'Luxury Fashion Shopify Store',
    slug: 'luxury-fashion-shopify',
    category: 'Shopify',
    description: 'Custom Shopify theme with advanced filtering and AR try-on features',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    tags: ['Shopify', 'Liquid', 'JavaScript', 'AR'],
    year: '2023',
    client: 'LuxeWear',
    role: 'Shopify Development, Custom Theme',
    problem: 'Luxury brand needed elevated online experience matching their in-store prestige, with AR try-on capabilities.',
    solution: 'Developed custom Shopify theme with advanced product filtering, AR integration via Shopify AR, and personalized styling recommendations.',
    impact: [
      '67% increase in online sales',
      '45% higher average session duration',
      '31% reduction in returns',
      '4.8/5 customer satisfaction'
    ],
    status: 'Deployed Live'
  },
  {
    id: '8',
    title: 'Jewelry E-Commerce Shopify',
    slug: 'jewelry-shopify',
    category: 'Shopify',
    description: 'Premium Shopify store with 360° product views and custom engraving tool',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop',
    tags: ['Shopify', 'JavaScript', 'Three.js', 'Stripe'],
    year: '2024',
    client: 'Diamonds Forever',
    role: 'Shopify Development, 3D Integration',
    problem: 'Luxury jeweler needed online store with 360° product visualization, custom engraving preview, and gift packaging options.',
    solution: 'Custom Shopify theme with Three.js for 3D product views, real-time engraving preview tool, and premium checkout experience.',
    impact: [
      '183% revenue growth',
      '52% higher AOV',
      '89% mobile conversion rate',
      '$2.5M first-year sales'
    ],
    status: 'Deployed Live',
    testimonial: {
      quote: 'The 3D viewer changed everything. Customers buy with confidence now.',
      author: 'David Martinez',
      role: 'Owner, Diamonds Forever'
    }
  },
  {
    id: '9',
    title: 'Fashion Boutique Shopify',
    slug: 'fashion-boutique-shopify',
    category: 'Shopify',
    description: 'Trendy Shopify store with size recommender and Instagram shopping integration',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop',
    tags: ['Shopify', 'Instagram API', 'JavaScript', 'Klaviyo'],
    year: '2023',
    client: 'Urban Threads',
    role: 'Shopify Development, Marketing',
    problem: 'Fashion brand needed Shopify store with AI size recommendations, Instagram shop integration, and email automation.',
    solution: 'Custom Shopify theme with size prediction algorithm, Instagram API for shoppable posts, Klaviyo email flows, and loyalty program.',
    impact: [
      '420% Instagram conversions',
      '68% reduction in returns',
      '45% repeat purchase rate',
      '$800k first-year revenue'
    ],
    status: 'Deployed Live'
  },
  {
    id: '10',
    title: 'Restaurant WordPress Site',
    slug: 'restaurant-wordpress',
    category: 'WordPress',
    description: 'WordPress site with online ordering, reservations, and menu management',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    tags: ['WordPress', 'WooCommerce', 'PHP', 'SEO'],
    year: '2023',
    client: 'Bella Cucina',
    role: 'WordPress Development, SEO',
    problem: 'Restaurant chain needed unified online presence with ordering, reservations, and multi-location menu management.',
    solution: 'Custom WordPress theme with WooCommerce integration, reservation system, and centralized menu management for 8 locations.',
    impact: [
      '210% increase in online orders',
      '85% reduction in phone orders',
      '3x organic traffic growth',
      'Ranked #1 for local keywords'
    ],
    status: 'Deployed Live'
  },
  {
    id: '10',
    title: 'Nonprofit Wix Website',
    slug: 'nonprofit-wix',
    category: 'Wix',
    description: 'Wix site with donation portal, volunteer management, and event calendar',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop',
    tags: ['Wix', 'Velo', 'JavaScript', 'Stripe'],
    year: '2023',
    client: 'Hope Foundation',
    role: 'Wix Development, Integrations',
    problem: 'Nonprofit needed modern website with secure donation portal, volunteer registration, event calendar, and impact reporting.',
    solution: 'Built Wix site with Velo for custom donation forms, Stripe integration, automated volunteer emails, and real-time impact counter.',
    impact: [
      '$1.2M donations in 6 months',
      '500+ new volunteers',
      '3x event attendance',
      '85% donor retention rate'
    ],
    status: 'Deployed Live',
    testimonial: {
      quote: 'The donation portal made fundraising so much easier. We exceeded our goals.',
      author: 'Maria Santos',
      role: 'Director, Hope Foundation'
    }
  },
  {
    id: '11',
    title: 'Real Estate WordPress Portal',
    slug: 'real-estate-wordpress',
    category: 'WordPress',
    description: 'WordPress property portal with advanced search, virtual tours, and lead management',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    tags: ['WordPress', 'PHP', 'Google Maps', 'Zapier'],
    year: '2024',
    client: 'Prime Properties',
    role: 'WordPress Development, API Integration',
    problem: 'Real estate agency needed property portal with MLS integration, virtual tours, mortgage calculator, and automated lead routing.',
    solution: 'Custom WordPress theme with IDX Broker integration, 360° tour embedding, mortgage calculator widget, and Zapier CRM sync.',
    impact: [
      '1,200+ listings managed',
      '340% lead generation increase',
      '5x virtual tour engagement',
      '92% search accuracy'
    ],
    status: 'Deployed Live'
  },
  {
    id: '12',
    title: 'SaaS Analytics Platform',
    slug: 'saas-analytics-platform',
    category: 'Custom Development',
    description: 'Python Flask + React analytics dashboard processing 5M+ events daily',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['Flask', 'React', 'PostgreSQL', 'Celery'],
    year: '2023',
    client: 'DataViz Pro',
    role: 'Full-stack Development',
    problem: 'Startup needed scalable analytics platform to process millions of events and generate real-time insights.',
    solution: 'Built Flask API with Celery for background processing, PostgreSQL for data storage, and React dashboard with custom visualizations.',
    impact: [
      '5M+ events processed daily',
      'Real-time data insights',
      'Scaled to 10k+ users',
      '< 500ms query response'
    ],
    status: 'Production Grade',
    testimonial: {
      quote: 'This platform became the core of our product. Flawless execution.',
      author: 'Alex Kumar',
      role: 'Founder, DataViz Pro'
    }
  },
  {
    id: '13',
    title: 'Legal AI Document Assistant',
    slug: 'legal-ai-assistant',
    category: 'AI Chatbot',
    description: 'RAG-powered legal document analysis chatbot with 50k+ case law database',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop',
    tags: ['Python', 'OpenAI', 'RAG', 'Django'],
    year: '2024',
    client: 'LegalTech Solutions',
    role: 'AI Development, Backend',
    problem: 'Law firm needed AI assistant to analyze contracts and legal documents against 50,000+ case law references.',
    solution: 'Built RAG chatbot using OpenAI GPT-4, Pinecone vector DB, and Django backend with secure document processing pipeline.',
    impact: [
      '92% reduction in document review time',
      '96% accuracy in legal analysis',
      'Handles 500+ documents/day',
      'ROI achieved in 3 months'
    ],
    status: 'Production Grade'
  },
  {
    id: '14',
    title: 'IoT Fleet Management',
    slug: 'iot-fleet-management',
    category: 'Custom Development',
    description: 'Node.js + React IoT platform tracking 1000+ vehicles in real-time',
    image: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&h=600&fit=crop',
    tags: ['Node.js', 'React', 'IoT', 'MongoDB'],
    year: '2023',
    client: 'LogiTrans',
    role: 'Full-stack Development, IoT Integration',
    problem: 'Logistics company needed real-time tracking and analytics for 1000+ vehicle fleet across 3 countries.',
    solution: 'Built Node.js backend with MQTT for IoT data ingestion, MongoDB for time-series storage, and React dashboard with live maps.',
    impact: [
      '1000+ vehicles tracked',
      'Real-time location updates',
      '34% fuel cost reduction',
      '28% faster delivery times'
    ],
    status: 'Production Grade',
    testimonial: {
      quote: 'Visibility we never had before. This transformed our operations.',
      author: 'James Wilson',
      role: 'COO, LogiTrans'
    }
  },
  {
    id: '15',
    title: 'FinTech Mobile Banking App',
    slug: 'fintech-banking-app',
    category: 'Custom Development',
    description: 'React Native banking app with biometric security and instant transfers',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    gallery: [
      'https://raw.githubusercontent.com/BuilderIO/qwik-city-e-commerce/main/.github/assets/homepage.png',
      'https://raw.githubusercontent.com/medusajs/medusa/master/.github/banner.jpeg',
      'https://raw.githubusercontent.com/supabase/supabase/master/apps/www/public/images/blog/dashboard-performance/cover.png',
    ],
    tags: ['React Native', 'Node.js', 'AWS', 'Stripe'],
    year: '2024',
    client: 'NeoBank',
    role: 'Mobile Development, Security',
    problem: 'Digital bank needed secure mobile app with instant P2P transfers, bill pay, and investment features for 500k+ users.',
    solution: 'Developed React Native app with biometric authentication, end-to-end encryption, real-time transaction processing, and AWS serverless backend.',
    impact: [
      '500k+ active users',
      '< 2s transaction processing',
      '99.9% uptime achieved',
      '4.7/5 App Store rating'
    ],
    status: 'Production Grade',
    testimonial: {
      quote: 'Secure, fast, and beautiful. Our users love it.',
      author: 'Rachel Foster',
      role: 'CEO, NeoBank'
    }
  },
  {
    id: '16',
    title: 'EdTech Learning Management System',
    slug: 'edtech-lms',
    category: 'Custom Development',
    description: 'Django LMS with video streaming, quizzes, and progress tracking for 50k students',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
    tags: ['Django', 'Vue.js', 'AWS S3', 'PostgreSQL'],
    year: '2023',
    client: 'EduGlobal',
    role: 'Full-stack Development',
    problem: 'Education company needed scalable LMS to deliver courses to 50,000+ students with video streaming, assessments, and certificates.',
    solution: 'Built Django backend with Vue.js frontend, AWS S3 for video CDN, automated grading system, and PDF certificate generation.',
    impact: [
      '50k+ students enrolled',
      '95% course completion rate',
      '< 3s video load time globally',
      '10k+ certificates issued'
    ],
    status: 'Production Grade'
  },
  {
    id: '17',
    title: 'Customer Support AI Agent',
    slug: 'support-ai-agent',
    category: 'AI Chatbot',
    description: 'Multi-lingual AI support agent handling 10k+ conversations daily',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
    tags: ['Python', 'GPT-4', 'FastAPI', 'Redis'],
    year: '2024',
    client: 'TechSupport Inc',
    role: 'AI Development, Integration',
    problem: 'SaaS company needed AI agent to handle tier-1 support in 12 languages, reducing human agent load by 60%.',
    solution: 'Built GPT-4 powered agent with custom training on company docs, multi-language support, sentiment analysis, and seamless human handoff.',
    impact: [
      '10k+ conversations daily',
      '87% resolution without human',
      '12 languages supported',
      '60% reduction in support costs'
    ],
    status: 'Production Grade'
  },
  {
    id: '18',
    title: 'Event Management Platform',
    slug: 'event-management-platform',
    category: 'Custom Development',
    description: 'Next.js event platform with ticketing, check-in, and analytics for 100k attendees',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
    tags: ['Next.js', 'Stripe', 'QR Codes', 'PostgreSQL'],
    year: '2024',
    client: 'EventPro',
    role: 'Full-stack Development',
    problem: 'Event company needed white-label platform for ticketing, check-in, badge printing, and real-time analytics across 500+ events.',
    solution: 'Built Next.js platform with Stripe Connect, QR code check-in system, thermal printer integration, and live analytics dashboard.',
    impact: [
      '100k+ attendees managed',
      '500+ events hosted',
      '< 5s check-in time',
      '99.7% payment success rate'
    ],
    status: 'Production Grade',
    testimonial: {
      quote: 'Seamless ticketing and check-in. Our events run smoother than ever.',
      author: 'Tom Richardson',
      role: 'Founder, EventPro'
    }
  },
  {
    id: '19',
    title: 'Smart Home Control App',
    slug: 'smart-home-app',
    category: 'Custom Development',
    description: 'React Native app controlling IoT devices with voice commands and automation',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop',
    tags: ['React Native', 'IoT', 'Alexa', 'AWS IoT'],
    year: '2023',
    client: 'SmartLiving',
    role: 'Mobile Development, IoT',
    problem: 'IoT startup needed unified app to control 50+ device types with voice commands, scenes, and scheduling.',
    solution: 'Developed React Native app with AWS IoT Core integration, Alexa skill, custom automation engine, and energy monitoring.',
    impact: [
      '50+ device types supported',
      '200k+ active homes',
      '30% energy savings average',
      '4.6/5 user rating'
    ],
    status: 'Production Grade'
  },
  {
    id: '20',
    title: 'Fitness App with AI Coach',
    slug: 'fitness-ai-coach',
    category: 'AI Chatbot',
    description: 'AI-powered fitness coaching app with personalized workouts and nutrition',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
    tags: ['Python', 'TensorFlow', 'React Native', 'OpenAI'],
    year: '2024',
    client: 'FitAI',
    role: 'AI Development, Mobile App',
    problem: 'Fitness startup needed AI coach that creates personalized workout plans, tracks progress, and adjusts based on performance.',
    solution: 'Built AI coach using GPT-4 for conversations, TensorFlow for form analysis via camera, personalized meal plans, and progress tracking.',
    impact: [
      '80k+ users trained',
      '92% user retention',
      '4.8/5 satisfaction score',
      'Featured in App Store'
    ],
    status: 'Production Grade',
    testimonial: {
      quote: 'Like having a personal trainer in my pocket. The AI is impressively smart.',
      author: 'Lisa Zhang',
      role: 'CEO, FitAI'
    }
  }
];
