import { useState, useEffect } from "react";
import FoodForm, { type FoodEntry } from "@/components/FoodForm";
import FoodList from "@/components/FoodList";
import FoodCharts from "@/components/FoodCharts";
import { Apple } from "lucide-react";

const STORAGE_KEY = "food-tracker-data";

const Index = () => {
  const [foods, setFoods] = useState<FoodEntry[]>([]);

  // Cargar datos del localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setFoods(JSON.parse(stored));
      } catch (error) {
        console.error("Error loading data:", error);
      }
    }
  }, []);

  // Guardar datos en localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(foods));
  }, [foods]);

  const handleAddFood = (food: Omit<FoodEntry, "id">) => {
    const newFood: FoodEntry = {
      ...food,
      id: crypto.randomUUID(),
    };
    setFoods((prev) => [...prev, newFood]);
  };

  const handleDeleteFood = (id: string) => {
    setFoods((prev) => prev.filter((food) => food.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="gradient-bg border-b border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <Apple className="w-7 h-7 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              NutriTrack
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Registra y visualiza tu alimentación diaria
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <FoodForm onAddFood={handleAddFood} />
          <FoodList foods={foods} onDeleteFood={handleDeleteFood} />
        </div>

        <FoodCharts foods={foods} />
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 NutriTrack - Seguimiento inteligente de alimentación</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
