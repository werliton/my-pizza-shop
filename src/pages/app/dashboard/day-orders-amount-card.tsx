import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Utensils } from 'lucide-react';

export const DayOrdersAmountCard = () => {
  return (
    <Card>
      <CardHeader className="grid-cols-2 items-center pb-2">
        <CardTitle className="text-base font-semibold ">Pedidos (dia)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground text-right justify-self-end" />
      </CardHeader>

      <CardContent className="">
        <span className="text-2xl font-bold tracking-tight">12</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-rose-500 dark:text-rose-400">-8%</span> em relação a ontem
        </p>
      </CardContent>
    </Card>
  );
};
