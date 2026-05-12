import { Instagram } from "lucide-react";

export function Footer() {
  const whatsappUrl = "https://wa.me/5500000000000";

  return (
    <footer className="bg-[#050508] py-16 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="font-serif text-2xl text-white block mb-2">Giordana Gonçalves</span>
            <span className="text-primary text-sm tracking-[0.2em] uppercase">Direito Bancário</span>
            <p className="text-gray-500 font-light mt-4 text-sm max-w-sm">
              Atendimento digital em todo o Brasil. Defesa estratégica em conflitos bancários e revisão de contratos.
            </p>
          </div>
          
          <div className="flex md:justify-end gap-6">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noreferrer"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:text-primary hover:border-primary transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noreferrer"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:text-primary hover:border-primary transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-light text-center md:text-left">
          <p className="max-w-2xl">
            Aviso Legal: As informações contidas neste site possuem caráter meramente informativo e não substituem uma consulta com advogado. Cada caso possui particularidades e exige análise jurídica individualizada.
          </p>
          <p>© {new Date().getFullYear()} Giordana Gonçalves. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}