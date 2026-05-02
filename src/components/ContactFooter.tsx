"use client";

import { SiteConfig } from "@/types/site";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";

export default function ContactFooter({ config }: { config: SiteConfig }) {
  const { business, contact } = config;

  return (
    <footer className="py-20 px-4 border-t border-zinc-900 bg-zinc-950">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Business Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-bold text-zinc-50 mb-4">{business.name}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Calidad, compromiso y servicio profesional. Confía en nosotros para obtener los mejores resultados.
            </p>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-zinc-50 mb-4">Contacto</h3>

            {business.whatsapp && (
              <a
                href={`tel:+${business.whatsapp}`}
                className="flex items-center gap-3 text-zinc-400 hover:text-theme-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-theme-primary" />
                +{business.whatsapp}
              </a>
            )}

            {business.address && (
              <div className="flex items-start gap-3 text-zinc-400 text-sm">
                <MapPin className="w-4 h-4 text-theme-primary mt-0.5 shrink-0" />
                {business.address}
              </div>
            )}
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-zinc-50 mb-4">Horarios</h3>
            {contact?.hours && contact.hours.length > 0 ? (
              <div className="space-y-2">
                {contact.hours.map((h, i) => (
                  <div key={i} className="flex items-center gap-3 text-zinc-400 text-sm">
                    <Clock className="w-4 h-4 text-theme-primary shrink-0" />
                    <span>{h.days}: {h.time}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center gap-3 text-zinc-400 text-sm">
                <Clock className="w-4 h-4 text-theme-primary" />
                <span>Lunes a Sábado: 9:00 AM - 6:00 PM</span>
              </div>
            )}
          </motion.div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-zinc-800 pt-8 text-center">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} {business.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
