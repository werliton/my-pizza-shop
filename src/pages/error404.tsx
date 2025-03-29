import { NavLink as Link } from 'react-router';

export const Error404 = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-2">
      <h1 className="text-3xl font-bold text-muted-foreground">Página não encontrada</h1>
      <p className="text-sm text-accent-foreground">
        Voltar para o{' '}
        <Link to="/" className="text-blue-500">
          Dashboard
        </Link>
      </p>
    </div>
  );
};
