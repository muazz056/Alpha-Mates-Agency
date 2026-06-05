import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Contact } from '@/components/sections/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Start Your Project',
  description:
    'Book a free discovery call or send us a message. Fast response times, clear next steps, no pressure.',
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main" className="flex-1 py-16">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

