import Header from '../component/Header';

function DefaultLayout({ children }: any): JSX.Element {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
export default DefaultLayout;
