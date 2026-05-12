import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/558391325605";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#" aria-label="Giordana Gonçalves Advocacia">
          <img
            src="/logo-gg.png"
            alt="Giordana Gonçalves Advocacia"
            className="h-16 w-auto"
          />
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#sobre" className="text-sm text-gray-300 hover:text-white transition-colors">
            Sobre
          </a>
          <a href="#atuacao" className="text-sm text-gray-300 hover:text-white transition-colors">
            Áreas de Atuação
          </a>
          <a href="#diferenciais" className="text-sm text-gray-300 hover:text-white transition-colors">
            Diferenciais
          </a>
          <a href="#faq" className="text-sm text-gray-300 hover:text-white transition-colors">
            FAQ
          </a>
          <a href="#contato" className="text-sm text-gray-300 hover:text-white transition-colors">
            Contato
          </a>
          <Button
            asChild
            variant="default"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-wide"
          >
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Falar com a advogada
            </a>
          </Button>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-white/10 px-4 py-6 flex flex-col space-y-4">
          <a
            href="#sobre"
            className="text-base text-gray-300 hover:text-white py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Sobre
          </a>
          <a
            href="#atuacao"
            className="text-base text-gray-300 hover:text-white py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Áreas de Atuação
          </a>
          <a
            href="#diferenciais"
            className="text-base text-gray-300 hover:text-white py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Diferenciais
          </a>
          <a
            href="#faq"
            className="text-base text-gray-300 hover:text-white py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQ
          </a>
          <a
            href="#contato"
            className="text-base text-gray-300 hover:text-white py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contato
          </a>
          <Button
            asChild
            variant="default"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-wide w-full mt-4"
          >
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Falar com a advogada
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
}
