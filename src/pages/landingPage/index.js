import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../common/Header'
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


const LandingPage = ({  }) => {
    const classes = useStyles();
    const navigate = useHistory();
   

    return (
        <>
            <Header />
            <Grid className={classes.main} container spacing={2} justifyContent="center">
                <Grid container item xs={10} direction='row' >
                   
                    <Grid item xs={3} style={{ height: '50px' }} >
                        <Button 
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={() => navigate.push('login')}
                        >
                            ورود
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default LandingPage;
