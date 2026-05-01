import { getSiteConfig } from "@/lib/config";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export default function Home() {
  const config = getSiteConfig();

  return (
    <main className="min-h-screen selection:bg-theme-primary/30">
      <Navbar config={config} />
      
      <div className="flex flex-col gap-0">
        <Hero config={config} />
        <Services config={config} />
        
        {/* Footer Section */}
        <footer className="py-12 border-t border-zinc-900 bg-zinc-950">
          <div className="container mx-auto px-4 text-center">
            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} {config.business.name}. Todos los derechos reservados.
            </p>
            {config.business.address && (
              <p className="text-zinc-600 text-xs mt-2">
                {config.business.address}
              </p>
            )}
          </div>
        </footer>
      </div>

      <WhatsAppFAB config={config} />
    </main>
  );
}
