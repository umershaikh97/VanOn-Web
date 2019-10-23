import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    root: {

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