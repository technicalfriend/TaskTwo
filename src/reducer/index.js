import {combineReducers} from 'redux';
import {
  SEARCH_RESULTS,
} from "../actions";

import Data from '../components/SearchResults/Data';

function results(state = Data, action) {
  switch (action.type) {
    case SEARCH_RESULTS:
      return action.results;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  results,
});

export default rootReducer;