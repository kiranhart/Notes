import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';

const initialState = {
    token: localStorage.getItem('token'),
    id: null,
    firstName: null,
    lastName: null,
    email: null,
};

const authReducer = (state = initialState, action) => {
    let user;

    switch (action.type) {
        case 'LOAD_USER':
            user = jwtDecode(action.token);

            return {
                ...state,
                token: action.token,
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            };

        case 'LOGIN':
            user = jwtDecode(action.token);

            toast.success('Login Successful', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
            });
            return {
                ...state,
                token: action.token,
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            };
        case 'SIGN_UP':
            user = jwtDecode(action.token);

            toast.success('Registration Successful', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
            });

            return {
                ...state,
                token: action.token,
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            };
        case 'LOGOUT':
            localStorage.removeItem('token');
            toast.success('Logout Successful', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
            });

            return {
                token: null,
                name: null,
                email: null,
                _id: null,
            };
        default:
            return state;
    }
};

export default authReducer;
