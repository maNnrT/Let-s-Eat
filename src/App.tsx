import './App.css';
import { Fragment, ReactNode } from 'react';
import { Routes, Route, createBrowserRouter, Outlet } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import { DefaultLayout } from './layouts';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import PrivateRoutes from './utils/PrivateRoute';
interface Props {
  children: ReactNode | undefined;
}

function App(): JSX.Element {
  return (
    <div>
      <div className="App">
        <ScrollToTop>
          {/* <Routes>
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
            <Route element={<PrivateRoutes></PrivateRoutes>}>
              {privateRoutes.map((route, index) => {
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
            </Route>
          </Routes> */}
          <Outlet/>
        </ScrollToTop>
      </div>
    </div>
  );
}

export default App;
