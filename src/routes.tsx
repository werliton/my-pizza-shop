import { Routes as RouteWrapper, Route } from 'react-router';
import { Dashboard } from './pages/app/dashboard/dashboard';
import { SignIn } from './pages/auth/signIn';
import { AppLayout } from './pages/_layouts/appLayout';
import { AuthLayout } from './pages/_layouts/authLayout';
import { SignUp } from './pages/auth/signUp';
import { Orders } from './pages/app/orders/orders';

export const Routes = () => (
  <RouteWrapper>
    <Route element={<AppLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="orders" element={<Orders />} />
    </Route>
    <Route path="/" element={<AuthLayout />}>
      <Route index path="sign-in" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
    </Route>
  </RouteWrapper>
);
