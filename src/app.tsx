import { HelmetProvider, Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router';
import { Toaster } from 'sonner';
import { Routes } from './routes';
import { ThemeProvider } from './components/theme/ThemeProvider';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/react-query';

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="pizza-shop-theme">
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors position="top-right" />
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
