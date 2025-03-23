import { Routes as RouteWrapper, Route } from "react-router";
import { Dashboard } from "./pages/app/dashboard";
import { Signin } from "./pages/auth/signin";
import { App } from "./App";

export const Routes = () => (
    <RouteWrapper>
        <Route index element={<App />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="signin" element={<Signin />} />
    </RouteWrapper>
)
