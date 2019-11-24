import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ROOT_STYLE } from '../../utils/cssConstants';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import PermIdentityTwoToneIcon from '@material-ui/icons/PermIdentityTwoTone';
import SupervisorAccountTwoToneIcon from '@material-ui/icons/SupervisorAccountTwoTone';
import DriveEtaTwoToneIcon from '@material-ui/icons/DriveEtaTwoTone';
import EmojiPeopleTwoToneIcon from '@material-ui/icons/EmojiPeopleTwoTone';

const styles = (theme) => ({
    root: ROOT_STYLE,
    contentContainer: {
        flexGrow: 1,
        padding: '30px 30px',
    },
    trackingContainer: {
        paddingTop: 30,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: '100%',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,0.5)',
        borderRadius: '7px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to right, #616161, #9bc5c3)',
    },
    Heading: {
        fontSize: 30,
        color: '#4A4A4A',
        marginBottom: 25,
        fontWeight: '500',
    },
    icon: {
        fontSize: 40,
        color: 'black',
    },
    text: {
        color: 'black',
        fontSize: 18,
        marginTop: '8px',
        marginLeft: '12px',
        fontWeight: 'bold',
    },
    mapContainer: {
        width: '100%',
        height: 'calc(100vh - 320px)',
        backgroundColor: 'white',
    }

});


const Dashboard = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <div className={classes.contentContainer}>
                <div className={classes.manageContainer}>
                    <Typography variant="h3" inherit className={classes.Heading}>Manage</Typography>
                    <div className={classes.manageGridContainer}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={3}>
                                <CardActionArea style={{ borderRadius: '7px' }}>
                                    <Paper className={classes.paper}> <PermIdentityTwoToneIcon className={classes.icon} /> <span className={classes.text}>Manage Admins</span></Paper>
                                </CardActionArea>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <CardActionArea style={{ borderRadius: '7px' }}>
                                    <Paper className={classes.paper}><SupervisorAccountTwoToneIcon className={classes.icon} /><span className={classes.text}>Manage Vendors</span></Paper>
                                </CardActionArea>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <CardActionArea style={{ borderRadius: '7px' }}>
                                    <Paper className={classes.paper}><DriveEtaTwoToneIcon className={classes.icon} /><span className={classes.text}>Manage Drivers</span></Paper>
                                </CardActionArea>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <CardActionArea style={{ borderRadius: '7px' }}>
                                    <Paper className={classes.paper}><EmojiPeopleTwoToneIcon className={classes.icon} /><span className={classes.text}>Manage Passengers</span></Paper>
                                </CardActionArea>
                            </Grid>
                        </Grid>
                    </div>
                </div>


                <div className={classes.trackingContainer}>
                    <Typography variant="h3" inherit className={classes.Heading}>Track Vans</Typography>
                    <div className={classes.mapContainer}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default (withStyles(styles)(Dashboard));