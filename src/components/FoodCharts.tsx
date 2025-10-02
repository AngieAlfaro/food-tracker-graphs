import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import type { FoodEntry } from "./FoodForm";

interface FoodChartsProps {
  foods: FoodEntry[];
}

const COLORS = {
  Frutas: "#ef4444",
  Verduras: "#22c55e",
  Proteínas: "#a855f7",
  Carbohidratos: "#eab308",
  Lácteos: "#3b82f6",
  Grasas: "#f97316",
  Otros: "#6b7280",
};

export default function FoodCharts({ foods }: FoodChartsProps) {
  // Calcular distribución por categorías
  const categoryData = foods.reduce((acc, food) => {
    const existing = acc.find((item) => item.name === food.category);
    if (existing) {
      existing.value += food.portion;
    } else {
      acc.push({ name: food.category, value: food.portion });
    }
    return acc;
  }, [] as { name: string; value: number }[]);

  // Calcular tendencia por días
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    return date.toISOString().split("T")[0];
  });

  const dailyData = last7Days.map((date) => {
    const dayFoods = foods.filter((food) => food.date.startsWith(date));
    const total = dayFoods.reduce((sum, food) => sum + food.portion, 0);
    return {
      date: new Date(date).toLocaleDateString("es-ES", { weekday: "short", day: "numeric" }),
      porciones: total,
    };
  });

  if (foods.length === 0) {
    return (
      <Card className="p-6 card-elevated">
        <p className="text-center text-muted-foreground py-8">
          Añade alimentos para ver las gráficas de seguimiento
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 card-elevated">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Distribución por Categorías</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[entry.name as keyof typeof COLORS]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Card>

      <Card className="p-6 card-elevated">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Tendencia Últimos 7 Días</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dailyData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis 
              dataKey="date" 
              className="text-muted-foreground"
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis 
              className="text-muted-foreground"
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
            />
            <Bar dataKey="porciones" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
