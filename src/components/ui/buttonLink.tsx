import { Button } from './button';
import { Link } from 'react-router';

interface ButtonLinkProps {
  label: string;
  to: string;
}

export const ButtonLink = ({ label, to }: ButtonLinkProps) => {
  return (
    <Button variant="ghost" className="absolute right-8 top-8" asChild>
      <Link to={to} className="text-foreground">
        {label}
      </Link>
    </Button>
  );
};
