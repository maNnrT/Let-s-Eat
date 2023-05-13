import './App.css';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App(): JSX.Element {
  return (
    <div>
      <div className="App">
        <ScrollToTop>
          <div className='h-[10rem]'></div>
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
          <Outlet />
        </ScrollToTop>
      </div>
    </div>
  );
}

export default App;
