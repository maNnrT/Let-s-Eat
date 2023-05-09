import Header from '@/layouts/components/Header';
import Footer from '@/layouts/components/Footer';
import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}
const DefaultLayout: React.FunctionComponent<Props> = ({ children }: Props) => {
  return (
    <div className="flex flex-col items-center w-full">
      <Header />
      <div className="h-auto w-full">{children}</div>
      <Footer />
    </div>
  );
};
export default DefaultLayout;
