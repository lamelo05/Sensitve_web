import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import InstallGuide from '@/components/InstallGuide';
import WaitlistCTA from '@/components/WaitlistCTA';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import DemoVideo from '@/components/DemoVideo';

export default function Home() {
  return (
    <main className="bg-brand-950 min-h-screen">
      <Navbar />
      <div className="flex flex-col gap-32 lg:gap-48 pb-32">
        <Hero />
        <DemoVideo />
        <TrustBar />
        <HowItWorks />
        <Features />
        <InstallGuide />
        <WaitlistCTA />
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
