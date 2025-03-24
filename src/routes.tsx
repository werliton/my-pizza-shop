import { Routes as RouteWrapper, Route } from 'react-router';
import { Dashboard } from './pages/app/dashboard';
import { SignIn } from './pages/auth/signin';
import { App } from './App';
import { AppLayout } from './pages/_layouts/appLayout';
import { AuthLayout } from './pages/_layouts/authLayout';

export const Routes = () => (
  <RouteWrapper>
    <Route element={<AppLayout />}>
      <Route index element={<App />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
    <Route path="signin" element={<AuthLayout />}>
      <Route index element={<SignIn />} />
    </Route>
  </RouteWrapper>
);
