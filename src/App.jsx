import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppRoutes from './routes/AppRoutes';
import withRoot from './withRoot';
import SideBar from './components/layout/sidebar/SideBar';

const styles = () => ({
  appRoot: {
    marginLeft: 252,
  },
  topBar: {
    height: 45,
    width: '100%',
    backgroundColor: 'white',
  },
});

const App = (props) => {
  const { classes } = props;
  return (
    <>
      <div className={classes.topBar}></div>
      <SideBar />
      <div className={classes.appRoot}>
        <AppRoutes />
      </div>
    </>
  );
}

export default withStyles(styles)(withRoot(App));

