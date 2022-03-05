import React, { useState, useRef } from 'react';
import { useCookies } from 'react-cookie';
import Header from '../../common/Header';
import { base_url } from '../../config.json';
import { rocket_base_ws } from '../../config.json';
import { rocket_base_api } from '../../config.json';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Grid, TextField, Button, Container, Box } from '@mui/material';
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


const Products = () => {
  const [items, setItems] = useState([]);
  const [comment, setComment] = useState("");
  const roomId = window.location.pathname.split('post/')[1];
  const classes = useStyles();
  const socketRef = useRef();
  const navigate = useHistory();
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [cookies, setCookie] = useCookies(['digiAlphaToken', 'digiAlphaRefresh']);
 
  const connectSocket = () => {

    const socket = new WebSocket(rocket_base_ws);
    socketRef.current = socket;
    // socket.onerror = () => {
    //     setTimeout(() => connectSocket(), 6 * 1000);
    // };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.server_id) {
        connectRequest()
      }
      if (data.msg == "connected") {
        loginRequest()
      }

      //dispatch(balanceActions.listUpdate(data));

    }

  };
  const connectRequest = () => {
    const socket = socketRef.current;
    socket.send(JSON.stringify({
      "msg": "connect",
      "version": "1",
      "support": ["1", "pre2", "pre1"]
    }))
  }
  const loginRequest = () => {
    const socket = socketRef.current;
    let random = Math.floor(Math.random() * 10000000000000).toString()
    socket.send(JSON.stringify({
      "msg": "method",
      "method": "login",
      "id": random,
      "params": [
        { "resume": token }
      ]
    }))
  }
  const subscribeRequest = () => {
    const socket = socketRef.current;
    socket.send(JSON.stringify({
      "msg": "sub",
      "id": "unique-id",
      "name": "stream-notify-room",
      "params": [
        "room-id/event",
        false
      ]
    }))
  }
  const sendMassage = () => {
    let random = Math.floor(Math.random() * 10000000000000).toString()
    const socket = socketRef.current;
    socket.send(JSON.stringify({
      "id": random,
      "method": "sendMessage",
      "msg": "method",
      "params":
        [
          {
            "msg": comment,
            "rid": roomId,
            "_id": random
            
            
          }
        ]
    }))
  }


  useEffectAsync(async () => {
    connectSocket()

    return () => {
      const socket = socketRef.current;
      if (socket) {
        socket.close();
      }
    };
  }, []);


  const chatLists = async (token, userId) => {
    const response = await fetch(rocket_base_api + `/channels.messages?roomId=${roomId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': token,
        'X-User-Id': userId
      },
    });
    if (response.ok) {
      const data = await response.json();
    }
  }

  useEffectAsync(async () => {
    const response = await fetch(base_url + '/chats/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': cookies.digiAlphaToken
      },
    });
    if (response.ok) {
      const data = await response.json();
      setUserName(data.result.username)
      setUserId(data.result.userId)
      setToken(data.result.token)
      chatLists(data.result.token, data.result.userId)
    }
  }, []);


  return (
    <>
      <Header />
      <Grid className={classes.main} container spacing={2} justifyContent="center">
        <Grid container item xs={10} direction='row' >

          <Container fixed>
            <Box sx={{ bgcolor: '#cfe8fc', height: '100px', margin: '10px' }} >




            </Box>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
          </Container>
          <div>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={sendMassage}
            >
              ارسال
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
export default Products;
