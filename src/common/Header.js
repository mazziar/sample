import React, { useState } from 'react';
import { Grid,TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles((theme) => ({
    main: {
        backgroundColor: '#1D2836',
        border: '2px solid #1D2836',
        Width: '100vw',
        height: '80px',
    },
    logout: {


        height: '15px',

    },

    textColorWite: {
        color: 'white',
        fontWeight: 500,
        fontSize: theme.spacing(2.4),
    },
}));

const Header = ({ item }) => {
    const classes = useStyles();
  return (
    <Grid className={classes.main} >
      
    </Grid>
  );
}

export default Header;
