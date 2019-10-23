import React from 'react';
import AppRoutes from './routes/AppRoutes';
import withRoot from './withRoot';


function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default withRoot(App);

