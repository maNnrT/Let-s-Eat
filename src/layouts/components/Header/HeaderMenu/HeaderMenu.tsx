import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}
function HeaderMenu({ children }: Props) {
  return <nav className="hidden desktop:flex items-center justify-between ">{children}</nav>;
}

export default HeaderMenu;
