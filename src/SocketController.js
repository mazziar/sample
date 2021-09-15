import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { useEffectAsync } from './reactHelper';
import { pricesActions } from './store';

const SocketController = () => {
  const dispatch = useDispatch();

  const connectSocketBitcoin = () => {
    const socket = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin');

    socket.onclose = () => {
      setTimeout(() => connectSocketBitcoin(), 60 * 1000);
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
        dispatch(pricesActions.updateBitcoin(data));
    };
  }
  const connectSocketTron = () => {
    const socket = new WebSocket('wss://ws.coincap.io/prices?assets=tron');

    socket.onclose = () => {
      setTimeout(() => connectSocketTron(), 60 * 1000);
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
        dispatch(pricesActions.updateTron(data));
       
    };
  }
  const connectSocketEthereum = () => {
    const socket = new WebSocket('wss://ws.coincap.io/prices?assets=ethereum');

    socket.onclose = () => {
      setTimeout(() => connectSocketEthereum(), 60 * 1000);
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
        dispatch(pricesActions.updateEthereum(data));
    };
  }
  const connectSocketUsdt = () => {
    const socket = new WebSocket('wss://ws.coincap.io/prices?assets=usdt');

    socket.onclose = () => {
      setTimeout(() => connectSocketUsdt(), 60 * 1000);
    };

    socket.onmessage = (event) => {  console.log("123412341234")
      const data = JSON.parse(event.data);
        dispatch(pricesActions.updateUsdt(data));
    };
  }
    
      connectSocketBitcoin()
      connectSocketTron()
      connectSocketEthereum()
      connectSocketUsdt()
    
  return null;
}

export default connect()(SocketController);
