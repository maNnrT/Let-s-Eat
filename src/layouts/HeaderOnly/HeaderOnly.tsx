import { ReactNode } from 'react';
import Header from '@/layouts/components/Header';
interface Props {
  children: ReactNode;
}
function HeaderOnly({ children }: Props): JSX.Element {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
export default HeaderOnly;
