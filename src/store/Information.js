import { createSlice } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
  name: 'information',
  initialState: {
    users:[],
    products:[],
    tokenExpired:false,

  },
  reducers: {
    expireToken(state, action) {
        
    },
    updateUsers(state, action) {
     state.users = action.payload.data
    },
    updateProducts(state, action) {
     state.products = action.payload.data
      console.log("saaaag")
    },
  }
});

export { actions as informationActions };
export { reducer as informationReducer };
