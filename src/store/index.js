import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { informationReducer as information } from './Information';
import { pricesReducer as prices } from './Prices';

const reducer = combineReducers({
  information,
  prices,
});

export { pricesActions } from './Prices';
export { informationActions } from './Information';

export default configureStore({ reducer });
