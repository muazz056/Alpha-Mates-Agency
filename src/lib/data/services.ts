export type Service = {
  id: string;
  title: string;
  slug: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  startingPrice: string;
  deliveryTime: string;
};

export const services: Service[] = [
  {
    id: '1',
    title: 'Custom Web Development',
    slug: 'custom-web-development',
    icon: '💻',
    shortDescription: 'Full-stack JavaScript & Python applications built for performance and scale',
    fullDescription: 'We design and build custom web applications tailored to your business needs. From MVPs to enterprise platforms, we use modern frameworks like Next.js, React, Django, and FastAPI to deliver lightning-fast, maintainable solutions.',
    features: [
      'React / Next.js / Vue.js frontend',
      'Node.js / Python / Django backend',
      'RESTful & GraphQL APIs',
      'PostgreSQL / MongoDB databases',
      'Real-time WebSocket features',
      'Cloud deployment (AWS / Vercel / Railway)',
      'CI/CD pipeline setup',
      'Performance optimization (< 1s load times)'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Python', 'Django', 'FastAPI', 'PostgreSQL', 'MongoDB'],
    startingPrice: '$5,000',
    deliveryTime: '4-8 weeks'
  },
  {
    id: '2',
    title: 'AI & RAG Chatbots',
    slug: 'ai-rag-chatbots',
    icon: '🤖',
    shortDescription: 'Intelligent chatbots powered by GPT-4, LangChain, and custom knowledge bases',
    fullDescription: 'Build conversational AI that understands your business. We develop RAG (Retrieval-Augmented Generation) chatbots that answer questions from your documents, provide customer support, and automate workflows using OpenAI, LangChain, and vector databases.',
    features: [
      'GPT-4 / Claude integration',
      'Custom RAG pipelines (10k+ documents)',
      'Vector database setup (Pinecone / Weaviate)',
      'LangChain / LlamaIndex workflows',
      'Chat history & memory management',
      'Multi-modal support (text, PDFs, images)',
      'Function calling & tool use',
      'Analytics & conversation insights'
    ],
    technologies: ['OpenAI', 'LangChain', 'Python', 'Pinecone', 'FastAPI', 'Streamlit'],
    startingPrice: '$3,500',
    deliveryTime: '2-4 weeks'
  },
  {
    id: '3',
    title: 'Shopify Store Development',
    slug: 'shopify-development',
    icon: '🛍️',
    shortDescription: 'High-conversion Shopify stores with custom themes and integrations',
    fullDescription: 'Launch your online store with a custom Shopify solution designed to convert. We build beautiful, fast Shopify themes, integrate apps, optimize for SEO, and set up payment gateways to get you selling fast.',
    features: [
      'Custom Shopify theme development',
      'Liquid template customization',
      'App integration & custom apps',
      'Payment gateway setup (Stripe, PayPal)',
      'SEO optimization',
      'Product catalog migration',
      'Abandoned cart recovery',
      'Analytics & conversion tracking'
    ],
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'Shopify API'],
    startingPrice: '$2,500',
    deliveryTime: '2-3 weeks'
  },
  {
    id: '4',
    title: 'WordPress Websites',
    slug: 'wordpress-development',
    icon: '📝',
    shortDescription: 'Custom WordPress sites with advanced functionality and SEO optimization',
    fullDescription: 'Professional WordPress development for blogs, business sites, and membership platforms. We create custom themes, integrate plugins, optimize for speed, and ensure your site ranks well in search engines.',
    features: [
      'Custom WordPress theme development',
      'Plugin integration & customization',
      'WooCommerce e-commerce setup',
      'Page builder setup (Elementor / Gutenberg)',
      'SEO optimization (Yoast / RankMath)',
      'Performance optimization (< 2s load)',
      'Security hardening',
      'Content migration & training'
    ],
    technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'WooCommerce'],
    startingPrice: '$1,800',
    deliveryTime: '2-3 weeks'
  },
  {
    id: '5',
    title: 'Wix Website Design',
    slug: 'wix-development',
    icon: '🎨',
    shortDescription: 'Professional Wix sites with custom design and integrations',
    fullDescription: 'Get a stunning Wix website up and running quickly. Perfect for small businesses, portfolios, and landing pages. We handle design, copywriting, SEO, and integrations so you can focus on your business.',
    features: [
      'Custom Wix site design',
      'Velo (Wix Code) customization',
      'Third-party app integration',
      'SEO setup & optimization',
      'Mobile responsive design',
      'Contact forms & booking systems',
      'Blog & portfolio setup',
      'Analytics & tracking'
    ],
    technologies: ['Wix', 'Velo', 'JavaScript', 'CSS'],
    startingPrice: '$1,200',
    deliveryTime: '1-2 weeks'
  },
  {
    id: '6',
    title: 'API Development & Integration',
    slug: 'api-development',
    icon: '🔌',
    shortDescription: 'RESTful APIs, GraphQL, and third-party integrations for seamless connectivity',
    fullDescription: 'Connect your systems with robust API development. We build RESTful and GraphQL APIs, integrate third-party services (Stripe, Twilio, SendGrid), and create webhooks and automation workflows.',
    features: [
      'RESTful API design & development',
      'GraphQL API setup',
      'Authentication (JWT, OAuth)',
      'Rate limiting & security',
      'Third-party API integration',
      'Webhook development',
      'API documentation (Swagger / Postman)',
      'Testing & monitoring'
    ],
    technologies: ['Node.js', 'Python', 'FastAPI', 'Express', 'GraphQL', 'Postman'],
    startingPrice: '$2,000',
    deliveryTime: '2-4 weeks'
  }
];

