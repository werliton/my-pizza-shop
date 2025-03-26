import { HelmetProvider, Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router';
import { Toaster } from 'sonner';
import { Routes } from './routes';
import { ThemeProvider } from './components/theme/ThemeProvider';

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="pizza-shop-theme">
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors position="top-right" />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}
