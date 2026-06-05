export type Project = {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  gallery?: string[]; // Multiple application screenshots
  tags: string[];
  year: string;
  client: string;
  role: string;
  problem: string;
  solution: string;
  impact: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered E-Commerce Platform',
    slug: 'ai-ecommerce-platform',
    category: 'Custom Development',
    description: 'Next.js e-commerce with AI product recommendations and real-time inventory',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    gallery: [
      'https://raw.githubusercontent.com/angular/angular/main/aio/src/assets/images/devtools/angular-devtools.png', // E-commerce dashboard
      'https://raw.githubusercontent.com/nuxt/nuxt/main/.github/assets/design-kit.png', // Product interface
      'https://raw.githubusercontent.com/laravel/jetstream/3.x/.github/screenshot.png', // Admin panel
      'https://raw.githubusercontent.com/creativetimofficial/material-dashboard/master/assets/img/material-dashboard-free.jpg', // Analytics
      'https://raw.githubusercontent.com/coreui/coreui-free-react-admin-template/main/public/assets/img/coreui-react-admin-template.jpg', // Management UI
      'https://raw.githubusercontent.com/flatlogic/react-dashboard/master/screenshot.png', // Dashboard view
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
    testimonial: {
      quote: 'The platform exceeded expectations. Our sales increased 40% in the first quarter alone.',
      author: 'Sarah Chen',
      role: 'CTO, RetailCo'
    }
  },
  {
    id: '2',
    title: 'Healthcare RAG Chatbot',
    slug: 'healthcare-rag-chatbot',
    category: 'AI Chatbot',
    description: 'HIPAA-compliant RAG chatbot for patient support with 10k+ medical documents',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    gallery: [
      'https://raw.githubusercontent.com/mckaywrigley/chatbot-ui/main/public/screenshots/screenshot-1.png', // Chat interface
      'https://raw.githubusercontent.com/lobehub/lobe-chat/main/docs/images/lobechat-screenshot.png', // AI Chat UI
      'https://raw.githubusercontent.com/streamlit/streamlit/develop/docs/_static/img/gallery-screenshots/chat-with-pdf.jpg', // Medical chatbot
      'https://raw.githubusercontent.com/vercel/ai-chatbot/main/.github/screenshot.png', // Chatbot interface
      'https://raw.githubusercontent.com/mckaywrigley/chatbot-ui/main/public/screenshots/screenshot-2.png', // Chat dashboard
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
    ]
  },
  {
    id: '3',
    title: 'Real-time Trading Dashboard',
    slug: 'trading-dashboard',
    category: 'Custom Development',
    description: 'React + Django WebSocket dashboard for crypto trading with live market data',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
    gallery: [
      'https://raw.githubusercontent.com/flatlogic/react-dashboard/master/screenshot.png', // Trading dashboard
      'https://raw.githubusercontent.com/creativetimofficial/material-dashboard/master/assets/img/material-dashboard-free.jpg', // Charts view
      'https://raw.githubusercontent.com/coreui/coreui-free-react-admin-template/main/public/assets/img/coreui-react-admin-template.jpg', // Portfolio
      'https://raw.githubusercontent.com/tabler/tabler/main/.github/tabler-preview.png', // Trading interface
      'https://raw.githubusercontent.com/CoreyMSchafer/code_snippets/master/Django_Blog/Screenshots/Django_Blog_Home.png', // Analytics
      'https://raw.githubusercontent.com/plotly/dash-sample-apps/main/apps/dash-financial-report/.github/screenshot.png', // Financial dashboard
    ],
    tags: ['React', 'Django', 'WebSocket', 'Redis'],
    year: '2024',
    client: 'CryptoTrade',
    role: 'Frontend & Backend Development',
    problem: 'Trading firm required a real-time dashboard handling 100k+ price updates per second with zero data loss.',
    solution: 'Built React dashboard with Django Channels backend, Redis for caching, and WebSocket for bi-directional real-time updates.',
    impact: [
      '100k+ updates/sec handled',
      '< 10ms latency',
      '99.99% uptime maintained',
      'Zero data loss'
    ],
    testimonial: {
      quote: 'Finally, a dashboard that keeps up with market velocity. Game changer.',
      author: 'Michael Torres',
      role: 'Head of Trading, CryptoTrade'
    }
  },
  {
    id: '4',
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
    ]
  },
  {
    id: '5',
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
    testimonial: {
      quote: 'This platform became the core of our product. Flawless execution.',
      author: 'Alex Kumar',
      role: 'Founder, DataViz Pro'
    }
  },
  {
    id: '6',
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
    ]
  },
  {
    id: '7',
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
    ]
  },
  {
    id: '8',
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
    testimonial: {
      quote: 'Visibility we never had before. This transformed our operations.',
      author: 'James Wilson',
      role: 'COO, LogiTrans'
    }
  },
  {
    id: '9',
    title: 'FinTech Mobile Banking App',
    slug: 'fintech-banking-app',
    category: 'Custom Development',
    description: 'React Native banking app with biometric security and instant transfers',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    gallery: [
      'https://raw.githubusercontent.com/BuilderIO/qwik-city-e-commerce/main/.github/assets/homepage.png', // Banking app home
      'https://raw.githubusercontent.com/medusajs/medusa/master/.github/banner.jpeg', // Transaction interface
      'https://raw.githubusercontent.com/supabase/supabase/master/apps/www/public/images/blog/dashboard-performance/cover.png', // Financial dashboard
      'https://raw.githubusercontent.com/appwrite/appwrite/master/.github/screenshots/dashboard.png', // Account dashboard
      'https://raw.githubusercontent.com/pocketbase/pocketbase/master/.github/banner.png', // Mobile banking
      'https://raw.githubusercontent.com/nhost/nhost/main/.github/nhost-dashboard.png', // Analytics view
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
    testimonial: {
      quote: 'Secure, fast, and beautiful. Our users love it.',
      author: 'Rachel Foster',
      role: 'CEO, NeoBank'
    }
  },
  {
    id: '10',
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
    ]
  },
  {
    id: '11',
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
    testimonial: {
      quote: 'The 3D viewer changed everything. Customers buy with confidence now.',
      author: 'David Martinez',
      role: 'Owner, Diamonds Forever'
    }
  },
  {
    id: '12',
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
    ]
  },
  {
    id: '13',
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
    testimonial: {
      quote: 'The donation portal made fundraising so much easier. We exceeded our goals.',
      author: 'Maria Santos',
      role: 'Director, Hope Foundation'
    }
  },
  {
    id: '14',
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
    ]
  },
  {
    id: '15',
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
    testimonial: {
      quote: 'Seamless ticketing and check-in. Our events run smoother than ever.',
      author: 'Tom Richardson',
      role: 'Founder, EventPro'
    }
  },
  {
    id: '16',
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
    ]
  },
  {
    id: '17',
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
    testimonial: {
      quote: 'Like having a personal trainer in my pocket. The AI is impressively smart.',
      author: 'Lisa Zhang',
      role: 'CEO, FitAI'
    }
  },
  {
    id: '18',
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
    ]
  }
];
