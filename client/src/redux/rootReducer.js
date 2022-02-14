import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import noteReducer from './reducers/notesReducer';

export default combineReducers({
    auth: authReducer,
    note: noteReducer,
});
