import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}
function HeaderMenu({ children }: Props) {
  return <nav className="hidden tablet:flex items-center justify-between ">{children}</nav>;
}

export default HeaderMenu;
