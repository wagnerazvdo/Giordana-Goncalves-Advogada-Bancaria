import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTAFinal() {
  const whatsappUrl = "https://wa.me/5500000000000";

  return (
    <section className="py-32 bg-[#0A0A0F] border-t border-white/5 relative overflow-hidden">
      {/* Decorative blurred glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 text-center relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">
            O prazo para agir pode ser decisivo no seu caso.
          </h2>
          <p className="text-xl text-gray-400 font-light mb-12 leading-relaxed">
            Conte com uma atuação estratégica em Direito Bancário para analisar sua situação com clareza e segurança.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-8 text-lg font-bold rounded-sm tracking-widest uppercase transition-transform hover:scale-[1.02]"
          >
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Solicitar análise do meu caso
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}