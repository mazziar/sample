import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../common/Header';
import { base_url } from '../../config.json'
import { Grid, TextField, Button, Container, Box } from '@mui/material';
import { useCookies } from 'react-cookie';
import { makeStyles } from '@mui/styles';
import { useEffectAsync } from '../../reactHelper';




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


const LandingPage = ({ }) => {
    const classes = useStyles();
    const [postList, setPostList] = useState([]);
    const navigate = useHistory();
    
    const [cookies, setCookie] = useCookies(['digiAlphaToken', 'digiAlphaRefresh']);

    useEffectAsync(async () => {
        const response = await fetch(base_url + '/posts/global?page=1&size=20', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': cookies.digiAlphaToken
            },
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data.result.list)
            setPostList(data.result.list)
        }
    }, []);

    return (
        <>
            <Header />
            <Grid className={classes.main} container spacing={2} justifyContent="center">
                <Grid container item xs={10} direction='row' >
                    {postList.map((item, index) => (
                        <Container fixed>
                            <Box sx={{ bgcolor: '#cfe8fc', height: '100px', margin: '10px' }} >

                                {item.subject}
                                <br />
                                <Button
                                 onClick={() => navigate.push(`post/${item.chat.chatRoomId}`)}
                                >چت</Button>
                                <br />

                            </Box>
                        </Container>
                    ))}
                </Grid>
            </Grid>
        </>
    );
}

export default LandingPage;
