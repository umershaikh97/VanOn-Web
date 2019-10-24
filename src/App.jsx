import React from 'react';
import AppRoutes from './routes/AppRoutes';
import withRoot from './withRoot';

const App = (props) => {
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default withRoot(App);

