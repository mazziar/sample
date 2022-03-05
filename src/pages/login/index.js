import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { base_url } from '../../config.json'
import Header from '../../common/Header'
import axios from 'axios';
import { Grid, TextField, Button } from '@mui/material';
import { useCookies } from 'react-cookie';

import { makeStyles } from '@mui/styles';



const useStyles = makeStyles((theme) => ({
    main: {
        backgroundColor: '#fafafa',

        Width: '100vw',
        minHeight: 'calc(100vh - 80px)',
    },
    Login: {
        height: '15px',
    },

    textColorOrange: {
        color: 'orange',
        fontWeight: 500,
        fontSize: theme.spacing(2.4),
    },
}));


const Login = ({  }) => {
    const classes = useStyles();
    const navigate = useHistory();
    const [userName, setUserName] = useState('');
    const [cookies, setCookie] = useCookies(['digiAlphaToken','digiAlphaRefresh']);
    const [password, setPassword] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(base_url + '/users/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: userName, password, registerType: 'normal' }),
            
        });
        if (response.ok) {
            const Authorization = await response.headers.get('Authorization');
            const refresh_token= await response.headers.get('refresh_token');
            
            setCookie('digiAlphaToken', Authorization, { path: '/' });
            setCookie('digiAlphaRefresh', refresh_token, { path: '/' });
            console.log( cookies.digiAlphaToken)
            console.log( cookies.digiAlphaRefresh)
            navigate.push('homePage')
        } else {
            setPassword('')
        }
    };
    return (
        <>
            <Header />
            <Grid className={classes.main} container spacing={2} justifyContent="center">
                <Grid container item xs={10} direction='row' justifyContent='flex-start' alignItems='flex-start'>
                    <Grid item xs={10} style={{ height: '50px' }}>
                        <div className={classes.textColorOrange}>
                            ورود به حساب کاربری
                        </div>
                    </Grid>
                    <Grid item xs={10} style={{ height: '50px' }}>
                        <TextField 
                        id="outlined-basic" 
                        label="نام کاربری" 
                        variant="outlined"
                        value={userName} 
                        onChange={(event) => setUserName(event.target.value) }
                        />
                    </Grid>
                    <Grid item xs={10} style={{ height: '50px' }} >
                        <TextField 
                        id="outlined-basic" 
                        label="کلمه عبور" 
                        variant="outlined"
                        value={password} 
                        onChange={(event) => setPassword(event.target.value) }
                        />
                    </Grid>
                    <Grid item xs={3} style={{ height: '50px' }} >
                        <Button 
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleSubmit}
                        >
                            ورود
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Login;
