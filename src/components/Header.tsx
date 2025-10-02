import { ShoppingBag, Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  cartCount: number;
}

export default function Header({ cartCount }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <h1 className="text-4xl font-bold brand-text">Bangie</h1>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#products" className="text-sm font-medium hover:text-primary transition-colors">
                Colección
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Labios
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Ojos
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Rostro
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Fragancias
              </a>
            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <Badge 
                  className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-primary"
                >
                  {cartCount}
                </Badge>
              )}
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
