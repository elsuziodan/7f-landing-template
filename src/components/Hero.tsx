import { SiteConfig } from "@/types/site";

export default function Hero({ config }: { config: SiteConfig }) {
  const { hero, business } = config;

  if (!hero) return null;

  return (
    <section id="hero" className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-theme-primary/10 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-50 leading-tight">
            {hero.headline || "Bienvenido a " + (business.name || "")}
          </h1>
          
          {hero.subheadline && (
            <p className="text-lg text-zinc-400 max-w-xl mx-auto lg:mx-0">
              {hero.subheadline}
            </p>
          )}

          <div className="pt-4 flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
             <a 
              href={`https://wa.me/${business.whatsapp}`}
              className="inline-flex w-full md:w-auto h-14 items-center justify-center rounded-xl bg-theme-primary px-8 font-semibold text-white shadow-xl shadow-theme-primary/20 hover:opacity-90 transition-all active:scale-95"
            >
              {hero.ctaText || "Contactar"}
            </a>
          </div>
        </div>

        {hero.heroImage && (
          <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900">
            <img 
              src={hero.heroImage} 
              alt={hero.headline || "Hero Image"}
              className="object-cover w-full h-full"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        )}
      </div>
    </section>
  );
}
