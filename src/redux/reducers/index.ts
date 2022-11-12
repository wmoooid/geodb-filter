import { combineReducers } from 'redux';
import geodbReducer from './geodb';

const rootReducer = combineReducers({
  geodb: geodbReducer,
});

export default rootReducer;
