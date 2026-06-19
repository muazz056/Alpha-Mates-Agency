import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Hero } from '@/components/sections/Hero';
import { TopProjects } from '@/components/sections/TopProjects';
import { Services } from '@/components/sections/Services';
import { Work } from '@/components/sections/Work';
import { Process } from '@/components/sections/Process';
import { Team } from '@/components/sections/Team';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { Stats } from '@/components/sections/Stats';
import { BackToTop } from '@/components/ui/BackToTop';

export default function HomePage() {
  return (    
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <TopProjects />
        <Stats />
        <Services />
        <Work />
        <Process />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
