import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const whatsappUrl = "https://wa.me/5500000000000";

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-12 md:py-0 overflow-hidden bg-[#0A0A0F]">
      {/* Subtle geometric background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 relative z-10">
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="inline-block border-b border-primary pb-1 mb-8">
              <span className="text-xs font-semibold tracking-[0.2em] text-gray-300 uppercase">
                Advocacia Bancária
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6"
          >
            Advocacia Bancária estratégica para revisão de financiamentos e defesa em busca e apreensão
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-400 font-light leading-relaxed mb-10 max-w-xl"
          >
            Atuação focada na análise de contratos de financiamento de veículos, juros abusivos, cobranças indevidas e defesa técnica em conflitos com bancos e financeiras.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            <span className="px-4 py-2 rounded-full glass-card text-xs font-medium tracking-wide text-white">
              Atendimento Nacional
            </span>
            <span className="px-4 py-2 rounded-full glass-card text-xs font-medium tracking-wide text-white">
              Atendimento Digital
            </span>
            <span className="px-4 py-2 rounded-full glass-card text-xs font-medium tracking-wide text-white">
              Análise Técnica Individual
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold"
            >
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Solicitar análise do meu caso
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 hover:text-white px-8 py-6 text-base"
            >
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Falar com a advogada
              </a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-xs text-gray-500 mt-6 font-light"
          >
            Cada caso exige análise técnica individualizada.
          </motion.p>
        </div>

        <div className="relative order-1 lg:order-2 h-[50vh] lg:h-[85vh] w-full flex items-end justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-md lg:max-w-none h-full"
          >
            <div className="absolute inset-0 border border-primary/30 m-4 lg:-ml-8 lg:mr-8 pointer-events-none" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary z-20 hidden lg:block" />
            
            <img
              src="/giordana.jpg"
              alt="Giordana Gonçalves - Advogada"
              className="w-full h-full object-cover object-top filter grayscale-[20%] contrast-125"
            />
            
            {/* Gradient overlay to blend into background */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0A0A0F]/50 lg:hidden pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
