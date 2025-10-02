import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[70vh] flex items-center gradient-bg overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Nueva Colección 2025
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 brand-text">
            Bangie
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed">
            Descubre la belleza en cada color. Maquillaje de alta calidad 
            para expresar tu estilo único y realzar tu belleza natural.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="gap-2 text-lg px-8 py-6"
              onClick={scrollToProducts}
            >
              Explorar Colección
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6"
            >
              Sobre Nosotros
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
