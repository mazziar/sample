import { createSlice } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
  name: 'information',
  initialState: {
    users:[],
    products:[],

  },
  reducers: {
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
