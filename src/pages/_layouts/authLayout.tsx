import { Outlet } from 'react-router';

export const AuthLayout = () => {
  return (
    <>
      <div>Header do Auth layout</div>

      <div>
        <Outlet />
      </div>
    </>
  );
};
