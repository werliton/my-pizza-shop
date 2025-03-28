import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from 'lucide-react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import colors from 'tailwindcss/colors';

type DataItem = {
  product: string;
  amount: number; // Certifique-se de que é um número, pois gráficos lidam melhor com valores numéricos
};

const pizzaList = ['Calabresa', 'Portuguesa', '4 queijos', 'Marguerita'];

const data: DataItem[] = Array.from({ length: 6 }, (_, i) => {
  const selectedPizza = pizzaList[Math.floor(Math.random() * pizzaList.length)];
  return {
    product: `${selectedPizza}`,
    amount: 10 + Math.random() + i,
  };
});

const COLORS = [colors.sky[500], colors.amber[500], colors.violet[500], colors.emerald[500]];

export const PopularProductsChart = () => {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">Produtos populares</CardTitle>
          <BarChart className="text-muted-foreground h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart style={{ fontSize: 12 }}>
            <Pie
              dataKey={'amount' as keyof DataItem}
              nameKey={'product' as keyof DataItem}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={86}
              innerRadius={64}
              strokeWidth={8}
              labelLine={false}
              label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
                const RADIAN = Math.PI / 180;
                const radius = 12 + innerRadius + (outerRadius - innerRadius);
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);
                const formattedValue = Number(value).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                });

                return (
                  <text
                    x={x}
                    y={y}
                    className="fill-muted-foreground text-xs"
                    textAnchor={x > cx ? 'start' : 'end'}
                    dominantBaseline="central"
                  >
                    {data[index].product.length > 12
                      ? data[index].product.substring(0, 12).concat('...')
                      : data[index].product}{' '}
                    ({formattedValue})
                  </text>
                );
              }}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} className="stroke-background hover:opacity-50" />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
