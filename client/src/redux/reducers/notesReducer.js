import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';

const initialState = {
    notes: [],
};

const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_NOTES':
            return action.notes;
        case 'CLEAR_NOTES':
            return [];
        default:
            return state;
    }
};

export default noteReducer;