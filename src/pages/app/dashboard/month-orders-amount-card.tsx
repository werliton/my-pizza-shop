import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Utensils } from 'lucide-react';

export const MonthOrdersAmountCard = () => {
  return (
    <Card>
      <CardHeader className="grid-cols-2 items-center pb-2">
        <CardTitle className="text-base font-semibold ">Pedidos (mês)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground text-right justify-self-end" />
      </CardHeader>

      <CardContent className="">
        <span className="text-2xl font-bold tracking-tight">246</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">+6%</span> em relação ao mês passado
        </p>
      </CardContent>
    </Card>
  );
};
