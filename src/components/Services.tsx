"use client";

import { SiteConfig } from "@/types/site";
import { DynamicIcon } from "./DynamicIcon";
import { motion } from "framer-motion";

export default function Services({ config }: { config: SiteConfig }) {
  const { services } = config;

  // Defensive check: if services is missing or items array is empty
  if (!services || !services.items || services.items.length === 0) return null;

  return (
    <section className="py-24 px-4 border-t border-zinc-900 bg-zinc-950/50">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-50">
            {services.sectionTitle || "Nuestros Servicios"}
          </h2>
          {services.sectionSubtitle && (
            <p className="text-zinc-400">
              {services.sectionSubtitle}
            </p>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.items.map((service, index) => (
            <motion.div 
              key={service.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/60 hover:border-zinc-700 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-theme-primary/10 flex items-center justify-center mb-6 text-theme-primary group-hover:scale-110 transition-transform">
                <DynamicIcon name={service.icon} className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-zinc-50 group-hover:text-theme-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-zinc-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
