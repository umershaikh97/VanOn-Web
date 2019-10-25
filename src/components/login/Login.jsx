import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ROOT_STYLE } from '../../utils/cssConstants';

const styles = () => ({
    root: {
        ...ROOT_STYLE,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteCard: {
        backgroundColor: 'white',
        height: '60vh',
        width: '40vw',

    },
});


const Login = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <div className={classes.whiteCard}>

            </div>
        </div>
    )
}

export default (withStyles(styles)(Login));