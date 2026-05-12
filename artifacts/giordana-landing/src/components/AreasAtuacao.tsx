import { motion } from "framer-motion";
import { ShieldCheck, FileSearch, CheckCircle2 } from "lucide-react";

export function AreasAtuacao() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="atuacao" className="py-24 bg-[#0A0A0F]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-widest uppercase mb-4 block font-medium">Especialidades</span>
          <h2 className="font-serif text-3xl md:text-4xl text-white">Áreas de Atuação</h2>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          <motion.div variants={item} className="glass-card p-8 rounded-lg group hover:border-primary/50 transition-all duration-500 flex flex-col h-full">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-500">
              <FileSearch size={24} strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-2xl text-white mb-4">Revisão de Contrato de Financiamento</h3>
            <p className="text-gray-400 font-light mb-8 flex-grow">
              Análise minuciosa do seu contrato de financiamento de veículo para identificar abusividades que encarecem as parcelas de forma ilegal.
            </p>
            <ul className="space-y-3">
              {["Juros abusivos", "CET elevado", "Tarifas ocultas", "Encargos indevidos", "Estratégia jurídica personalizada"].map((topic, i) => (
                <li key={i} className="flex items-start text-gray-300 text-sm">
                  <CheckCircle2 size={16} className="text-primary mr-3 mt-0.5 shrink-0" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item} className="glass-card p-8 rounded-lg group hover:border-primary/50 transition-all duration-500 flex flex-col h-full">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-500">
              <ShieldCheck size={24} strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-2xl text-white mb-4">Defesa em Busca e Apreensão</h3>
            <p className="text-gray-400 font-light mb-8 flex-grow">
              Atuação rápida e estratégica para defender seus direitos em processos de busca e apreensão movidos por bancos e financeiras.
            </p>
            <ul className="space-y-3">
              {["Defesa técnica", "Análise da notificação", "Estratégia processual", "Revisão contratual", "Recuperação do veículo quando cabível"].map((topic, i) => (
                <li key={i} className="flex items-start text-gray-300 text-sm">
                  <CheckCircle2 size={16} className="text-primary mr-3 mt-0.5 shrink-0" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}