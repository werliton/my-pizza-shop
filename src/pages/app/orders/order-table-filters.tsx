import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, X } from 'lucide-react';

const ORDER_STATUSES = {
  pending: 'Pendente',
  processing: 'Em preparo',
  completed: 'Completo',
  cancelled: 'Cancelado',
  delivering: 'Entregando',
  delivered: 'Entregue',
};

export function OrderTableFilters() {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros</span>
      <Input placeholder="ID do pedido" className="h-8 w-auto" />
      <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />

      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos status</SelectItem>
          {Object.entries(ORDER_STATUSES).map(([key, value]) => (
            <SelectItem key={key} value={key}>
              {value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button type="submit" variant="secondary" size="sm">
        <Search className="mr-2 h-4 w-4" />
        Filtar resultados
      </Button>

      <Button type="button" variant="outline" size="sm">
        <X className="mr-2 h-4 w-4" />
        Remover filtros
      </Button>
    </form>
  );
}
