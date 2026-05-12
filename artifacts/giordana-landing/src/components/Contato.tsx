import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/558391325605";
const INSTAGRAM_URL = "https://www.instagram.com/giordanagoncalves.adv?igsh=ZTlrNmZvMG9wbHQz&utm_source=qr";
const EMAIL = "giordanagoncalves.adv@gmail.com";

const contacts = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+55 83 9132-5605",
    href: WHATSAPP_URL,
    external: true,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    external: false,
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Av. Epitácio Pessoa, 4050 — Miramar\nCEP 58032-000 — João Pessoa, PB",
    href: "https://maps.google.com/?q=Av+Epitácio+Pessoa+4050+Miramar+João+Pessoa",
    external: true,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@giordanagoncalves.adv",
    href: INSTAGRAM_URL,
    external: true,
  },
];

export function Contato() {
  return (
    <section id="contato" className="py-28 bg-[#0D1B2A] relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
            Fale Conosco
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
            Contato
          </h2>
          <p className="text-gray-400 font-light max-w-xl mx-auto">
            Entre em contato para agendar uma análise do seu caso. Atendimento digital em todo o Brasil.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {contacts.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex items-start gap-5 p-6 rounded-sm border border-white/8 bg-white/[0.03] hover:border-primary/40 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <item.icon size={20} className="text-primary" />
              </div>
              <div>
                <span className="text-xs tracking-widest text-gray-500 uppercase block mb-1">
                  {item.label}
                </span>
                <span className="text-white font-light leading-relaxed whitespace-pre-line">
                  {item.value}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-5 md:px-10 md:py-6 text-base font-semibold rounded-sm tracking-widest uppercase transition-transform hover:scale-[1.02] w-full sm:w-auto whitespace-normal h-auto"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Solicitar análise do meu caso
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
