import React from 'react';
import './App.css';
import { Layout } from './layouts/DefautLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes';
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className='app'>
        <Routes>
          {routes.map((route, index) => {
            const Page: () => JSX.Element = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
