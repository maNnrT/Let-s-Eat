import { ReactNode } from 'react';
import Footer from '@/layouts/components/Footer';
interface Props {
  children: ReactNode;
}
function FooterOnly({ children }: Props): JSX.Element {
  return (
    <>
      <div>{children}</div>
      <Footer />
    </>
  );
}
export default FooterOnly;
