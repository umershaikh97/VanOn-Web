import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppRoutes from './routes/AppRoutes';
import withRoot from './withRoot';
import SideBar from './components/layout/sidebar/SideBar';
import TitleBar from './components/layout/titlebar/TitleBar';

const styles = () => ({
  appRoot: {
    marginLeft: 252,
  }
});

const App = (props) => {
  const { classes } = props;
  return (
    <>
      <TitleBar />
      <SideBar />
      <div className={classes.appRoot}>
        <AppRoutes />
      </div>
    </>
  );
}

export default withStyles(styles)(withRoot(App));

