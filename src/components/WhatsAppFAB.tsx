"use client";

import { SiteConfig } from "@/types/site";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFAB({ config }: { config: SiteConfig }) {
  const { business } = config;
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show FAB when scrolled past 300px (roughly past Hero section)
    if (latest > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  if (!business.whatsapp) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-center"
        >
          {/* Ripple effect background */}
          <div className="absolute inset-0 rounded-full bg-theme-primary animate-ping opacity-75 duration-1000"></div>
          
          <a
            href={`https://wa.me/${business.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex h-16 w-16 items-center justify-center rounded-full bg-theme-primary text-white shadow-2xl border border-white/20 backdrop-blur-md hover:scale-110 active:scale-95 transition-transform"
          >
            <MessageCircle className="h-8 w-8" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
