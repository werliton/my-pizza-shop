import { HelmetProvider, Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router';
import { Toaster } from 'sonner';
import { Routes } from './routes';

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <Toaster richColors position="top-right" />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </HelmetProvider>
  );
}
