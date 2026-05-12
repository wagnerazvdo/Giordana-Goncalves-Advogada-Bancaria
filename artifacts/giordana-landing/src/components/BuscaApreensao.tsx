import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function BuscaApreensao() {
  const whatsappUrl = "https://wa.me/5500000000000";

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-[#0A0A0F] to-[#0D1B2A]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')] opacity-[0.02] bg-cover bg-center mix-blend-luminosity"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary tracking-widest text-xs font-semibold uppercase mb-6 block">Urgência</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
            O seu veículo foi apreendido pelo banco?
          </h2>
          <p className="text-xl text-gray-300 font-light mb-10 max-w-2xl mx-auto">
            Assessoria jurídica especializada em ações de busca e apreensão.
          </p>
          <p className="text-gray-400 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            A busca e apreensão é uma medida extrema e exige resposta rápida. Muitas vezes os contratos apresentam abusividades ou as notificações são irregulares. É fundamental a análise de um advogado especialista para verificar se existem falhas no processo que permitam a defesa técnica adequada e a possível recuperação do bem.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg font-semibold rounded-none tracking-wide"
          >
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Falar com um especialista
            </a>
          </Button>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {["Análise da notificação", "Defesa técnica", "Estratégia jurídica", "Avaliação contratual"].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="border border-white/10 bg-white/5 backdrop-blur py-4 px-2 rounded-sm text-gray-300 text-sm font-medium"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}