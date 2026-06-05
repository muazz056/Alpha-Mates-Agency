import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Hero } from '@/components/sections/Hero';
import { TopProjects } from '@/components/sections/TopProjects';
import { Services } from '@/components/sections/Services';
import { Work } from '@/components/sections/Work';
import { AISolutions } from '@/components/sections/AISolutions';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { Stats } from '@/components/sections/Stats';
import { ClientLogos } from '@/components/sections/ClientLogos';
import { BackToTop } from '@/components/ui/BackToTop';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <TopProjects />
        <ClientLogos />
        <Stats />
        <Services />
        <AISolutions />
        <Work />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
