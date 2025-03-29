import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Building, ChevronDown, LogOut } from 'lucide-react';
import { Button } from './ui/button';
import { useQuery } from '@tanstack/react-query';
import { getProfile } from '@/api/get-profile';
import { getManagedRestaurants } from '@/api/get-managed-restaurant';

export const AccountMenu = () => {
  const { data } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  });

  const { data: managedRestaurant } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurants,
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 select-none">
          {managedRestaurant?.name}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span>{data?.name}</span>
          <span className="text-xs font-normal text-muted-foreground">{data?.email}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Building className="w-4 h-4 mr-2" />
          <span>Perfil da loja</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
          <LogOut className="w-4 h-4 mr-2" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
