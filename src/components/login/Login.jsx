import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ROOT_STYLE } from '../../utils/cssConstants';
import VanOnLogo from '../../assets/VanOn_LogoMark.png';
import VanOnTypo from '../../assets/VanOnTypo.png';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = () => ({
    root: {
        ...ROOT_STYLE,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteCard: {
        backgroundColor: 'white',
        boxShadow: '0px 2px 13px 0px',
        height: '500px',
        width: '65%',
        display: 'flex',
        borderRadius: 50,
    },
    whiteCardLeft: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: '500px',
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
    },
    whiteCardRight: {
        width: '50%',
        height: '500px',
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    vanOnLogo: {
        width: '20vw',
        height: '40vh',
    },
    vanOnTypo: {
        height: '10vh',
        width: '10vw',
    },
    formInput: {
        width: '370px',
        marginBottom: 10,
    },
    formContainer: {

    },
    formGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 8,
        width: 365,
    },
    loginDisabled: {
        color: '#fff !important',
        backgroundColor: '#999 !important',
        cursor: 'default !important',
    },
    raisedBtn: {
        width: '100%',
        height: 45,
        cursor: 'pointer',
        border: 'none',
        borderRadius: '20px',
        backgroundColor: '#00A99D',
        marginTop: 10,
        color: '#fff',
        lineHeight: '22px',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            color: '#222',
        },
    },
    forgotPasswordTxt: {
        cursor: 'pointer',
        fontSize: 15,
    },
    checkBoxRoot: {
        '&>span>svg': {
            fontSize: '22px',
            color: '#00A99D',
        }
    },
    rememberMeLabel: {
        fontSize: 15,
    },
    error: {
        color: 'red',
    }

});


const Login = (props) => {
    const [error, setError] = useState('abcd');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('')
    const { classes } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password, role)
    }

    return (
        <div className={classes.root}>
            <div className={classes.whiteCard}>
                <div className={classes.whiteCardLeft}>
                    <img src={VanOnLogo} alt={"VanOnLogo"} className={classes.vanOnLogo} />
                    <img src={VanOnTypo} alt={"VanOnTypo"} className={classes.vanOnTypo} />
                </div>
                <div className={classes.whiteCardRight}>
                    <div className={classes.formContainer} >
                        <div className={classes.textField} >
                            <TextField
                                autoFocus name="username" id="username" placeholder='Username'
                                onChange={(e) => { setUsername(e.target.value) }} onKeyPress={() => { }}
                                className={classes.formInput} value={username}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start" style={{ marginLeft: '10px', marginRight: '11px', color: '#BAC4CE' }}>
                                            <FontAwesomeIcon icon={faUser} />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </div>
                        <div className={classes.textField}>
                            <TextField
                                id="pwd"
                                name="password"
                                placeholder='Password'
                                onChange={(e) => { setPassword(e.target.value) }}
                                onKeyPress={() => { }}
                                type="password"
                                className={classes.formInput} value={password}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start" style={{ marginLeft: '10px', marginRight: '11px', color: '#BAC4CE' }} >
                                            <FontAwesomeIcon icon={faLock} />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </div>

                        {error && <p className={classes.error}>{'abc'}</p>}

                        <div className={classes.formGroup}>
                            <FormControlLabel
                                control={<Checkbox value="RememberMe" onChange={() => { }} className={classes.checkBoxRoot} />}
                                label="Remember Me" classes={{ label: classes.rememberMeLabel }}
                            />
                            <Typography variant="body1" className={classes.forgotPasswordTxt} onClick={() => { }} >
                                Forgot Password?
                            </Typography>
                        </div>
                        <Button className={classes.raisedBtn} color="primary" onClick={handleSubmit}
                            disabled={username.length < 1 || password.length < 5} classes={{ disabled: classes.loginDisabled }} >
                            Log in
                        </Button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default (withStyles(styles)(Login));