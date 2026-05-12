import { motion } from "framer-motion";

export function ComoFunciona() {
  const steps = [
    {
      num: "01",
      title: "Primeiro contato",
      desc: "O cliente explica brevemente sua situação pelo WhatsApp."
    },
    {
      num: "02",
      title: "Coleta de informações",
      desc: "Análise inicial de contrato, parcelas, banco e situação atual."
    },
    {
      num: "03",
      title: "Análise técnica",
      desc: "Avaliação jurídica dos juros, encargos e possíveis abusividades."
    },
    {
      num: "04",
      title: "Estratégia jurídica",
      desc: "Explicação clara sobre possibilidades, riscos e caminhos jurídicos."
    },
    {
      num: "05",
      title: "Atuação",
      desc: "Início das medidas jurídicas adequadas ao caso, quando houver viabilidade."
    }
  ];

  return (
    <section className="py-24 bg-[#0A0A0F] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-white">Como funciona a análise do seu caso</h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line - desktop horizontal, mobile vertical */}
          <motion.div 
            initial={{ scaleX: 0, scaleY: 0 }}
            whileInView={{ scaleX: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[27px] md:left-0 top-[28px] md:top-[28px] bottom-[28px] md:bottom-auto w-0.5 md:w-full md:h-0.5 bg-primary/20 origin-top md:origin-left" 
          />

          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="flex md:flex-col items-start md:items-center relative pl-16 md:pl-0"
              >
                <div className="absolute left-0 md:static w-14 h-14 rounded-full bg-[#0A0A0F] border-2 border-primary flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(201,168,76,0.15)] z-10 shrink-0">
                  <span className="font-serif text-primary text-lg font-medium">{step.num}</span>
                </div>
                
                <div className="md:text-center mt-2 md:mt-0">
                  <h3 className="text-white font-medium mb-3 text-lg">{step.title}</h3>
                  <p className="text-gray-400 font-light text-sm leading-relaxed max-w-[200px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}