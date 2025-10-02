import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard, { type Product } from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import { toast } from "sonner";
import { Instagram, Facebook, Twitter } from "lucide-react";

// Import images
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Jersey Oversize Beige",
    category: "Mujer",
    price: 89.99,
    image: product1,
    description: "Suave jersey de algodón orgánico con corte oversize. Perfecto para un look casual y elegante.",
  },
  {
    id: "2",
    name: "Pantalón Lino Terracota",
    category: "Mujer",
    price: 125.00,
    image: product2,
    description: "Pantalón de lino premium de pierna ancha. Comodidad y estilo en tonos tierra.",
  },
  {
    id: "3",
    name: "Blusa Seda Verde Salvia",
    category: "Mujer",
    price: 149.00,
    image: product3,
    description: "Elegante blusa de seda 100% natural. Diseño minimalista con caída perfecta.",
  },
  {
    id: "4",
    name: "Vestido Lino Crema",
    category: "Mujer",
    price: 179.99,
    image: product4,
    description: "Vestido midi de lino premium. Ideal para cualquier ocasión con su diseño atemporal.",
  },
  {
    id: "5",
    name: "Cárdigan Cashmere Rosa",
    category: "Mujer",
    price: 199.00,
    image: product5,
    description: "Lujoso cárdigan de cashmere en tono blush. Suavidad incomparable y elegancia absoluta.",
  },
  {
    id: "6",
    name: "Chaqueta Ante Taupe",
    category: "Mujer",
    price: 299.00,
    image: product6,
    description: "Sofisticada chaqueta de ante sintético. Diseño contemporáneo con acabados premium.",
  },
];

const CATEGORIES = ["Todas", "Mujer", "Hombre", "Accesorios"];

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
      description: `Precio: €${product.price.toFixed(2)}`,
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
              Descubre piezas únicas diseñadas con amor y atención al detalle. 
              Moda sostenible que perdura en el tiempo.
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
              Nacimos con la misión de crear moda consciente y atemporal. Cada pieza 
              de Bangie está pensada para durar, combinando materiales de calidad con 
              diseños que trascienden las tendencias pasajeras.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Creemos en la elegancia sostenible, en prendas que cuentan historias y 
              en el poder de la moda para expresar tu individualidad única.
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
                Moda consciente y atemporal desde 2025
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Comprar</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Mujer</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Hombre</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Accesorios</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Rebajas</a></li>
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
