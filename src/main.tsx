import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import GlobalStyles from './components/GlobalStyles';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { router } from '@/routes/routes2.tsx';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyles>
        <RouterProvider router={router} />
      </GlobalStyles>
    </PersistGate>
  </Provider>,
);
