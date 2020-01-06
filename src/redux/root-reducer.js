import { combineReducers } from 'redux';
import textReducer from './text/text.reducer';

export default combineReducers({
    text: textReducer
});