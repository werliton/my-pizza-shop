import { NavLink, Outlet } from 'react-router';

export const AppLayout = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1>Header do layout</h1>

        <ul className="flex mt-2 gap-1">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-500 min-h-svh">
        <Outlet />
      </div>
    </>
  );
};
