import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart } from "lucide-react";
import { useState } from "react";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="product-card group">
      <div className="relative overflow-hidden aspect-[3/4] bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="product-image w-full h-full object-cover"
        />
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm 
                     flex items-center justify-center transition-all duration-300
                     hover:bg-background hover:scale-110"
        >
          <Heart
            className={`w-5 h-5 transition-all ${
              liked ? "fill-accent text-accent" : "text-foreground"
            }`}
          />
        </button>
      </div>

      <div className="p-5">
        <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
        <h3 className="text-lg font-semibold text-foreground mb-2">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            Q{product.price.toFixed(2)}
          </span>
          <Button
            onClick={() => onAddToCart(product)}
            className="gap-2"
            size="sm"
          >
            <ShoppingBag className="w-4 h-4" />
            Añadir
          </Button>
        </div>
      </div>
    </div>
  );
}
