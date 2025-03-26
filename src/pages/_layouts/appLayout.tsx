import { Header } from '@/components/header';
import { Outlet } from 'react-router';

export const AppLayout = () => {
  return (
    <div className="flex flex-col h-full antialiased">
      <Header />
      <div className="flex flex-col flex-1 gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  );
};
