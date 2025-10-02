import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import type { FoodEntry } from "./FoodForm";

interface FoodListProps {
  foods: FoodEntry[];
  onDeleteFood: (id: string) => void;
}

const CATEGORY_COLORS: Record<string, string> = {
  Frutas: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  Verduras: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  Proteínas: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  Carbohidratos: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  Lácteos: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  Grasas: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  Otros: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300",
};

export default function FoodList({ foods, onDeleteFood }: FoodListProps) {
  const sortedFoods = [...foods].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Card className="p-6 card-elevated">
      <h2 className="text-2xl font-bold mb-6 text-foreground">Alimentos Registrados</h2>
      {sortedFoods.length === 0 ? (
        <p className="text-center text-muted-foreground py-8">
          No hay alimentos registrados aún. ¡Empieza a añadir algunos!
        </p>
      ) : (
        <div className="space-y-3">
          {sortedFoods.map((food) => (
            <div
              key={food.id}
              className="flex items-center justify-between p-4 bg-muted/50 rounded-lg transition-all hover:bg-muted"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold text-lg text-foreground">{food.name}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      CATEGORY_COLORS[food.category]
                    }`}
                  >
                    {food.category}
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                  <span>Porción: {food.portion}</span>
                  <span>•</span>
                  <span>{new Date(food.date).toLocaleDateString("es-ES")}</span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onDeleteFood(food.id)}
                className="text-destructive hover:text-destructive hover:bg-destructive/10"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
