"use client";

import { SiteConfig } from "@/types/site";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar({ config }: { config: SiteConfig }) {
  const { business, navbar } = config;
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Hide navbar when scrolling down past 150px, show when scrolling up
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 border-b border-zinc-800/50 bg-zinc-950/70 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {business.logoUrl ? (
            <img 
              src={business.logoUrl} 
              alt={business.name} 
              className="h-8 w-auto object-contain" 
            />
          ) : (
            <span className="text-xl font-bold tracking-tight text-zinc-50">
              {business.name}
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          {business.whatsapp && (
            <a 
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-theme-primary text-white text-sm font-medium hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-theme-primary/20"
            >
              {navbar?.ctaText || "Contactar"}
            </a>
          )}
        </div>
      </div>
    </motion.header>
  );
}
