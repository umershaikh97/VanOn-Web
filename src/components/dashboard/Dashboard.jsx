import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { ROOT_STYLE } from '../../utils/cssConstants';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import PermIdentityTwoToneIcon from '@material-ui/icons/PermIdentityTwoTone';
import SupervisorAccountTwoToneIcon from '@material-ui/icons/SupervisorAccountTwoTone';
import DriveEtaTwoToneIcon from '@material-ui/icons/DriveEtaTwoTone';
import EmojiPeopleTwoToneIcon from '@material-ui/icons/EmojiPeopleTwoTone';
import ManageCard from './ManageCard';

const styles = (theme) => ({
    root: ROOT_STYLE,
    contentContainer: {
        flexGrow: 1,
        padding: '30px 30px',
    },
    trackingContainer: {
        paddingTop: 30,
    },
    Heading: {
        fontSize: 30,
        color: '#4A4A4A',
        marginBottom: 25,
        fontWeight: '500',
    },
    mapContainer: {
        width: '100%',
        height: '650px',
        backgroundColor: 'white',
    }
});


const Dashboard = (props) => {
    const { classes, role } = props;
    return (
        <div className={classes.root}>
            <div className={classes.contentContainer}>
                <div className={classes.manageContainer}>
                    <Typography variant="h3" inherit className={classes.Heading}>Manage</Typography>
                    <div className={classes.manageGridContainer}>
                        <Grid container spacing={4}>
                            {
                                role === 'admin' ?
                                    (
                                        <>
                                            <Grid item xs={12} sm={3}>
                                                <ManageCard Icon={PermIdentityTwoToneIcon} text={"Manage Admins"} onClick={() => { props.history.push('/dashboard/admins') }} />
                                            </Grid>
                                            <Grid item xs={12} sm={3}>
                                                <ManageCard Icon={SupervisorAccountTwoToneIcon} text={"Manage Vendors"} onClick={() => { props.history.push('/dashboard/vendors') }} />
                                            </Grid>
                                            <Grid item xs={12} sm={3}>
                                                <ManageCard Icon={DriveEtaTwoToneIcon} text={"Manage Drivers"} onClick={() => { props.history.push('/dashboard/drivers') }} />
                                            </Grid>
                                            <Grid item xs={12} sm={3}>
                                                <ManageCard Icon={EmojiPeopleTwoToneIcon} text={"Manage Passengers"} onClick={() => { props.history.push('/dashboard/passengers') }} />
                                            </Grid>
                                        </>
                                    )
                                    :
                                    (
                                        <>

                                            <Grid item xs={12} sm={6}>
                                                <ManageCard Icon={DriveEtaTwoToneIcon} text={"Manage Drivers"} onClick={() => { props.history.push('/dashboard/drivers') }} />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <ManageCard Icon={EmojiPeopleTwoToneIcon} text={"Manage Passengers"} onClick={() => { props.history.push('/dashboard/passengers') }} />
                                            </Grid>
                                        </>
                                    )
                            }

                        </Grid>
                    </div>
                </div>


                <div className={classes.trackingContainer}>
                    <Typography variant="h3" inherit className={classes.Heading}>Track Vans</Typography>
                    <div className={classes.mapContainer}>

                    </div>
                </div>
            </div>
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        //loginError: state.authReducer.loginError,
        role: state.authReducer.role,
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Dashboard));