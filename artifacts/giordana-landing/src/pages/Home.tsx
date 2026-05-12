import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";
import { AreasAtuacao } from "@/components/AreasAtuacao";
import { DorCliente } from "@/components/DorCliente";
import { ComoFunciona } from "@/components/ComoFunciona";
import { Diferenciais } from "@/components/Diferenciais";
import { BuscaApreensao } from "@/components/BuscaApreensao";
import { FAQ } from "@/components/FAQ";
import { Depoimentos } from "@/components/Depoimentos";
import { Contato } from "@/components/Contato";
import { CTAFinal } from "@/components/CTAFinal";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { MobileCTA } from "@/components/MobileCTA";

function Home() {
  return (
    <div className="min-h-[100dvh] w-full bg-[#0A0A0F] text-white selection:bg-primary/30">
      <Navbar />
      <Hero />
      <Sobre />
      <AreasAtuacao />
      <DorCliente />
      <ComoFunciona />
      <Diferenciais />
      <BuscaApreensao />
      <FAQ />
      <Depoimentos />
      <Contato />
      <CTAFinal />
      <Footer />
      
      <FloatingWhatsApp />
      <MobileCTA />
    </div>
  );
}

export default Home;