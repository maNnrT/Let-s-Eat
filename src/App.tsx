import './App.css';
import { Fragment, ReactElement, ReactNode } from 'react';
import { Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import { DefaultLayout } from './layouts';
import { getIsLogin } from './redux/selectors';
import { useSelector } from 'react-redux';
interface Props {
  children: ReactNode | undefined;
}
function App(): JSX.Element {
  const isLogin = useSelector(getIsLogin);
  return (
    <div>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout: React.FunctionComponent<Props> = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              ></Route>
            );
          })}
          {isLogin &&
            privateRoutes.map((route, index) => {
              let Layout: React.FunctionComponent<Props> = DefaultLayout;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                ></Route>
              );
            })}
        </Routes>
      </div>
    </div>
  );
}

export default App;
