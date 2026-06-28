import { SiteConfig } from "@/types/site";
import { ExternalLink, MapPin, MessageCircle, Phone } from "lucide-react";

export default function Hero({ config }: { config: SiteConfig }) {
  const { hero, business } = config;

  if (!hero) return null;

  const backgroundImage = hero.backgroundImage || hero.heroImage;
  const actions = hero.actions?.length
    ? hero.actions
    : business.contactActions?.length
      ? business.contactActions
      : business.whatsapp
        ? [{
            type: "whatsapp" as const,
            label: hero.ctaText || "WhatsApp",
            href: `https://wa.me/${business.whatsapp}`,
            style: "primary" as const
          }]
        : [];
  const iconMap = {
    whatsapp: MessageCircle,
    phone: Phone,
    facebook: ExternalLink,
    maps: MapPin
  };

  return (
    <section id="hero" className="relative min-h-[82svh] px-4 pt-28 pb-16 overflow-hidden flex items-center">
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt={hero.headline || business.name || "Hero image"}
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      )}
      <div className="absolute inset-0 bg-zinc-950/65" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.20),transparent_26%),linear-gradient(90deg,rgba(9,9,11,0.92),rgba(9,9,11,0.58),rgba(9,9,11,0.28))]" />

      <div className="container mx-auto relative z-10">
        <div className="flex max-w-3xl flex-col gap-6 text-left">
          {business.name && (
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-theme-primary">
              {business.name}
            </p>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-50 leading-tight">
            {hero.headline || "Bienvenido a " + (business.name || "")}
          </h1>
          
          {hero.subheadline && (
            <p className="max-w-2xl text-lg md:text-xl text-zinc-200 leading-relaxed">
              {hero.subheadline}
            </p>
          )}

          <div className="pt-4 flex flex-col sm:flex-row sm:flex-wrap gap-3">
            {actions.map((action) => {
              const Icon = iconMap[action.type] || MessageCircle;
              const isPrimary = action.style === "primary" || action.type === "whatsapp";

              return (
                <a
                  key={`${action.type}-${action.href}`}
                  href={action.href}
                  target={action.href.startsWith("http") ? "_blank" : undefined}
                  rel={action.href.startsWith("http") ? "noreferrer" : undefined}
                  className={[
                    "inline-flex h-14 items-center justify-center gap-2 rounded-lg px-6 text-sm font-bold transition-all active:scale-95",
                    isPrimary
                      ? "bg-theme-primary text-white shadow-xl shadow-theme-primary/25 hover:opacity-90"
                      : "border border-white/25 bg-white/12 text-white backdrop-blur-sm hover:bg-white/20"
                  ].join(" ")}
                >
                  <Icon className="h-4 w-4" />
                  {action.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
