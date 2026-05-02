"use client";

import { SiteConfig } from "@/types/site";
import { motion } from "framer-motion";

export default function Gallery({ config }: { config: SiteConfig }) {
  const gallery = config.gallery;

  if (!gallery || gallery.length === 0) return null;

  // Bento grid layout classes based on index
  const layoutClasses = [
    "md:col-span-2 md:row-span-2",
    "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-1",
    "md:col-span-2 md:row-span-1",
  ];

  return (
    <section className="py-24 px-4 border-t border-zinc-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-50">
            Nuestro Trabajo
          </h2>
          <p className="text-zinc-400">
            Imágenes reales de nuestro equipo en acción, comprometidos con la calidad en cada proyecto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-4">
          {gallery.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`${layoutClasses[i % layoutClasses.length]} group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-lg font-bold text-white">{image.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
