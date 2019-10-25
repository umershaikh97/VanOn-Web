import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ROOT_STYLE } from '../../utils/cssConstants';

const styles = () => ({
    root: ROOT_STYLE,
});


const Login = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <h1>Login</h1>
        </div>
    )
}

export default (withStyles(styles)(Login));