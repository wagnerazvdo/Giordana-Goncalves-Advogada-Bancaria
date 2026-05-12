import { motion } from "framer-motion";

export function Diferenciais() {
  const cards = [
    "Atendimento humanizado",
    "Atuação focada em Direito Bancário",
    "Estratégia individualizada",
    "Comunicação clara",
    "Atendimento digital moderno",
    "Análise técnica detalhada",
    "Postura profissional transparente",
    "Atuação nacional"
  ];

  return (
    <section id="diferenciais" className="py-24 bg-[#0D1B2A]">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-white">Por que contar com uma atuação especializada?</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {cards.map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-md text-center group hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 flex items-center justify-center min-h-[120px]"
            >
              <h3 className="text-gray-200 font-medium text-sm md:text-base leading-snug group-hover:text-white transition-colors">{text}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}