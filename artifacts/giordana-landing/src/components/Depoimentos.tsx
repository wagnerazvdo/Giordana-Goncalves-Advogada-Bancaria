import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Depoimentos() {
  const depoimentos = [
    {
      text: "A análise do meu contrato revelou irregularidades que eu nunca teria identificado sozinho. A atuação técnica fez toda a diferença no meu caso.",
      author: "M. Carvalho",
      location: "São Paulo"
    },
    {
      text: "Atendimento digital, claro e humanizado. Entendi minha situação com clareza e me senti seguro com as orientações recebidas desde o primeiro contato.",
      author: "R. Ferreira",
      location: "Curitiba"
    },
    {
      text: "A postura profissional e a explicação técnica foram fundamentais para minha decisão. O suporte durante um momento de muita tensão foi excepcional.",
      author: "C. Souza",
      location: "Belo Horizonte"
    }
  ];

  return (
    <section className="py-24 bg-[#0D1B2A]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {depoimentos.map((dep, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-8 rounded-sm relative flex flex-col h-full"
            >
              <Quote size={32} className="text-primary/20 absolute top-6 right-6" />
              <p className="text-gray-300 font-light italic mb-8 flex-grow relative z-10 leading-relaxed text-[15px]">
                "{dep.text}"
              </p>
              <div className="border-t border-white/5 pt-4 mt-auto">
                <p className="text-white font-medium text-sm">{dep.author}</p>
                <p className="text-gray-500 text-xs tracking-wider">{dep.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}