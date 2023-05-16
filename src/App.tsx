import './App.css';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { useSelector } from 'react-redux';
import { getIdProductModal, getIsOpenModal } from './redux/selectors';
import ProductDetail from '@/components/ProductDetail';

function App(): JSX.Element {
  const idProduct = useSelector(getIdProductModal)
  const isOpen = useSelector(getIsOpenModal)
  return (
    <div>
      {isOpen && <ProductDetail id={idProduct} />}
      <div className="App">
        <ScrollToTop>
          <div id="portal"></div>
          <div className="h-[7.5rem] bg-fdf9f5"></div>
          <Outlet />
        </ScrollToTop>
      </div>
    </div>
  );
}

export default App;
