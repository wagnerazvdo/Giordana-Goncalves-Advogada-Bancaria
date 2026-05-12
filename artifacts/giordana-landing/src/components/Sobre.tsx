import { motion } from "framer-motion";

export function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-[#0D1B2A] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">
              Sobre Giordana Gonçalves
            </h2>
            <div className="space-y-6 text-gray-300 font-light leading-relaxed text-lg">
              <p>
                Com atuação especializada em Direito Bancário, minha missão é oferecer segurança jurídica para consumidores que enfrentam abusos por parte de instituições financeiras.
              </p>
              <p>
                Entendo que lidar com dívidas, notificações de busca e apreensão e cobranças excessivas gera estresse e incerteza. Por isso, desenvolvo estratégias jurídicas focadas na análise técnica de contratos, identificando juros abusivos e buscando o reequilíbrio financeiro para meus clientes.
              </p>
              <p>
                Através de um atendimento digital e humanizado, atuo em todo o território nacional, garantindo que você tenha acesso a uma defesa técnica de alta qualidade, não importa onde esteja.
              </p>
            </div>

            <div className="mt-12 glass-card p-8 rounded-sm">
              <h3 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Foco de Atuação</h3>
              <ul className="space-y-4">
                {[
                  "Direito Bancário",
                  "Revisão Contratual",
                  "Defesa em Busca e Apreensão",
                  "Atendimento Estratégico"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-4 shadow-[0_0_8px_rgba(201,168,76,0.5)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-black translate-x-4 translate-y-4 border border-white/5" />
              <img
                src="/giordana.jpg"
                alt="Giordana Gonçalves"
                className="w-full h-full object-cover relative z-10 filter grayscale-[10%]"
              />
              <div className="absolute inset-0 bg-[#0D1B2A]/10 mix-blend-overlay z-20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
