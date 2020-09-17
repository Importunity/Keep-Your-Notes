// meeting place for all reducers
import {combineReducers} from 'redux';
import noteReducer from './noteReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    note: noteReducer
});