import './App.css';
import { Fragment } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './component/Layout';
function App(): JSX.Element {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/aboutus">AboutUs</Link>
        </li>
      </ul>
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
          {/* <Route path='/' element={<Homepage/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
