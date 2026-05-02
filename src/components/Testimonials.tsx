"use client";

import { SiteConfig } from "@/types/site";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials({ config }: { config: SiteConfig }) {
  const { testimonials } = config;

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-24 px-4 border-t border-zinc-900 bg-zinc-950/50 relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-0 right-0 opacity-[0.02] pointer-events-none select-none">
        <p className="text-[15rem] leading-none font-extrabold uppercase tracking-tighter">RESEÑAS</p>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-50">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-zinc-400">
            La confianza se gana con cada proyecto que entregamos. Estas son las experiencias de quienes ya nos eligieron.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/60 hover:border-zinc-700 transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-theme-primary/10 group-hover:text-theme-primary/20 transition-colors" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-theme-primary text-theme-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-theme-primary to-theme-primary/60 flex items-center justify-center text-white font-bold text-sm">
                  {t.author[0]}
                </div>
                <p className="text-zinc-50 font-semibold text-sm">{t.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
