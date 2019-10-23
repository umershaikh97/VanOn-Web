import React from 'react';
import vanOnlogo from '../titlebar/VanOn_Logo.png';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    titleBarRoot: {
        height: 45,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        justifyContent: 'space-between',
    },
    vanOnlogo: {
        width: '140px',
        height: '45px',
        padding: '5px 15px 5px 15px',
        cursor: 'pointer',
    }
});

const TitleBar = (props) => {
    const { classes, history } = props;
    return (
        <div className={classes.titleBarRoot}>
            <img src={vanOnlogo} className={classes.vanOnlogo} alt={'Van On logo'} onClick={() => { history.push('/dashboard') }} />
        </div>
    );
}

export default withRouter(withStyles(styles)(TitleBar));

