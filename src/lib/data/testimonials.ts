export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Exceptional work. The custom Next.js platform they built handles 100k+ users seamlessly. Response times are incredible, and our conversion rate jumped 43%.',
    author: 'Sarah Chen',
    role: 'CTO',
    company: 'RetailCo',
    rating: 5
  },
  {
    id: '2',
    quote: 'The RAG chatbot reduced our support tickets by 78%. Patients get instant, accurate answers 24/7. Best investment we made this year.',
    author: 'Dr. Michael Roberts',
    role: 'Director of Patient Services',
    company: 'MedHealth',
    rating: 5
  },
  {
    id: '3',
    quote: 'Finally, a dashboard that keeps up with market velocity. Sub-10ms latency on 100k updates per second. Absolutely game-changing for our trading operations.',
    author: 'Michael Torres',
    role: 'Head of Trading',
    company: 'CryptoTrade',
    rating: 5
  },
  {
    id: '4',
    quote: 'Our Shopify store looks stunning and performs even better. Sales increased 67% in the first quarter. The AR try-on feature was brilliant.',
    author: 'Emma Laurent',
    role: 'E-Commerce Director',
    company: 'LuxeWear',
    rating: 5
  },
  {
    id: '5',
    quote: 'This analytics platform became the core of our product. Handles 5 million events daily without breaking a sweat. Flawless execution from start to finish.',
    author: 'Alex Kumar',
    role: 'Founder & CEO',
    company: 'DataViz Pro',
    rating: 5
  },
  {
    id: '6',
    quote: 'Online orders increased 210% after launch. The multi-location menu management saves us hours every week. Ranked #1 for all our local keywords.',
    author: 'Marco Ricci',
    role: 'Owner',
    company: 'Bella Cucina',
    rating: 5
  },
  {
    id: '7',
    quote: 'The AI document assistant reduced our review time by 92%. It analyzes contracts faster than our entire paralegal team. ROI in under 3 months.',
    author: 'Jennifer Park',
    role: 'Senior Partner',
    company: 'LegalTech Solutions',
    rating: 5
  },
  {
    id: '8',
    quote: 'Real-time visibility we never had before. Tracking 1000+ vehicles across 3 countries, fuel costs down 34%. This transformed our operations.',
    author: 'James Wilson',
    role: 'COO',
    company: 'LogiTrans',
    rating: 5
  }
];

export const stats = [
  { label: 'Projects Delivered', value: '150+' },
  { label: 'Happy Clients', value: '80+' },
  { label: 'Years Experience', value: '8+' },
  { label: 'Avg. Client Rating', value: '4.9/5' }
];

