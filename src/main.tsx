import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import GlobalStyles from './component/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <GlobalStyles>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalStyles>
  </Provider>,
);
