import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

export function DorCliente() {
  const dores = [
    "As parcelas estão pesando demais",
    "Você suspeita de juros abusivos",
    "Recebeu notificação do banco",
    "Seu veículo foi apreendido",
    "O banco não aceitou negociação",
    "Você teme perder o veículo",
    "Existem cobranças que você não entende",
    "A dívida parece nunca diminuir"
  ];

  return (
    <section className="py-24 bg-[#0D1B2A] border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Você pode precisar de uma análise jurídica se:
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto opacity-50" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dores.map((dor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-md flex flex-col items-center text-center group hover:bg-white/5 transition-colors"
            >
              <AlertCircle size={24} strokeWidth={1} className="text-primary mb-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              <p className="text-gray-300 font-light text-sm">{dor}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}