import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import resume from './resumeReducer';

const rootReducer = combineReducers({
  resume,
  routing: routerReducer
});

export default rootReducer;
