// meeting place for all reducers
import {combineReducers} from 'redux';
import noteReducer from './noteReducer';
import errorReducer from './errorReducer';
import userReducer from './authReducer';

export default combineReducers({
    error: errorReducer,
    user: userReducer,
    note: noteReducer
});