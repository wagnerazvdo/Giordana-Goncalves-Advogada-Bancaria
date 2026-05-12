import { Button } from "@/components/ui/button";

export function MobileCTA() {
  const whatsappUrl = "https://wa.me/5500000000000";

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-md border-t border-white/10 z-50 pb-safe">
      <Button
        asChild
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-base tracking-wide shadow-[0_0_20px_rgba(201,168,76,0.3)]"
      >
        <a href={whatsappUrl} target="_blank" rel="noreferrer">
          Solicitar análise do meu caso
        </a>
      </Button>
    </div>
  );
}