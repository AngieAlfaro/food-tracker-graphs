import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard, { type Product } from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import { toast } from "sonner";
import { Instagram, Facebook, Twitter } from "lucide-react";

// Import images
import makeup1 from "@/assets/makeup-1.jpg";
import makeup2 from "@/assets/makeup-2.jpg";
import makeup3 from "@/assets/makeup-3.jpg";
import makeup4 from "@/assets/makeup-4.jpg";
import makeup5 from "@/assets/makeup-5.jpg";
import makeup6 from "@/assets/makeup-6.jpg";

const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Labial Mate Rosa Pétalo",
    category: "Labios",
    price: 125.00,
    image: makeup1,
    description: "Labial mate de larga duración con acabado aterciopelado. Fórmula enriquecida con vitamina E.",
  },
  {
    id: "2",
    name: "Paleta Sombras Pastel Dreams",
    category: "Ojos",
    price: 285.00,
    image: makeup2,
    description: "Paleta con 12 sombras en tonos pastel altamente pigmentados. Acabados mate y shimmer.",
  },
  {
    id: "3",
    name: "Base Líquida Luminosa",
    category: "Rostro",
    price: 195.00,
    image: makeup3,
    description: "Base de cobertura media con acabado natural luminoso. Hidratante y de larga duración.",
  },
  {
    id: "4",
    name: "Máscara de Pestañas Volumen",
    category: "Ojos",
    price: 145.00,
    image: makeup4,
    description: "Máscara que proporciona volumen y longitud extrema. Fórmula resistente al agua.",
  },
  {
    id: "5",
    name: "Rubor Iluminador Rosado",
    category: "Rostro",
    price: 165.00,
    image: makeup5,
    description: "Rubor cremoso con partículas iluminadoras. Aporta un glow natural y saludable.",
  },
  {
    id: "6",
    name: "Perfume Floral Lavanda",
    category: "Fragancias",
    price: 425.00,
    image: makeup6,
    description: "Fragancia floral con notas de lavanda, jazmín y vainilla. Elegancia y sofisticación.",
  },
];

const CATEGORIES = ["Todas", "Labios", "Ojos", "Rostro", "Fragancias"];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [cartCount, setCartCount] = useState(0);

  const filteredProducts =
    selectedCategory === "Todas"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    setCartCount((prev) => prev + 1);
    toast.success(`${product.name} añadido al carrito`, {
      description: `Precio: Q${product.price.toFixed(2)}`,
    });
  };

  return (
    <div className="min-h-screen">
      <Header cartCount={cartCount} />
      <Hero />

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Nuestra Colección
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubre productos de maquillaje únicos diseñados para realzar tu belleza natural. 
              Cosmética de alta calidad con colores vibrantes y texturas sedosas.
            </p>
          </div>

          <CategoryFilter
            categories={CATEGORIES}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 brand-text">
              La Historia de Bangie
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Nacimos con la pasión de crear belleza auténtica y expresiva. Cada producto 
              de Bangie está formulado con ingredientes de alta calidad, combinando ciencia 
              y creatividad para resaltar tu belleza única.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Creemos en el poder del maquillaje para empoderar, en colores que inspiran y 
              en la belleza como una forma de expresión personal sin límites.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold brand-text mb-4">Bangie</h3>
              <p className="text-sm text-muted-foreground">
                Belleza auténtica desde 2025
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Comprar</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Labios</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Ojos</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Rostro</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Fragancias</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Ayuda</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Envíos</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Devoluciones</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Tallas</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Síguenos</h4>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Bangie. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
