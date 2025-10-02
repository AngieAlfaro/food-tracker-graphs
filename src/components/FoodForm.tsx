import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Plus } from "lucide-react";

export type FoodCategory = "Frutas" | "Verduras" | "Proteínas" | "Carbohidratos" | "Lácteos" | "Grasas" | "Otros";

export interface FoodEntry {
  id: string;
  name: string;
  category: FoodCategory;
  date: string;
  portion: number;
}

interface FoodFormProps {
  onAddFood: (food: Omit<FoodEntry, "id">) => void;
}

const CATEGORIES: FoodCategory[] = [
  "Frutas",
  "Verduras",
  "Proteínas",
  "Carbohidratos",
  "Lácteos",
  "Grasas",
  "Otros",
];

export default function FoodForm({ onAddFood }: FoodFormProps) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState<FoodCategory | "">("");
  const [portion, setPortion] = useState("1");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !category || !portion) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    const portionNum = parseFloat(portion);
    if (isNaN(portionNum) || portionNum <= 0) {
      toast.error("La porción debe ser un número válido");
      return;
    }

    onAddFood({
      name: name.trim(),
      category: category as FoodCategory,
      date: new Date().toISOString(),
      portion: portionNum,
    });

    setName("");
    setCategory("");
    setPortion("1");
    toast.success("Alimento registrado exitosamente");
  };

  return (
    <Card className="p-6 card-elevated">
      <h2 className="text-2xl font-bold mb-6 text-foreground">Registrar Alimento</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre del alimento</Label>
          <Input
            id="name"
            placeholder="Ej: Manzana"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Categoría</Label>
          <Select value={category} onValueChange={(value) => setCategory(value as FoodCategory)}>
            <SelectTrigger id="category">
              <SelectValue placeholder="Selecciona una categoría" />
            </SelectTrigger>
            <SelectContent>
              {CATEGORIES.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="portion">Porción</Label>
          <Input
            id="portion"
            type="number"
            step="0.1"
            min="0.1"
            placeholder="1"
            value={portion}
            onChange={(e) => setPortion(e.target.value)}
            className="w-full"
          />
        </div>

        <Button type="submit" className="w-full" size="lg">
          <Plus className="mr-2 h-5 w-5" />
          Añadir Alimento
        </Button>
      </form>
    </Card>
  );
}
