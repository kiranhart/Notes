import { combineReducers } from 'redux';
import userReducer from './reducers/userSlice';

export default combineReducers({
    user: userReducer,
});
