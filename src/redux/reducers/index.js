import { combineReducers } from 'redux';
import searchReducer from './search';

const rootReducer = combineReducers({
  searchState: searchReducer,
});

export default rootReducer;