import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      q: "Todo contrato pode ser revisado?",
      a: "Cada contrato precisa ser analisado individualmente. A revisão judicial é cabível quando são identificadas abusividades, como juros muito acima da média de mercado, tarifas ilegais ou cobranças indevidas. Não existe 'revisão garantida' sem uma análise prévia."
    },
    {
      q: "A revisão impede a busca e apreensão?",
      a: "Depende da situação jurídica e contratual de cada caso. O simples ajuizamento de uma ação revisional, por si só, não impede a busca e apreensão. É necessária uma estratégia jurídica específica."
    },
    {
      q: "Meu veículo já foi apreendido. Ainda posso me defender?",
      a: "Sim, é possível analisar o processo e verificar eventuais irregularidades na notificação ou na condução da ação pelo banco. O prazo para a defesa é curto, por isso a urgência é fundamental."
    },
    {
      q: "O banco pode continuar cobrando após a apreensão?",
      a: "Dependendo da situação, pode existir saldo remanescente. Se o valor da venda do veículo apreendido não for suficiente para quitar a dívida total, o banco poderá cobrar o restante."
    },
    {
      q: "Preciso ter o contrato em mãos?",
      a: "O ideal é possuir o contrato para uma análise imediata, mas existem alternativas jurídicas para obtenção do documento caso você não tenha uma cópia."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#0A0A0F]">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-white">Perguntas frequentes</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-white/10 px-2 py-2">
                <AccordionTrigger className="text-left text-gray-200 hover:text-white font-medium text-[15px] md:text-base hover:no-underline data-[state=open]:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 font-light leading-relaxed pt-2 pb-6 text-sm md:text-[15px]">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}