import { getSiteConfig } from "@/lib/config";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export default function Home() {
  const config = getSiteConfig();

  return (
    <main className="min-h-screen selection:bg-theme-primary/30">
      <Navbar config={config} />
      
      <div className="flex flex-col gap-0">
        <Hero config={config} />
        <Services config={config} />
        <Gallery config={config} />
        <Testimonials config={config} />
        <ContactFooter config={config} />
      </div>

      <WhatsAppFAB config={config} />
    </main>
  );
}
