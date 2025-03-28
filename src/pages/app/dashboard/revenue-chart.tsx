import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import colors from 'tailwindcss/colors';

const data = Array.from({ length: 6 }, (_, i) => ({ date: `1${i}/12`, revenue: `1${Math.random() * i}0` }));

export const RevenueChart = () => {
  return (
    <Card className="col-span-6">
      <CardHeader className="pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">Receita no período</CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />

            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={88}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />

            <CartesianGrid vertical={false} className="stroke-muted" />

            <Line type="linear" strokeWidth={2} dataKey="revenue" stroke={colors['violet']['600']} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
