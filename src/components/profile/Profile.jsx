import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { ROOT_STYLE } from '../../utils/cssConstants';

const styles = () => ({
    root: ROOT_STYLE,
    contentContainer: {
        flexGrow: 1,
        padding: '30px 30px',
    },
    Heading: {
        fontSize: 30,
        color: '#4A4A4A',
        marginBottom: 25,
        fontWeight: '500',
    },
    card: {
        boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
        backgroundColor: 'rgb(229, 222, 222)',
        borderRadius: '4px',
        width: '100%',
        height: 'calc(100vh - 165px)',
    },
});


const Profile = (props) => {
    const { classes } = props;
    const [vendorData, setVendorData] = useState({});
    const [adminData, setAdminData] = useState({});


    return (
        <div className={classes.root}>
            <div className={classes.contentContainer}>
                <Typography variant="h3" inherit className={classes.Heading}>Profile</Typography>

                <div className={classes.card}>

                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        //loginError: state.authReducer.loginError,
        //data: state.adminReducer.data,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        //updateAdminData: (...args) => dispatch(updateAdminData(...args))
        // login: (...args) => dispatch(login(...args)),
        // logout: (...args) => dispatch(logout(...args)),
        // clearAuthReducer: (...args) => dispatch(clearAuthReducer(...args))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Profile));