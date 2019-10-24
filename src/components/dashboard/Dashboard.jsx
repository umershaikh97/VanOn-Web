import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    root: {
        height: 'calc(100vh - 64px)',
        width: '100%',
    },
});


const Dashboard = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <h1>Dashboard</h1>
        </div>
    )
}

export default (withStyles(styles)(Dashboard));