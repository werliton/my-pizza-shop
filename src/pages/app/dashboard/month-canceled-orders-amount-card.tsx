import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';

export const MonthCanceledOrdersAmountCard = () => {
  return (
    <Card>
      <CardHeader className="grid-cols-2 items-center pb-2">
        <CardTitle className="text-base font-semibold ">Cancelados (mês)</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground text-right justify-self-end" />
      </CardHeader>

      <CardContent className="">
        <span className="text-2xl font-bold tracking-tight">32</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">-4%</span> em relação ao mês passado
        </p>
      </CardContent>
    </Card>
  );
};
