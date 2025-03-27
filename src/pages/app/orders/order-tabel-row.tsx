import { Button } from '@/components/ui/button';
import { TableRow, TableCell } from '@/components/ui/table';
import { Search, ArrowRight, X } from 'lucide-react';

export function OrderTabelRow() {
  return (
    <TableRow>
      <TableCell>
        <Button variant="outline" size="sm">
          <Search className="h-3 w-3" />
          <span className="sr-only">Detalhes do pedido</span>
        </Button>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">4154asd5</TableCell>
      <TableCell className="text-muted-foreground">há 10 minutos</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">João da Silva</TableCell>
      <TableCell className="font-medium">R$ 150,00</TableCell>

      <TableCell>
        <Button variant="ghost" size="sm">
          <ArrowRight className="h-3 w-3 mr-2" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="sm">
          <X className="h-3 w-3 mr-2" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  );
}
