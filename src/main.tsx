import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router';
import { Routes } from './routes';
import { Helmet, HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
