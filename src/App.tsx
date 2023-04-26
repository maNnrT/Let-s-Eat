import './App.css';
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './layouts';
function App(): JSX.Element {
  return (
    <div>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout: any = DefaultLayout;
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
