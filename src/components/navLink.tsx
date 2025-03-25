import { Link, LinkProps, useLocation } from 'react-router';

type NavLinkProps = LinkProps;

export const NavLink = (props: NavLinkProps) => {
  const { pathname } = useLocation();
  return (
    <Link
      data-active={pathname === props.to}
      {...props}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[active=true]:text-foreground"
    />
  );
};
