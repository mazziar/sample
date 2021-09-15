import { createSlice } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
  name: 'prices',
  initialState: {
    bitcoin:"",
    tron:"",
    ethereum:"",
    usdt:"",
  },
  reducers: {
    updateBitcoin(state, action) {
     state.bitcoin = action.payload
    },
    updateTron(state, action) {
     state.tron = action.payload
    },
    updateEthereum(state, action) {
     state.ethereum = action.payload
    }, 
    updateUsdt(state, action) {  
     state.usdt = action.payload
    },
  }
});

export { actions as pricesActions };
export { reducer as pricesReducer };
